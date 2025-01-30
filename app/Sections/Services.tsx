"use client"

import React, { useEffect } from 'react';
// import Baffle from '../Components/Baffle'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Services = () => {

  const services = [
    {
      id: 1,
      title: 'Web development',
      image: '/ser1.png'
    },
    {
      id: 2,
      title: 'Web designing',
      image: '/ser2.png'
    },
    {
      id: 3,
      title: 'SEO Improvement',
      image: '/ser3.png'
    },
    {
      id: 4,
      title: 'Re-designing',
      image: '/ser4.png'
    }
  ]

  const formatTitle = (title: string) => {
    return title.split('').map((char) => 
      char.toLowerCase() === 'e' || char.toUpperCase() === 'E' 
        ? `<span class="font-thin italic">${char}</span>`
        : char
    ).join('')
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const titleElement = document.querySelector(".ser-title");
    if (titleElement) {
      // Get the text content excluding the spans
      const text = "My services not only helps businesses to grow but to compete from there compitition in the market";
      const words = text.split(' ');
      
      // Find the indices of phrases to animate
      const growIndex = words.indexOf('businesses');
      const competitionIndex = words.indexOf('compitition');
      
      // Map through words and wrap each in span
      titleElement.innerHTML = words.map((word, index) => {
        if (index === growIndex || index === growIndex + 1 || index === growIndex + 2) {
          return `<span class="text-contrast font-thin" style="opacity: 0.3">${word} </span>`;
        }
        if (index === competitionIndex) {
          return `<span class="text-contrast font-thin" style="opacity: 0.3">${word} </span>`;
        }
        return `<span style="opacity: 0.3">${word} </span>`;
      }).join('');
      
      // Animate all spans
      const spans = document.querySelectorAll(".ser-title span");
      spans.forEach((span, index) => {
        gsap.to(span, {
          opacity: 1,
          scrollTrigger: {
            trigger: ".services-main",
            start: `top ${40 - (index * 5)}%`,
            end: `top ${30 - (index * 5)}%`,
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        });
      });
    }
  }, []);

  return (
    <>
      <div className='services-main h-max w-full bg-primary text-secondary'>
        <div className="top w-full h-[40vh] md:h-[50vh] xl:h-[90vh] relative z-20">
          <div className="top-data w-full h-full relative flex flex-col justify-start pt-40 xl:pt-60 items-center">
            {/* <Baffle text='&#123; &#125; Selected Works' className=' absolute top-12 left-12 xl:top-36 xl:left-36 text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-light xl:font-normal font-lucidaOblique' /> */}
            <h1 className="ser-title text-4xl sm:text-4xl md:text-6xl xl:text-8xl font-bold w-4/5 xl:w-3/5 opacity-50 font-mono">My services not only helps businesses to grow but to compete from there compitition in the market</h1>
          </div>
        </div>
        <div className="content flex flex-row w-full h-max">
          <div className="arrow hidden xl:block w-1/3 h-max px-8 xl:px-36 py-12 xl:py-24">
            <div className="arrow-img relative w-32 h-32">
              <Image src="/arrow.svg" alt="arrow" fill />
            </div>
          </div>
          <div className="services h-max w-full xl:w-2/3 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 px-8 xl:px-36 py-12 xl:py-24 place-items-center">
            {services.map((service, index) => (
              <div key={index} className="service max-h-[58rem] w-full max-w-[40rem] relative cursor-pointer">
                <div className="service-image w-full h-full relative">
                  <Image src={service.image} alt={service.title} className="w-full h-full object-cover" fill />
                  <div className="absolute bottom-4 xl:bottom-8 left-4 xl:left-8 bg-opacity-90 px-6 py-4 rounded-lg w-3/5">
                    <h3 className="text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-bold font-geist" dangerouslySetInnerHTML={{__html: formatTitle(service.title)}}></h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
