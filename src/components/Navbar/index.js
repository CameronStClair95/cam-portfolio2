import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <span className="initials">C.S.C</span>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          activeClassName="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="active"
          className="about-li k"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          About
        </NavLink>
        <NavLink
          activeClassName="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          Portfolio
        </NavLink>
        <NavLink
          activeClassName="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
