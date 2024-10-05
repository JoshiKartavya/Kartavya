import React from 'react'
import Hero from './sections/hero/Hero'
import Bento from './sections/bento/Bento'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Work from './sections/work/Work'
import Testimonials from './sections/testimonials/Testimonials'
import Footer from './sections/footer/Footer'

const page = () => {
  return (
    <div className='text-center text-9xl font-black flex flex-col'>
      <Hero />
      <Bento />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page