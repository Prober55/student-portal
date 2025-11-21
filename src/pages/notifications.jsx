import "./notifications.css";

export default function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>

      <ul className="notif-list">
        <li>
          <span className="notif-date">Jan 10, 2025</span>
          Assignment 5 deadline extended.
        </li>

        <li>
          <span className="notif-date">Jan 08, 2025</span>
          Timetable updated for CS101 lab sessions.
        </li>

        <li>
          <span className="notif-date">Jan 05, 2025</span>
          Semester exam forms available online.
        </li>
      </ul>
    </div>
  );
}
