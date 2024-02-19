import axiosInstance from "../../../configs/axiosConfigs";

export const GetProgramsThisMonth = async () => {
  try {
    const response = await axiosInstance.get("/programs-this-month");
    console.log("Data received successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
};
