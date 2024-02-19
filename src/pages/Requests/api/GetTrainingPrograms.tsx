import axiosInstance from "../../../configs/axiosConfigs";

const GetTrainingPrograms = async () => {
  try {
    const response = await axiosInstance.get("view-training-program");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching training programs:", error);
    throw new Error("Failed to fetch training programs");
  }
};

export default GetTrainingPrograms;
