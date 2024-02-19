import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../configs/axiosConfigs";
import { FeedbackCardData } from "../types";

export const getTrainingProgramAverageFeedback = async (): Promise<
  FeedbackCardData[]
> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      `feedback/view-average-feedback`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
    throw error;
  }
};
