import React, { useState, useEffect, useRef } from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import useTheme from "@mui/material/styles/useTheme";
import "./App.css";

const Ads = ({ slides }) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    slideRef.current = touchDown;
  };

  const handleTouchMove = (e) => {
    const touchDown = slideRef.current;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      // swiped left
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    } else if (diff < -5) {
      // swiped right
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }

    slideRef.current = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="carousel"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
