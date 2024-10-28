import React from 'react'
import About from './about/About'
import Services from './services/Services'
import Work from './work/Work'

const Dark = () => {
  return (
    <div className='dark sticky top-0'>
      <About />
      <Services />
      <Work />
    </div>
  )
}

export default Dark
