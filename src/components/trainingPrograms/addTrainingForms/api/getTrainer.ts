import axiosInstance from "../../../../configs/axiosConfigs";

export const fetchTrainer = async () => {

    try {
        const response = await axiosInstance.get(
            "/trainers",
        );
        return response.data.data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};