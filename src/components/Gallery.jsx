import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

const Gallery = ({ images }) => {
  return (
    <div className="galleryContainer">
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt="" className="galleryImage" priority />{' '}
            <p className="legend">{image.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Gallery
