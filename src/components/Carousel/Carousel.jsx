import React from 'react'
import './Carousel.Module.css'

export default function Carousel({children: slides}) {
  return (
    <div className='slideshow'>
        <div className='slide'>
            {slides}
        </div>
    </div>
  )
}
