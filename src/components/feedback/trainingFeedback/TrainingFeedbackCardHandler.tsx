import React, { useEffect, useState } from "react";
import TrainingFeedbackCard from "./TrainingFeedbackCard";
import { FeedbackCardData } from "../types";
import { getTrainingProgramAverageFeedback } from "../api/getTrainingProgramAverageFeedback";
import { Box, Typography } from "@mui/material";

const TrainingFeedbackCardHandler: React.FC = () => {
  const [feedbackCardData, setFeedbackCardData] = useState<FeedbackCardData[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrainingProgramAverageFeedback();
        setFeedbackCardData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {feedbackCardData !== null ? (
        feedbackCardData.length > 0 ? (
          <TrainingFeedbackCard data={feedbackCardData} />
        ) : (
          <Box textAlign="center" alignItems="center">
            <Typography variant="caption">No feedbacks available</Typography>
          </Box>
        )
      ) : (
        <Typography variant="caption">Loading...</Typography>
      )}
    </div>
  );
};

export default TrainingFeedbackCardHandler;
