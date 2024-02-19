import  { useEffect, useState } from "react";
import AttendenceBar from "./AttendenceBar";
import { AttendanceData } from "./types";
import fetchAttendanceData from "../api/GetAttendenceData";

const AttendanceBarHandler = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);

  const GetAttendenceData = async () => {
    const response = await fetchAttendanceData();
    const data = response.map((item: { [x: string]: string; present_count: string; absent_count: string; }) => ({
      present: item.present_count,
      absent: item.absent_count,
      title: item['UserTraining.TrainingProgram.title']
    }));
    setAttendanceData(data);
  };
 
  useEffect(() => {
    GetAttendenceData();
  }, []);

  return <AttendenceBar attendanceData={attendanceData} />;
};

export default AttendanceBarHandler;
