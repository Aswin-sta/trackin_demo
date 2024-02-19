import React, { FormEvent, useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import ProgramFormPage from "./ProgramFormPage";
import {
  TrainingType,
  TargetAudience,
  Trainer,
  TrainingProgramData,
  FeedbackTemplate,
} from "./types";
import { fetchTrainingType } from "../api/getTrainingType";
import { fetchTrainer } from "../api/getTrainer";
import { fetchTargetAudience } from "../api/getTargetAudience";
import { postTrainingProgram } from "../api/postTrainingProgram";
import { fetchFeedbackTemplate } from "../api/getFeedbackTemplate";
import { useNavigate } from "react-router";

const ProgramFormPageHandler = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [trainingType, setTrainingType] = useState<TrainingType[]>([]);
  const [targetAudience, setTargetAudience] = useState<TargetAudience[]>([]);
  const [trainer, setTrainer] = useState<Trainer[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<number[]>([]);
  const [selectedTrainer, setSelectedTrainer] = useState<number[]>([]);
  const [sendFeedback, setSendFeedback] = useState<boolean>(true);
  const [feedbackTemplate, setFeedbackTemplate] = useState<FeedbackTemplate[]>(
    []
  );
  const [selectedTrainingMode, setSelectedTrainingMode] = useState<string>("");
  const [selectedTrainingModeError, setSelectedTrainingModeError] =
    useState<boolean>(false);
  const [selectedOccurrenceType, setSelectedOccurrenceType] =
    useState<string>("");
  const [selectedOccurrenceTypeError, setSelectedOccurrenceTypeError] =
    useState<boolean>(false);
  const [openAddTrainingType, setOpenAddTrainingType] = useState(false);
  const [openAddTrainerModal, setOpenAddTrainerModal] = useState(false);
  const [openAddAudienceModal, setOpenAddAudienceModal] = useState(false);
  const [openAddFeedbackTemplate, setOpenAddFeedbackTemplate] = useState(false);
  const navigate = useNavigate();

  const theme = createTheme({
    components: {
      MuiRadio: {
        styleOverrides: {
          root: {
            "& .MuiSvgIcon-root": {
              fontSize: 12,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: "12px",
          },
        },
      },
    },
  });

  const handleStartDateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
  };

  const handleAddTrainingType = () => {
    setOpenAddTrainingType(true);
  };

  const handleAddTrainer = () => {
    setOpenAddTrainerModal(true);
  };

  const handleAddTargetAudience = () => {
    setOpenAddAudienceModal(true);
  };
  const handleAddFeedbackTemplate = () => {
    setOpenAddFeedbackTemplate(true);
  };

  const handleCloseModal = () => {
    setOpenAddTrainerModal(false);
    setOpenAddAudienceModal(false);
    setOpenAddTrainingType(false);
    setOpenAddFeedbackTemplate(false);
  };

  const handleTrainingModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTrainingMode(e.target.value);
    setSelectedTrainingModeError(false);
  };

  const handleOccurrenceTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedOccurrenceType(e.target.value);
    setSelectedOccurrenceTypeError(false);
  };

  const handleDeleteTargetAudience = (
    idToDelete: number,
    setFunction: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    setFunction((prevIds) => prevIds.filter((id) => id !== idToDelete));
  };

  const handleDeleteTrainer = (
    idToDelete: number,
    setFunction: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    setFunction((prevIds) => prevIds.filter((id) => id !== idToDelete));
  };

  const GetTrainingType = async () => {
    const response = await fetchTrainingType();
    setTrainingType(response);
  };

  const GetTrainer = async () => {
    const response = await fetchTrainer();
    setTrainer(response);
  };

  const GetTargetAudience = async () => {
    const response = await fetchTargetAudience();
    setTargetAudience(response);
  };

  const GetFeedbackTemplate = async () => {
    const response = await fetchFeedbackTemplate();
    setFeedbackTemplate(response);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedTrainingMode) {
      setSelectedTrainingModeError(true);
      return;
    }

    if (!selectedOccurrenceType) {
      setSelectedOccurrenceTypeError(true);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("feedback", sendFeedback.toString());

    const formDataObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value as string;
    });

    const dataToBePosted: TrainingProgramData = {
      availableSeats: parseInt(formDataObject.availableSeats),
      description: formDataObject.description,
      duration: parseInt(formDataObject.duration),
      durationPerSession: parseInt(formDataObject.durationPerSession),
      endDate: formDataObject.endDate.split("T")[0],
      feedback: formDataObject.feedback === "true",
      feedbackTemplateId: parseInt(formDataObject.feedbackTemplateId),
      occuranceType: formDataObject.occuranceType,
      startDate: formDataObject.startDate.split("T")[0],
      audienceId: formDataObject.audienceId.split(",").map(Number),
      title: formDataObject.title,
      trainerId: formDataObject.trainerId.split(",").map(Number),
      trainingMode: formDataObject.trainingMode,
      trainingTypeId: parseInt(formDataObject.trainingTypeId),
    };

    await postTrainingProgram(dataToBePosted);
    navigate("/programs");
  };

  useEffect(() => {
    if (!openAddTrainingType) {
      GetTrainingType();
    }
  }, [openAddTrainingType]);

  useEffect(() => {
    if (!openAddTrainerModal) {
      GetTrainer();
    }
  }, [openAddTrainerModal]);

  useEffect(() => {
    if (!openAddAudienceModal) {
      GetTargetAudience();
    }
  }, [openAddAudienceModal]);

  useEffect(() => {
    if (!openAddFeedbackTemplate) {
      GetFeedbackTemplate();
    }
  }, [openAddFeedbackTemplate]);

  return (
    <ProgramFormPage
      startDate={startDate}
      trainingType={trainingType}
      targetAudience={targetAudience}
      trainer={trainer}
      selectedAudience={selectedAudience}
      selectedTrainer={selectedTrainer}
      theme={theme}
      sendFeedback={sendFeedback}
      feedbackTemplate={feedbackTemplate}
      openAddTrainingType={openAddTrainingType}
      openAddTrainerModal={openAddTrainerModal}
      openAddAudienceModal={openAddAudienceModal}
      openAddFeedbackTemplate={openAddFeedbackTemplate}
      selectedTrainingMode={selectedTrainingMode}
      selectedTrainingModeError={selectedTrainingModeError}
      selectedOccurrenceType={selectedOccurrenceType}
      selectedOccurrenceTypeError={selectedOccurrenceTypeError}
      submit={submit}
      handleDeleteTargetAudience={handleDeleteTargetAudience}
      handleDeleteTrainer={handleDeleteTrainer}
      setSelectedAudience={setSelectedAudience}
      setSelectedTrainer={setSelectedTrainer}
      setSendFeedback={setSendFeedback}
      handleStartDateChange={handleStartDateChange}
      handleAddTrainingType={handleAddTrainingType}
      handleAddTrainer={handleAddTrainer}
      handleAddTargetAudience={handleAddTargetAudience}
      handleAddFeedbackTemplate={handleAddFeedbackTemplate}
      handleTrainingModeChange={handleTrainingModeChange}
      handleOccurrenceTypeChange={handleOccurrenceTypeChange}
      handleCloseModal={handleCloseModal}
    />
  );
};

export default ProgramFormPageHandler;
