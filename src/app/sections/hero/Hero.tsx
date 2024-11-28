import React from 'react'
import Navbar from '../navbar/Navbar'
import Image from 'next/image'
import gsap from 'gsap'

const Hero = () => {
  gsap.to("#photo", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top", // the default values
      end: "bottom 50%",
      scrub: true
    }, 
  });
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-start items-center bg-[--primary] text-[--secondary]'>
        <Navbar />
        <div id='hero' className="hero w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] pt-[10vh] lg:pt-20 xl:pt-4">
          <h1 className='text-[6rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[24rem] text-center font-bebas capitalize font-black'>
            Kartavya Joshi
          </h1>
          <div>
            <div className="content flex flex-col items-center sm:flex-row justify-between px-8 mt-12 lg:mt-18 xl:mt-8 gap-6">
              {/* Left Content */}
              <div className="left w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                <p className='text-sm md:text-xl lg:text-2xl capitalize font-noto font-medium xl:w-[50%]'>
                  I help brands and freelancers to grow their dreams and stand them out than other companies
                </p>

                <button className='bg-[--primary] border-2 border-[--contrast] text-[--secondary] px-6 py-4 rounded-[300px] w-[200px] lg:w-[400px]'>
                  <h2 className='capitalize text-2xl lg:text-5xl font-noto font-medium'>Contact Me</h2>
                </button>
              </div>

              {/* Right Content for larger devices */}
              <div className="right hidden sm:block">
                <div id='right' className="img hidden xl:block absolute z-10 left-[54%] top-[50%] md:top-[45%] lg:top-[50%] xl:top-[35%]">
                  <Image id='photo' className='rounded-lg' src="/download.jpg" alt='kartavya' width={350} height={350} />
                </div>
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
