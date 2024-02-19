import { Star } from "@mui/icons-material";
import { Card, Grid, LinearProgress, Typography } from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import { FeedbackDataProps } from "./types";

const FeedbackBar = ({ feedback }: FeedbackDataProps) => {
  return (
    <Card sx={{ p: "0.5rem 2rem", height: "14rem" }}>
      {feedback.map((feedbackData) => (
        <>
          <Grid container alignItems="center">
            <Grid item md={9.8} xs={7}>
              <Typography variant="caption">{feedbackData.training}</Typography>
            </Grid>
            <Grid item alignItems="center" md={1.2} xs={3}>
              <Typography variant="caption">{feedbackData.rating}/5</Typography>
            </Grid>
            <Grid item md={1} xs={2}>
              <Star fontSize="small" sx={{ color: colorConfigs.staricon }} />
            </Grid>
          </Grid>
          <LinearProgress
            variant="determinate"
            value={(feedbackData.rating / 5) * 100}
            sx={{
              height: ".35rem",
              borderRadius: "5px",
              mb: "0.58rem",
            }}
          />
        </>
      ))}
    </Card>
  );
};

export default FeedbackBar;
