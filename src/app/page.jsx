'use client'
import Image from 'next/image'
import React from 'react'

export default function HomePage() {
  return (
    <section>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            alt="Description of image 1" 
            className="w-full"
            width={800} // Adjust width and height as needed
            height={600} 
            priority // Set priority for first image
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle" aria-label="Previous slide">❮</a>
            <a href="#slide2" className="btn btn-circle" aria-label="Next slide">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            alt="Description of image 2"
            className="w-full"
            width={800}
            height={600}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle" aria-label="Previous slide">❮</a>
            <a href="#slide3" className="btn btn-circle" aria-label="Next slide">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            alt="Description of image 3"
            className="w-full"
            width={800}
            height={600}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle" aria-label="Previous slide">❮</a>
            <a href="#slide4" className="btn btn-circle" aria-label="Next slide">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            alt="Description of image 4"
            className="w-full"
            width={800}
            height={600}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle" aria-label="Previous slide">❮</a>
            <a href="#slide1" className="btn btn-circle" aria-label="Next slide">❯</a>
          </div>
        </div>
      </div>
    </section>
  )
}
