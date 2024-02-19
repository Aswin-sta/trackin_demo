import { PieChart } from "@mui/x-charts/PieChart";
import Card from "@mui/material/Card";
import { Typography, Grid } from "@mui/material";
import { TrainingHoursProgressProps } from "./types";

const TrainingHours = ({ data }: TrainingHoursProgressProps) => {
  const centerLabel = data[0].value.toString();

  return (
    <Card variant="elevation">
      <Grid container sx={{ height: "33vh", position: "relative" }}>
        <PieChart
          series={[
            {
              innerRadius: 35,
              outerRadius: 55,
              data: data.slice(1),
              startAngle: 0,
              endAngle: 360,
            },
            {
              innerRadius: 28,
              outerRadius: 58,
              startAngle: 0,
              endAngle: data[0].value,
              data: [data[0]],
              cornerRadius: 25,
            },
          ]}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 13,
              },
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              markGap: 15,
              itemGap: 25,
            },
          }}
          sx={{ position: "relative" }}
        />
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "35%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {centerLabel}
        </Typography>
      </Grid>
    </Card>
  );
};

export default TrainingHours;
