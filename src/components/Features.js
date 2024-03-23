import React from 'react';

const feature = [
    {
        title:'Personalized Nutrition Plans',
        img:'Icon-3.png',
        text:'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.',
    },
    {
        title:'Guidance from Certified Nutritionists',
        img:'Icon-1.png',
        text:'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.',
    },
    {
        title:'Food Tracking and Analysis',
        img:'Icon-5.png',
        text:'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.',
    },
    {
        title:'Meal Planning and Recipes',
        img:'Icon-6.png',
        text:'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.',
    },
    {
        title:'Lifestyle and Behavior Coaching',
        img:'Icon-2.png',
        text:'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.',
    },
    {
        title:'Nutritional Education and Workshops',
        img:'backpack.fill.png',
        text:'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.',
    },
];

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features</h1>
          <h2 className="text-sm font-medium title-font text-gray-900 md:mx-32">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {feature.map((item, index)=>(
              <div className="p-4 md:w-1/2" key={index}>
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-200 text-white flex-shrink-0">
                      {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg> */}
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

export default Features;
