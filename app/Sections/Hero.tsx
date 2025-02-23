"use client"

import React from 'react';
import { Navbar } from '../Components';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="w-full h-max bg-primary text-secondary relative overflow-hidden">
        <Navbar />
        <div className="z-10 relative xl:pl-40 h-max xl:h-screen 2xl:h-screen 3xl:h-screen">
          <div className="hero flex flex-col xl:flex-row justify-between">
            <div className="content xl:mt-40 w-full">
              <div className="top flex flex-col items-center w-full xl:items-start xl:-space-y-48">
                <p className='absolute -top-4 xl:-top-8 xl:text-4xl'>This is</p>
                <h1 className='font-humaneBold text-[12rem] sm:text-[14rem] md:text-[16rem] xl:text-[34rem] 2xl:text-[28rem] 3xl:text-[28rem] leading-none'>KARTAVYA</h1>
                <h1 className='font-humaneBold text-[12rem] sm:text-[14rem] md:text-[16rem] xl:text-[38rem] leading-none text-primary' style={{WebkitTextStroke: 'min(10px, 24px) white', textAlign: 'center'}}>JOSHI</h1>
              </div>
              <div className="relative xl:hidden w-full h-[250px] sm:h-[350px] md:h-[400px] px-4 -mt-8">
                <Image src="/KbFull.png" alt='keyboard' fill className="object-contain" />
              </div>
              <div className="data xl:mt-8 xl:absolute xl:top-[65%] xl:left-0 2xl:left-[60%] 2xl:top-[55%] 3xl:left-[60%] 3xl:top-[55%] flex flex-col xl:flex-row items-center gap-12">
                <p className='w-[85%] text-center xl:w-[80%] mt-8 xl:mt-0 text-2xl xl:text-3xl'>Hi, I am India Based Web Developer and Designer who help brands and freelancers to grow their dreams and stand them out than other companies </p>
              </div>
            </div>
            <div className="hidden xl:block xl:absolute xl:top-0 xl:right-[-400px] xl:w-[1300px] xl:h-[540px]">
              <Image src="/KbFull.png" alt='keyboard' fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
