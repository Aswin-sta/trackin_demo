import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DynamicFormHandler from "./DynamicFormHandler";
import { FeedbackTemplateData } from "../types";
import { getFeedbackTemplateByMappingId } from "../api/getFeedbackTemplateByMappingId";
import { Box, Grid, Typography } from "@mui/material";

const FeedbackFormHandler = () => {
  const [feedbackTemplateData, setFeedbackTemplateData] =
    useState<FeedbackTemplateData | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formTemplateDataFromApi = await getFeedbackTemplateByMappingId(
          parseInt(id as string)
        );

        setFeedbackTemplateData(formTemplateDataFromApi);
      } catch (error) {
        console.error("Error while fetching data:", error);

        navigate("/error"); // You can replace '/error' with your desired route
      }
    };
    fetchData();
  }, [id, navigate]);

  if (!feedbackTemplateData) {
    // Redirect to a specific route if data from the API is null
    navigate("/not-found"); // You can replace '/not-found' with your desired route
    return null; // You can return a loading indicator or null here
  }

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={11} sm={8} md={10}>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" m={2}>
              {feedbackTemplateData.name} Feedback
            </Typography>
            <Box>
              <DynamicFormHandler
                formData={{
                  formData: feedbackTemplateData.template,
                }}
                userProgramMappingId={parseInt(id as string)}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeedbackFormHandler;
