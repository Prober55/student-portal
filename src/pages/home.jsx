import "./home.css";

export default function Home() {
  const assignments = [
    { title: "Web Project", course: "UE24CS242A", due: "2025-10-28" },
  ];

  const courses = [
    "UE24CS242A - Web Technologies",
    "UE24CS243A - Automata Formal Languages and Logic",
    "UE24CS251A - Digital Design and Computer Organization",
    "UE24CS252A - Data Structures and its Applications",
    "UE24MA242A - Mathematics for Computer Science and Engineering",
    "UZ24UZ221A - CIE Essentials of Innovation & Entrepreneurship - Part 1"
  ];

  return (
    <div className="home-container">
      <h2>Welcome, Student!</h2>

      <div className="home-grid">
        <div className="home-card">
          <h3>Upcoming Assignments</h3>
          {assignments.map((a, i) => (
            <p key={i}>
              {a.title} - {a.course}
              <br />
              <span>Due: {a.due}</span>
            </p>
          ))}
        </div>

        <div className="home-card">
          <h3>Quick Links</h3>
          {courses.map((course, i) => (
            <p key={i}>
              <a
                href={`https://example.com/${course.split(" ")[0]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {course}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
