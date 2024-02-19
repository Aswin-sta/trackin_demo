import axiosInstance from "../../../../configs/axiosConfigs";

export const fetchTargetAudience = async () => {
    try {
        const response = await axiosInstance.get(
            "/target-audiences",
        );
        return response.data.data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};