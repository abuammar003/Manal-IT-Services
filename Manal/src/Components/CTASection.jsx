export default function CTASection({ title, subtitle, buttonText, buttonAction }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button className="btn-primary-large" onClick={buttonAction}>
          {buttonText}
        </button>
      </div>
    </section>
  )
}
