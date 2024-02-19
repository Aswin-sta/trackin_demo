import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Rating from "@mui/material/Rating";
import { TraineeFeedbackData } from "../types";
import { useNavigate } from "react-router";

const TraineeFeedbackCard: React.FC<{ data: TraineeFeedbackData[] }> = ({
  data,
}) => {
  const navigate = useNavigate();
  return (
    <>
    <Typography variant="body2" fontWeight="bold">{}</Typography>
    <Grid xs={12} container sx={{ml:5, pb:2}}>
      <Grid xs={3}>
        <Typography variant="body2" fontWeight="bold">Name</Typography>
      </Grid>
      <Grid xs={3}>
        <Typography variant="body2" fontWeight="bold" sx={{ml:9}}>Department</Typography>
      </Grid>
      <Grid xs={3}>
        <Typography variant="body2" fontWeight="bold" sx={{ml:10}}>Date</Typography>
      </Grid>
      <Grid xs={3}>
        <Typography variant="body2" fontWeight="bold" sx={{ml:7}}>Rating</Typography>
      </Grid>
    </Grid>
      {data.map((feedback, index) => (
        <Card
          key={index}
          sx={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)", mb: ".6rem", ml: 1, cursor: "pointer" }}
          onClick={() => navigate(`/feedback/${feedback.id}`)}
        >
          <CardContent sx={{ mb: "-.5rem" }}>
            <Grid
              container
              sx={{ alignItems: "center", pl: 2, pr: 1 }}
              spacing={2}
            >
              <Grid item xs={3}>
                <Typography variant="body2">{feedback.name}</Typography>
              </Grid>
              <Grid item xs={3} sx={{ textAlign: "center" }}>
                <Typography variant="body2">{feedback.department}</Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DateRangeIcon
                  fontSize="small"
                  sx={{ marginRight: "6px", color: "#545659" }}
                />
                <Typography variant="body2">
                  {new Date(feedback.created_at).toISOString().split("T")[0]}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  textAlign: "center",
                  pl: 3,
                }}
              >
                <Rating
                  name="text-feedback"
                  value={feedback.rating}
                  readOnly
                  precision={0.5}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TraineeFeedbackCard;
