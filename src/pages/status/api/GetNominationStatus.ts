import axiosInstance from "../../../configs/axiosConfigs";

const fetchNominationStatus = async () => {
  try {
    const response = await axiosInstance.get("nomination/view-nomination?me=true");
    return response.data.nominations;
  } catch (error) {
    console.error("Error fetching nomination status:", error);
    return [];
  }
};

export default fetchNominationStatus;

