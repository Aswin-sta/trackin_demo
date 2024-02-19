import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../configs/axiosConfigs";
import { FeedbackTemplateData } from "../types";

export const getFeedbackTemplatebyId = async (
  id: number
): Promise<FeedbackTemplateData> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      `view-feedback-template?id=${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
    throw error;
  }
};
