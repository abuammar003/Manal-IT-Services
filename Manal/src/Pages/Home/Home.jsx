import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { COURSES, SERVICES, FEATURES, TESTIMONIALS, COMPANY_INFO} from '../../config/constants'
import CourseCard from '../../Components/CourseCard/CourseCard'
import TestimonialCard from '../../Components/TestimonialCard/TestimonialCard'
// import StatsSection from '../../components/StatesSection/StatsSection'
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection'
import Hero from '../../Components/Hero/Hero';
import "./Home.css";


export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const NextSlide = () => {
      setCurrentSlide((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    };

    const PrevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
      );
    };


    // For Auto Slide
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
        );
      }, 6000);
    
      return () => clearInterval(interval);
    }, []);



  return (
    <main className="home">
      {/* Hero Section */}
      <Hero />


      {/* Features Section */}
      <FeaturesSection features={FEATURES} />


      {/* Stats Section */}
      {/* <StatsSection stats={STATS} /> */}



      {/* Featured Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Popular Courses</h2>
            <p>Comprehensive training programs designed by industry experts</p>
          </div>
          <div className="courses-grid">
            {COURSES.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/courses" className="btn-secondary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header"> 
            <h2>Our Services</h2>
            <p>Comprehensive support to ensure your learning success</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon"> < service.icon /> </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-secondary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      

      {/* Testimonials Section  (Review Section) */}

      <section className="testimonials-section">
        <div className="container">

          <div className="section-header">
            <h2>Success Stories from Our Students</h2>
            <p>
              Hear from students who transformed their careers with Manal IT
            </p>
          </div>

          <div className="testimonials-slider">

            {/* Slider Viewport */}
            <div className="testimonial-viewport">

              {/* Slider Track */}
              <div
                className="testimonial-track"
                style={{
            transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
              
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    className="testimonial-slide"
                    key={testimonial.id}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}

              </div>
              
            </div>
              
            {/* Previous Button */}
            <button
              className="slider-btn slider-prev"
              onClick={PrevSlide}
              aria-label="Previous testimonial"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              className="slider-btn slider-next"
              onClick={NextSlide}
              aria-label="Next testimonial"
            >
              ❯
            </button>

          </div>

          {/* Dots */}
          {/* <div className="slider-dots">

            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`slider-dot ${
                  currentSlide === index ? 'active' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

          </div> */}

        </div>
      </section>


      {/* Enrollment CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Career?</h2>
          <p>Join {COMPANY_INFO.studentCount} students who have already started their journey with {COMPANY_INFO.name}.</p>
          <Link to="/contact">
            <button className='btn-primary-large'>Enroll Today </button>
          </Link>
        </div>
      </section>

     
       
    </main>
  )
}

