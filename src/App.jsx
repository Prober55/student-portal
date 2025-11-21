import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import PortalLayout from "./layout/PortalLayout";
import CreateAccount from "./components/CreateAccount";
import ResetPassword from "./components/ResetPassword";

import Home from "./pages/home";
import Assignments from "./pages/assignments";
import Attendance from "./pages/attendance";
import Results from "./pages/results";
import Notifications from "./pages/notifications";
import Timetable from "./pages/timetable";
import Courses from "./pages/courses";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgot" element={<ResetPassword />} />
      <Route 
        path="/portal" 
        element={
          <ProtectedRoute>
            <PortalLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="results" element={<Results />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="timetable" element={<Timetable />} />

      </Route>
    </Routes>
  );
}
