import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/HatchfulExport-All/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  console.log('Sidebar component initialized with showNav:', showNav) // Initial log

  const handleNavToggle = (newState) => {
    console.log(`Setting showNav to ${newState}`) // Log before state change
    setShowNav(newState)
  }
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <h1 className="Nav-Bar-Text"> C . St Clair</h1>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          activeclassname="active"
          to="/"
          data-label="Home"
          onClick={() => handleNavToggle(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          data-label="About"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          data-label="Portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          data-label="Contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/cameron-aitcheson-labarr/"
          data-label="LinkedIn"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/CameronStClair95"
          data-label="GitHub"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#e85a4f"
          size="3x"
          className={showNav ? 'close-icon' : 'close-icon hidden'}
        />
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#e85a4f"
        size="3x"
        className={showNav ? 'hamburger-icon hidden' : 'hamburger-icon'}
      />
    </div>
  )
}

export default Sidebar
