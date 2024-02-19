import React, { useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { TrainingProgram } from "../types";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axiosInstance from "../../../configs/axiosConfigs";

type ProgramRequestCardProps = {
  programData: TrainingProgram;
  open: boolean;
  handlePopoverOpen: () => void;
  handlePopoverClose: () => void;
};

const ProgramRequestCard = ({
  programData,
  open,
  handlePopoverOpen,
  handlePopoverClose,
}: ProgramRequestCardProps) => {
  const [requestMessage, setRequestMessage] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleRequestButtonClick = async () => {
    try {
      const data = [{ trainingProgramId: programData.id }];
      const response = await axiosInstance.post(
        "/nomination/post-nomination-requests",
        data
      );
      setRequestMessage(response.data.message);
      setOpenDialog(true);
    } catch (error) {
      console.error("Error submitting nomination request:", error);
      setRequestMessage("Nomination already exists");
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const startDate = new Date(programData.startDate);
  const endDate = new Date(programData.endDate);

  const formattedStartDate = `${startDate.getDate()}-${
    startDate.getMonth() + 1
  }-${startDate.getFullYear()}`;
  const formattedEndDate = `${endDate.getDate()}-${
    endDate.getMonth() + 1
  }-${endDate.getFullYear()}`;

  return (
    <div>
      <Card
        sx={{
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)",
          mb: ".6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fcfcfc",
          p: "1rem 2rem ",
        }}
        key={programData.id}
      >
        <Grid container alignItems="center">
          <Grid
            item
            xs={3}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Typography variant="subtitle2">{programData.title}</Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <DateRangeIcon
              fontSize="small"
              sx={{ marginRight: "6px", color: "#545659" }}
            />
            <Typography variant="caption">{formattedStartDate}</Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <DateRangeIcon
              fontSize="small"
              sx={{ marginRight: "6px", color: "#545659" }}
            />
            <Typography variant="caption">{formattedEndDate}</Typography>
          </Grid>

          <Grid item xs={4} display="flex" justifyContent={"center"}>
            <Typography variant="caption">
              {programData.ProgramAudiences.map(
                (audience) => audience.TargetAudience.name
              ).join(", ")}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography variant="caption">
              {programData.availableSeats}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={handleRequestButtonClick} key={programData.id}>
              Request
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Description</Typography>
                  <Typography variant="caption">
                    {programData.description}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Trainer</Typography>
                  <Typography variant="caption">
                    {programData.ProgramTrainers.map(
                      (trainer) => trainer.Trainer.fullname
                    ).join(", ")}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle2">Mode</Typography>
                  <Typography variant="caption">
                    {programData.trainingMode}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle2">Occurrence Type</Typography>
                  <Typography variant="caption">
                    {programData.occuranceType}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle2">Duration</Typography>
                  <Typography variant="caption">
                    {programData.duration}
                  </Typography>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </Card>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Request Status</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{requestMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProgramRequestCard;
