import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // We'll need this to use FontAwesome icons in React.
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-container">
      <div className="divider"></div>
      <Link className="footer-logo" to="/">
        <span className="initials">C.S.C</span>
      </Link>
      <p className="copyright-text">© Cameron St Clair {currentYear}</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/cameron-aitcheson-labarr/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/CameronStClair95"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default Footer
