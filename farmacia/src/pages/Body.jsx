import React, { useEffect, useState } from 'react';
import './Body.css';

function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Número total de slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Body-container">
      <div className="bodyCentral">
        <div className="carousel-container">
          <div
            className="carousel-slide"
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            <img src="/imagens/farmacia.PNG.png" alt="Slide 1" />
<img src="/imagens/farmacia.PNG.png" alt="Slide 2" />
<img src="/imagens/farmacia.PNG.png" alt="Slide 3" />
          </div>
          <div className="carousel-indicators">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => showSlide(index)}
                data-index={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
