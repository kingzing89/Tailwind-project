import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import './correct.css';
import Image1 from './Assets/profile-image1.png';
import person from "./Assets/Person-Guy.png";
import girl from "./Assets/image-girl.png";
import icon1 from './Assets/Blocks.png';
import icon2 from './Assets/Diamond.png';
import icon3 from './Assets/Xd.png';
import vue  from "./Assets/vue.png";
import python  from "./Assets/Python.png";
import logoreact  from "./Assets/React.png";

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsData = [
    {
      id: 1,
      name: 'Athena G',
      role: 'Product Designer',
      description: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications.',
      image: Image1,
      icons: [icon1, icon2, icon3],
    },
    {
      id: 2,
      name: 'Thomas Ed',
      role: 'Front-End Developer',
      description: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications.',
      image: person,
      icons: [vue, logoreact],
    },
    {
      id: 3,
      name: 'Jesse Showalter',
      role: 'Back-End Designer',
      description: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications.',
      image: girl,
      icons: [vue, python, logoreact],
    },
   
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative my-16 overflow-hidden">
      <div className="slider-container flex justify-center">
        <div className="slider-content flex items-center" >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`card ${currentIndex === index ? 'active' : currentIndex > index ? 'prev' : 'next'}`}
            >
              {/* Content for each slide goes here */}
              <div className='img-container'>
                <img src={card.image} alt={`Slide ${index + 1}`} />
              </div>
              <p className='Card-title'>{card.name}</p>
              <div className='Sub-title'>{card.role}</div>
              <div>
                <p className='card-paragraph'>{card.description}</p>
              </div>
              <div className='icon-container flex pr-8'>
                {card.icons.map((icon, iconIndex) => (
                  <img
                    key={iconIndex}
                    src={icon}
                    alt={`Icon ${iconIndex + 1}`}
                    className='mr-4'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center z-10 my-8">
        <div className="mx-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={goToPrevSlide}
          />
        </div>
        <div className="mx-4">
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: '#ffffff', cursor: 'pointer' }}
            onClick={goToNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
