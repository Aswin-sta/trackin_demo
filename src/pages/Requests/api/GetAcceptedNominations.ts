import axiosInstance from "../../../configs/axiosConfigs";

const fetchAcceptedNominations = async () => {
  try {
    const response = await axiosInstance.get("nomination/view-nomination?status=Accepted");
    return response.data.nominations;
  } catch (error) {
    console.error("Error fetching accepted nominations:", error);
    return [];
  }
};

export default fetchAcceptedNominations;