import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <img src={`${import.meta.env.BASE_URL}Limpio360Logo.png`} alt="limpio360" className="brand-logo" />
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
