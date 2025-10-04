"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Noise from "@/app/Components/Animations/Noise/Noise";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { client, urlFor } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { TransformedProject } from "@/types/project";

const Projects = () => {
  const [projects, setProjects] = useState<TransformedProject[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await client.fetch(projectsQuery);
        // Transform Sanity data to match the expected format
        const transformedProjects: TransformedProject[] = projectsData.map((project: any) => ({
          _id: project._id,
          slug: project.slug.current,
          preview: project.thumbnail ? urlFor(project.thumbnail).width(1920).height(1080).url() : '',
          title: project.title,
          description: project.description,
          client: project.clientName,
          date: project.date,
          price: project.price || '',
          tech: project.techStack || [],
          link: project.link || undefined,
        }));
        setProjects(transformedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
    <div id="Projects" className="projects-main flex flex-col justify-center items-start bg-black text-white relative min-h-screen pb-12">
      <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
        <Noise patternSize={300} patternScaleX={3} patternScaleY={3} patternRefreshInterval={2} patternAlpha={15} />
      </div>

      <div className="top w-full h-[40vh] md:h-[50vh] xl:h-[90vh] relative z-20 mb-12">
        <div className="top-data w-full h-full relative flex flex-col justify-start pt-40 xl:pt-60 items-center">
          <h1 className="proj-title text-2xl sm:text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold w-4/5 xl:w-2/4 font-mono">
            Presenting some of my selected <span className="text-contrast font-light">work</span> that I&apos;ve done for my
            happy clients
          </h1>
        </div>
      </div>

      <div className="projects flex flex-col items-center gap-6 xl:gap-12 w-full relative z-20">
        {loading ? (
          <div className="flex items-center justify-center w-full h-64">
            <h2 className="text-2xl">Loading projects...</h2>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.slug} className="project w-[90%] flex flex-col gap-8 justify-between items-start pb-4 xl:pb-12 cursor-pointer">
              <Link href={`/projects/${project.slug}`} className="project-link w-full h-full relative flex flex-col items-start justify-between gap-4">
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
                <div className="project-info flex flex-row gap-4 w-full justify-between items-center">
                  <h2 className="text-2xl sm:text-3xl xl:text-5xl font-lucidaBold">{project.title}</h2>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;

