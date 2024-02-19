import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../../configs/axiosConfigs";
import { TrainingTypeData } from "../addProgramForm/types";

export const postTrainingType = async (
    trainingTypeToBePosted: TrainingTypeData
): Promise<void> => {
    try {
        const response: AxiosResponse = await axiosInstance.post(
            "/add-training-type",
            { ...trainingTypeToBePosted }
        );
        console.log("Data sent successfully!", response);
    } catch (error) {
        console.error("Error while sending data:", error as AxiosError);
    }
};
