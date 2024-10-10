import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-full h-[12vh] flex flex-row justify-between items-center px-8'>
      <h1 className='nav-title font-bruno text-3xl'>KJ</h1>
      <div className="menu cursor-pointer">
        <Image src="menu.svg" alt='menu' width={60} height={50} />
      </div>
    </div>
  )
}

export default Navbar