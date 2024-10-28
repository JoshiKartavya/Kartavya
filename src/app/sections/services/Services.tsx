import React from 'react'

const Services = () => {
  return (
    <div className='h-screen xl:h-screen w-full flex flex-col justify-start items-center py-16 px-8 gap-16'>
      <div className='title'>
        <h1 className='text-6xl xl:text-9xl font-bebas font-semibold text-center'>My Services</h1>
      </div>
      <div className='services flex flex-col xl:flex-row justify-center items-center gap-8'>
        <div className="card1 w-full xl:w-1/4 h-[400px] flex flex-col justify-center items-center gap-4 py-8 px-4 rounded-lg shadow-md bg-[--secondary] text-[--primary] border-2 border-[--contrast] xl:hover:bg-[--contrast] xl:hover:text-[--secondary] transition-all duration-300 mb-8 xl:mb-0">
          <div className="img"></div>
          <div className="content flex flex-col justify-center items-center">
            <h1 className='text-5xl font-bebas font-semibold'>Web Development</h1>
            <p className='text-sm font-normal font-nato'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
        <div className="card2 w-full xl:w-1/4 h-[400px] flex flex-col justify-center items-center gap-4 py-8 px-4 rounded-lg shadow-md bg-[--secondary] text-[--primary] border-2 border-[--contrast] xl:hover:bg-[--contrast] xl:hover:text-[--secondary] transition-all duration-300 mb-8 xl:mb-0">
          <div className="img"></div>
          <div className="content flex flex-col justify-center items-center">
            <h1 className='text-5xl font-bebas font-semibold'>Web Design</h1>
            <p className='text-sm font-normal font-nato'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
        <div className="card3 w-full xl:w-1/4 h-[400px] flex flex-col justify-center items-center gap-4 py-8 px-4 rounded-lg shadow-md bg-[--secondary] text-[--primary] border-2 border-[--contrast] xl:hover:bg-[--contrast] xl:hover:text-[--secondary] transition-all duration-300">
          <div className="img"></div>
          <div className="content flex flex-col justify-center items-center">
            <h1 className='text-5xl font-bebas font-semibold'>SEO Optimization</h1>
            <p className='text-sm font-normal font-nato'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services