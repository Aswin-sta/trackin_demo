import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Card,
  Typography,
  Skeleton,
  Checkbox,
  Box,
} from "@mui/material";
import axiosInstance from "../../configs/axiosConfigs";
import { postAttendance } from "../../pages/Attendance/api/postAttendance";
import { AttendanceBody, UnmarkedAttendee } from "./types";

interface MarkAttendanceFormProps {
  trainingProgramId: number;
}

const MarkAttendanceForm: React.FC<MarkAttendanceFormProps> = ({
  trainingProgramId,
}: MarkAttendanceFormProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [enrolledParticipants, setEnrolledParticipants] = useState<
    UnmarkedAttendee[]
  >([]);
  const [attendanceData, setAttendanceData] = useState<AttendanceBody[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [fetchingMarkedAttendance, setFetchingMarkedAttendance] =
    useState<boolean>(false);

  const handleCheckboxChange = (userId: number, email: string) => {
    setAttendanceData((prevData) => {
      const existingIndex = prevData.findIndex(
        (item) => item.userTrainingId === userId
      );
      if (existingIndex !== -1) {
        const newData = [...prevData];
        newData[existingIndex].isPresent = !newData[existingIndex].isPresent;
        newData[existingIndex].user_email = email;
        newData[existingIndex].end_date = endDate;
        newData[existingIndex].training_title = enrolledParticipants[0]?.title;

        return newData;
      } else {
        return [
          ...prevData,
          {
            isPresent: false,
            userTrainingId: userId,
            date: selectedDate || startDate,
            end_date: enrolledParticipants[0]?.endDate,
            user_email: email,
            training_title: enrolledParticipants[0]?.title,
          },
        ];
      }
    });
  };

  const handleSubmitAttendance = async () => {
    try {
      await postAttendance(attendanceData);
      console.log("Attendance submitted successfully");
    } catch (error) {
      console.error("Error recording attendance:", error);
    }
  };

  const fetchMarkedAttendance = async () => {
    try {
      const dateToFetch = selectedDate || startDate;
      const response = await axiosInstance.get(
        `attendance-marked?id=${trainingProgramId}&date=${dateToFetch}`
      );
      setEnrolledParticipants(response.data.data);
      setFetchingMarkedAttendance(true);
    } catch (error) {
      console.error("Error fetching marked attendance:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dateToFetch = selectedDate;
        const response = await axiosInstance.get(
          `attendance-unmarked?id=${trainingProgramId}&date=${dateToFetch}`
        );

        const { startDate, endDate } = response.data;
        if (startDate !== null && endDate !== null) {
          setStartDate(startDate);
          setEndDate(endDate);
        }
        setEnrolledParticipants(response.data.data);
        setIsLoading(false);
        setFetchingMarkedAttendance(false);
        // Reset attendanceData
        setAttendanceData([]);
      } catch (error) {
        console.error("Error fetching enrolled participants:", error);
      }
    };

    fetchData();
  }, [trainingProgramId, selectedDate]);

  useEffect(() => {
    if (!isLoading && enrolledParticipants.length > 0) {
      const initialAttendanceData: AttendanceBody[] = enrolledParticipants.map(
        (participant) => ({
          isPresent: false, // Set unchecked checkbox's isPresent as false initially
          userTrainingId: participant.id,
          date: selectedDate || startDate, // Set the selected date or initial start date as the date
          end_date: participant.endDate,
          user_email: participant.email,
          training_title: participant.title,
        })
      );
      setAttendanceData(initialAttendanceData);
    }
  }, [isLoading, enrolledParticipants, selectedDate, startDate]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={7}>
        {isLoading ? (
          <Skeleton variant="text" width={200} />
        ) : (
          <Typography variant="h5">{enrolledParticipants[0]?.title}</Typography>
        )}
      </Grid>
      <Grid item xs={3} style={{ textAlign: "right" }}>
        {enrolledParticipants.length > 0 && !fetchingMarkedAttendance && (
          <Button
            onClick={handleSubmitAttendance}
            variant="contained"
            size="small"
          >
            Submit Attendance
          </Button>
        )}
      </Grid>
      <Grid item xs={2} style={{ textAlign: "right" }}>
        <FormControl>
          <TextField
            type="date"
            size="small"
            name="date"
            label="Select Date"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              sx: { fontSize: "0.8rem" },
              inputProps: {
                min: startDate,
                max:
                  new Date(endDate) >=
                  new Date(new Date().toISOString().split("T")[0])
                    ? new Date().toISOString().split("T")[0]
                    : endDate,
              },
              value: selectedDate || startDate, // Use selectedDate or initialStartDate
              onChange: (e) => {
                setSelectedDate(e.target.value);
              },
            }}
          />
        </FormControl>
      </Grid>
      {isLoading ? (
        <Grid item xs={12}>
          <Skeleton variant="text" height={30} />
        </Grid>
      ) : enrolledParticipants.length === 0 && !fetchingMarkedAttendance ? (
        <Grid item xs={12}>
          <Typography variant="body1">
            Attendance already marked for this training program.
          </Typography>
          <Button onClick={fetchMarkedAttendance} variant="text" size="small">
            Fetch Marked Attendance
          </Button>
        </Grid>
      ) : (
        enrolledParticipants.map((participant) => (
          <Grid item xs={12} key={participant.id}>
            <Card
              sx={{
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                backgroundColor: "#fcfcfc",
                p: ".5rem 2rem",
              }}
            >
              {!fetchingMarkedAttendance && (
                <Checkbox
                  checked={attendanceData.some(
                    (item) =>
                      item.userTrainingId === participant.id && item.isPresent
                  )}
                  onChange={() =>
                    handleCheckboxChange(participant.id, participant.email)
                  }
                />
              )}
              <Grid container display={"flex"}  alignItems={"center"} >
              <Grid item xs={5} ><Typography variant="caption">
                {`${participant.firstName} ${participant.lastName} `}
              </Typography>
              </Grid>
              <Typography variant="caption" sx={{ padding: 1.5 }}>
                {participant.isPresent !== undefined && (
                  <span style={{ marginLeft: "10px" }}>
                    {participant.isPresent ? (
                      <span style={{ color: "green" }}>Present</span>
                    ) : (
                      <span style={{ color: "red" }}>Absent</span>
                    )}
                  </span>
                )}
              </Typography>
              </Grid>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default MarkAttendanceForm;
