import React from 'react'
import './index.scss'
import ProjectCard from '../ProjectCard/index'
import CarouselButton from '../CarouselNavigationButton/index'

const ProjectsCarousel = ({
  projects,
  onNext,
  onPrev,
  currentIndex,
  maxIndex,
}) => (
  <div className="project-carousel">
    <CarouselButton
      direction="prev"
      onClick={onPrev}
      show={currentIndex > 0}
      aria-hidden={!(currentIndex > 0)}
      className={currentIndex > 0 ? '' : 'hidden'}
    />
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
    <CarouselButton
      direction="next"
      onClick={onNext}
      show={currentIndex < maxIndex - 3}
      aria-hidden={!(currentIndex < maxIndex - 3)}
      className={currentIndex < maxIndex - 3 ? '' : 'hidden'}
    />
  </div>
)

export default ProjectsCarousel
