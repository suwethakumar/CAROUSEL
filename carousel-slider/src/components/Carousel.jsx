import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const Carousel = ({
  slides,
  autoPlay = true,
  autoPlayTime = 3000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const startAutoPlay = () => {
    slideInterval.current = setInterval(nextSlide, autoPlayTime);
  };

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
      return () => {
        clearInterval(slideInterval.current);
      };
    }
  }, [currentIndex, autoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button className="carousel-arrow carousel-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-arrow carousel-next" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}

      {showDots && (
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
};

export default Carousel;
