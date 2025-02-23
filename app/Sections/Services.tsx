"use client"

import React, { useEffect } from 'react';
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
    return title.split('').map((char, index) => 
      char.toLowerCase() === 'e' || char.toUpperCase() === 'E' 
        ? `<span key="${index}" class="font-thin italic">${char}</span>`
        : char
    ).join('')
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const titleElement = document.querySelector(".ser-title");
    if (titleElement) {
      // Fix typo in text
      const text = "My services not only helps businesses to grow but to compete from their competition in the market";
      const words = text.split(' ');
      
      const growIndex = words.indexOf('businesses');
      const competitionIndex = words.indexOf('competition');
      
      titleElement.innerHTML = words.map((word, index) => {
        if (index === growIndex || index === growIndex + 1 || index === growIndex + 2) {
          return `<span class="text-contrast font-thin" style="opacity: 0.3">${word} </span>`;
        }
        if (index === competitionIndex) {
          return `<span class="text-contrast font-thin" style="opacity: 0.3">${word} </span>`;
        }
        return `<span style="opacity: 0.3">${word} </span>`;
      }).join('');
      
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
    <div className='services-main h-max w-full bg-primary text-secondary'>
      <div className="top w-full h-max md:h-max xl:h-[90vh] relative z-20">
        <div className="top-data w-full h-full relative flex flex-col justify-start pt-20 xl:pt-60 items-center">
          <h1 className="ser-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold w-4/5 xl:w-4/5 opacity-50 font-mono">My services not only helps businesses to grow but to compete from their competition in the market</h1>
        </div>
      </div>
      <div className="content flex flex-row w-full h-max">
        <div className="arrow hidden xl:block w-1/3 h-max px-8 xl:px-36 py-12 xl:py-24">
          <div className="arrow-img relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 aspect-square">
            <Image src="/arrow.svg" alt="arrow" fill />
          </div>
        </div>
        <div className="services h-max w-full xl:w-2/3 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 place-items-center">
          {services.map((service) => (
            <div key={service.id} className="service w-full aspect-[232/337] relative cursor-pointer group">
              <div className="service-image w-full h-full relative overflow-hidden rounded-lg">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  fill
                  priority
                />
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-5 2xl:bottom-8 left-3 sm:left-4 md:left-5 lg:left-6 xl:left-5 2xl:left-8 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 2xl:py-7 rounded-lg w-4/5">
                  <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-5xl 2xl:text-7xl bg-transparent font-bold font-geist" dangerouslySetInnerHTML={{__html: formatTitle(service.title)}}></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
