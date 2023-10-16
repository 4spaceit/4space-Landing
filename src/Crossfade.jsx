import React, { useState, useEffect } from 'react';

const containerStyle = {
  position: 'relative',
  height: '100vh', // Default height
  width: '100%',   // Default width
  overflow: 'hidden',
};

const backgroundBackgroundStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'black',
  height: '100%',
  width: '100%',
};

const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  opacity: 0,
  transition: 'opacity 3s',
};

const Crossfade = (props) => {
  const containerDimensions = {
    height: props.height || '100vh',
    width: props.width || '100%',
  };

  const backgroundImages = props.images || [
    'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1616450030149-26a8bc9dd54f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1616445598565-5327a63e85d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  ];

  const carouselLength = backgroundImages.length;

  const [currentCarouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((currentCarouselIndex) =>
        currentCarouselIndex + 1 >= carouselLength ? 0 : currentCarouselIndex + 1
      );
    }, props.interval || 3000);

    return () => clearInterval(interval);
  }, [currentCarouselIndex]);

  const carousel = backgroundImages.map((element, index) => (
    <img
      key={index}
      style={{
        ...backgroundStyle,
        opacity: currentCarouselIndex === index ? 1 : 0,
        transitionDelay: `${props.transition / 2000}s` || '3s',
      }}
      src={element}
      alt={`background-${index}`}
    />
  ));

  return (
    <div className='cross-over' style={{ ...containerStyle, height: containerDimensions.height, width: containerDimensions.width }}>
      <div style={backgroundBackgroundStyle}>{carousel}</div>
    </div>
  );
};

export default Crossfade;
