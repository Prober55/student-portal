import "./courses.css";

const courses = [
  { id: 1, code: 'UE24CS242A', name: 'Web Technologies', instructor: 'Prof. Alex', materials: 'https://example.com/webtech' },
  { id: 2, code: 'UE24CS243A', name: 'Automata Formal Languages and Logic', instructor: 'Dr. James', materials: 'https://example.com/automata' },
  { id: 3, code: 'UE24CS251A', name: 'Digital Design and Computer Organization', instructor: 'Prof. Kumar', materials: 'https://example.com/digitaldesign' },
  { id: 4, code: 'UE24CS252A', name: 'Data Structures and its Applications', instructor: 'Dr. Thomas', materials: 'https://example.com/datastructures' },
  { id: 5, code: 'UE24MA242A', name: 'Mathematics for Computer Science and Engineering', instructor: 'Prof. Toby', materials: 'https://example.com/mathcs' },
  { id: 6, code: 'UZ24UZ221A', name: 'CIE Essentials of Innovation & Entrepreneurship - Part 1', instructor: 'Dr. Antony', materials: 'https://example.com/cie' },
];

export default function Courses() {
  return (
    <div className="courses-container">
      <h2>My Courses</h2>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h4>{course.code} - {course.name}</h4>
            <p>Instructor: {course.instructor}</p>
            <a href={course.materials} target="_blank">Access Materials</a>
          </div>
        ))}
      </div>
    </div>
  );
}
