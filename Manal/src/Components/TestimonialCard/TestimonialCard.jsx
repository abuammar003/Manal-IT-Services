export default function TestimonialCard({ testimonial }) {
  
  const stars = Array(testimonial.rating).fill('⭐').join('')
  
  return (
    <div className="testimonial-card">
 
      <div className="testimonial-header">
        <div className="avatar">{testimonial.avatar}</div>
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="role">{testimonial.role}</p>
          <p className="company">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="stars">{stars}</div>
      <p className="testimonial-text">"{testimonial.text}"</p>
    </div>
  )
}
