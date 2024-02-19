import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../../configs/axiosConfigs";
import { TargetAudienceData } from "../addProgramForm/types";

export const postTargetAudience = async (
    targetAudience: TargetAudienceData
): Promise<void> => {
    try {
        const response: AxiosResponse = await axiosInstance.post(
            "/target-audiences",
            { ...targetAudience }
        );
        console.log("Data sent successfully!", response);
    } catch (error) {
        console.error("Error while sending data:", error as AxiosError);
    }
};
