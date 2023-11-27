import React, { useState } from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { Typography } from '@mui/material';

const carouselItems = [
  {
    image: 'image1.jpg',
    text: '첫 번째 이미지 설명',
  },
  {
    image: 'image2.jpg',
    text: '두 번째 이미지 설명',
  },
  {
    image: 'image3.jpg',
    text: '세 번째 이미지 설명',
  },
  // ... 추가 이미지 및 텍스트
];

function CustomCarousel() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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

  return (
    <Carousel
      autoPlay
      indicators
      timeout={5000}
      cycleNavigation
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      activeStep={activeStep}
      onChange={(step) => handleStepChange(step)}
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
