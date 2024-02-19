import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Programs from "../pages/Programs/Programs";
import MainLayout from "../components/layouts/MainLayout";
import ProgramFormPageHandler from "../components/trainingPrograms/addTrainingForms/addProgramForm/ProgramFormPageHandler";
import Calendar from "../pages/Calendar/Calendar";
import TrainingFeedbackCardHandler from "../components/feedback/trainingFeedback/TrainingFeedbackCardHandler";

import DashboardHandler from "../pages/Dashboard/DashboardHandler";
import ProgramRequestCardHandler from "../components/trainingPrograms/programRequest/ProgramRequestCardHandler";
import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";
import FeedbackViewerHandler from "../components/feedback/FeedbackViewer/FeedbackViewerHandler";
import FeedbackFormHandler from "../components/feedback/feedbackForm/FeedbackFormHandler";
import TrackStatusHandler from "../components/status/TrackStatusHandler";
import LDRequest from "../pages/Requests/L&DRequests";
import ManagerRequest from "../pages/Requests/ManagerRequest";
import TraineeFeedbackCardHandler from "../components/feedback/traineeFeedback/TraineeFeedbackCardHandler";
import EnrolledParticipantsPage from "../components/attendance/EnrolledParticipants";
import MarkAttendancePage from "../components/attendance/MarkAttendancePage";

const RoutesComponent = () => {
  const { authState } = useContext(AuthContext);
  const user_role = authState.userRole;
  return (
    <BrowserRouter>
      <Routes>
        {user_role === "L&D" && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardHandler />} />
            <Route path="/programs" element={<Programs />} />
            <Route
              path="/participants/:id"
              element={<EnrolledParticipantsPage />}
            />
            <Route
              path="/participants/attendance/:id"
              element={<MarkAttendancePage />}
            />
            <Route path="/addProgram" element={<ProgramFormPageHandler />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/feedback" element={<TrainingFeedbackCardHandler />} />
            <Route
              path="/feedback/training/:training_id"
              element={<TraineeFeedbackCardHandler />}
            />
            <Route path="/feedback/:id" element={<FeedbackViewerHandler />} />
            <Route path="/requests" element={<LDRequest />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
        {(user_role === "Manager" || user_role === "Employee") && (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProgramRequestCardHandler />} />
            <Route path="/requests" element={<ManagerRequest />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/status" element={<TrackStatusHandler />} />
            <Route
              path="/feedback/training/:id"
              element={<FeedbackFormHandler />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
