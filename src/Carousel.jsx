import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"25%"}}>
      <Carousel.Item>
        <img width="600px" height="460px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Alcazaba_de_Almer%C3%ADa.jpg/640px-Alcazaba_de_Almer%C3%ADa.jpg" alt="Alcazaba de Almería"/>
        <Carousel.Caption>
          <h3>Alcazaba de Almería</h3>
          <p>Descubre los misterios de la alcazaba</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" height="460px" src="http://www.ayuntamiento.mojacar.es/Servicios/Informacion/Informacion.nsf/4ED79C2DEA6801ECC1257F1E0043C48B/$file/fuente-publica.jpg" alt="Fuente Mojacar"/>
        <Carousel.Caption>
          <h3>Fuente de Mojácar</h3>
          <p>Prueba el agua de Mojácar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" height="460px" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Almeria_Cathedral_2023_-_Main_fa%C3%A7ade_panorama.jpg" alt="Catedral Almería" />
        <Carousel.Caption>
          <h3>Catedral de Almería</h3>
          <p>Contempla la arquitectura de la catedral de Almería.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;