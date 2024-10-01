import React from 'react'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-center items-center'>
        <Navbar />
        <h1>Hero</h1>
      </div>
    </>
  )
}

export default Hero