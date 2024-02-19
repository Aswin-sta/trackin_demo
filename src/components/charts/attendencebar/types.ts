export interface AttendanceData {
  present: number;
  absent: number;
  title: string;
}
  
export type AttendanceDataProps = {
  attendanceData: AttendanceData[]
}