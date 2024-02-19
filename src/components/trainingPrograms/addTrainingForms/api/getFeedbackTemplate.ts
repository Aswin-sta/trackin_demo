import axiosInstance from "../../../../configs/axiosConfigs";

export const fetchFeedbackTemplate = async () => {

    try {
        const response = await axiosInstance.get(
            "view-feedback-template",
        );
        return response.data.data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};
