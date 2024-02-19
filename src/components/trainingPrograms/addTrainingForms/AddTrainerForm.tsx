import {
  Typography,
  Grid,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Modal,
  FormHelperText,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { postTrainer } from "./api/postTrainer";
import { TrainerData } from "./addProgramForm/types";
import { AddNewFieldProp } from "../types";

const AddTrainerForm = ({ openModal, onClose }: AddNewFieldProp) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleTrainerTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    setError(false);
  };

  const submitTrainer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedValue) {
      setError(true);
      return;
    }
    const formData = new FormData(e.currentTarget);

    const formDataObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value as string;
    });

    const trainerDataToBePosted: TrainerData = {
      trainerType: formDataObject.trainerType,
      fullname: formDataObject.fullname,
      email: formDataObject.email,
      contactNumber: parseInt(formDataObject.contactNumber),
      experience: parseInt(formDataObject.experience),
      expertiseIn: formDataObject.expertiseIn,
      facilitatedTrainings: formDataObject.facilitatedTrainings,
      certifications: formDataObject.certifications,
    };

    await postTrainer(trainerDataToBePosted);
    onClose();
  };

  return (
    <>
      <Modal open={openModal} disableEnforceFocus>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { md: "55%", xs: "95%" },
            height: "auto",
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
          <form onSubmit={submitTrainer}>
            <Typography variant="h6">Add New Trainer</Typography>

            <Grid container spacing={5} pt={"1.5rem"}>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    size="small"
                    name="fullname"
                    label="Name"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6} xs={12} mt={"-0.5rem"}>
                <FormControl fullWidth error={error} required>
                  <Typography variant="caption" sx={{ color: "grey" }}>
                    Trainer Type
                  </Typography>
                  <RadioGroup
                    name="trainerType"
                    value={selectedValue}
                    onChange={handleTrainerTypeChange}
                    row
                  >
                    <FormControlLabel
                      value="Internal"
                      control={<Radio />}
                      label="Internal"
                    />
                    <FormControlLabel
                      value="External"
                      control={<Radio />}
                      label="External"
                    />
                  </RadioGroup>
                  {error && (
                    <FormHelperText>Please select an option.</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={5} pt={"1.5rem"}>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    type="email"
                    size="small"
                    name="email"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    type="tel"
                    size="small"
                    name="contactNumber"
                    label="Contact Number"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{
                      pattern: "^[6-9]\\d{9}$",
                      maxLength: 10,
                    }}
                    required
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={5} pt={"2rem"}>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    type="number"
                    size="small"
                    name="experience"
                    label="Experience (in yrs)"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    size="small"
                    name="expertiseIn"
                    label="Expertise In"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={5} pt={"2rem"}>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    size="small"
                    name="facilitatedTrainings"
                    label="Facilitated Trainings"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    size="small"
                    name="certifications"
                    label="Certifications"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              pt={"1.5rem"}
              sx={{ justifyContent: "space-evenly" }}
            >
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
    </>
  );
};

export default AddTrainerForm;
