import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="imagen1.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="imagen2.jpg" alt="Imagen 2" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Slider>
  );
}

export default Carousel;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}
