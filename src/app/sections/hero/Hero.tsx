import React from 'react'
import Navbar from '../navbar/Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-start items-center bg-[--primary] text-[--secondary]'>
        <Navbar />
        <div className="hero w-full h-[80vh]">
          <h1 className='text-[21rem] font-bebas uppercase'>Kartavya joshi</h1>
          <div className="img absolute z-10 left-[54%] top-[40%]">
            <Image src="/kartavya.png" alt='kartavya' width={350} height={350} />
          </div>
          <div className="content flex flex-row justify-between px-8 mt-24 items-center">
            <div className="left w-[35%] flex flex-col justify-start gap-8">
              <p className='text-2xl capitalize text-left font-noto font-medium'>
                i help brands and freelancers to grow their dreams and stand them out than other companies
              </p>
              <button className='bg-[--contrast] px-6 py-4 rounded-[300px] w-[400px]'>
                <h2 className=' capitalize text-5xl font-noto font-medium'>Book a call</h2>
              </button>
            </div>
            <div className="right">
              <div className="round h-[200px] w-[200px] rounded-full border-2 border-[--contrast]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero