import services from '../data/services'

const servicePricing = {
  'Residential Cleaning': {
    price: 'Starting from ₹1999*',
    note: 'Flexible plans available: weekly, biweekly, or one-time.',
  },
  'Commercial Cleaning': {
    price: 'Starting from ₹1999*',
    note: 'Custom pricing based on office size and requirements.',
  },
  'Post-Construction Cleaning': {
    price: 'Starting from ₹5/sq.ft*',
    note: 'Final pricing depends on dust level and detailing needed.',
  },
  'Deep Cleaning': {
    price: 'Starting from ₹999*',
    note: 'Includes kitchen, bathroom, and high-traffic areas.',
  },
  'Water-Tank Cleaning': {
    price: 'Starting from ₹999*',
    note: 'Safe and hygienic cleaning with proper sanitization.',
  },
}

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
              {servicePricing[item.title] && (
                <>
                  <p style={{ marginTop: '0.6rem', fontWeight: 700, color: '#0f172a' }}>
                    {servicePricing[item.title].price}
                  </p>
                  <p style={{ marginTop: '0.35rem' }}>{servicePricing[item.title].note}</p>
                </>
              )}
            </article>
          ))}
        </div>
        <p className="lead" style={{ marginTop: '1.2rem' }}>
          ⭐ Free inspection &amp; instant quote on{' '}
          <a
            href="https://wa.me/918826457035?text=Hello%20Limpio360,%20I%20would%20like%20a%20quote"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}

export default ServicesPage
