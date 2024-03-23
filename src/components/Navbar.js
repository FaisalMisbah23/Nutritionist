import React,{useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const url = useLocation().pathname
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up by removing event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Only run once on compon
  return (
    
    <>
   
    <header id='top' className="text-white bg-indigo-300 body-font scroll-smooth">
      <div className='container mx-auto'>
      <div className={`flex items-center bg-indigo-40 py-2 ${isSmallScreen ? 'mx-0 justify-center' : 'justify-between mx-5'}`}>
      <img className={`md:max-w-[150px] ${isSmallScreen ? 'hidden' : 'block'}`} src="path.png" alt="" />
   <Link to='pricing'>   <p className={`flex items-center ${isSmallScreen ? 'gap-2 text-xs p-4 bg-indigo-300' : 'gap-4'}`}>
        <img src="cricket.ball.fill.png" alt="" className="max-w-[20px]" /> {/* Adjust the size for smaller devices */}
        <span>Join Our Personalized Nutrition Demo For Free</span>
        <img src="arrow-r.png" alt="" className="max-w-[20px]" /> {/* Adjust the size for smaller devices */}
      </p></Link>
      <img className={`md:max-w-[150px] ${isSmallScreen ? 'hidden' : 'block'}`} src="path-r.png" alt="" />
    </div>

      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
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
      </div></div>
    </header>
   </>
  );
};

export default Navbar;
