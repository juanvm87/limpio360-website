import services from '../data/services'

function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Services</h1>
        <p className="lead">
          We design custom cleaning plans for homes, offices, and commercial spaces.
        </p>
        <div className="grid">
          {services.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <article className="card">
            <h3>Post-Construction Cleaning</h3>
            <p>Removal of fine dust and debris, plus final detailing before handoff.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
