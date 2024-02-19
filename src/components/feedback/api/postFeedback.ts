import { AxiosError, AxiosResponse } from "axios";
import { FormSubmission } from "../types";
import axiosInstance from "../../../configs/axiosConfigs";

export const postFeedback = async (
  formSubmission: FormSubmission
): Promise<void> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      "feedback/create-feedback",
      formSubmission
    );
    console.log("Feedback sent successfully!", response);
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
  }
};
