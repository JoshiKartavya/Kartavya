"use client";

import React from "react";
import Image from "next/image";
import Noise from "../Components/Animations/Noise/Noise";
import projects from "../Data";


const Projects = () => {
  return (
    <div className="projects-main flex flex-col justify-center items-start bg-black text-white relative min-h-screen pb-12">
      <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
        <Noise patternSize={300} patternScaleX={3} patternScaleY={3} patternRefreshInterval={2} patternAlpha={15} />
      </div>
      <div className="top w-full h-[40vh] md:h-[50vh] xl:h-[90vh] relative z-20 mb-12">
        <div className="top-data w-full h-full relative flex flex-col justify-start pt-40 xl:pt-60 items-center">
          <h1 className="proj-title text-2xl sm:text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold w-4/5 xl:w-2/4 font-mono">
            Presenting some of my selected <span className="text-contrast font-light">work</span> that I've done for my
            happy clients
          </h1>
        </div>
      </div>
      <div className="projects flex flex-col items-center gap-6 xl:gap-12 w-full relative z-20">
      {projects.map((project) => (
          <div key={project._id} className="project w-[90%] flex flex-col gap-8 justify-between items-start pb-4 xl:pb-12 cursor-pointer">
            <div className="preview w-full aspect-[541/304]">
              <div className="img relative w-full h-full">
                <Image 
                  src={project.preview} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="project-info flex flex-col gap-4 w-full">
              <h2 className="text-2xl sm:text-3xl xl:text-5xl font-lucidaBold">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
