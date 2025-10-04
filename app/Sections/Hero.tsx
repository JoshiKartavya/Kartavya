"use client";

import React from 'react';
import { Navbar } from '../Components';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="w-full h-max bg-primary text-secondary relative overflow-hidden pb-8">
        <Navbar />
        <div className="z-10 relative xl:pl-40 h-max xl:h-screen 2xl:h-screen 3xl:h-screen">
          <div className="hero flex flex-col xl:flex-row justify-between">
            <div className="content xl:mt-40 w-full">
              <div className="top flex flex-col items-center w-full xl:items-start xl:-space-y-36">
                <p className='absolute -top-4 xl:-top-8 xl:text-3xl'>This is</p>
                <h1 className='font-humaneBold text-[12rem] sm:text-[14rem] md:text-[16rem] lg:text-[] xl:text-[16rem] 2xl:text-[24rem] leading-none'>KARTAVYA</h1>
                <h1 className='font-humaneBold text-[12rem] sm:text-[14rem] md:text-[16rem] lg:text-[] xl:text-[20rem] 2xl:text-[28rem] leading-none text-primary' style={{WebkitTextStroke: 'min(8px, 20px) white', textAlign: 'center'}}>JOSHI</h1>
              </div>
              <div className="relative xl:hidden w-full h-[250px] sm:h-[350px] md:h-[400px] px-4 -mt-8">
                <Image src="/KbFull.png" alt='keyboard' fill className="object-contain" />
              </div>
              <div className="data xl:mt-8 xl:absolute xl:top-[50%] xl:left-[16%] 2xl:left-[60%] 2xl:top-[55%] 3xl:left-[60%] 3xl:top-[55%] flex flex-col xl:flex-row items-center gap-12">
                <p className='w-[85%] text-center xl:w-[80%] mt-8 xl:mt-0 text-2xl xl:text-3xl'>Hi, I am Web <span className='text-contrast'>Developer</span> and <span className='text-contrast'>Designer</span> who helps brands and freelancers to grow their dreams and stand out </p>
              </div>
            </div>
            {/* Adjusting the image size for xl screens */}
            <div className="hidden xl:block xl:absolute xl:top-0 xl:right-[-300px] xl:w-[1000px] xl:h-[316px] 2xl:w-[950px] 2xl:h-[540px]">
              <Image src="/KbFull.png" alt='keyboard' fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
