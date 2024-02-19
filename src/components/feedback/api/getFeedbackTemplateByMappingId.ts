import { AxiosError, AxiosResponse } from "axios";
import { FeedbackTemplateData } from "../types";
import axiosInstance from "../../../configs/axiosConfigs";

export const getFeedbackTemplateByMappingId = async (
  id: number
): Promise<FeedbackTemplateData> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      `/view-feedback-template-by-mapping-id?id=${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
    throw error;
  }
};
