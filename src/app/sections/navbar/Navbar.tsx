"use client";

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu container

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.from('#menuBar', {
        opacity: 0,
        x: '100%'
      })
    }
    else{
      gsap.to('#menuBar', {
        opacity: 0,
        x: '-100%'
      })
    }
  }, [isMenuOpen]);

  const links = ["Home", "About Me", "Projects", "Testimonials"];

  return (
    <>
      <div className='navbar w-full h-[10vh] flex flex-row justify-between items-center px-2 lg:px-8 absolute z-20'>
        <h1 className='nav-title font-bruno text-xl sm:text-xl md:text-2xl lg:text-3xl'>KJ</h1>
        <div className="menu cursor-pointer relative w-[40px] h-[40px] lg:w-[60px]  lg:h-[50px]" onClick={toggleMenu}>
          <Image src="/menu2.svg" alt='menu' fill />
        </div>
      </div>
      {/* Menu Overlay */}
      <div
        ref={menuRef}
        id='menuBar'
        className={`fixed top-0 right-0 w-[100vw] h-[100vh] bg-[--secondary] z-50 flex justify-center items-center pt-10 pr-8 translate-x-full`}
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }} // Ensure it's hidden initially
      >
        <div className="close cursor-pointer absolute top-8 right-8" onClick={toggleMenu}>
          <i className="ri-close-circle-fill text-5xl text-[--primary]"></i>
        </div>
        <div className="circle xl:w-[400px] xl:h-[400px] w-[200px] h-[200px] rounded-full border-2 border-[--primary] opacity-50 absolute xl:top-[-100px] left-[-50px] xl:left-[-100px] top-[-50px]"></div>
        <div className="links flex flex-col justify-center items-center gap-12">
          {links.map((e, index) => (
            <a href={e} key={index}>
              <h1 className='text-3xl xl:text-6xl font-normal font-bebas text-[--primary] tracking-wider'>{e}</h1>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
