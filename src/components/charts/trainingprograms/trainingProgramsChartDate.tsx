import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TrainingProgramsChartBody from "./trainingProgramsChartBody";
import { TrainingProgram } from "./types";
import GetUpcomingPrograms from "../api/GetUpcomingPrograms";
import { TrainingProgramsChartProps } from "./types";

const TrainingProgramsChartDate: React.FC<TrainingProgramsChartProps> = ({headerText}) => {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);

  useEffect(() => {
    const fetchAllPrograms = async () => {
      try {
        const fetchedPrograms = await GetUpcomingPrograms();
        setPrograms(fetchedPrograms);
      } catch (error) {
        console.error("Error fetching programs from API:", error);
      }
    };

    fetchAllPrograms();
  }, []);

  const upcomingPrograms = programs.filter(
    (program) => program.status === "Upcoming"
  );
  const ongoingPrograms = programs.filter(
    (program) => program.status === "Ongoing"
  );

  const bodyContentUpcoming = upcomingPrograms.map((program) => ({
    course: program.title,
    instructor: program.ProgramTrainers.map(
      (trainer) => trainer.Trainer.fullname
    ).join(", "),
    date: program.startDate,
  }));
  const bodyContentOngoing = ongoingPrograms.map((program) => ({
    course: program.title,
    instructor: program.ProgramTrainers.map(
      (trainer) => trainer.Trainer.fullname
    ).join(", "),
    date: program.startDate,
  }));

  const coursesToShow = headerText === "Upcoming" 
  ? bodyContentUpcoming.slice(0, 4)
  : bodyContentOngoing.slice(0, 4);


  return (
    <Grid container>
      {coursesToShow.map((item, index) => (
        <Grid container item xs={12} md={12} key={index}>
          <TrainingProgramsChartBody program={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrainingProgramsChartDate;
