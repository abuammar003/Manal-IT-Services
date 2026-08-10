import {Link} from "react-router-dom";


export default function CourseCard({ course }) {
  // const Icon = course.icon
  // console.log(course.icon)

  console.log("Hello World")
  return (
    <div className="course-card">
      <div className="course-icon">  <course.icon /> </div> 
      <h3>{course.title}</h3>
      {/* <p className="course-category">{course.category}</p> */}
      <p className="course-description">{course.description}</p> 
      
      {/* <div className="course-meta">
        <span className="level">{course.level}</span>
        <span className="duration">⏱️ {course.duration}</span>
      </div> */}

      <ul className="highlights">
        {course.highlights.map((highlight, idx) => (
          <li key={idx}>✓ {highlight}</li>
        ))}
      </ul>

      <div className="course-footer">
        {/* <div className="price">INR {course.price}</div> */}
        <Link to='/contact'>
          <button className="btn-enroll">Enroll Now</button>
        </Link>
      </div>
    </div>
  )
}
