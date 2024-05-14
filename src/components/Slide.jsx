import React, { useState } from 'react';
import './Slide.scss';

const Slide = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slide-container">
      {slides && slides.length > 0 && ( 
        <>
          <button className="prev-button" onClick={prevSlide}><img src="/src/utils/image/flecharight.png" alt="" /></button>
          <img className="slide-image" src={slides[index].image} alt={`Slide ${index + 1}`} />
          <div className="image-caption">{slides[index].text}</div>
          <button className="next-button" onClick={nextSlide}><img src="/src/utils/image/flechaleft.png" alt="" /></button>
        </>
      )}
    </div>
  );
};

export default Slide;








  
 
  