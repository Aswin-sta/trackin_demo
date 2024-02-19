import axiosInstance from "../../../configs/axiosConfigs";

const fetchCompletedPending = async () => {
  try {
    const response = await axiosInstance.get("dashboard/completed-pending");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching completed pending data:", error);
    return [];
  }
};

export default fetchCompletedPending;