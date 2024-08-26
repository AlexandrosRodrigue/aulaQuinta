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
        <div className="text">
          <div className="dentro">

        <h1 className='escrito'><u>Novo Proprietário, Novos Cuidados: Visite Nossa Farmácia!</u></h1>
        <h3 className='escrito'>
Estamos animados em anunciar que nossa farmácia está sob nova direção! Com o novo proprietário, estamos mais comprometidos do que nunca em oferecer a você o melhor atendimento, produtos de alta qualidade e um serviço de saúde personalizado que você merece.

Por que visitar nossa farmácia?

Atendimento atencioso e qualificado
Variedade de medicamentos e produtos de bem-estar
Consultas farmacêuticas personalizadas
Ofertas e descontos exclusivos de inauguração
Estamos aqui para cuidar de você e da sua família. Venha nos visitar e confira as novidades! Estamos ansiosos para recebê-lo em nossa nova fase.</h3>
          </div>
        </div>
      <div className="bodyCentral">
        <div className="carousel-container">
          <div
            className="carousel-slide"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Aplica a transformação aqui
          >
            <div className="slide">
              <div className="voltaImg">
              <img src="../../imagens/dimen.jpg" alt="Slide 1" className='imgCarrossel' />
              </div>
            </div>
            <div className="slide">
              <div className="voltaImg">
              <img src="../../imagens/aten.jpg" alt="Slide 2" className='imgCarrossel' />
              </div>
            </div>
            <div className="slide">
              <div className="voltaImg">
              <img src="../../imagens/to.jpeg" alt="Slide 3" className='imgCarrossel' />
              </div>
            </div>
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
        <div className="sla">
          
        </div>
      </div>
    </div>
  );
}

export default Body;
