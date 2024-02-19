import HeaderCard from "../common/HeaderCard";
import CreateButton from "./CreateButton";
import { Box } from "@mui/material";
import { trainingsCountProps } from "./types";

const ProgramHeader = ({
  activeCount,
  selectedCard,
  handleCardClick,
}: trainingsCountProps) => {
  console.log(activeCount);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <CreateButton />
      <Box
        sx={{
          flexGrow: "1",
          display: { xs: "block", sm: "flex", justifyContent: "end" },
        }}
      >
        {activeCount.map((trainings, index) => (
          <Box sx={{ mr: 3 }} key={index}>
            <HeaderCard
              title={trainings.trainingType}
              count={trainings.programCount}
              index={trainings.id}
              isSelected={selectedCard === index}
              onSelect={handleCardClick}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProgramHeader;
