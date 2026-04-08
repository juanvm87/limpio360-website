function ContactPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>Contact</h1>
        <p>Schedule your service and get a quick quote.</p>
        <ul className="contact-list">
          <li>
            <strong>Phone:</strong> <a>+91 88264 57035</a>
          </li>
          <li>
            <strong>Email: </strong>
            <a href="mailto:limpio360@gmail.com">limpio360@gmail.com</a>
          </li>
          <li>
            <strong>City:</strong> Delhi
          </li>
        </ul>
        <a
          className="btn"
          href="https://wa.me/918826457035?text=Hello%20Limpio360,%20I%20would%20like%20a%20quote"
          target="_blank"
          rel="noreferrer"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  )
}

export default ContactPage
