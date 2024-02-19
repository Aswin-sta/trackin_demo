import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CalendarBodyHandler from "./CalendarBodyHandler";
import { CalendarHeaderProps } from "./types";

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  date,
  handleNextMonth,
  handlePrevMonth,
  handleYearClick,
}) => {
  return (
    <Grid>
      <Grid container item lg={4.5} justifyContent="space-between">
        <Button onClick={handlePrevMonth}>
          <KeyboardArrowLeftIcon />
        </Button>
        <Typography variant="h5" onClick={handleYearClick}>
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </Typography>
        <Button onClick={handleNextMonth}>
          <KeyboardArrowRightIcon />
        </Button>
      </Grid>
      <CalendarBodyHandler currentDate={date} />
    </Grid>
  );
};

export default CalendarHeader;
