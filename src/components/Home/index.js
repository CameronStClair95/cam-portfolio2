import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import { portfolio } from '../../data/portfolioData'

// Import the separated components
import ProfileSection from '../ProfileSection/index'
import ProjectsCarousel from '../ProjectCarousel/index'
import DiverseExperiences from '../DiverseExperiences/index'
import AboutMe from '../AboutMeHome'
import ScrollingSkills from '../ScrollingSkills/index'
import Testimonials from '../Testimonials/index'
import SayHello from '../SayHello/index'
import Footer from '../Footer/index'

const Home = () => {
  const [currentProjectsIndex, setCurrentProjectsIndex] = useState(0)

  const handleNextProjects = () => {
    if (currentProjectsIndex < portfolio.length - 3) {
      setCurrentProjectsIndex(currentProjectsIndex + 3)
    }
  }

  const handlePreviousProjects = () => {
    if (currentProjectsIndex > 0) {
      setCurrentProjectsIndex(currentProjectsIndex - 3)
    }
  }

  const currentProjects = portfolio.slice(
    currentProjectsIndex,
    currentProjectsIndex + 3
  )

  return (
    <>
      <ProfileSection />

      <div className="projects-section">
        <h2>Projects</h2>
        <div className="divider"></div>

        <ProjectsCarousel
          projects={currentProjects}
          onNext={handleNextProjects}
          onPrev={handlePreviousProjects}
          currentIndex={currentProjectsIndex}
          maxIndex={portfolio.length}
        />

        <Link to="/portfolio" className="view-all-btn">
          View All Projects
        </Link>
      </div>

      <DiverseExperiences />
      <AboutMe />
      <ScrollingSkills />
      <Testimonials />
      <SayHello />
      <Footer />

      <Loader type="pacman" />
    </>
  )
}

export default Home
