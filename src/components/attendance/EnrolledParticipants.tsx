import { useState, useEffect } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import RuleIcon from "@mui/icons-material/Rule";
import { useParams, useNavigate } from "react-router";

import GetEnrolledParticipants from "../../pages/Programs/api/GetParticipants";
import EnrolledParticipantsList from "./EnrolledParticipantsList";
import { EnrolledUser } from "./types";

const EnrolledParticipantsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [enrolledUsers, setEnrolledUsers] = useState<EnrolledUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainingProgramId = id;
        const data = await GetEnrolledParticipants(
          parseInt(trainingProgramId as string)
        );
        setEnrolledUsers(data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };
    fetchData();
  }, [id]);

  const isBeforeOrSameStartDate = (date: string) => {
    const startDate = new Date(date);
    const currentDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    return startDate.getTime() <= currentDate.getTime();
  };

  const renderMarkAttendanceButton = () => {
    if (
      enrolledUsers.length > 0 &&
      isBeforeOrSameStartDate(enrolledUsers[0].startDate)
    ) {
      return (
        <IconButton
          onClick={() => {
            navigate(`/participants/attendance/${parseInt(id as string)}`);
          }}
        >
          <RuleIcon />
          <Typography style={{ fontSize: ".8rem", marginLeft: "3" }}>
            Mark Attendance
          </Typography>
        </IconButton>
      );
    }
    return null;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container justifyContent="space-between">
        <Typography variant="h5">Enrolled Participants</Typography>
        {renderMarkAttendanceButton()}
      </Grid>
      <EnrolledParticipantsList enrolledUsers={enrolledUsers} />
    </Grid>
  );
};

export default EnrolledParticipantsPage;
