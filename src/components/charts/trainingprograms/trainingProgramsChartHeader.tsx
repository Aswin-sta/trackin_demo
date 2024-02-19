import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { trainingProgramsChartHeaderProps } from "./types";

const TrainingProgramsChartHeader: React.FC<trainingProgramsChartHeaderProps> = ({
  headerText,
  next,
  handleFilter,
}) => {
  return (
    <Grid
      container
      justifyContent='flex-end' 
      mt='1rem'
      ml='1rem'
      mr='1rem'
      mb='0.5rem'
      alignItems='flex-end'
      xs={12} sm={8} md={5} lg={12}
    >
      <Grid item xs={8} sm={9} md={9}>
        <Typography variant="button">{headerText} Programs</Typography>
      </Grid>
      <Grid item xs={4} sm={3} md={3} >
        <Button
          size="small"
          sx={{ borderRadius: "20px"}}
          variant="outlined"
          onClick={handleFilter}
        >
          {next}
        </Button>
      </Grid>
    </Grid>
 
  );
};

export default TrainingProgramsChartHeader;
