import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const ProjectCard = ({ project }) => (
  <Link to={`/portfolio`} className="project-card-link">
    <div className="project-card">
      <img src={project.img} alt={project.name} className="project-image" />
      <h3 className="project-name">{project.name}</h3>
    </div>
  </Link>
)

// to={`/projects/${project.id}`}

export default ProjectCard
