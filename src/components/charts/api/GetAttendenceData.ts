import axiosInstance from "../../../configs/axiosConfigs";

const fetchAttendanceData = async () => {
  try {
    const response = await axiosInstance.get("dashboard/attendence-count");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    return [];
  }
};

export default fetchAttendanceData;