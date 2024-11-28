"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import "./Portfolio.scss"

// Import your sections
import Footer from '@/app/sections/footer/Footer';
import Light from './Light';
import Dark from './Dark';
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
            <Light />
            <Dark />
            <Footer />
        </>
    );
};

export default Portfolio;
