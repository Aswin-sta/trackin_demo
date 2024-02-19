import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../../../configs/axiosConfigs";
import { AttendanceBody } from "../../../components/attendance/types";

export const postAttendance = async (data: AttendanceBody[]): Promise<void> => {
  try {
    console.log("Sending attendance data:", data);
    const response: AxiosResponse = await axiosInstance.post(
      "/add-attendance",
      { data }
    );
    console.log("Attendance recorded:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error while sending data:", error as AxiosError);
  }
};
