import React from 'react';

const feature = [
    {
        title:'Initial Consultation',
        img:'p-1.png',
        text:'We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements.',
        num:'01'
    },
    {
        title:'Assessing Your Needs',
        img:'p-2.png',
        text:'Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.',
        num:'02'
    },
    {
        title:'Personalized Nutrition Plan',
        img:'p-3.png',
        text:'Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing.',
        num:'03'
    },
    {
        title:'Meal Planning and Recipes',
        img:'p-4.png',
        text:'To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.',
        num:'04'
    },
    {
        title:'Ongoing Support',
        img:'p-5.png',
        text:'Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success.',
        num:'05'
    },
    {
        title:'Progress Tracking',
        img:'p-6.png',
        text:'We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments.',
        num:'06'
    },
    {
        title:'Regular Check-ins',
        img:'p-7.png',
        text:'We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes.',
        num:'07'
    },
    {
        title:'Education and Resources',
        img:'p-8.png',
        text:'Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle.',
        num:'08'
    },
    {
        title:'Fine-Tuning and Adjustments',
        img:'p-9.png',
        text:'As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs.',
        num:'09'
    },
    {
        title:'Sustainable Lifestyle Habits',
        img:'p-10.png',
        text:'Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you have completed the program.',
        num:'10'
    },
    
];

const Works = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">How It Works</h1>
          <h2 className="text-sm font-medium title-font text-gray-900 md:mx-32 text-justify">We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {feature.map((item, index)=>(
              <div className="p-4 md:w-1/2 relative mt-20" key={index}>
                <div className='text-10xl text-9xl text-indigo-45 font-semibold position absolute top-[-4.5rem] z-[-1]'>{item.num} </div>
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

export default Works;
