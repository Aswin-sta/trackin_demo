import axiosInstance from "../../../../configs/axiosConfigs";

export const fetchTrainingType = async () => {

  try {
    const response = await axiosInstance.get(
      "/view-training-type",
    );
    return response.data.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};
