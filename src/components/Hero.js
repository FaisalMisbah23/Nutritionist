import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="text-indigo-400 body-font">
    <div className="container mx-auto flex px-5 pt-12 pb-12 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="hero.png" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
<p className="text-sm text-gray-500 mb-2 w-full">Transform Your ❤️ Health with</p>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Personalized Nutrition Coaching</h1>
        <p className="mb-8 leading-relaxed">Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
        <div className="flex lg:flex-row md:flex-col">
         <Link to='pricing'> <button className="bg-indigo-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-200 focus:outline-none">Get Starter Today</button></Link>
         <Link to='contact'> <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">Book a Demo</button></Link>
        </div>
        <div className="flex w-full mt-10">
        <div className="flex -space-x-4 rtl:space-x-reverse">
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="Image.png" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="Image-1.png" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="Image-2.png" alt="" />
        <Link  to='pricing' className="flex items-center justify-center text-xl max-[400px]:text-md font-medium text-indigo-300" style={{"marginLeft":"0.5rem"}}> 430+ Happy Customers</Link>
      </div>        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
