"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { About, Footer, Hero, Projects, Services } from "./Sections";

// Extend the built-in CSSStyleDeclaration type
declare global {
  interface CSSStyleDeclaration {
    msOverflowStyle?: string;
    scrollbarWidth?: string;
    WebkitOverflowScrolling?: string;
  }
}

const Page = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
      smoothTouch: true, // Fix for mobile scrolling
    });

    // Animation Frame for Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // ✅ **Fix: Allow scrolling on all devices**
    document.body.style.overflow = "auto"; // Change 'hidden' to 'auto'
    document.documentElement.style.overflow = "auto"; // Ensure smooth scrolling on mobile

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Page;