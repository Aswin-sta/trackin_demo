import axiosInstance from "../../../configs/axiosConfigs";

const fetchTotalParticipantsCount = async () => {
  try {
    const response = await axiosInstance.get("dashboard/participants-count");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching participants counts:", error);
    return [];
  }
};

export default fetchTotalParticipantsCount;

