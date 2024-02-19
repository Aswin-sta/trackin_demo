import axiosInstance from "../../../configs/axiosConfigs";

const fetchPendingNominationCount = async () => {
  try {
    const response = await axiosInstance.get("nomination/get-nomination-count");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching pending nomination counts:", error);
    return [];
  }
};

export default fetchPendingNominationCount;

