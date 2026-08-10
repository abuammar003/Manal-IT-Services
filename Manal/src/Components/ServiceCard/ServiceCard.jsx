export default function ServiceCard({ service}) {
  const Icon = service.icon

  return (
    <div className="service-card">
      {service.icon && <div className="service-icon"><Icon /></div>}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}
 