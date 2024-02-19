import axiosInstance from "../../../configs/axiosConfigs";

const fetchTrainingHours = async () => {
  try {
    const response = await axiosInstance.get("dashboard/training-hours");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training hours:", error);
    return [];
  }
};

export default fetchTrainingHours;