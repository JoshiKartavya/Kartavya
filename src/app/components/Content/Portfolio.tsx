"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import "./Portfolio.scss"

// Import your sections
import Hero from '@/app/sections/hero/Hero';
import Bento from '@/app/sections/bento/Bento';
import About from '@/app/sections/about/About';
import Services from '@/app/sections/services/Services';
import Work from '@/app/sections/work/Work'
import Footer from '@/app/sections/footer/Footer';
// Register the GSAP plugin

const Portfolio = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const lenis = new Lenis();

        // RAF function for smooth scrolling
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <Hero />
            <Bento />
            <About />
            <Services />
            <Work />
            <Footer />
        </>
    );
};

export default Portfolio;
