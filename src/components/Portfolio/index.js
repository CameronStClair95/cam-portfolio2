import React, { useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Project from '../Projects/index';
import falloutQuizImg from '../../assets/images/fallout-quiz-app.png';
import globeHopperImg from '../../assets/images/globe-hopper-app.png';
import macArtsyImg from '../../assets/images/macartsy-app.png';


const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const projects = [
    {
      name: 'Fallout Game',
      img: falloutQuizImg,
      description: 'Designed and developed an interactive JavaScript quiz application, evaluating user responses, scoring answers, and determining eligibility for subsequent rounds.',
      url: 'https://cameronstclair95.github.io/Fallout-Game-Ironhack-Project-1/'
    },
    {
      name: 'Globe Hopper',
      img: globeHopperImg,
      description: 'Built an efficient travel management web app, Globe Hopper, using Node.js, Express, MongoDB, and EJS for users to manage trips and events, incorporated user authentication and route protection.',
      url: 'https://cameronstclair95.github.io/Fallout-Game-Ironhack-Project-1/'
    },
    {
      name: 'Macartsy',
      img: macArtsyImg,
      description: 'Launched Macartsy, a MERN stack platform connecting art enthusiasts, enabling discovery, sharing, and discussion of art within an inclusive community.',
      url: 'https://cameronstclair95.github.io/Fallout-Game-Ironhack-Project-1/'
    }
    
  ];

  return (
    <>
      <div className="container portfolio-page ">
        <h1 className="page-title">  
        <AnimatedLetters
        letterClass={letterClass}
        idx={15}
        strArray={'Portfolio'.split("")}
        />
        </h1>
        <p className="page-description">Web Development Projects</p>
        <br/>
        <div>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
