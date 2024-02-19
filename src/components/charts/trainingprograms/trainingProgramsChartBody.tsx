import { Grid, Paper, Typography } from "@mui/material";
import { trainingProgramsChartBodyCardProps } from "./types";

const TrainingProgramsChartBody: React.FC<
  trainingProgramsChartBodyCardProps
> = ({ program }) => {
  const parsedDate = new Date(program.date);
  const month = parsedDate.toLocaleString("default", { month: "short" });
  const dayOfMonth = parsedDate.getDate();
  return (
    <Grid
      container
      item
      alignItems="center"
      marginLeft="1rem"
      marginRight="1rem"
      marginTop="0.5rem"
      marginBottom="0.25rem"
      xs={10}
      sm={8}
      md={5}
      lg={10}
    >
      <Grid item xs={11}>
        <Typography variant="body2">{program.course}</Typography>
        <Typography variant="caption">{program.instructor}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "rgb(163, 15, 163)",
            color: "white",
            minWidth: "3rem",
            minHeight: "2.5rem",
            textAlign: "center",
          }}
        >
          <Typography variant="caption">{month}</Typography>
          <Typography variant="subtitle2">{dayOfMonth}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TrainingProgramsChartBody;
