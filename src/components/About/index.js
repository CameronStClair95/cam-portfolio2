// React-related imports
import { useEffect, useState } from 'react'

// Component imports
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

// Style imports
import './index.scss'

// CV file import
import cvFile from '../../assets/images/Cameron_Aitcheson_Labarr_CV_2023.pdf'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [animationState, setAnimationState] = useState('text-animate')

  console.log('About component initialized') // Initial log

  useEffect(() => {
    console.log('useEffect triggered for animationState setup') // Log when useEffect runs

    const timer = setTimeout(() => {
      console.log("Setting animationState to 'text-animate-hover'") // Log before state change
      setAnimationState('text-animate-hover')
    }, 3000)

    return () => {
      console.log('Cleaning up timer') // Log for cleanup
      clearTimeout(timer)
    }
  }, [])

  const techIcons = [
    { icon: faNodeJs, color: '#DD0031' },
    { icon: faHtml5, color: '#F06529' },
    { icon: faCss3, color: '#28A4D9' },
    { icon: faReact, color: '#5ED4F4' },
    { icon: faJsSquare, color: '#EFD81D' },
    { icon: faGitAlt, color: '#EC4D28' },
  ]

  console.log('Rendering About component with animationState:', animationState) // Log during render

  return (
    <main className="container about-page">
      <section className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={animationState}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am an ambitious Frontend Developer pivoting into the world of web
          development, with a profound appreciation for the intricacies
          <br />
          and artistry inherent in web design. My aim is to craft impeccable and
          aesthetically pleasing interfaces that not only cater to the
          <br />
          user's desires but also elevate their online experience to new
          heights.
        </p>
        <br />
        <p>
          At the core, I am an ever-eager scholar, perpetually driven by the
          allure of the newest technological innovations and their potential
          applications in
          <br />
          addressing tangible challenges. This unwavering quest for
          understanding propels me forward, continually expanding my horizons
          <br />
          and refining my toolkit, with a particular emphasis lately on UX/UI
          and Product Management.
        </p>
        <br />
        <p>
          If one were to encapsulate my essence in a succinct statement - I
          stand as a fervent advocate for technology,
          <br />
          a devoted aficionado of melodies, a keen-eyed photographer, a spirited
          painter, and at heart, a truly curious person. My eclectic
          <br />
          range of passions ignites my imagination, providing a rich tapestry of
          perspectives that, I am confident, endows me with a distinct
          <br />
          edge in web design and the broader tech industry.
        </p>
        <a
          href={cvFile}
          download="Cameron_Aitcheson_Labarr_CV_2023.pdf"
          className="cv-download-button"
        >
          Download my CV
        </a>
      </section>

      <section className="stage-cube-cont">
        <div className="cubespinner">
          {techIcons.map((tech, idx) => (
            <div key={idx} className={`face${idx + 1}`}>
              <FontAwesomeIcon icon={tech.icon} color={tech.color} />
            </div>
          ))}
        </div>
      </section>

      <Loader type="pacman" />
    </main>
  )
}

export default About
