import React from 'react'

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="copyright h-20 xl:h-40 w-full flex flex-row justify-center xl:justify-between items-center xl:px-36">
        <p className="text-center py-6 xl:py-12 text-xl md:text-2xl lg:text-2xl xl:text-3xl">&#169; {currentYear} All Rights Reserved by kartavya joshi</p>
        <button className=' hidden xl:block 2xl:block'>
          <a href="#" className=' bg-white border-2 border-black rounded-full xl:px-8 xl:py-4 text-3xl '> Back to Top</a>
        </button>
      </div>
    </>
  )
}

export default Copyright
