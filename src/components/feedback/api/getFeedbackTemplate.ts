import { AxiosError, AxiosResponse } from "axios";
import { FeedbackTemplateData } from "../types";
import axiosInstance from "../../../configs/axiosConfigs";

export const getFeedbackTemplate = async (): Promise<
  FeedbackTemplateData[]
> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      "view-feedback-template"
    );
    console.log(response.data.data.feedback);
    return response.data.data.feedback;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
    throw error;
  }
};
