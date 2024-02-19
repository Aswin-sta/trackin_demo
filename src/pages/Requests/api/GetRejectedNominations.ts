import axiosInstance from "../../../configs/axiosConfigs";

const fetchRejectedNominations = async () => {
  try {
    const response = await axiosInstance.get("nomination/view-nomination?status=Rejected");
    return response.data.nominations;
  } catch (error) {
    console.error("Error fetching rejected nominations:", error);
    return [];
  }
};

export default fetchRejectedNominations;