import "./attendance.css";

const attendance = [
  { id: 1, courseCode: 'UE24CS242A', percentage: 88 },
  { id: 2, courseCode: 'UE24CS243A', percentage: 90 },
  { id: 3, courseCode: 'UE24CS251A', percentage: 85 },
  { id: 4, courseCode: 'UE24CS252A', percentage: 92 },
  { id: 5, courseCode: 'UE24MA242A', percentage: 87 },
  { id: 6, courseCode: 'UZ24UZ221A', percentage: 89 },
];

export default function Attendance() {
  return (
    <div className="attendance-page">
      <h2>My Attendance</h2>

      <div className="attendance-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Attendance (%)</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((a) => (
              <tr key={a.id}>
                <td>{a.courseCode}</td>
                <td>{a.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
