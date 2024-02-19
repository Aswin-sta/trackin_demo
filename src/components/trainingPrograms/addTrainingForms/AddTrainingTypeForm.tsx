import { FormEvent } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  FormControl,
} from "@mui/material";
import { postTrainingType } from "./api/postTrainingType";
import { AddNewFieldProp } from "../types";
import { TrainingTypeData } from "./addProgramForm/types";

const AddTrainingType = ({ openModal, onClose }: AddNewFieldProp) => {
  const submitTrainingType = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const trainingTypeInputData = formData.get("trainingType") as string;

    const trainingTypeToBePosted: TrainingTypeData = {
      trainingType: trainingTypeInputData,
    };
    await postTrainingType(trainingTypeToBePosted);
    onClose();
  };

  return (
    <Modal open={openModal} disableEnforceFocus>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: "20px",
          boxShadow: 24,
          p: 4,
          overflow: "auto",
        }}
        onKeyDown={(e) => {
          e.stopPropagation(); // Prevent propagation of keyboard events
        }}
      >
        <form onSubmit={submitTrainingType}>
          <Typography variant="h6">Add New Training Type</Typography>
          <Typography variant="body2" sx={{ color: "grey", p: "1rem 0rem" }}>
            Training Type:
          </Typography>

          <FormControl fullWidth required>
            <TextField
              size="small"
              name="trainingType"
              InputLabelProps={{ shrink: true }}
              required
            />
          </FormControl>
          <Grid container pt={"1.5rem"} sx={{ justifyContent: "space-evenly" }}>
            <Button variant="contained" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default AddTrainingType;
