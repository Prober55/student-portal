import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./PortalLayout.css";

export default function PortalLayout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="portal-wrapper">
      <nav className="top-navbar">
        <div className="nav-left">
          <h2 className="nav-title">Student Portal</h2>
        </div>

        <div className="nav-links">
          <NavLink to="/portal/home">Dashboard</NavLink>
          <NavLink to="/portal/courses">My Courses</NavLink>
          <NavLink to="/portal/assignments">Assignments</NavLink>
          <NavLink to="/portal/timetable">Timetable</NavLink>
          <NavLink to="/portal/results">Results</NavLink>
          <NavLink to="/portal/attendance">My Attendance</NavLink>
          <NavLink to="/portal/notifications">Notifications</NavLink>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </nav>

      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}
