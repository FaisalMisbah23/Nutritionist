import React from 'react';

function Main() {
  return (
    <>
      <div className='container mx-auto px-5 py-8'>
      <div className='bg-indigo-10 flex flex-col gap-8 items-center py-10 px-8 sm:px-20 relative'>
      <div className="absolute inset-0 top-0 flex items-start justify-center">
        <img className='h-auto max-w-full' src="Abstrac-bg.png" alt="" />
    </div>
                <div className=' z-[1]'><img src="T-logo.png" alt="" /></div>
                <div className='flex flex-col gap-4 items-center  z-[1]'>
                <div><h1 className='text-2xl font-semibold'>Contact Us</h1> </div>
                <div> <p>We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods</p> </div>
                </div>
            </div>
        <div className='bg-indigo-300 text-white flex flex-wrap gap-4 md:gap-8 items-center md:justify-center w-full px-20 py-6 max-[440px]:px-6'>
          <a className='bg-indigo-50 px-8 py-4 flex flex-col items-center gap-4 max-[768px]:w-full' href="mailto:support@nutritionist.com"  ><svg xmlns="http://www.w3.org/2000/svg" width="1.35em" height="1.35em" viewBox="0 0 24 24"><path fill="#CBEA7B" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg><span> support@nutritionist.com</span></a>
          <a className='bg-indigo-50 px-8 py-4 flex flex-col items-center gap-4 max-[768px]:w-full' href="tel:++91 00000 00000"  ><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1.35em" height="1.35em" viewBox="0 0 512 512"><path fill="#CBEA7B" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> <span>+91 00000 00000</span> </a>
          <a className='bg-indigo-50 px-8 py-4 flex flex-col items-center gap-4 max-[768px]:w-full' href="/" ><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1.35em" height="1.35em" viewBox="0 0 24 24"><g fill="#CBEA7B" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.288 8.288 0 0 1 8.26-7.607h.432a8.288 8.288 0 0 1 8.26 7.607a8.944 8.944 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.943 8.943 0 0 1-1.99-6.396m8.26-6.107A6.788 6.788 0 0 0 5.02 8.98a7.443 7.443 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.443 7.443 0 0 0 18.98 8.98a6.788 6.788 0 0 0-6.765-6.23z"/></g></svg> <span>Some Where in the World</span> </a>
        </div>
      </div>
    </>
  );
}

export default Main;