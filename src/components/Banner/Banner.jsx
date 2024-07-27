import React from 'react'
import './Banner.Module.css'
import Carousel from '../Carousel/Carousel'
import StoneColdGlare from '/Logos/WrestlerPhotos/StoneColdGlare.bmp'
import StoneColdBeer from '/Logos/WrestlerPhotos/StoneColdBeer.bmp'

const slides = [
  StoneColdGlare,
  StoneColdBeer
]


export default function Banner() {
  return (
    <div className='container'>
        <section>
            {/* <div>
                <p>Hello World</p>
            </div> */}
            {/* Slideshow Of Superstars */}
            {/* <div>
              <Carousel>
                {slides.map(s => (
                  <img src={s} alt="" width={1000} />
                ))}
              </Carousel>
            </div> */}
        </section>
    </div>
  )
}
