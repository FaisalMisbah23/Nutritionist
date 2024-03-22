import React from 'react'

const Form = () => {
  return (
    <section className="text-gray-600 body-font relative ">
      <div className='container px-5 py-4 mx-auto '>
    <div className="flex sm:flex-nowrap max-[768px]:flex-col max-[768px]:gap-4 flex-wrap bg-indigo-10 px-4">
    <div className="lg:w-[48%] md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 sm:mr-10">
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-[#eef8d3] rounded border border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-[#eef8d3] rounded border border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-[#eef8d3] rounded border border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
        </div>
        <button className="text-gray-900 bg-indigo-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 rounded text-lg">Send Message</button>
      </div>   
      <div className=" lg:w-[48%] md:w-1/2 max-[768px]:w-full max-[768px]:h-[500px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
        <iframe width="100%" height='100%' className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      </div>
    </div>
    </div>
  </section>

  )
}

export default Form
