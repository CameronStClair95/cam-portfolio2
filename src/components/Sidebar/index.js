import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/HatchfulExport-All/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <h1 className="Nav-Bar-Text"> C . St Clair</h1>
    </Link>
    <nav className="Nav-bar2">
      <NavLink activeClassName="active" to="/" data-label="Home">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        activeClassName="active"
        className="about-link"
        to="/about"
        data-label="About"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        activeClassName="active"
        className="portfolio-link"
        to="/Portfolio"
        // data-label="Contact"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>

      <NavLink
        activeClassName="active"
        className="contact-link"
        to="/contact"
        data-label="Contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul className='social-links'>
    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cameron-aitcheson-labarr/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
    </li>
    <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/CameronStClair95">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
    </li>
</ul>
   </div>
)

export default Sidebar
