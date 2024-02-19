import { Grid } from "@mui/material";
import HeaderCard from "../../common/HeaderCard";
import { Count, CountCardsProps } from "./types";

const CountCards = ({
  counts,
  selectedCard,
  handleCardClick,
}: CountCardsProps) => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
      <>
        {counts.map((data: Count, index: number) => (
          <Grid item md={3.5} sm={11} xs={11}>
            <HeaderCard
              key={data.id}
              title={data.type}
              count={data.count}
              index={index}
              isSelected={selectedCard === index}
              onSelect={handleCardClick}
            />
          </Grid>
        ))}
      </>
    </Grid>
  );
};

export default CountCards;
