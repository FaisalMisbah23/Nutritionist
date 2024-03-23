import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const url = useLocation().pathname
  return (
    <footer className="text-gray-600 body-font mt-10">
         <div className="text-white bg-indigo-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       <a href='/' className="flex title-font font-medium items-center text-white max-[770px]:hidden">
          <img src="logo.png" alt="" />
          <span className="ml-3 text-xl">Nutritionist</span>
        </a>
       <div className="max-[770px]:flex max-[770px]:items-center max-[770px]:justify-between max-[770px]:w-full max-[770px]:mb-4 hidden">
      <div className="flex title-font font-medium items-center text-white">
        <img src="logo.png" alt="" />
        <span className="ml-3 text-xl">Nutritionist</span>
      </div>
      <a href='#top'>  <div className="flex items-center">
        <h5>Go to Top</h5>
        <button className="ml-2 inline-flex items-center bg-indigo-50 border-0 py-2 px-2 focus:outline-none rounded-full text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0l6 6m-6-6l-6 6"/>
          </svg>
        </button>
      </div></a>
    </div>
        <nav className="max-[770px]:justify-start md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to='' className={`mr-5 ${url === '/' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Home</Link>
          <Link to='about' className={`mr-5 ${url === '/about' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>About</Link>
          <Link to="team" className={`mr-5 ${url === '/team' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Team</Link>
          <Link to='process' className={`mr-5 ${url === '/process' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Process</Link>
          <Link to='pricing' className={`mr-5 ${url === '/pricing' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Pricing</Link>
          <Link to='blog' className={`mr-5 ${url === '/blog' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Blog</Link>
        </nav>
      <a href='#top'> <div className='flex items-center max-[770px]:hidden'>
       <h5 className='max-[770px]:mt-3' >Go to Top</h5>
        <button className="ml-2 inline-flex items-center bg-indigo-50 border-0 py-2 px-2 focus:outline-none rounded-full text-base mt-4 md:mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0l6 6m-6-6l-6 6"/></svg>
        </button>
       </div></a>
      </div>
    </div>
    <div className="bg-indigo-300">
    <div className="container mx-auto py-4 px-5 flex flex-row items-center justify-between max-[1024px]:flex-col max-[1024px]:gap-3  bg-indigo-50 border-2 border-indigo-40">
    <div className="text-gray-500 text-sm text-center sm:text-left flex justify-between max-[430px]:flex-col max-[430px]:gap-3">
          <p className="text-white ml-1 border-2 border-indigo-40 max-[430px]:w-full max-[1024px]:p-1 p-2 rounded mr-2 flex items-center"><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1.35em" height="1.35em" viewBox="0 0 24 24"><path fill="#CBEA7B" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg><span> hello@squareup.com </span> </p>
          <p className="text-white ml-1 border-2 border-indigo-40 max-[430px]:w-full max-[1024px]:p-1 p-2 rounded mr-2 flex items-center"><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1.35em" height="1.35em" viewBox="0 0 512 512"><path fill="#CBEA7B" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> <span> +91 91813 23 2309 </span> </p>
          <p className="text-white ml-1 border-2 border-indigo-40 max-[430px]:w-full max-[1024px]:p-1 p-2 rounded mr-2 flex items-center"><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1.35em" height="1.35em" viewBox="0 0 24 24"><g fill="#CBEA7B" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.288 8.288 0 0 1 8.26-7.607h.432a8.288 8.288 0 0 1 8.26 7.607a8.944 8.944 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.943 8.943 0 0 1-1.99-6.396m8.26-6.107A6.788 6.788 0 0 0 5.02 8.98a7.443 7.443 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.443 7.443 0 0 0 18.98 8.98a6.788 6.788 0 0 0-6.765-6.23z"/></g></svg> <span> Somewhere in the World</span></p>
        </div>
       <div> <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-cente text-sm text-white">© 2024 Nutritionist. All rights reserved.</span></div>
      </div>
    </div>
    <div className="bg-indigo-300">
      <div className="container mx-auto py-4 px-5">
      </div>
    </div>
  </footer>
  )
}

export default Footer
