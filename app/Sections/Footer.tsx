import React from 'react';
import { Copyright } from '../Components';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="footer w-full h-[50rem] xl:h-screen flex flex-col gap-10 xl:gap-40 justify-end items-center bg-secondary text-primary">
        <div className="content flex flex-col justify-start items-start w-full h-[60%] px-8 xl:px-60">
          <h1 className='text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-sans pb-8 xl:pb-40'>Let &apos;s convert your <br className='hidden xl:block' /> idea into reality</h1>
          
          <div className="contact w-full flex flex-col xl:flex-row justify-between items-start gap-8 xl:gap-0">
            <div className="top w-full xl:w-auto flex flex-row justify-between gap-8">
              <div className="email">
                <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold font-sans pb-3 xl:pb-8'>Contact@</h2>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-lucidaBoldOblique'>joshikartavya78@gmail.com</h2>
              </div>
              <div className="logo mt-6 xl:mt-0">
                <Image src="./Logo-KJ.svg" alt='logo' width={60} height={60} className='xl:w-[100px] xl:h-[100px]' />
              </div>
            </div>

            <div className="links flex flex-row xl:flex-row gap-6 xl:gap-10 mt-8 xl:mt-0">
              <div className="link flex flex-col items-start gap-3 xl:gap-6">
                <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-geist'>Quick links</h1>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Home</a>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Projects</a>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Services</a>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">About</a>
              </div>
              <div className="socials flex flex-col items-start gap-3 xl:gap-6">
                <h1 className='text-2xl sm:text-3xl xl:text-5xl'>Connect with Me</h1>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Facebok</a>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Instagram</a>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Twitter</a>
                <a className='text-xl sm:text-2xl xl:text-4xl font-medium' href="">Youtube</a>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
