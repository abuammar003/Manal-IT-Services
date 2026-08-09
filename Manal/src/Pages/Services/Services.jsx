import { SERVICES } from '../../config/constants'
// import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Services.css";

export default function Services() {


  return (
    <main className="services-page">

      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive support to ensure your learning success</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">

          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.id} className="service-card-large">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      {/* <FaArrowRight className="feature-icon" /> */}
                       ✓ {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="btn-secondary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Choose a service that matches your learning goals and start your journey today.</p>
          <Link to='/contact'>
            <button className="btn-primary-large">Contact Us</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

