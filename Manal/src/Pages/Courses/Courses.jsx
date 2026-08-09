import { COURSES } from '../../config/constants'
import CourseCard from '../../components/CourseCard/CourseCard';
import { Link } from 'react-router-dom';
import "./Courses.css"; 

export default function Courses() {
  // const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'Full Stack', 'Data Science', 'Mobile']

  return (
    <main className="courses-page">

      <section className="page-hero">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Comprehensive training programs designed by industry experts</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          {/* <div className="filters">
            {categories.map((category) => (
              <button key={category} className="filter-btn">
                {category}
              </button>
            ))}
          </div> */}

          <div className="courses-grid">

            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
              
            ))}
          </div> 
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our advisors are here to help you choose the right course for your career goals.</p>
          <Link to='/contact'>
            <button className="btn-primary-large">Contact Our Advisors</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
