import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const url = useLocation().pathname

  return (
    <>
    <header id='top' className="text-white bg-indigo-300 body-font scroll-smooth">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="logo.png" alt="" />
          <span className="ml-3 text-xl">Nutritionist</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to='' className={`mr-5 ${url === '/' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Home</Link>
          <Link to='about' className={`mr-5 ${url === '/about' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>About</Link>
          <Link to="team" className={`mr-5 ${url === '/team' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Team</Link>
          <Link to='process' className={`mr-5 ${url === '/process' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Process</Link>
          <Link to='pricing' className={`mr-5 ${url === '/pricing' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Pricing</Link>
          <Link to='blog' className={`mr-5 ${url === '/blog' ? 'text-indigo-200' : 'text-white'} hover:text-indigo-200`}>Blog</Link>
        </nav>
      <Link to='contact'>  <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base mt-4 md:mt-0">Contact Us
        </button></Link>
      </div>
    </header>
   </>
  );
};

export default Navbar;
