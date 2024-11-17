import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';

const Work = () => {
  const projects = [
    {
      type: 'Website',
      year: '2024',
      title: 'Anthrope - AI-powered HR platform',
      description: 'Anthrope is an AI-powered HR platform that helps businesses streamline their HR processes and improve employee engagement.',
      categories: ['Design', 'Development'],
      imgSrc: '/work.png'
    },
    {
      type: 'Mobile App',
      year: '2023',
      title: 'TrackMe - Fitness Tracker',
      description: 'TrackMe is a mobile fitness tracking app designed to help users monitor their exercise routines and progress.',
      categories: ['UI/UX', 'Development'],
      imgSrc: '/work.png'
    },
    {
      type: 'Web Application',
      year: '2022',
      title: 'EcoShop - Sustainable Shopping',
      description: 'EcoShop is a web app that encourages sustainable shopping by providing users with eco-friendly product alternatives.',
      categories: ['Design', 'Frontend'],
      imgSrc: '/work.png'
    },
    {
      type: 'Web Application',
      year: '2022',
      title: 'EcoShop - Sustainable Shopping',
      description: 'EcoShop is a web app that encourages sustainable shopping by providing users with eco-friendly product alternatives.',
      categories: ['Design', 'Frontend'],
      imgSrc: '/work.png'
    }
    // Add more projects as needed
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProject((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const { type, year, title, description, categories, imgSrc } = projects[currentProject];

  return (
    <div id='work' className='work h-[150vh] mt-[55rem] xl:mt-0 xl:h-screen w-full flex flex-col justify-start items-center bg-[--secondary]'>
      <div className="title py-6 font-bebas uppercase">
        <h1 className='text-4xl xl:text-6xl'>My selected works!</h1>
      </div>
      <div className="projects w-full h-full">
        <div className="project w-full h-full flex flex-col xl:flex-row justify-between items-center">
          <div className="content w-full py-8 px-12 xl:w-3/5 h-full flex flex-col justify-between xl:px-12 xl:py-12 border-t-2 border-[--primary]">
            <div className="top flex flex-col gap-8">
              <div className="title-top flex flex-row justify-between items-center">
                <div className="type">
                  <p className='text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-4 lg:text-2xl xl:text-2xl font-normal font-nato capitalize bg-[--contrast] rounded-[300px] cursor-pointer'>
                    {type}
                  </p>
                </div>
                <div className="year font-semibold text-xl xl:text-2xl">
                  <p>@{year}</p>
                </div>
              </div>
              <div className="title text-2xl lg:text-6xl xl:text-6xl font-bebas font-normal ">
                <h1>{title}</h1>
              </div>
              <div className="description text-sm lg:text-2xl xl:text-2xl font-extralight font-nato">
                <p>{description}</p>
              </div>
              <div className="category flex flex-row items-center gap-4">
                {categories.map((category, index) => (
                  <p key={index} className='text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-4 lg:text-2xl xl:text-2xl font-normal font-nato capitalize bg-[--contrast] rounded-[300px] cursor-pointer'>
                    {category}
                  </p>
                ))}
              </div>
            </div>
            <div className="bottom flex flex-row justify-between items-center">
              <div className="counter flex flex-row justify-between items-center gap-4">
                <p>{currentProject + 1}</p>
                <div className="line">/</div>
                <p>{projects.length}</p>
              </div>
              <div className="btn flex flex-row justify-between items-center gap-4 pb">
              <Button text="Previous" onClick={handlePrevious} />
              <Button text="Next" onClick={handleNext} />
              </div>
            </div>
          </div>

          <div className="img w-full xl:w-2/5 h-full">
            <div className="work-img relative h-full w-full cover">
              <Image src={imgSrc} alt='project' fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
