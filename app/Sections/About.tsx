import React from 'react'
import Baffle from '../Components/Baffle'
import Image from 'next/image'
import BookCall from '../Components/BookCall'

const About = () => {
  return (
    <div className='bg-secondary w-full h-max flex flex-col justify-center items-start gap-8 xl:gap-20 xl:py-12'>
      <div className="top">
        <h1 className="text-left pl-10 xl:pt-0 pt-4 xl:pl-32">
          <Baffle text='&#123; &#125; About me' className='text-2xl sm:text-2xl md:text-4xl xl:text-4xl font-medium  font-lucidaOblique' />
        </h1>
      </div>
      <div className="inner bg-primary text-secondary w-[90%] h-[40rem] sm:h-[40rem] md:h-[50rem] lg:h-[70rem] xl:h-[70rem] mx-auto relative xl:px-20 xl:py-10 flex flex-col justify-center items-center">
        <div className="svgs absolute top-4 sm:top-8 xl:top-12 left-4 sm:left-8 xl:left-12 z-20">
          <div className="bulbs relative w-[8rem] h-[3rem] sm:w-[10rem] sm:h-[3.5rem] xl:w-[20rem] xl:h-[7rem]">
            <Image src="/bulbs.svg" alt='bulbs' fill />
          </div>
        </div>
        <div className="content flex flex-col gap-4 xl:gap-12 w-full xl:px-0 px-6 md:px-10 lg:px-12 xl:w-[65%] justify-center items-start">
          <h1 className='font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-8xl '>Hi! i&apos;m <span className='font-bold'>Kartavya Joshi.</span> I am <br /> 20 years old <span className='text-contrast'>font-end web <br /> developer</span> based in India</h1>
          <p className='font-sans text-lg sm:text-3xl xl:text-5xl text-secondary opacity-70'>Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.</p>
          <BookCall />
        </div>
      </div>
    </div>
  )
}

export default About
