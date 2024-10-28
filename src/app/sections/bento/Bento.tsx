import React from 'react'

const Bento = () => {
  return (
    <div className="bento hidden xl:block">
      <div className=' h-screen w-full flex flex-col justify-center items-center bg-[--primary] text-[--secondary]'>
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid h-[90%] w-[90%] gap-3 p-2 grid-cols-5 grid-rows-3 rounded-lg">
            <div className="col-span-2 row-span-2 border-2 border-[#222222] rounded-lg shadow-md flex items-center justify-center">
            </div>

            <div className="col-span-3 row-span-1 border-2 border-[#222222] rounded-lg shadow-md flex items-center justify-center">
            </div>

            <div className="col-span-1 row-span-1 border-2 border-[#222222] rounded-lg shadow-md flex items-center justify-center">
            </div>

            <div className="col-span-2 row-span-2 border-2 border-[#222222] rounded-lg shadow-md flex items-center justify-center">
            </div>
            
            <div className="col-span-3 row-span-1 border-2 border-[#222222] rounded-lg shadow-md flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bento