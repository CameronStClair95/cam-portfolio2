import React from 'react';
import './index.scss'

const Project = ({ project }) => (
  <div className="project-card">
    <div className="project-card__img-wrapper">
      <img src={project.img} alt={project.name} className="project-card__img"/>
    </div>
    <div className="project-card__content">
      <h2 className="project-card__title">{project.name}</h2>
      <p className="project-card__description">{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card__link">View Project</a>
    </div>
  </div>
);

export default Project;
