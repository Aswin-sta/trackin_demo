import axiosInstance from "../../../configs/axiosConfigs";

const fetchNominations = async (
  status: "Pending" | "Accepted" | "Rejected"
) => {
  try {
    const response = await axiosInstance.get(
      `nomination/view-nomination?status=${status}`
    );
    return response.data.nominations;
  } catch (error) {
    console.error("Error fetching pending nominations:", error);
    return [];
  }
};

export default fetchNominations;
