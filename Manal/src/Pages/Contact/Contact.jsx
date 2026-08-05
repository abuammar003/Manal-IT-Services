import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { COMPANY_INFO } from '../../config/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We're here to help!</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>Have questions? Our friendly team would love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaClock className="contact-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92-XXXX-XXXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to receive a response?</h3>
              <p>We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</p>
            </div>
            <div className="faq-item">
              <h3>Can I schedule a free consultation?</h3>
              <p>Yes! We offer free 30-minute consultations. Fill out the contact form and mention this in your message.</p>
            </div>
            <div className="faq-item">
              <h3>What courses are available?</h3>
              <p>We offer 50+ courses covering web development, mobile apps, data science, and more. Visit our Courses page to explore.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer corporate training?</h3>
              <p>Yes! We provide customized training programs for corporate teams. Contact us to discuss your requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

