import { AxiosError, AxiosResponse } from "axios";
import { FeedbackTemplateData } from "../types";
import axiosInstance from "../../../configs/axiosConfigs";

export const postFeedbackTemplate = async (
  data: FeedbackTemplateData
): Promise<void> => {
  try {
    console.log(data);
    const response: AxiosResponse = await axiosInstance.post(
      "/create-feedback-template",
      { name: data.name, template: data.template }
    );
    console.log("Data sent successfully!", response);
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
  }
};
