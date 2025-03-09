"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { About, Footer, Hero, Services } from "./Sections";
import Projects from "./Sections/projects/page";
import "remixicon/fonts/remixicon.css";
import ScrollVelocity from "./Components/ScrollValocity";

const Page = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const velocity = 100; // Define velocity here

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
    <div className="relative cursor-none">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ backgroundColor: "white" }} // Default color
      />

      {/* Page Sections */}
      <Hero />
      <ScrollVelocity
        texts={['Web Developer']}
        velocity={velocity} // Now it's properly defined
        className="custom-scroll-text "
      />
      <Projects />
      <ScrollVelocity
        texts={['UI/UX Designer']}
        velocity={velocity} // Now it's properly defined
        className="custom-scroll-text "
      />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
