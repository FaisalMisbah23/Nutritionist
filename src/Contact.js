import React from 'react'
import Main from './components/contact/Main'
import Form from './components/contact/Form'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <Main/>
      <Form/>
      <div className="container px-5 py-4 mt-4 mx-auto max-w-screen-xl">
        <div className="bg-indigo-10 flex flex-col md:flex-row items-center justify-between py-10 px-8 sm:px-20 relative">
          <img src='Abstract Design-1.png' alt='' className="absolute left-0 top-0"/>
          <img src='Abstract Design.png' alt='' className="absolute right-0 bottom-0" />
          <div className="md:w-[80%] z-[1]">
            <h1 className="text-xl font-semibold mb-2 text-gray-900 text-center md:text-left">Are you ready to embark on a transformative journey towards better health and wellness?</h1>
            <p className="w-full text-center md:text-left"> Join us at Nutritionist and let us guide you on the path to a healthier and happier you.</p>
          </div>
          <div className="mt-4 md:mt-0 z-[1]">
          <Link to='/pricing'>    <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base">Join us Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
