import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiJava, DiJavascript } from 'react-icons/di';
import AnimatedLetters from '../AnimatedLetters';
import profilePic from '/Users/cameronaitcheson-labarr/Desktop/Tech-Projects/cam-portfolio/src/assets/images/LinkedIn Profile Pic.jpeg';
import './index.scss';
import '../Photo/Index.scss';
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'C', 'a', 'm', 'e', 'r', 'o', 'n']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          St Clair
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <br />
        <h2> Frontend Developer/ Freelance Artist / Writer</h2>
        <br />
        <h2> Techstack</h2>
<div className="tech-stack">
  <FaNodeJs className="tech-icon"/> JavaScript
  <FaHtml5 className="tech-icon"/> HTML5
  <FaCss3 className="tech-icon"/> CSS3
  <FaReact className="tech-icon"/> ReactJS
  <DiJavascript className="tech-icon"/> ExpressJS
  <FaNodeJs className="tech-icon"/> NodeJS
  <FaGitAlt className="tech-icon"/> Git  
</div>

<h2> Currently Learning:</h2>
<div className="current-learning">
  <DiJava className="tech-icon"/> Java & TypeScript
</div>
        <br />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
