import React from 'react';
import { Navbar } from '../Components';
import Image from 'next/image';
import BookCall from '../Components/BookCall';
// import Noise from '../Components/Animations/Noise/Noise';

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-primary text-secondary relative overflow-hidden">
        {/* <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Noise
            patternSize={300}
            patternScaleX={3}
            patternScaleY={3}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
        </div> */}
        <Navbar />
        <div className="z-10 relative xl:pl-40">
          <div className="hero flex flex-col xl:flex-row justify-between">
            <div className="content xl:mt-40 w-full">
              <div className="top flex flex-col items-center w-full xl:items-start xl:-space-y-48">
                <p className=' absolute -top-4 xl:-top-8 xl:text-4xl'>This is</p>
                <h1 className='font-humaneBold text-9xl xl:text-[34rem] leading-none'>KARTAVYA</h1>
                <h1 className='font-humaneBold text-9xl xl:text-[38rem] leading-none text-primary' style={{WebkitTextStroke: '24px white', textAlign: 'center'}}>JOSHI</h1>
              </div>
              <div className="data absolute top-[85%] left-0 xl:left-[35%] flex flex-col xl:flex-row items-center gap-12">
                <BookCall />
                <p className='w-full xl:w-[50%] mt-40 xl:mt-0  text-xl xl:text-3xl'>Hi, I am India Based Web Developer and Designer who help brands and freelancers to grow their dreams and stand them out than other companies </p>
              </div>
            </div>
            <div className="img absolute top-[200px] xl:top-0 xl:right-[-400px] w-[380px] h-[160px] xl:w-[1300px] xl:h-[540px]">
              <Image src="/KbFull.png" alt='keyboard' fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
