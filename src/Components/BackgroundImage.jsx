import React from 'react';
import HeroImg from '/assets/heroimg3.jpg';

const BackgroundImage = () => {
  return (
    <div>
      <div
  className="w-full h-screen mt-10 bg-cover bg-no-repeat bg-center absolute top-0 "
  style={{
    backgroundImage: `url(${HeroImg})`,
  }}
></div>

    </div>
  );
};

export default BackgroundImage;
