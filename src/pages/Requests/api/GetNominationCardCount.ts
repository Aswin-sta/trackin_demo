import axiosInstance from "../../../configs/axiosConfigs";

const fetchNominationCardCount = async () => {
  try {
    const response = await axiosInstance.get("nomination/get-nomination-count");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching nomination card counts:", error);
    return [];
  }
};

export default fetchNominationCardCount;
