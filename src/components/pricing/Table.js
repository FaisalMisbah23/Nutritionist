import React from 'react'
import { useState,useEffect } from 'react';

const Table = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array ensures this effect runs only once on component mount
  
  return (
    <section className="text-gray-900 body-font overflow-hidden">
   {width>1023 && <> 
   <div className="container px-5 py-24 mx-auto flex flex-wrap ">
      <div className="lg:w-1/4 lg:block bg-indigo-10">
        <div className="mt-px divide-y-2 divide-indigo-90   border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
          <p className="bg-indigo-300 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">Features</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Personalized Nutrition Plan</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Mobile App Access</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Email Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">One -on One Video Consultations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Recipe Recommendations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Priority Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Educational Resources and Guides</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Advanced Progress Tracking Tools</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Customized Meal Plans</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Phone Support</p>
        </div>
      </div>
      <div className="flex divide-x-2 divide-indigo-90 lg:w-3/4 w-full flex-wrap lg:border border-indigo-90 rounded-lg bg-indigo-10">
        <div className="lg:w-1/3 divide-y-2 divide-indigo-90 lg:mt-px w-full mb-10 lg:mb-0  ">
          <p className="bg-indigo-300 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-indigo-90">Basic Plan</p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>


          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
         
        </div>
        <div className="lg:w-1/3 divide-y-2 divide-indigo-90 lg:mt-px w-full mb-10 lg:mb-0  ">          
          <p className="bg-indigo-300 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-indigo-90">Premium Plan</p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>


          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>

        </div>
        <div className="lg:w-1/3 divide-y-2 divide-indigo-90 w-full lg:mt-px  ">
          <p className="bg-indigo-300 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-indigo-90">Ultimate Plan</p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>



        </div>
      </div>
      </div> </>}
      {/* starting resposinve code for mobile */}

     {width<1024 && <> <div className="container px-5 py-2 mx-auto flex flex-wrap ">
     
      <div className="w-1/2 bg-indigo-10">
        <div className="mt-px divide-y-2 divide-indigo-90   border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
          <p className="bg-indigo-300 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">Features</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Personalized Nutrition Plan</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Mobile App Access</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Email Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Video Consultations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Recipe Recommendations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Priority Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Educational Resources</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Progress Tracking Tools</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Customized Meal Plans</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Phone Support</p>
        </div>
      </div>
      <div className="flex divide-x-2 divide-indigo-90 w-1/2 flex-wrap border border-indigo-90 rounded-lg bg-indigo-10">
        <div className="lg:w-1/3 divide-y-2 divide-indigo-90 lg:mt-px w-full lg:mb-0  ">
          <p className="bg-indigo-300 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-indigo-90">Basic Plan</p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>


          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
         
        </div>
      </div>
      </div>
    
        <div className="container px-5 py-4 mx-auto flex flex-wrap ">
      
      <div className="w-1/2 bg-indigo-10">
        <div className="mt-px divide-y-2 divide-indigo-90   border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
          <p className="bg-indigo-300 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">Features</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Personalized Nutrition Plan</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Mobile App Access</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Email Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Video Consultations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Recipe Recommendations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Priority Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Educational Resources</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Progress Tracking Tools</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Customized Meal Plans</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Phone Support</p>
        </div>
      </div>
      <div className="flex divide-x-2 divide-indigo-90 w-1/2 flex-wrap border border-indigo-90 rounded-lg bg-indigo-10">
        <div className="lg:w-1/3 divide-y-2 divide-indigo-90 lg:mt-px w-full lg:mb-0  ">
          <p className="bg-indigo-300 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-indigo-90">Basic Plan</p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>


          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-[#262626]" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
</p>
         
        </div>
      </div>
      </div>
    
        <div className="container px-5 py-2 mx-auto flex flex-wrap ">
     
      <div className="w-1/2 bg-indigo-10">
        <div className="mt-px divide-y-2 divide-indigo-90   border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
          <p className="bg-indigo-300 text-white h-12 text-center px-4 flex items-center justify-start -mt-px">Features</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Personalized Nutrition Plan</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Mobile App Access</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Email Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Video Consultations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Recipe Recommendations</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Priority Support</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Educational Resources</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Progress Tracking Tools</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Customized Meal Plans</p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Phone Support</p>
        </div>
      </div>
      <div className="flex divide-x-2 divide-indigo-90 w-1/2 flex-wrap border border-indigo-90 rounded-lg bg-indigo-10">
        <div className="lg:w-1/3 divide-y-2 divide-indigo-90 lg:mt-px w-full lg:mb-0  ">
          <p className="bg-indigo-300 text-white h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-indigo-90">Basic Plan</p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-indigo-200 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
          </p>


        </div>
      </div>
      </div></> }


  </section>
  )
}

export default Table
