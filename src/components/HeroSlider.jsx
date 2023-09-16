import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';

const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carouselItem carouselItem1" interval={1000}>
                <Carousel.Caption className="carouselCaption">
                    <h1 className="animate__animated animate__fadeInDown">We create beautiful home interior design</h1>
                    <Link to="/interior" className="animate__animated animate__fadeInDown mt-4 d-inline-block text-decoration-none text-white bg-primary link">Learn More</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem carouselItem2" interval={500}>
                <Carousel.Caption className="carouselCaption">
                    <h1 className="animate__animated animate__fadeInDown">Luxury Interior design for your dream living</h1>
                    <Link to="/interior" className="animate__animated animate__fadeInDown mt-4 d-inline-block text-decoration-none text-white bg-primary link">Learn More</Link>              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem carouselItem3">
                <Carousel.Caption className="carouselCaption">
                    <h1 className="animate__animated animate__fadeInDown">Giving your home a modern and unique style</h1>
                    <Link to="/interior" className="animate__animated animate__fadeInDown mt-4 d-inline-block text-decoration-none text-white bg-primary link">Learn More</Link>                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroSlider;