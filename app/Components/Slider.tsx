import React from 'react';

const MarqueeSlider = () => {
  return (
    <div className="overflow-hidden w-full h-[10vh]">
      <div className="flex flex-row justify-center items-center w-full">
        <h1 className="text-center">Web Development</h1>
        <h1 className="text-center">Web Development</h1>
        <h1 className="text-center">Web Development</h1>
        <h1 className="text-center">Web Development</h1>
        <h1 className="text-center">Web Development</h1>
      </div>
    </div>
  );
};

export default MarqueeSlider;
