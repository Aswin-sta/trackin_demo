import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../../configs/axiosConfigs";
import { TrainerData } from "../addProgramForm/types";

export const postTrainer = async (
    trainerDataToBePosted: TrainerData
): Promise<void> => {
    try {
        const response: AxiosResponse = await axiosInstance.post(
            "/trainers/postTrainer",
            { ...trainerDataToBePosted }
        );
        console.log("Data sent successfully!", response);
    } catch (error) {
        console.error("Error while sending data:", error as AxiosError);
    }
};
