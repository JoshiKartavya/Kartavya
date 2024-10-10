'use client'

import { useEffect } from 'react'
import React from 'react'
import Hero from './sections/hero/Hero'
import Bento from './sections/bento/Bento'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Work from './sections/work/Work'
import Testimonials from './sections/testimonials/Testimonials'
import Footer from './sections/footer/Footer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <div className='text-center text-9xl font-black flex flex-col'>
        <Hero />
        <Bento />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default Page
