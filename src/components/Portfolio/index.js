import React, { useState } from 'react'
import Modal from 'react-modal'
import Masonry from 'react-masonry-css'
import './index.scss'
import { portfolio } from '../../data/portfolioData'

// Import the separated components
import SayHello from '../SayHello/index'
import Footer from '../Footer/index'
import Testimonials from '../Testimonials/index'

Modal.setAppElement('#root')

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)

  const handleViewClick = (project) => {
    setCurrentProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentProject(null)
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <main className="portfolio-container">
      <h1 className="title">My Portfolio</h1>
      <div className="divider"></div>
      <h2 className="subtitle">Web Development Projects</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="portfolio-grid"
        columnClassName="portfolio-grid_column"
      >
        {portfolio.map((port, idx) => (
          <div
            key={idx}
            className="portfolio-item"
            onClick={() => handleViewClick(port)}
          >
            <img src={port.img} alt={port.name} className="portfolio-image" />
          </div>
        ))}
      </Masonry>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
      >
        {currentProject && (
          <>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={currentProject.img} alt={currentProject.name} />
            <h3>{currentProject.name}</h3>
            <p>{currentProject.description}</p>
            <div className="buttons-container">
              <button
                className="project-button"
                onClick={() => window.open(currentProject.url)}
              >
                View Project
              </button>
              {currentProject.github && (
                <button
                  className="github-button"
                  onClick={() => window.open(currentProject.github)}
                >
                  View on GitHub
                </button>
              )}
            </div>
          </>
        )}
      </Modal>
      <SayHello />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Portfolio
