import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "../styles/css/Carousel.scss";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {length > 1 ? (
        <div>
          <FaChevronLeft className="left-arrow" onClick={prevSlide} />
          <FaChevronRight className="right-arrow" onClick={nextSlide} />
        </div>
      ) : null}
      <img src={slides[current]} alt="apt" className="image" />
      <p className="count">
        {current + 1}/{length}
      </p>
    </section>
  );
};

export default Carousel;
