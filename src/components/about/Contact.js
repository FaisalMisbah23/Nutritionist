import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="bg-indigo-10 flex flex-col md:flex-row items-center justify-between w-full px-20 py-10 relative">
        <img src='Abstract Design-1.png' className="absolute left-0 top-0 z-1" />
        <img src='Abstract Design.png' className="absolute right-0 bottom-0 z-1" />
        <div className="md:w-3/4">
          <h1 className="text-xl text-left font-semibold mb-2 text-gray-900 md:text-left">We Are Proud of Our Achievements</h1>
          <p className="w-full sm:text-center">But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.</p>
        </div>
        <div className="mt-4 md:mt-0">
        <Link to='/contact'>  <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base">Book a Demo</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
