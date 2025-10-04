"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { client, urlFor } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { TransformedProject } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { MdArrowBackIosNew } from "react-icons/md";

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<TransformedProject | null>(null);
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Fetch project data from Sanity
  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const projectData = await client.fetch(projectBySlugQuery, { slug });
        if (projectData) {
          // Transform Sanity data to match the expected format
          const transformedProject: TransformedProject = {
            _id: projectData._id,
            slug: projectData.slug.current,
            preview: projectData.thumbnail ? urlFor(projectData.thumbnail).width(1920).height(1080).url() : '',
            title: projectData.title,
            description: projectData.description,
            client: projectData.clientName,
            date: projectData.date,
            price: projectData.price || '',
            tech: projectData.techStack || [],
            link: projectData.link || undefined,
          };
          setProject(transformedProject);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    if (!project) return;

    // Ensure the page starts at the top
    window.scrollTo(0, 0);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Handle custom cursor only for non-mobile screens
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      document.body.style.cursor = "none";
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }

    // Cleanup function
    return () => {
      lenis.destroy();
      window.scrollTo(0, 0); // Ensure scroll position is reset when unmounting
    };
  }, [project]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (!project) {
    return <h1 className="text-center text-2xl">Project not found</h1>;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ backgroundColor: "white" }}
      />

      <div className="back w-full h-20 flex justify-start items-center cursor-pointer bg-black" onClick={() => window.history.back()}>
        <MdArrowBackIosNew className=" absolute text-white text-5xl xl:text-7xl xl:top-8 top-6 xl:left-8 left-4"/>
      </div>
      <Link href="#Projects">
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 xl:p-12 xl:pt-0 pt-20">
        <div className="wrapper w-full xl:w-[60%] flex flex-col justify-center items-center gap-12">
          <div className="top flex flex-row justify-between items-center w-full py-6">
            <h1 className="text-4xl xl:text-7xl font-bold">{project.title}</h1>
            {project.link ? (
              <Link className="text-xl sm:text-2xl xl:text-4xl font-regular" href={project.link}>
                <div className="arrow-img relative w-16 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 aspect-square">
                  <Image src="/arrow-right-up-long-line.svg" className="px-2 xl:px-8 py-2 xl:py-8 bg-white rounded-full" alt="arrow" fill />
                </div>
              </Link>
            ) : (
              <button className="text-gray-500 cursor-not-allowed" disabled></button>
            )}
          </div>

          {/* Image Preview */}
          <div className="w-full flex justify-center aspect-[541/304]">
            <div className="relative w-full h-full">
              <Image src={project.preview} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw" className="object-cover rounded-lg" />
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full max-w-[95%] flex flex-col xl:flex-row justify-between items-start gap-6">
            <div className="left flex flex-col gap-4 w-full xl:w-1/3 h-full">
              <p className="text-gray-400"><span className="text-white text-xl font-semibold">Build Date:</span> <br /> {project.date}</p>
              <p className="text-gray-400"><span className="text-white text-xl font-semibold">Client Name:</span> <br /> {project.client}</p>
              {/* Project Cost (Only show if available) */}
              {project.price && (
                <p className="text-gray-400 text-xl">
                  <span className="text-white text-xl font-semibold">Project Cost:</span> <br /> ${project.price}
                </p>
              )}
            </div>
            <div className="right flex flex-col gap-4 w-full xl:w-2/3 h-full">
              <h2 className="text-2xl font-semibold">Project Description:</h2>
              <p className="text-gray-400 text-lg">{project.description}</p>
              
              {/* Technologies Used (Only show if available) */}
              {project.tech && project.tech.length > 0 && (
                <div className="technologies">
                  <h2 className="text-2xl font-semibold mb-4">Technologies Used:</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-gray-300 px-4 py-2 border border-white rounded-lg text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectPage;
