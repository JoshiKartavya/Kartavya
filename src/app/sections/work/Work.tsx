import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { Projects } from '@/app/data'; // Importing the Projects array
import gsap from 'gsap';

const Work = () => {
  const [currentProject, setCurrentProject] = useState(0);

  function animateNext(){
    gsap.to("#NumFirst", {
      opacity: 0,
      y: -20,
      onComplete: function () {
        gsap.set("#NumFirst",{y:20});
        handleNext();
        gsap.to("#NumFirst", {
          opacity: 1,
          y: 0
        })
      }
    })
  }

  function animatePrev(){
    gsap.to("#NumFirst", {
      opacity: 0,
      y: 20,
      onComplete: function () {
        gsap.set("#NumFirst",{y:-20});
        handlePrevious();
        gsap.to("#NumFirst", {
          opacity: 1,
          y: 0
        })
      }
      
    })
  }

  // Handlers for navigation
  const handleNext = () => {
    setCurrentProject((prevIndex) => (prevIndex + 1) % Projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prevIndex) =>
      prevIndex === 0 ? Projects.length - 1 : prevIndex - 1
    );
  };

  // Current project data
  const { type, year, title, description, categories, imgSrc } =
    Projects[currentProject];

  return (
    <div
      id="work"
      className="work h-[150vh] mt-[55rem] xl:mt-0 xl:h-screen w-full flex flex-col justify-start items-center bg-[--secondary]"
    >
      <div className="title py-6 font-bebas uppercase">
        <h1 className="text-4xl xl:text-6xl">My selected works!</h1>
      </div>
      <div className="projects w-full h-full">
        <div className="project w-full h-full flex flex-col xl:flex-row justify-between items-center">
          <div id='content' className="content w-full py-8 px-12 xl:w-3/5 h-full flex flex-col justify-between xl:px-12 xl:py-12 border-t-2 border-[--primary]">
            <div className="top flex flex-col gap-8">
              <div className="title-top flex flex-row justify-between items-center">
                <div className="type">
                  <p className="text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-4 lg:text-2xl xl:text-2xl font-normal font-nato capitalize bg-[--contrast] rounded-[300px] cursor-pointer">
                    {type}
                  </p>
                </div>
                <div className="year font-semibold text-xl xl:text-2xl">
                  <p>@{year}</p>
                </div>
              </div>
              <div className="title text-2xl lg:text-6xl xl:text-6xl font-bebas font-normal">
                <h1>{title}</h1>
              </div>
              <div className="description text-sm lg:text-2xl xl:text-2xl font-extralight font-nato">
                <p>{description}</p>
              </div>
              <div className="category flex flex-row items-center gap-4">
                {categories.map((category, index) => (
                  <p
                    key={index}
                    className="t ext-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-4 lg:text-2xl xl:text-2xl font-normal font-nato capitalize bg-[--contrast] rounded-[300px] cursor-pointer"
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
            <div className="bottom flex flex-row justify-between items-center">
              <div className="counter flex flex-row justify-between items-center gap-4">
                <p className='text-3xl'  id='NumFirst' >{currentProject + 1}</p>
                <p className="line text-3xl">/</p>
                <p className='text-3xl'>{Projects.length}</p>
              </div>
              <div className="btn flex flex-row justify-between items-center gap-4">
                <Button text="Previous" onClick={animatePrev} />
                <Button text="Next" onClick={animateNext} />
              </div>
            </div>
          </div>

          <div className="img w-full xl:w-2/5 h-full">
            <div className="work-img relative h-full w-full">
              <Image src={imgSrc} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
