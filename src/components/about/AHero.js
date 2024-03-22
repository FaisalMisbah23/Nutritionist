import React from 'react'
import  './style.css'

const AHero = () => {
  return (
    <div className="container px-5 py-4 mx-auto">
<div className="grid grid-cols-6 grid-rows-2 gap-2">
    <div className="parent div1 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    <div className="parent div2 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    <div className="parent div3 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    <div className="parent div4 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    {/* <div className="parent div5 bg-indigo-30 rounded xl:h-[40vh] lg:h-[30vh] md:h-[25vh]  max-[768px]:h-[18vh]">
        <div className='flex items-center justify-center'>
        <img src="Alogo.png"  alt="" />
        </div>
    </div> */}
    <img src="Alogo.png" className='parent div5 rounded w-full xl:h-[40vh] lg:h-[30vh] md:h-[25vh]  max-[768px]:h-[18vh] fit-cover' alt="logo" />
    {/* <img src="Alogo.png" className='parent div5 rounded w-full xl:h-[40vh] lg:h-[30vh] md:h-[25vh]  max-[768px]:h-[18vh]' alt="logo" /> */}
    <div className="parent div6 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    <div className="parent div7 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    <div className="parent div8 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
    <div className="parent div9 bg-indigo-30 rounded max-[768px]:h-[8vh]"></div>
</div>
</div>
  )
}

export default AHero
