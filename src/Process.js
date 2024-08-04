import React,{useEffect} from 'react'
import Works from './components/Process/Works'
import { Link } from 'react-router-dom'

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHash();

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);
  return (
<div id='top' className="container mx-auto px-5 py-8">
    <div className='bg-indigo-10 flex flex-col gap-8 items-center py-10 px-8 sm:px-20 relative'>
    <div className="absolute inset-0 top-0 flex items-start justify-center">
      <img className='h-auto max-w-full' src="Abstrac-bg.png" alt="" />
  </div>
              <div className=' z-[1]'><img src="T-logo.png" alt="" /></div>
              <div className='flex flex-col gap-4 items-center  z-[1]'>
              <div><h1 className='text-2xl font-semibold'>Your Journey to Health and Wellness</h1> </div>
              <div> <p className='text-center'>At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our process:</p> </div>
              </div>
          </div>
          <Works/>
          <div className="bg-indigo-10 flex flex-col md:flex-row items-center justify-between py-10 px-8 sm:px-20 relative">
          <img src='Abstract Design-1.png' alt='' className="absolute left-0 top-0"/>
          <img src='Abstract Design.png' alt='' className="absolute right-0 bottom-0" />
          <div className="md:w-[80%] z-[1]">
            <h1 className="text-xl font-semibold mb-2 text-gray-900 text-center md:text-left">Are you ready to embark on a transformative journey towards better health and wellness?</h1>
            <p className="w-full text-center md:text-left">Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p>
          </div>
          <div className="mt-4 md:mt-0 z-[1]">
          <Link to='/pricing'>    <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base">Join us Now</button></Link>
          </div>
        </div>
          </div>
  )
}

export default Process
