// AttendenceBarGraph.tsx
import { BarChart } from "@mui/x-charts/BarChart";
import Card from "@mui/material/Card";
import { AttendanceDataProps } from "./types";

const AttendenceBar = ({attendanceData}:AttendanceDataProps) => {
  if (!attendanceData || attendanceData.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      <Card variant="elevation" sx={{ width: '100%',pl:'3rem'}}>
        <BarChart
          width={425}
          height={224}
          series={[
            {
              data: attendanceData.map((item) => item.present),
              label: "Present",
              stack: "total",
              color: "#0A66C2",
            },
            { data: attendanceData.map((item) => item.absent),
              label: "Absent", 
              stack: "total", 
              color: "#9BC5EC" },
          ]}
          xAxis={[{ data: attendanceData.map((item) => item.title), scaleType: "band" }]}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 13,
              },
              itemMarkWidth:10,
              itemMarkHeight:10,
              markGap: 15,
              itemGap: 15
            },
          }}
          sx={{ width: "100%" }}
        />
      </Card>
    </>
  );
};

export default AttendenceBar;
