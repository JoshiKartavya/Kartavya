"use client"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
// import Baffle from './Baffle'

const Navbar = () => {
  return (
    <>
      <div className="main bg-primary text-secondary
      px-8 py-10 sm:px-8 sm:py-10 md:px-20 md:py-16 lg:px-40 lg:pt-20 lg:pb-12 xl:px-40 xl:pt-20 xl:pb-12  
      flex flex-row justify-start sm:justify-start md:justify-start lg:justify-between xl:justify-between items-center">
        <div className="logo">
          <div className="img relative w-10 h-10 xl:w-20 xl:h-20">
            <Image src="./logo.svg" alt='Logo' fill />
          </div>
        </div>
        <div className="main hidden sm:hidden md:hidden lg:hidden xl:block">
        <div className="content h-full flex flex-row lg:gap-[30rem] xl:gap-[30rem]">
          {/* <div className="text flex flex-col justify-end text-4xl">
            <Baffle text='Enthusiast Coder &lt;/&gt;'  className='text-2xl sm:text-2xl xl:text-4xl font-light xl:font-normal font-lucidaOblique' />
          </div> */}
          <div className="links flex flex-col text-3xl font-lucidaBold ">
            <Link className=' font-sans text-secondary tracking-widest' href="#">Home</Link>
            <Link className='text-gray-500 tracking-widest hover:text-secondary' href="#Projects">Projects</Link>
            <Link className='text-gray-500 tracking-widest hover:text-secondary' href="#About">About</Link>
            <Link className='text-gray-500 tracking-widest hover:text-secondary' href="#Experties">Experties</Link>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
