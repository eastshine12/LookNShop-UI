import React, { useState, useRef } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography } from '@mui/material';

const carouselItems = [
  {
    image: 'images/image1.jpg',
    text: '첫 번째 이미지 설명',
  },
  {
    image: 'images/image2.jpg',
    text: '두 번째 이미지 설명',
  },
  {
    image: 'images/image3.jpg',
    text: '세 번째 이미지 설명',
  },
  // ... 추가 이미지 및 텍스트
];

function CustomCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);

  const carouselRef = useRef();

  const handleImageClick = () => {
    // 이미지 클릭 시 수행할 작업 구현
    console.log(`이미지 클릭: ${activeStep + 1}`);
  };

  const handleImageKeyPress = (event) => {
    // 이미지에 대한 키보드 이벤트 처리
    if (event.key === 'Enter') {
      handleImageClick();
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    // 다른 슬라이드 변경 로직 추가
  };

  const handleMouseDown = (event) => {
    setDragStart(event.clientX);
    setDragging(true);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const delta = event.clientX - dragStart;
      if (delta > 50) {
        handleStepChange(activeStep - 1);
        setDragging(false);
      } else if (delta < -50) {
        handleStepChange(activeStep + 1);
        setDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };



  return (
    <Carousel
      ref={carouselRef}
      autoPlay
      indicators={false}
      animation='slide'
      fullHeightHover
      swipe
      interval={5000}
      duration={700}
      cycleNavigation
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      activeStep={activeStep}
      onChange={(step) => handleStepChange(step)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {carouselItems.map((item, index) => (
        <div
          key={item}
          role="button"
          tabIndex={0}
          onClick={handleImageClick}
          onKeyPress={handleImageKeyPress}
        >
          <img
            src={item.image}
            alt={`slide-${index}`}
            style={{ width: '100%', height: 'auto' }}
          />
          <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
            <Typography
              variant="h6"
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              {item.text}
            </Typography>
          </div>
          <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
            <Typography variant="body2" style={{ color: 'white' }}>
              {`${activeStep + 1}/${carouselItems.length}`}
            </Typography>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
