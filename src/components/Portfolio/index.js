import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { portfolio } from '../../data/portfolioData'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div className="portfolio-img-box" key={idx}>
            <img src={port.img} className="portfolio-Image" alt={port.name} />
            <div className="content">
              <h3 className="name">{port.name}</h3>
              <p className="description">{port.description}</p>{' '}
              
              <button className="btn" onClick={() => window.open(port.url)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            idx={15}
            strArray={'Portfolio'.split('')}
          />
        </h1>
        <p className="page-description">Web Development Projects</p>
        <br />
        <div> {renderPortfolio(portfolio)} </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
