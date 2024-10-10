import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='h-[135vh] w-full flex flex-col justify-center items-center bg-[--secondary] text-[--primary]'>
      <div className="corner relative w-full h-[5vh] flex flex-row justify-between">
        <Image className='absolute top-0 left-0' src="/corner.svg" alt='corner' width={96} height={120} />
        <Image className='absolute top-0 right-0 transform rotate-90' src="/corner.svg" alt='corner' width={96} height={120} />
      </div>
      <div className="title h-[50vh] w-full flex flex-row py-8 px-12">
        <div className="left w-1/3 h-full flex flex-col justify-end pb-20">
          <Image className='' src="/arrow.svg" alt='arrow' height={100} width={100} />
        </div>
        <div className="right w-2/3 h-full flex flex-col justify-center items-end gap-8 pr-20">
          <h1 className='text-[--primary] text-8xl font-bebas'>Developer,</h1>
          <h1 className='text-[--primary] text-8xl font-bebas'>Designer</h1>
        </div>
      </div>
      <div className="me h-[80vh] w-full flex flex-row py-8 px-12">
        <div className="image h-full w-2/5 flex flex-col justify-center">
          <Image className='rounded-lg' src="/kartavya.png" alt='kartavya' width={500} height={350} />
        </div>
        <div className="content h-full w-3/5 flex flex-col justify-center gap-8 text-left">
          <p className='text-2xl font-normal font-bebas'>( about ME )</p>
          <h2 className='text-7xl font-bebas'>Hi! i’m KARTAVYA JOSHI. I AM 20 YEARS OLD FRONT-END WEB DEVELOPER BASED IN INDIA</h2>
          <p className='text-3xl font-normal font-nato w-5/6'>Creating great web experiences is my primary focus. I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles.</p>
        </div>
      </div>
    </div>
  )
}

export default About