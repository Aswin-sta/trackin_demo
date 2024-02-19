import React, { useEffect, useState } from "react";
import ProgramRequestCard from "./ProgramRequestCard";
import { Grid, Typography } from "@mui/material";
import { TrainingProgram } from "../types";
import GetTrainingPrograms from "../../../pages/Requests/api/GetTrainingPrograms";

const ProgramRequestCardHandler = () => {
  const [programData, setProgramData] = useState<TrainingProgram[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetTrainingPrograms();
        setProgramData(data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };
    fetchData();
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);

  const handlePopoverOpen = (index: number) => {
    setTimeout(() => {
      setOpenIndex(index);
    }, 500);
  };

  const handlePopoverClose = () => {
    setOpenIndex(-1);
  };

  return (
    <>
    <Typography variant="h5" fontWeight="bold" sx={{mb:2}}>Course Calender </Typography>
      <Grid container alignItems="center" sx={{ p: "1rem 2rem " }}>
        <Grid item xs={3}>
          <Typography variant="subtitle2">Title </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="subtitle2">Start Date</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography
            variant="subtitle2"
            display="flex"
            justifyContent={"center"}
          >
            End Date
          </Typography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent={"center"}>
          <Typography variant="subtitle2">Target Audience</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">Seats</Typography>
        </Grid>
      </Grid>
      {programData.map((program, index) => (
        <ProgramRequestCard
          programData={program}
          key={program.id}
          open={openIndex === index}
          handlePopoverOpen={() => handlePopoverOpen(index)}
          handlePopoverClose={handlePopoverClose}
        />
      ))}
    </>
  );
};

export default ProgramRequestCardHandler;
