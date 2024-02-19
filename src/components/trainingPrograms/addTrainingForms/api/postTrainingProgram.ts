import { AxiosResponse } from "axios";
import axiosInstance from "../../../../configs/axiosConfigs";
import { TrainingProgramData } from "../addProgramForm/types";

export const postTrainingProgram = async (
    dataToBePosted: TrainingProgramData
) => {
    try {
        const response: AxiosResponse = await axiosInstance.post(
            "/add-training-program",
            { ...dataToBePosted }
        );
        return response.data;
    } catch (error) {
        console.error("Error while sending data:", error);
    }
};
