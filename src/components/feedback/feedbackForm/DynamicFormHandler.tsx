import React, { useState } from "react";
import { FormSubmission, FormHandlerProps } from "../types";
import { DynamicForm } from "./DynamicForm";
import { postFeedback } from "../api/postFeedback";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

const DynamicFormHandler = ({
  formData,
  userProgramMappingId,
}: FormHandlerProps) => {
  const [formState, setFormState] = useState<{
    [key: string]: string | string[];
  }>({});

  const [rating, setRating] = useState<number | null>(2.5);

  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    question: string
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      const updatedValue = formState[question]
        ? [...(formState[question] as string[])]
        : [];

      if (checked && !updatedValue.includes(name)) {
        updatedValue.push(name);
      } else if (!checked && updatedValue.includes(name)) {
        const index = updatedValue.indexOf(name);
        updatedValue.splice(index, 1);
      }

      setFormState({ ...formState, [question]: updatedValue });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formSubmission: FormSubmission = {
      feedback: formState,
      rating: rating,
      userTrainingId: userProgramMappingId,
    };

    try {
      postFeedback(formSubmission);
      navigate("/");
    } catch (error) {
      console.log(error as AxiosError);
    }
  };

  return (
    <div>
      <DynamicForm
        formData={formData.formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setRating={setRating}
        formState={formState}
        rating={rating}
      />
    </div>
  );
};

export default DynamicFormHandler;
