import React, { useState } from 'react'
import './index.scss'

function Testimonials() {
  const testimonials = [
    {
      text: ' "I hired Cameron to do some additional design work for my Charity. He was creative and efficient in bringing my ideas to fruition. Thanks Cameron" -',
      name: ' Manu Sun ',
      position: 'Chair of Alala',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  function nextTestimonial() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  function prevTestimonial() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="testimonial-container">
      <h2>What Clients Say</h2>
      <div className="divider"></div>
      <div className="testimonial-content">
        <button onClick={prevTestimonial} className="nav-button">
          {'<'}
        </button>
        <p>
          {currentTestimonial.text}
          <span className="testimonial-name">{currentTestimonial.name}</span> -
          <span className="testimonial-position">
            {currentTestimonial.position}
          </span>
        </p>
        <button onClick={nextTestimonial} className="nav-button">
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Testimonials
