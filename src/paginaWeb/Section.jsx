import React from 'react';
import './section.module.css';
import Tarjeta from './Tarjeta'; 
import ControlledCarousel from '../Carousel'; 

function Section() {
  const cardsData = [
    {
      title: "Explora Mojácar",
      description: "Recorre las encantadoras calles de Mojácar.",
      image: "https://media.traveler.es/photos/651c03fcb87115740832141c/16:9/w_1920,c_limit/portada.jpg" 
    },
    {
      title: "Descubre Granada",
      description: "La Alhambra, una de las maravillas del legado árabe en España.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg" 
    },
    {
      title: "Costa del Sol",
      description: "Relájate en las hermosas playas de la Costa del Sol.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Litoral_entre_Marbella_y_Fuengirola_-_50003391192.jpg" 
    }
  ];

  return (
    <section>
      <article>
        {cardsData.map((card, index) => (
          <Tarjeta 
            key={index} 
            title={card.title} 
            description={card.description} 
            image={card.image} 
          />
        ))}
      </article>
      <ControlledCarousel />
    </section>
  );
}

export default Section;
