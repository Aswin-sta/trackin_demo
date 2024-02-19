import { Grid, Card, Typography, Box } from "@mui/material";
import FeedbackBarHandler from "../../components/charts/feedbackbar/FeedbackBarHandler";
import AttendenceBarHandler from "../../components/charts/attendencebar/AttendenceBarHandler";
import CompletedPendingHandler from "../../components/charts/completedpending/CompletedPendingHandler";
import TrainingProgramsChart from "../../components/charts/trainingprograms/trainingProgramsChart";
import TrainingHoursHandler from "../../components/charts/traininghours/TrainingHoursHandler";
import CountCardsHandler from "../../components/charts/countCards/CountCardsHandler";
import { DashboardCardCountProps } from "./types";

const Dashboard = ({ pendingCount, totalCount }: DashboardCardCountProps) => {
  return (
    <>
      <Grid container className="main-container" xs={12}>
        <Grid container className="top-container" xs={12} sx={{ mb: 0.1 }}>
          <Grid container item className="top-left" xs={8}>
            <Grid container mr={"1rem"}>
              <CountCardsHandler
                pendingCount={pendingCount}
                totalCount={totalCount}
              />
            </Grid>
            <Grid
              container
              item
              className="left-bottom"
              xs={12}
              md={12}
              spacing={3}
              mr={2}
            >
              <Grid item className="hours" xs={12} md={6}>
                <Box>
                  <Typography variant="caption">Training Hours</Typography>
                  <TrainingHoursHandler />
                </Box>
              </Grid>
              <Grid item className="completed" xs={12} md={6}>
                <Box>
                  <Typography variant="caption">
                    Completed v/s Pending
                  </Typography>
                  <CompletedPendingHandler />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="top-right" xs={12} md={4}>
            <Card sx={{ height: "100%", mb: 1.75, ml: 1 }}>
              <TrainingProgramsChart />
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          item
          className="bottom-container"
          xs={12}
          md={12}
          spacing={3}
        >
          <Grid item className="left-bottom" xs={12} md={6}>
            <Box>
              <Typography variant="caption">Attendence</Typography>
              <AttendenceBarHandler />
            </Box>
          </Grid>
          <Grid item className="right-bottom" xs={12} md={6}>
            <Box>
              <Typography variant="caption">Feedback</Typography>
              <FeedbackBarHandler />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
