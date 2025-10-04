"use client"

import React from 'react'
import Image from 'next/image'

const About = () => {
  const getUpdatedAge = (birthYear: number, birthMonth: number, birthDay: number): number => {
    const today = new Date();
    const birthDate = new Date(today.getFullYear(), birthMonth - 1, birthDay);
  
    let age = today.getFullYear() - birthYear;
  
    // If today's date is before the birthday, subtract 1 from the age
    if (today < birthDate) {
      age -= 1;
    }
  
    return age;
  };
  const age = getUpdatedAge(2004, 12, 27);
  return (
    <div id='About' className='bg-secondary w-full h-max flex flex-col justify-center items-start gap-8 xl:gap-20 xl:py-12'>
      <div className="inner bg-primary text-secondary w-[90%] h-[40rem] sm:h-[40rem] md:h-[50rem] lg:h-[70rem] xl:h-[60rem] mt-12 xl:mt-0 2xl:mt-0 mx-auto relative xl:px-20 xl:py-10 flex flex-col justify-center items-center">
        <div className="svgs absolute top-4 sm:top-8 xl:top-12 left-4 sm:left-8 xl:left-12 z-20">
          <div className="bulbs relative w-[8rem] h-[3rem] sm:w-[10rem] sm:h-[3.5rem] xl:w-[20rem] xl:h-[7rem]">
            <Image 
              src="/bulbs.svg" 
              alt='bulbs' 
              fill
              priority
            />
          </div>
        </div>
        <div className="content flex flex-col gap-4 xl:gap-12 w-full xl:px-0 px-6 md:px-10 lg:px-12 xl:w-[60%] justify-center items-center">
          <h1 className='font-sans text-3xl sm:text-5xl lg:text-6xl xl:text-7xl'>Hi! I&apos;m <span className='font-bold'>Kartavya Joshi.</span> I am <br />{age} years old <span className='text-contrast'>front-end web <br /> developer</span> based in India</h1>
          <p className='font-lucidaBold text-lg sm:text-3xl xl:text-4xl text-secondary opacity-70'>Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.</p>
        </div>
      </div>
    </div>
  )
}

export default About
