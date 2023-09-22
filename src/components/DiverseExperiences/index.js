import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import careerImage from '../../assets/images/career.png' // Assuming this is the path

const DiverseExperiences = () => {
  return (
    <div className="diverse-experiences-section">
      <h2>Diverse Experiences</h2>
      <div className="divider"></div>

      <div className="content-flex">
        <div className="text-section">
          <p>
            Traverse my unique journey from the arts and charity landscape into
            the vibrant world of tech, showcasing pivotal moments and invaluable
            lessons.
          </p>
          <Link to="/journey" className="journey-button">
            Click here to see my journey
          </Link>
        </div>
        <img src={careerImage} alt="Career Journey" className="career-image" />
      </div>
    </div>
  )
}

export default DiverseExperiences
