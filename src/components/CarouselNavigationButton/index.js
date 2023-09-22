import React from 'react'
import './index.scss'

const CarouselButton = ({ direction, onClick, show }) => {
  if (!show) return null
  const classNames =
    direction === 'prev' ? 'carousel-prev-btn' : 'carousel-next-btn'
  return (
    <button className={classNames} onClick={onClick}>
      {direction === 'prev' ? '-' : '+'}
    </button>
  )
}

export default CarouselButton
