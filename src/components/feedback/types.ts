import {
  Control,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export type FormData = {
  formData: Question[];
};

export type FormSubmission = {
  feedback: {
    [key: string]: string | string[];
  };
  rating: number | null;
  userTrainingId: number;
};
export type DynamicFormProps = {
  formData: Question[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    question: string
  ) => void;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  formState: { [key: string]: string | string[] };
  rating: number | null;
};

export type FeedbackTemplateCardProps = {
  index: number;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  remove: UseFieldArrayRemove;
  watch: UseFormWatch<FieldValues>;
};

export type Question = {
  question: string;
  type: "text" | "radio" | "checkbox";
  options: string[];
  required: boolean;
};

export type FeedbackTemplateData = {
  id: number;
  name: string;
  template: Question[];
};

export type FormHandlerProps = {
  formData: FormData;
  userProgramMappingId: number;
};

export type FeedbackTemplateProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  onSubmit: (data: FeedbackTemplateData) => void;
  isAddQuestionButtonActive: () => boolean;
  append: UseFieldArrayAppend<FieldValues, "template">;
  fields: Record<"id", string>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues, any, FieldValues>; //default use hook type
  watch: UseFormWatch<FieldValues>;
};

export type TrainingFeedbackCardProps = {
  data: FeedbackCardData[];
};

export type FeedbackItem = {
  id: number;
  rating: number;
  userTrainingId: number;
  department: string;
  user_name: string;
  feedback: {
    [question: string]: string | string[];
  };
};

export type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

export type TraineeFeedbackData = {
  id: number;
  userTrainingId: number;
  name: string;
  department: string;
  created_at: string;
  rating: number;
};

export type FeedbackCardData = {
  training_id: number;
  training: string;
  trainer: string;
  rating: number;
};
export type FeedbackTemplateHandlerProp = {
  openModal: boolean;
  onClose: () => void;
};
