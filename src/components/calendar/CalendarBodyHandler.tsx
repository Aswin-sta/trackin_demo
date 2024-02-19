import React, { useState, useEffect } from "react";
import { Grid, Typography, Skeleton } from "@mui/material";
import { WeekGridProps, Program } from "./types";
import CalendarBody from "./CalendarBody";
import { GetProgramsThisMonth } from "../../pages/Calendar/api/GetProgramsThisMonth";

const CalendarBodyHandler: React.FC<WeekGridProps> = ({ currentDate }) => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        // Fetch from API
        const fetchedPrograms = await GetProgramsThisMonth();
        setPrograms(fetchedPrograms);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching programs from API:", error);
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const daysOfWeek: string[] = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  const startDate: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endDate: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const startDayIndex: number = startDate.getDay();
  const endDayIndex: number = endDate.getDay();

  const daysInMonth: number = endDate.getDate();
  const totalDaysToShow: number =
    daysInMonth + startDayIndex + (6 - endDayIndex);

  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center"
        style={{
          height: "3.5rem",
          paddingLeft: "0.6rem",
          paddingRight: "0.6rem",
        }}
      >
        {daysOfWeek.map((day, index) => (
          <Grid
            container
            item
            key={index}
            xs={1.5}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body1">{day}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        item
        xs={12}
        gap={1}
        justifyContent="space-between"
        alignItems="center"
        style={{ paddingLeft: "0.6rem", paddingRight: "0.6rem" }}
      >
        {loading
          ? // Render skeleton UI
            Array.from({ length: totalDaysToShow }).map((_, index) => (
              <Grid
                key={index}
                container
                item
                xs={1.5}
                justifyContent="flex-start"
                padding={1}
                bgcolor="#f8f8f8"
                borderRadius={2}
                style={{
                  height: "80px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{ background: "#ebebeb" }}
                  width="100%"
                  height="100%"
                />
              </Grid>
            ))
          : // Render actual day cells with program information if not loading
            Array.from({ length: totalDaysToShow }).map((_, index) => {
              const currentDate = new Date(startDate);
              currentDate.setDate(startDate.getDate() + index - startDayIndex);

              const isCurrentMonth: boolean =
                currentDate.getMonth() === startDate.getMonth();
              const dayNumber: number = currentDate.getDate();

              // Finding the corresponding program for the current date
              const program: Program | undefined = programs.find((program) => {
                const programDate: Date = new Date(program.date);
                return (
                  programDate.getFullYear() === currentDate.getFullYear() &&
                  programDate.getMonth() === currentDate.getMonth() &&
                  programDate.getDate() === currentDate.getDate()
                );
              });

              const numPrograms: number = program
                ? program.numberOfPrograms
                : 0;

              // Render program information only if there are any programs assigned
              const programInfo =
                numPrograms > 0 ? (
                  <Grid container item>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      color="#D809A9"
                    >{`${numPrograms} Program${
                      numPrograms !== 1 ? "s" : ""
                    }`}</Typography>
                  </Grid>
                ) : null;

              return (
                <CalendarBody
                  key={index}
                  isCurrentMonth={isCurrentMonth}
                  dayNumber={dayNumber}
                  programInfo={programInfo}
                />
              );
            })}
      </Grid>
    </Grid>
  );
};

export default CalendarBodyHandler;
