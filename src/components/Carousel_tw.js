import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

function Carousel() {
  const images = [
    { id: 1, url: 'https://via.placeholder.com/800x400' },
    { id: 2, url: 'https://via.placeholder.com/800x400' },
    { id: 3, url: 'https://via.placeholder.com/800x400' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((ps) => (ps - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          } absolute top-0 left-0 w-full h-full`}
        >
          <img
            src={image.url}
            alt={`Fashion ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <p className="font-bold text-lg">여름 신상품</p>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
        aria-label="arrow-left"
        onClick={prevSlide}
      >
        <BsArrowLeft size={30} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
        aria-label="arrow-right"
        onClick={nextSlide}
      >
        <BsArrowRight size={30} />
      </button>
      <div className="absolute bottom-4 right-4 text-white">
        <p className="text-sm">
          {currentSlide + 1}/{images.length}
        </p>
      </div>
    </div>
  );
}

export default Carousel;
