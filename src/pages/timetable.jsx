import "./timetable.css";

const timetable = [
  { id: 1, courseCode: 'UE24CS242A', day: 'Monday',    time: '9:00 AM - 10:30 AM', location: 'Room 302' },
  { id: 2, courseCode: 'UE24CS243A', day: 'Tuesday',   time: '11:00 AM - 12:30 PM', location: 'Room 302' },
  { id: 3, courseCode: 'UE24CS251A', day: 'Wednesday', time: '1:00 PM - 2:30 PM', location: 'Room 302' },
  { id: 4, courseCode: 'UE24CS252A', day: 'Thursday',  time: '2:30 PM - 4:00 PM', location: 'Room 302' },
  { id: 5, courseCode: 'UE24MA242A', day: 'Friday',    time: '10:00 AM - 11:30 AM', location: 'Room 302' },
  { id: 6, courseCode: 'UZ24UZ221A', day: 'Friday',    time: '1:30 PM - 3:00 PM', location: 'Room 302' },
];

export default function Timetable() {
  return (
    <div>
      <h2>Timetable</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Day</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {timetable.map(entry => (
            <tr key={entry.id}>
              <td>{entry.courseCode}</td>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
              <td>{entry.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
