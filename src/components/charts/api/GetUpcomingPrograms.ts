import axiosInstance from "../../../configs/axiosConfigs";

const GetUpcomingPrograms = async () => {
  try {
    const response = await axiosInstance.get("/view-training-program");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching upcoming programs:", error);
    return [];
  }
};

export default GetUpcomingPrograms;