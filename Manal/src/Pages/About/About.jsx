import { COMPANY_INFO, STATS } from '../../config/constants';
import { FaAward, FaUsers, FaBook, FaChartLine } from 'react-icons/fa';
import "./About.css";
import { Link } from 'react-router-dom';

export default function About() {
  // const achievements = [
  //   { icon: FaUsers, number: '5000+', label: 'Students Trained' },
  //   { icon: FaBook, number: '50+', label: 'Courses Offered' },
  //   { icon: FaChartLine, number: '95%', label: 'Job Placement' },
  //   { icon: FaAward, number: '4.9/5', label: 'Average Rating' }
  // ]

  return (
    <main className="about-page">

      <section className="about-page-header"> 
        {/* <div className="container"> */}
          <h1>About Manal IT</h1>
          <p>Empowering the next generation of tech professionals</p>
        {/* </div> */}
      </section>

      <section className="page-content">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                {COMPANY_INFO.name} is a leading educational institute and IT training center founded in {COMPANY_INFO.year_founded}. 
                We are dedicated to providing world-class, industry-relevant training to students, freshers, and aspiring developers.
              </p>
              <p>
                With a team of {COMPANY_INFO.instructorCount} experienced instructors from top tech companies, 
                we have successfully trained over {COMPANY_INFO.studentCount} students and placed {STATS[2].number} of them in 
                leading organizations worldwide.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">{STATS[0].number}</div>
                <div className="stat-label">{STATS[0].label}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{STATS[1].number}</div>
                <div className="stat-label">{STATS[1].label}</div>
              </div>
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To empower students and professionals with industry-relevant technology skills, practical experience, 
                and career guidance that transforms their lives and accelerates their path to success in the tech industry.
              </p>
              <p>
                We believe in a learn-by-doing approach, combining theoretical knowledge with hands-on projects, 
                mentorship, and real-world experience to ensure our graduates are job-ready from day one.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">{STATS[2].number}</div>
                <div className="stat-label">{STATS[2].label}</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">{STATS[3].number}</div>
                <div className="stat-label">{STATS[3].label}</div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="about-text">
              <h2>Our Vision</h2>
              <p>
                To be the most trusted and innovative IT training institute, recognized globally for producing 
                world-class tech professionals who drive digital transformation and innovation.
              </p>
              <p>
                We aim to bridge the gap between academic learning and industry requirements, ensuring our graduates 
                are not just skilled but also confident, adaptable, and ready to lead in the rapidly evolving tech landscape.
              </p>
            </div>
            <div className="about-text">
              <h2>Why Choose Us?</h2>
              <ul className="about-list">
                <li>✓ Expert instructors with 10+ years of industry experience</li>
                <li>✓ Project-based learning with real-world applications</li>
                <li>✓ 95% job placement rate with leading companies</li>
                <li>✓ Flexible learning options (Live & Self-paced)</li>
                <li>✓ Industry-recognized certificates</li>
                <li>✓ Lifetime community support and resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students who have transformed their careers with {COMPANY_INFO.name}</p>
          <Link to="/courses">
            <button className="btn-primary-large">Explore Our Courses</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
