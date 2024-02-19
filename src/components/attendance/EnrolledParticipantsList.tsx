// EnrolledParticipantsList.tsx
import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { EnrolledParticipantsListProps } from "./types";

const EnrolledParticipantsList: React.FC<EnrolledParticipantsListProps> = ({
  enrolledUsers,
}: EnrolledParticipantsListProps) => {
  return (
    <Grid container spacing={2}>
      {enrolledUsers.map((user) => (
        <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="div">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Department: {user.department}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EnrolledParticipantsList;
