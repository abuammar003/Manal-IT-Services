import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { COMPANY_INFO } from '../../config/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com' },
    { icon: FaTwitter, url: 'https://twitter.com' },
    { icon: FaLinkedin, url: 'https://linkedin.com' },
    { icon: FaInstagram, url: 'https://instagram.com' },
    { icon: FaYoutube, url: 'https://youtube.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>{COMPANY_INFO.name}</h3>
            <p>{COMPANY_INFO.description}</p>
            <div className="social-links">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link-footer">
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li><Link to="/courses">Web Development</Link></li>
              <li><Link to="/courses">Mobile Apps</Link></li>
              <li><Link to="/courses">Data Science</Link></li>
              <li><Link to="/courses">Full Stack</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>📧 Email: {COMPANY_INFO.email}</p>
            <p>📱 Phone: {COMPANY_INFO.phone}</p>
            <p>📍 Address: {COMPANY_INFO.address}</p>
            <p>🏢 Founded: {COMPANY_INFO.year_founded}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>Empowering students and professionals to build successful careers in technology.</p>
        </div>
      </div>
    </footer>
  )
}

