import React from 'react'
import Button from '@/app/components/Button/Button'

const Footer = () => {
  const links = ["Home", "About Me", "Projects", "Testimonials"]
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[--primary] text-[--secondary] py-12 px-8'>
      <div className="title">
        <h1 className='text-6xl xl:text-9xl font-bebas font-semibold text-center'>Let&apos;s Make Something Great Together!</h1>
      </div>
      <div className="link flex flex-row justify-center items-center gap-4 xl:gap-8 py-8">
        <a href="#"><i className="ri-linkedin-fill text-2xl xl:text-4xl cursor-pointer" /></a>
        <a href="#"><i className="ri-twitter-x-fill text-2xl xl:text-4xl cursor-pointer" /></a>
        <a href="#"><i className="ri-youtube-fill text-2xl xl:text-4xl cursor-pointer" /></a>
        <div className='links flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-8'>
          {links.map((e, index) => (
            <a href={e} key={index}> {/* Add unique key */}
              <h1 className='text-xl xl:text-4xl font-normal font-bebas tracking-wider'>{e}</h1>
            </a>
          ))}
        </div>
        <a href="#"><i className="ri-github-fill text-2xl xl:text-4xl cursor-pointer" /></a>
        <a href="#"><i className="ri-instagram-fill text-2xl xl:text-4xl cursor-pointer" /></a>
        <a href="#"><i className="ri-dribbble-fill text-2xl xl:text-4xl cursor-pointer" /></a>
      </div>
      <div className="socials flex flex-row justify-center items-center gap-4 py-8">
        <Button text='Email Me!' onClick={() => {}} />
        <Button text='Book a call' onClick={() => {}} />
      </div>
      <div className="copyright text-center text-sm xl:text-2xl font-light font-nato tracking-wider">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved by <b>kartavya joshi</b> </p></div>
    </div>
  )
}

export default Footer
