import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import AnimatedLetters from '../AnimatedLetters';
import profilePic from '../../assets/images/LinkedIn Profile Pic.jpeg';
import './index.scss';
import '../Photo/Index.scss';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const firstNameArray = [' ', 'C', 'a', 'm', 'e', 'r', 'o', 'n'];
  const lastNameArray = ['S', 't', ' ', 'C', 'l', 'a', 'i', 'r'];
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  console.log("Home component initialized"); // Initial log

  useEffect(() => {
    console.log("useEffect triggered for letterClass setup"); // Log when useEffect runs

    const timer = setTimeout(() => {
      console.log("Setting letterClass to 'text-animate-hover'"); // Log before state change
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      console.log("Cleaning up timer"); // Log for cleanup
      clearTimeout(timer);
    };
  }, []);

  console.log("Rendering Home component with letterClass:", letterClass); // Log during render

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
            <AnimatedLetters letterClass={letterClass} strArray={firstNameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <br />
          <h2>Frontend Developer/ Freelance Artist / Writer</h2>
          <br />
          <h2>Techstack</h2>
          <div className="tech-stack">
            <FaNodeJs className="tech-icon" /> JavaScript
            <FaHtml5 className="tech-icon" /> HTML5
            <FaCss3 className="tech-icon" /> CSS3
            <FaReact className="tech-icon" /> ReactJS
            <DiJavascript className="tech-icon" /> ExpressJS
            <FaNodeJs className="tech-icon" /> NodeJS
            <FaGitAlt className="tech-icon" /> Git
          </div>

          <h2>Currently Learning:</h2>
          <div className="current-learning">
            <p>TypeScript</p>
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
  );
};

export default Home;
