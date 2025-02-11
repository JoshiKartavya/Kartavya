"use client"

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { About, Footer, Hero, Projects, Services } from './Sections';

interface CSSStyleDeclaration {
  msOverflowStyle: string;
  scrollbarWidth: string;
  WebkitOverflowScrolling: string;
}

const Page = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
    });

    // Animation Frame for Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Hide scrollbar
    document.body.style.overflow = 'hidden';
    (document.body.style as CSSStyleDeclaration).msOverflowStyle = 'none'; // IE and Edge
    (document.body.style as CSSStyleDeclaration).scrollbarWidth = 'none'; // Firefox
    (document.body.style as CSSStyleDeclaration).WebkitOverflowScrolling = 'touch';
    
    // Add CSS to hide webkit scrollbar
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      document.body.style.overflow = '';
      (document.body.style as CSSStyleDeclaration).msOverflowStyle = '';
      (document.body.style as CSSStyleDeclaration).scrollbarWidth = '';
      (document.body.style as CSSStyleDeclaration).WebkitOverflowScrolling = '';
      document.head.removeChild(style);
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
