export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-icon">{course.icon}</div>
      <h3>{course.title}</h3>
      <p className="course-category">{course.category}</p>
      <p className="course-description">{course.description}</p>
      
      <div className="course-meta">
        <span className="level">{course.level}</span>
        <span className="duration">⏱️ {course.duration}</span>
      </div>

      <ul className="highlights">
        {course.highlights.map((highlight, idx) => (
          <li key={idx}>✓ {highlight}</li>
        ))}
      </ul>

      <div className="course-footer">
        <div className="price">PKR {course.price}</div>
        <button className="btn-enroll">Enroll Now</button>
      </div>
    </div>
  )
}
