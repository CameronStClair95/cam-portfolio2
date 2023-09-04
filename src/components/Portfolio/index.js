import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Modal from 'react-modal'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { portfolio } from '../../data/portfolioData'

Modal.setAppElement('#root')

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleViewClick = (project) => {
    setCurrentProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentProject(null)
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <article className="portfolio-img-box" key={idx}>
            <div className="portfolio-card-front">
              <img src={port.img} className="portfolio-Image" alt={port.name} />
            </div>
            <div className="portfolio-card-back">
              <h3 className="name">{port.name}</h3>
              <p className="description">{port.description}</p>
              <button className="btn" onClick={() => handleViewClick(port)}>
                View
              </button>
            </div>
          </article>
        ))}
      </div>
    )
  }

  return (
    <main className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          idx={15}
          strArray={'Portfolio'.split('')}
        />
      </h1>
      <h2 className="page-description">Web Development Projects</h2>
      <section>{renderPortfolio(portfolio)}</section>
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
            <button onClick={() => window.open(currentProject.url)}>
              View Project
            </button>
            {currentProject.github && (
              <button onClick={() => window.open(currentProject.github)}>
                View on GitHub
              </button>
            )}
          </>
        )}
      </Modal>
      <Loader type="pacman" />
    </main>
  )
}

export default Portfolio
