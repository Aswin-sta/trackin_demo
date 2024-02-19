import React, { useEffect, useState } from 'react';
import TrainingHours from './TrainingHours';
import { TrainingHoursData, TrainingHoursProgressData } from './types';
import { Grid } from '@mui/material';
import fetchTrainingHours from '../api/GetTrainingHours';

const TrainingHoursHandler = () => {

  const [activeCount, setActiveCount] = useState<TrainingHoursData>({
    completed: 0,
    total: 0,
  });

  const trainingHoursData: TrainingHoursProgressData[] = [
    { label: "Completed", value: activeCount.completed, color: "#0A66C2" },
    { label: "Total", value: activeCount.total, color: "#9BC5EC" },
  ];
 
  const GetTrainingHours = async () => {
    const response = await fetchTrainingHours();
    setActiveCount(response);
  };
 
  useEffect(() => {
    GetTrainingHours();
  }, []);

  return(
    <Grid>
       <TrainingHours data={trainingHoursData}/>
    </Grid>
     
  )
};

export default TrainingHoursHandler;
