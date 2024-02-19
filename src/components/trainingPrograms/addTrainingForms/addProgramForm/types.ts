import { Theme } from "@emotion/react";
import { FormEvent } from "react";

export type TrainingType = {
    id: number;
    trainingType: string;
};

export type TargetAudience = {
    id: number;
    name: string;
};

export type Trainer = {
    id: number;
    fullname: string;
};

export type FeedbackTemplate = {
    id: number;
    name: string;
};

export type ProgramFormProps = {
    startDate: string
    trainingType: TrainingType[];
    targetAudience: TargetAudience[];
    trainer: Trainer[];
    selectedAudience: number[];
    selectedTrainer: number[];
    sendFeedback: boolean;
    feedbackTemplate: FeedbackTemplate[];
    openAddTrainingType: boolean;
    openAddTrainerModal: boolean;
    openAddAudienceModal: boolean;
    openAddFeedbackTemplate: boolean;
    selectedTrainingMode: string;
    selectedTrainingModeError: boolean;
    selectedOccurrenceType: string;
    selectedOccurrenceTypeError: boolean;
    theme: Theme;
    handleStartDateChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleDeleteTargetAudience: (idToDelete: number, setFunction: React.Dispatch<React.SetStateAction<number[]>>) => void;
    handleDeleteTrainer: (idToDelete: number, setFunction: React.Dispatch<React.SetStateAction<number[]>>) => void;
    setSelectedAudience: React.Dispatch<React.SetStateAction<number[]>>;
    setSelectedTrainer: React.Dispatch<React.SetStateAction<number[]>>
    setSendFeedback: React.Dispatch<React.SetStateAction<boolean>>;
    submit: (e: FormEvent<HTMLFormElement>) => void;
    handleAddTrainingType: () => void;
    handleAddTrainer: () => void;
    handleAddTargetAudience: () => void;
    handleAddFeedbackTemplate: () => void;
    handleTrainingModeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOccurrenceTypeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCloseModal: () => void;
};

export type TrainingProgramData = {
    availableSeats: number;
    description: string;
    duration: number;
    durationPerSession: number;
    endDate: string;
    feedback: boolean;
    feedbackTemplateId: number;
    occuranceType: string;
    startDate: string;
    audienceId: number[];
    title: string;
    trainerId: number[];
    trainingMode: string;
    trainingTypeId: number;
}

export type TrainerData = {
    trainerType: string;
    fullname: string;
    email: string;
    contactNumber: number;
    experience: number;
    expertiseIn: string;
    facilitatedTrainings: string;
    certifications: string;
}

export type TrainingTypeData = {
    trainingType: string;
}

export type TargetAudienceData = {
    name: string;
}