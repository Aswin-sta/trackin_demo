import React, { useState } from "react";
import { Grid, Divider } from "@mui/material";
import TrainingProgramsChartDate from "./trainingProgramsChartDate.tsx";
import TrainingProgramsChartHeader from "./trainingProgramsChartHeader.tsx";

const TrainingProgramsChart = () => {
  const headerContent = ["Upcoming", "Ongoing"];

  const [state, setState] = useState(headerContent[0]);
  const [next, setNext] = useState(headerContent[1]);

  const handleFilter = () => {
    const currentIndex = headerContent.indexOf(state);
    const nextIndex = (currentIndex + 1) % headerContent.length;
    setState(headerContent[nextIndex]);
    setNext(headerContent[(nextIndex + 1) % headerContent.length]);
  };

  return (
    <Grid>
      <Grid container item lg={12}>
        <TrainingProgramsChartHeader
          headerText={state}
          next={next}
          handleFilter={handleFilter}
        />
        <Divider />

        <TrainingProgramsChartDate headerText={state} />
      </Grid>
    </Grid>
  );
};

export default TrainingProgramsChart;
