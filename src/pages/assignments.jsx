import { useState } from "react";
import "./assignments.css";

const assignments = [
  { id: 1, title: "Web Project", course: "UE24CS242A", due: "2025-10-28", status: "Pending" },
  { id: 2, title: "Data Structures Assignment", course: "UE24CS252A", due: "2025-10-20", status: "Submitted" }
];

export default function Assignments() {
  const [filter, setFilter] = useState("All");

  const filtered = assignments.filter(a =>
    filter === "All" ? true : a.status === filter
  );

  return (
    <div className="assignment-page">
      <h2>Assignments</h2>

      <div className="filter-section">
        <label>Filter by Status: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>Submitted</option>
        </select>
      </div>

      <div className="assignment-container">
        {filtered.map((a, i) => (
          <div key={a.id} className="assignment-item">
            <h4 className="assignment-title">{a.title}</h4>
            <p className="assignment-sub">Course: {a.course}</p>
            <p className="assignment-sub">Due: {a.due}</p>

            <p
              className="assignment-status"
              style={{
                color: a.status === "Pending" ? "#d9534f" : "#28a745"
              }}
            >
              Status: {a.status}
            </p>

            {i !== filtered.length - 1 && <hr className="assignment-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
}
