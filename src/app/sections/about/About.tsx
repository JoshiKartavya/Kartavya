import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-start items-center bg-[--secondary] text-[--primary] py-8'>
      <div className="title w-full flex flex-row py-4 px-4 mb-8">
        <div className="left w-1/3 flex flex-col justify-end pb-4">
          <div className="arrow h-[50px] w-[50px] relative">
            <Image className='' src="/arrow.svg" alt='arrow' fill />
          </div>
        </div>
        <div className="right w-2/3 flex flex-col justify-center items-end gap-2 pr-0">
          <h1 className='text-[--primary] text-2xl lg:text-8xl xl:text-7xl font-bebas'>Developer,</h1>
          <h1 className='text-[--primary] text-2xl lg:text-8xl xl:text-7xl font-bebas'>Designer</h1>
        </div>
      </div>
      <div className="me w-full flex flex-col xl:flex-row py-4 px-6 gap-8">
        <div className="image w-full flex flex-col justify-center items-center">
          <Image className='rounded-lg' src="/me.jpg" alt='kartavya' width={300} height={210} />
        </div>
        <div className="content w-full flex flex-col justify-center gap-4 text-center xl:text-left mt-8 xl:mt-0">
          <p className='text-xl font-normal font-bebas'>( about ME )</p>
          <h2 className='text-2xl lg:text-7xl font-bebas'>Hi! I&apos;m KARTAVYA JOSHI. I AM 20 YEARS OLD FRONT-END WEB DEVELOPER BASED IN INDIA</h2>
          <p className='text-sm lg:text-2xl xl:text-2xl font-normal font-nato'>Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
