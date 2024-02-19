import React from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { ProgramFormProps } from "./types";
import AddTrainerForm from "../AddTrainerForm";
import AddTargetAudience from "../AddTargetAudienceForm";
import AddTrainingType from "../AddTrainingTypeForm";
import FeedbackTemplateHandler from "../../../feedback/feedbackTemplate/FeedbackTemplateHandler";

const ProgramFormPage = ({
  startDate,
  trainingType,
  targetAudience,
  trainer,
  selectedAudience,
  selectedTrainer,
  sendFeedback,
  feedbackTemplate,
  theme,
  openAddTrainingType,
  openAddTrainerModal,
  openAddAudienceModal,
  openAddFeedbackTemplate,
  selectedTrainingMode,
  selectedTrainingModeError,
  selectedOccurrenceType,
  selectedOccurrenceTypeError,
  handleDeleteTargetAudience,
  handleDeleteTrainer,
  submit,
  setSelectedAudience,
  setSelectedTrainer,
  setSendFeedback,
  handleStartDateChange,
  handleAddTrainingType,
  handleAddTrainer,
  handleAddTargetAudience,
  handleAddFeedbackTemplate,
  handleTrainingModeChange,
  handleOccurrenceTypeChange,
  handleCloseModal,
}: ProgramFormProps) => {
  return (
    <ThemeProvider theme={theme}>
      <form style={{ margin: "0.5rem 1rem 1rem 1rem" }} onSubmit={submit}>
        <Typography variant="h5" fontWeight={"bold"}>
          Create Program
        </Typography>

        <Grid container spacing={5} mt={"0.01rem"}>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl fullWidth required>
              <TextField
                size="small"
                name="title"
                label="Training Title"
                InputLabelProps={{ shrink: true }}
                required
              />
            </FormControl>
          </Grid>

          <Grid item md={3} sm={12} xs={12}>
            <FormControl fullWidth required>
              <TextField
                type="date"
                size="small"
                name="startDate"
                label="Start Date"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: { fontSize: "0.8rem" },
                  inputProps: { min: new Date().toISOString().split("T")[0] },
                }}
                value={startDate}
                onChange={(e) => handleStartDateChange(e)}
                required
              />
            </FormControl>
          </Grid>

          <Grid item md={3} sm={12} xs={12}>
            <FormControl fullWidth required>
              <TextField
                type="date"
                size="small"
                name="endDate"
                label="End Date"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  sx: { fontSize: "0.8rem" },
                  inputProps: {
                    min: startDate,
                  },
                }}
                required
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} pt={"2rem"}>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl
              fullWidth
              required
              sx={{ mt: { xs: "0.5rem", md: "0rem" } }}
            >
              <TextField
                multiline
                rows={3.5}
                name="description"
                label="Description"
                InputLabelProps={{ shrink: true }}
                required
              />
            </FormControl>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Grid container spacing={5}>
              <Grid item md={6} xs={12}>
                <FormControl size="small" fullWidth required>
                  <TextField
                    select
                    required
                    name="trainingTypeId"
                    label="Training Type"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    size="small"
                    fullWidth
                  >
                    {trainingType.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.trainingType}
                      </MenuItem>
                    ))}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <AddOutlinedIcon
                        onClick={handleAddTrainingType}
                        sx={{ color: "#9c9a97" }}
                      />
                      Add new field
                    </Box>
                  </TextField>
                </FormControl>
              </Grid>

              <Grid item md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    type="number"
                    size="small"
                    name="availableSeats"
                    label="Available Seats"
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
            </Grid>

            <Grid container spacing={5} sx={{ pt: "2rem" }}>
              <Grid item md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    type="number"
                    size="small"
                    name="duration"
                    label="Duration (in hrs)"
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
              <Grid item md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <TextField
                    type="number"
                    size="small"
                    name="durationPerSession"
                    label="Duration per Session (in hrs)"
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
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={5} pt={"1.5rem"}>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl size="small" fullWidth required>
              <Typography variant="caption" sx={{ color: "grey" }}>
                Trainer
              </Typography>
              <Select
                fullWidth
                multiple
                name="trainerId"
                value={selectedTrainer}
                onChange={(e: SelectChangeEvent<number[]>) => {
                  const selectedIds = e.target.value as number[];
                  setSelectedTrainer(selectedIds);
                }}
                renderValue={(selected) => (
                  <Box
                    style={{
                      overflowX: "auto",
                      WebkitOverflowScrolling: "touch",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    <>{console.log(selected)}</>
                    {selected.length !== undefined &&
                      trainer.length > 0 &&
                      selected.map((id) => (
                        <Chip
                          key={id}
                          label={trainer[id - 1].fullname}
                          size="small"
                          onDelete={() =>
                            handleDeleteTrainer(id, setSelectedTrainer)
                          }
                          style={{ padding: "-0.5rem 0.5px" }}
                        />
                      ))}
                  </Box>
                )}
              >
                {trainer.map((option) => {
                  return (
                    <MenuItem key={option?.id} value={option?.id}>
                      {option.fullname}
                    </MenuItem>
                  );
                })}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <AddOutlinedIcon
                    sx={{ color: "#9c9a97" }}
                    onClick={handleAddTrainer}
                  />
                  Add new field
                </Box>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <FormControl size="small" fullWidth required>
              <Typography variant="caption" sx={{ color: "grey" }}>
                Target Audience
              </Typography>
              <Select
                fullWidth
                multiple
                name="audienceId"
                value={selectedAudience}
                onChange={(e: SelectChangeEvent<number[]>) => {
                  const selectedIds = e.target.value as number[];
                  setSelectedAudience(selectedIds);
                }}
                renderValue={(selected) => (
                  <Box
                    style={{
                      overflowX: "auto",
                      WebkitOverflowScrolling: "touch",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {targetAudience.length > 0 &&
                      selected.length !== undefined &&
                      selected.length > 0 &&
                      selected.map((id) => (
                        <Chip
                          key={id}
                          label={targetAudience[id - 1].name}
                          size="small"
                          onDelete={() =>
                            handleDeleteTargetAudience(id, setSelectedAudience)
                          }
                          style={{ padding: "-0.5rem 0.5px" }}
                        />
                      ))}
                  </Box>
                )}
              >
                {targetAudience.length > 0 &&
                  targetAudience.map((option) => {
                    return (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.name}
                      </MenuItem>
                    );
                  })}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <AddOutlinedIcon
                    onClick={handleAddTargetAudience}
                    sx={{ color: "#9c9a97" }}
                  />
                  Add new field
                </Box>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} pt={"2rem"}>
          <Grid item md={4} sm={12} xs={12}>
            <FormControl fullWidth error={selectedTrainingModeError} required>
              <Typography variant="caption" sx={{ color: "grey" }}>
                Training Mode
              </Typography>
              <RadioGroup
                name="trainingMode"
                value={selectedTrainingMode}
                onChange={handleTrainingModeChange}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "stretch",
                }}
              >
                <FormControlLabel
                  value="Online"
                  control={<Radio />}
                  label="Online"
                />
                <FormControlLabel
                  value="Offline"
                  control={<Radio />}
                  label="Offline"
                />
              </RadioGroup>
              {selectedTrainingModeError && (
                <FormHelperText>Please select an option.</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item md={2}></Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FormControl
              required
              error={selectedOccurrenceTypeError}
              sx={{ mt: { xs: "-3rem", md: "0rem" } }}
            >
              <Typography variant="caption" sx={{ color: "grey" }}>
                Occurrence Type
              </Typography>
              <RadioGroup
                name="occuranceType"
                value={selectedOccurrenceType}
                onChange={handleOccurrenceTypeChange}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="Once"
                  control={<Radio />}
                  label="Once"
                />
                <FormControlLabel
                  value="Daily"
                  control={<Radio />}
                  label="Daily"
                />
                <FormControlLabel
                  value="Weekly"
                  control={<Radio />}
                  label="Weekly"
                />
                <FormControlLabel
                  value="Monthly"
                  control={<Radio />}
                  label="Monthly"
                />
              </RadioGroup>
              {selectedOccurrenceTypeError && (
                <FormHelperText>Please select an option.</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} pt={"1.2rem"}>
          <Grid item md={4} sm={12} xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={sendFeedback}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSendFeedback(e.target.checked)
                  }
                />
              }
              label="Send Feedback"
            />
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            {sendFeedback && (
              <FormControl size="small" fullWidth required>
                <TextField
                  select
                  required
                  name="feedbackTemplateId"
                  label="Feedback Template"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  {feedbackTemplate.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <AddOutlinedIcon
                      onClick={handleAddFeedbackTemplate}
                      sx={{ color: "#9c9a97" }}
                    />
                    Add new template
                  </Box>
                </TextField>
              </FormControl>
            )}
          </Grid>

          <Grid item md={4} sm={12} xs={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="info"
              sx={{ width: "7rem" }}
              type="submit"
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
      {openAddTrainingType && (
        <AddTrainingType
          openModal={openAddTrainingType}
          onClose={handleCloseModal}
        />
      )}
      {openAddTrainerModal && (
        <AddTrainerForm
          openModal={openAddTrainerModal}
          onClose={handleCloseModal}
        />
      )}
      {openAddAudienceModal && (
        <AddTargetAudience
          openModal={openAddAudienceModal}
          onClose={handleCloseModal}
        />
      )}
      {openAddFeedbackTemplate && (
        <FeedbackTemplateHandler
          openModal={openAddFeedbackTemplate}
          onClose={handleCloseModal}
        />
      )}
    </ThemeProvider>
  );
};

export default ProgramFormPage;
