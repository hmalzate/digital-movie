import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

const Hero = () => {
  const images = [
    '/banner/hero1-banner.jpg',
    '/banner/hero2-banner.jpg',
    '/banner/hero3-banner.jpg',
    '/banner/baby_boss.jpg',
    '/banner/avatar-banner.jpg',
    '/banner/banner.jpg',
    '/banner/avengers.jpg'
  ];

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      interval={3000} // 3 seconds
    >
      {images.map((image, index) => (
        <div key={index} className="hero-slide">
          <img src={image} alt={`Slide ${index + 1}`} className="hero-img" />
          <div className="hero-text">
            <h1>Welcome to Digital Movie Saga</h1>
            <p>Watch the best movies and TV shows.</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
