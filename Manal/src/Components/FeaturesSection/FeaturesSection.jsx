export default function FeaturesSection({ features }) {
  return (
    <section className="features-section">
      <div className="container">
        <h2>Why Choose Manal IT?</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon"><feature.icon /></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
