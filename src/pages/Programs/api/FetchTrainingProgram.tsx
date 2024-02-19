import axiosInstance from "../../../configs/axiosConfigs";

const FetchTrainingPrograms = async (id: number | undefined | null) => {
  try {
    const response = await axiosInstance.get(
      id === 0 ? `view-training-program` : `view-training-program?types=${id}`
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching training programs:", error);
    return null;
  }
};

export default FetchTrainingPrograms;
