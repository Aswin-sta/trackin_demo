import { Grid, Typography } from "@mui/material";
import HeaderCard from "../common/HeaderCard";
import { NominationAndRequestDataProps } from "./types";

const RequestHeader = ({
  nominationAndRequestData,
  selectedCard,
  handleCardClick,
}: NominationAndRequestDataProps) => {
  return (
    <Grid container display="flex" alignItems={"center"}>
        <Grid sm={5}><Typography variant="h5" fontWeight="bold" sx={{ pb: 3,ml:3}}>
          Nomination Requests
        </Typography></Grid>
      <Grid item container sm={6.5} justifyContent="space-between" spacing={2}  pb={3}>
        {nominationAndRequestData.map((data, index) => (
          <Grid item  sm={3.8} xs={11}>
            <HeaderCard
              title={data.name}
              count={data.count}
              index={index}
              isSelected={selectedCard === index}
              onSelect={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default RequestHeader;
