"use client";
import React, { use, useEffect, useRef } from "react";
import { useParams, } from "next/navigation";
import projects from "@/app/Data";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const cursorRef = useRef<HTMLDivElement>(null);

  if (!project) {
    return <h1 className="text-center text-2xl">Project not found</h1>;
  }

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
        const lenis = new Lenis();
        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

    // Hide default cursor
    document.body.style.cursor = "none";

    // GSAP Cursor Follow Effect
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Detect background and change cursor color
    const sections = document.querySelectorAll("section"); // Assuming sections are used
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            const isDark = isDarkColor(bgColor);
            if (cursorRef.current) {
              cursorRef.current.style.backgroundColor = isDark ? "white" : "black";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  // Function to check if a color is dark or light
  const isDarkColor = (bgColor: string) => {
    if (!bgColor || !bgColor.startsWith("rgb")) return true;
    const rgb = bgColor.match(/\d+/g)?.map(Number);
    if (!rgb) return true;
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness < 128; // If brightness is low, consider it dark
  };

  return (
  <>
    <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ backgroundColor: "white" }} // Default color
      />
    <div className="flex flex-col items-start justify-center min-h-screen bg-black text-white p-6 xl:p-12">
      {/* Image Preview */}
      <div className="w-full flex justify-center aspect-[541/304]">
        <div className="relative w-[90%] h-[90%]">
          <Image
            src={project.preview}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="w-full max-w-[95%] flex flex-col gap-6 mt-12 xl:pl-24">
        <div className="top flex flex-row justify-between items-center">
          <h1 className="xl:text-7xl font-bold">{project.title}</h1>
          {/* <h1 className="xl:text-5xl font-bold px-4 py-2 border border-white rounded-lg">${project.price}</h1> */}
          <Link className="text-xl sm:text-2xl xl:text-4xl font-regular" href={project.link}>
            <div className="arrow-img relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 aspect-square">
              <Image src="/arrow-right-up-long-line.svg" className="px-8 py-8 border-2 border-white rounded-full" alt="arrow" fill />
            </div>
          </Link>
        </div>

        <p className="text-gray-400 text-lg">{project.description}</p>

        <p className="mt-6 text-gray-400">
          <strong className="text-white text-xl">Build Date:</strong> {project.date}
        </p>

        <div className="technologies">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used:</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-gray-300 px-4 py-2 border border-white rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


      </div>
    </div>
  </>
  );
};

export default ProjectPage;
