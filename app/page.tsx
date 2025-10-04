"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { About, Footer, Hero, Services } from "./Sections";
import Projects from "./Sections/projects/page";
import "remixicon/fonts/remixicon.css";
import ScrollVelocity from "./Components/ScrollValocity";

const Page = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const velocity = 100;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    // Disable text selection, copy and right click
    const disableCopy = (e: Event) => e.preventDefault();
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    const disableRightClick = (e: MouseEvent) => {
      if (e.button === 2) e.preventDefault();
    };

    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCopy);
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("mousedown", disableRightClick);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if (!isMobile) {
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

      return () => {
        document.removeEventListener("copy", disableCopy);
        document.removeEventListener("cut", disableCopy);
        document.removeEventListener("contextmenu", disableContextMenu);
        document.removeEventListener("mousedown", disableRightClick);
        window.removeEventListener("mousemove", moveCursor);
      };
    }

    return () => {
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCopy);
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("mousedown", disableRightClick);
    };
  }, [isMobile]);

  return (
    <div className="relative select-none" style={{ cursor: isMobile ? 'auto' : 'none' }}>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ backgroundColor: "white" }}
      />

      {/* Page Sections */}
      <Hero />
      <ScrollVelocity texts={["Web Developer"]} velocity={velocity} className="custom-scroll-text" />
      <Projects />
      <ScrollVelocity texts={["UI/UX Designer"]} velocity={velocity} className="custom-scroll-text" />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
