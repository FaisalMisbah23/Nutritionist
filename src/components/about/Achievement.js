import React from 'react';

const feature = [
    {
        title:'10,000+ Transformations',
        img:'Icon-3.png',
        text:'Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.',
    },
    {
        title:'Recognition for Excellence',
        img:'Icon-1.png',
        text:'Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.',
    },
    {
        title:'Positive Client Reviews',
        img:'Icon-5.png',
        text:'We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.',
    },
    {
        title:'Collaborate With Top Health Experts.',
        img:'Icon-6.png',
        text:'Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.',
    },
];

const Achievement = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Company Achievements</h1>
          <h2 className="text-sm font-medium title-font text-gray-900 md:mx-32">At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {feature.map((item, index)=>(
              <div className="p-4 md:w-1/2" key={index}>
                <div className="flex rounded-lg h-full bg-indigo-10 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-200 text-white flex-shrink-0">
                      <img src={item.img} className="w-5 h-5" alt=""/>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">{item.title}</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">{item.text}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
