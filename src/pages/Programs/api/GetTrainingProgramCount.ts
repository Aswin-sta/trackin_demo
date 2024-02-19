import axiosInstance from "../../../configs/axiosConfigs";

const fetchProgramCardCount = async () => {
  try {
    const response = await axiosInstance.get("");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching program card counts:", error);
    return [];
  }
};

export default fetchProgramCardCount;
