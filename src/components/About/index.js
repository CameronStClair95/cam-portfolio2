import React from 'react'
import './index.scss'
import cvFile from '../../assets/images/Cameron_Aitcheson_Labarr_CV_2023.pdf'
import ballPitImage from '../../assets/images/ball-pit.jpg'

// Import the separated components
import SayHello from '../SayHello/index'
import Testimonials from '../Testimonials'
import Footer from '../Footer/index'

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="divider"></div>

      <div className="content-wrapper">
        <div className="left-content">
          <>
            <p>
              I'm a Full-stack Developer with a fervent passion for UX/UI design
              and deep expertise in technologies like JavaScript (ES6), React,
              HTML5, and CSS3.
              <br />
              <br />
              Drawing from a diverse academic background in psychology,
              sociology, and criminology, coupled with practical experience from
              Ironhack UK, I've honed a unique approach to web development. By
              marrying an understanding of human behavior with digital
              innovation, I excel at creating user-centric solutions that
              bolster both emerging and established businesses' online
              footprints.
              <br />
              <br />
              As I venture further into TypeScript and Next.js, my dedication
              remains unwavering: merging technical acumen with design
              sensibilities to forge the perfect blend of form and function.
              With a foundation in project management and an unwavering
              commitment to inclusivity and diversity, I'm at the forefront of
              redefining the digital landscape.
            </p>
          </>

          <div className="buttons-container">
            <a
              href={cvFile}
              download="Cameron_Aitcheson_Labarr_CV_2023.pdf"
              className="cv-download-button"
            >
              Download my CV
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-id/"
              className="linkedin-button"
            >
              Take me to LinkedIn
            </a>
          </div>
        </div>

        <div className="right-content">
          <img src={ballPitImage} alt="Your portrait" />
        </div>
      </div>

      <SayHello />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default About
