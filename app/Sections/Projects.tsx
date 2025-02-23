"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import Noise from '../Components/Animations/Noise/Noise';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Project {
  id: number;
  preview: string;
  title: string;
  description: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      preview: '/proj1.png',
      title: 'Anthrope - London',
      description: 'This project is a website design I done for London based start-up which was a fun as well as learning based project its my personal fav.',
    },
    {
      id: 2,
      preview: '/proj2.png',
      title: ' * Project 2', 
      description: 'This is a description of project 2.',
    },
    {
      id: 3,
      preview: '/proj3.png',
      title: 'Project 3',
      description: 'This is a description of project 3.',
    },
    {
      id: 4,
      preview: '/proj1.png',
      title: 'Project 4',
      description: 'This is a description of project 4.',
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const titleElement = document.querySelector(".proj-title");
    if (titleElement) {
      // Get the text content excluding the span
      const text = "Presenting some of my selected work that I&apos;ve done for my happy clients";
      const words = text.split(' ');
      
      // Find the index of "work" to preserve the span
      const workIndex = words.indexOf('work');
      
      // Map through words and wrap each in span
      titleElement.innerHTML = words.map((word, index) => {
        if (index === workIndex) {
          return `<span class="text-contrast font-light" style="opacity: 0.3">${word} </span>`;
        }
        return `<span style="opacity: 0.3">${word} </span>`;
      }).join('');
      
      // Animate all spans including the "work" span
      const spans = titleElement.querySelectorAll("span");
      spans.forEach((span, index) => {
        gsap.to(span, {
          opacity: 1,
          scrollTrigger: {
            trigger: ".projects-main",
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
    <div className="projects-main flex flex-col justify-center items-start bg-black text-white relative min-h-screen pb-12 sm:pb-12 md:pb-12 xl:pb-12 2xl:pb-12">
      <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
        <Noise
          patternSize={300}
          patternScaleX={3}
          patternScaleY={3}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <div className="top w-full h-[40vh] md:h-[50vh] xl:h-[90vh] relative z-20 mb-12 xl:mb-0 2xl:mb-0">
        <div className="top-data w-full h-full relative flex flex-col justify-start pt-40 xl:pt-60 items-center">
          <h1 className="proj-title text-3xl sm:text-4xl md:text-6xl xl:text-8xl font-bold w-4/5 xl:w-2/4 font-mono">Presenting some of
          my selected <span className='text-contrast font-light'>work</span> that I&apos;ve done for my happy clients</h1>
        </div>
      </div>
      <div className="projects flex flex-col items-center gap-6 xl:gap-12 w-full relative z-20">
        {projects.map((project) => (
          <div key={project.id} className="project w-[90%] flex flex-col gap-8 justify-between items-start pb-4 xl:pb-12 cursor-pointer">
            <div className="preview w-full aspect-[541/304]">
              <div className="img relative w-full h-full">
                <Image 
                  src={project.preview} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority={project.id === 1}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="project-info flex flex-col gap-4 w-full">
              <h2 className="text-2xl sm:text-3xl xl:text-5xl font-lucidaBold">{project.title}</h2>
              <p className="text-base sm:text-lg xl:text-2xl w-full xl:w-2/4 font-mono font-medium">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;