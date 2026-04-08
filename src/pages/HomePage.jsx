import { NavLink } from 'react-router-dom'
import services from '../data/services'

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="tag">Professional cleaning service</p>
          <h1>Spotless spaces for your home and business</h1>
          <p className="lead">
            At Limpio360, we combine punctuality, trust, and attention to detail so your space
            always feels welcoming.
          </p>
          <div className="hero-actions">
            <NavLink to="/contact" className="btn">
              Request a quote
            </NavLink>
            <NavLink to="/services" className="btn btn-secondary">
              View services
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our main services</h2>
          <div className="grid">
            {services.slice(0, 3).map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
