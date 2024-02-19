import { useParams } from "react-router-dom";
import MarkAttendanceForm from "./MarkAttendanceForm";

const MarkAttendancePage = () => {
  const { id } = useParams<{ id: string }>();
  // const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <MarkAttendanceForm trainingProgramId={parseInt(id as string)} />
    </>
  );
};

export default MarkAttendancePage;
