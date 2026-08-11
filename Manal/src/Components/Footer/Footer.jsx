import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt , FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { RiGraduationCapFill } from "react-icons/ri"; 
import { COMPANY_INFO } from '../../config/constants';
import "./Footer.css";

export default function Footer() { 
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/company/manal-it-services/' },
    { icon: FaInstagram, url: 'https://www.instagram.com/manalitservices/' },
    { icon: FaTwitter, url: 'https://x.com/manalitservices' },
    // { icon: FaFacebook, url: 'https://facebook.com' },
    // { icon: FaYoutube, url: 'https://youtube.com' }
  ];

  return (
    <footer className="footer">

      <div className="footer-container">
 
        <div className="footer-content">
          <div className="footer-company">
            <h1 className='logo'> <RiGraduationCapFill className='ftrLogo'/> Manal <span> IT </span> </h1>
            <p>{COMPANY_INFO.description}</p>

            <div className="social-links">
              {socialLinks.map((link, idx) => {
                // const Icon = link.icon
                return (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link-footer">
                    <link.icon />
                  </a>
                )
              })}
            </div>
          </div>

              {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

              {/* Courses */}
          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li><Link to="/courses">Web Development</Link></li>
              <li><Link to="/courses">React.js Mastery</Link></li>
              <li><Link to="/courses">Node.js & Express.js</Link></li>
              <li><Link to="/courses">Full Stack Development</Link></li>
              <li><Link to="/courses">Dimploma in DevOps Basics</Link></li>
              <li><Link to="/courses">Graphic & Animation</Link></li>
              <li><Link to="/courses">Wordpress & Drupal</Link></li>
              <li><Link to="/courses">Other Courses</Link></li>
            </ul>
          </div>

              {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p> <FaEnvelope className='icon'/> Email: {COMPANY_INFO.email}</p>
            <p> <FaPhoneAlt className='icon' /> Phone: {COMPANY_INFO.phone}</p>
            <p> <FaMapMarkerAlt className='icon location-icon'/> Address: {COMPANY_INFO.address}</p>
            {/* <p>🏢 Founded: {COMPANY_INFO.year_founded}</p> */}
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

