import axiosInstance from "../../../configs/axiosConfigs";

const fetchFeedback = async () => {
    try {
        const response = await axiosInstance.get("feedback/view-average-feedback");
        return response.data.data;
    } catch (error) {
        console.error("Error fetching feedback bar data:", error);
        return [];
    }
};

export default fetchFeedback;



