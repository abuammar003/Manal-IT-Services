export default function ServiceCard({ service }) {
  // const Icon = service.icon

  return (
    <div className="service-card">
      {service.icon && <div className="service-icon"> <service.icon /> </div>}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}
  