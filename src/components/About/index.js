import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a passionate UI/UX designer transitioning into front-end
          development with a keen interest in both the aesthetics and mechanics
          of web design. I strive to create seamless and visually appealing
          interfaces that not only meet the user's needs but also create a
          delightful user experience.
        </p>
        <br />
        <p>
          I'm a lifelong learner, driven by my curiosity about the latest trends
          in technology and how they can be used to solve real-world problems.
          This perpetual thirst for knowledge keeps me on my toes, pushing my
          boundaries, and consistently improving my technical skills.
        </p>
        <br />
        <p>
          To sum me up in a single sentence - I am a technology enthusiast, an
          ardent music lover, a passionate photographer, an expressive painter,
          and an artist. My diverse interests fuel my creativity, broadening my
          perspective, which I believe, translates into my unique approach to
          web design and development.
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}


export default About
