import React from 'react'
import Navbar from '../navbar/Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-start items-center bg-[--primary] text-[--secondary]'>
        <Navbar />
        <div className="hero w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] pt-[10vh] lg:pt-20 xl:pt-4">
          <h1 className='text-[6rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[20rem] text-center font-bebas capitlize font-black'>Kartavya joshi</h1>
          <div>
            <div className=" hidden sm:block md:block lg:block xl:block img absolute z-10 left-[54%] top-[50%] md:top-[45%] lg:top-[50%] xl:top-[35%]">
              <Image className='rounded-lg' src="/kartavya.png" alt='kartavya' width={350} height={350} />
            </div>
            <div className="content flex flex-row justify-between px-8 mt-12  lg:mt-18 xl:mt-8 items-center">
              <div className="left w-full xl:w-[35%] flex flex-col justify-start gap-2 lg:gap-8">
                <p className='text-sm md:text-xl lg:text-2xl capitalize text-left font-noto font-medium'>
                  i help brands and freelancers to grow their dreams and stand them out than other companies
                </p>
                <button className='bg-[--contrast] px-6 py-4 rounded-[300px] w-[200px] lg:w-[400px] mt-6 lg:mt-0'>
                  <h2 className=' capitalize text-2xl lg:text-5xl font-noto font-medium'>Book a call</h2>
                </button>
              </div>
              <div className="right hidden xl:block">
                <div className="round h-[200px] w-[200px] rounded-full border-2 border-[--contrast]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero