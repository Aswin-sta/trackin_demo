import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../configs/axiosConfigs";
import { FeedbackItem } from "../types";

export const getFeedbackById = async (id: number): Promise<FeedbackItem> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      `feedback/view-feedback-by-id?id=${id}`
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
    throw error;
  }
};
