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
import { postTargetAudience } from "./api/postTargetAudience";
import { AddNewFieldProp } from "../types";
import { TargetAudienceData } from "./addProgramForm/types";

const AddTargetAudience = ({ openModal, onClose }: AddNewFieldProp) => {
  const submitTargetAudience = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const targetAudienceInputData = formData.get("name") as string;

    const targetAudienceToBePosted: TargetAudienceData = {
      name: targetAudienceInputData,
    };
    await postTargetAudience(targetAudienceToBePosted);
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
        <form onSubmit={submitTargetAudience}>
          <Typography variant="h6">Add New Target Audience</Typography>
          <Typography variant="body2" sx={{ color: "grey", p: "1rem 0rem" }}>
            Target Audience:
          </Typography>

          <FormControl fullWidth required>
            <TextField
              size="small"
              name="name"
              InputLabelProps={{ shrink: true }}
              required
            />
          </FormControl>
          <Grid container pt={"1.5rem"} sx={{ justifyContent: "space-evenly" }}>
            <Button variant="contained" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default AddTargetAudience;
