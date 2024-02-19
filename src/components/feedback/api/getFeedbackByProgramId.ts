import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../configs/axiosConfigs";
import { TraineeFeedbackData } from "../types";

export const getFeedbackByProgramId = async (
  id: number
): Promise<TraineeFeedbackData[]> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      `feedback/view-feedback-by-program-id?id=${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
    throw error;
  }
};
