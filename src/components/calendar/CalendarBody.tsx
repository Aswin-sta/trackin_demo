import { Grid, Typography } from "@mui/material";
import { CalendarBodyProps } from "./types";

const CalendarBody: React.FC<CalendarBodyProps> = ({
  isCurrentMonth,
  dayNumber,
  programInfo,
}) => {
  return (
    <Grid
      container
      item
      xs={1.5}
      justifyContent="flex-start"
      padding={1}
      bgcolor={isCurrentMonth ? "#f7f4f1" : "#f8f8f8"}
      borderRadius={2}
      style={{ height: "80px", cursor: "pointer", userSelect: "none" }}
    >
      <Typography variant="body2">{isCurrentMonth ? dayNumber : ""}</Typography>
      {programInfo}
    </Grid>
  );
};

export default CalendarBody;
