import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const monthsData = [
  {
    name: 'Basic Plan',
    discount: 'Up to 50% off on Yearly Plan',
    price: '$49',
    feature: ['Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.']
  },
  {
    name: 'Premium Plan',
    discount: 'Up to 50% off on Yearly Plan',
    price: '$79',
    feature: ['Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you will receive video consultations, priority support, and personalized recipe recommendations.']
  },
  {
    name: 'Ultimate Plan',
    discount: 'Up to 50% off on Yearly Plan',
    price: '$99',
    feature: ['Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.']
  },
];

const yearsData = [
  {
    name: 'Basic Plan',
    discount: 'Up to 50% off on Yearly Plan',
    price: '$294',
    feature: ['Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.']
  },
  {
    name: 'Premium Plan',
    discount: 'Up to 50% off on Yearly Plan',
    price: '$474',
    feature: ['Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you will receive video consultations, priority support, and personalized recipe recommendations.']
  },
  {
    name: 'Ultimate Plan',
    discount: 'Up to 50% off on Yearly Plan',
    price: '$594',
    feature: ['Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.']
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('month');

  const handleMonth = () => {
    setSelectedPlan('month');
  };

  const handleYear = () => {
    setSelectedPlan('year');
  };

  const data = selectedPlan === 'month' ? monthsData : yearsData;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto mt-10">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Pricing</h1>
          <h2 className="text-sm font-medium title-font text-gray-900 md:mx-32">We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources</h2>
        </div>
        <div>
        <div className="flex justify-center rounded overflow-hidden mb-2">
  <button onClick={handleMonth} className={`py-1 px-4 ${selectedPlan === 'month' ? 'bg-indigo-300 text-white focus:outline-none border-2 border-indigo-300' : 'border-2 border-indigo-300'}`}>Monthly</button>
  <button onClick={handleYear} className={`py-1 px-4 ${selectedPlan === 'year' ? 'bg-indigo-300 text-white focus:outline-none border-2 border-indigo-300' : 'border-2 border-indigo-300'}`}>Annually</button>
</div>
          <h1 className="text-md opacity-80 text-center text-gray-900 mb-6">Save 50% on Yearly</h1>
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => (
              <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-200 flex flex-col relative overflow-hidden">
                  <h2 className="text-md tracking-widest title-font mb-1 font-medium">{item.name}</h2>
                  <h2 className="text-sm mb-5">{item.discount}</h2>
                  {item.feature.map((f, idx) => (
                    <p key={idx} className="flex items-center text-gray-600 mb-5">{f}</p>
                  ))}
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4">
                    <span>{item.price}</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">{`/${selectedPlan === 'month' ? 'mo' : 'year'}`}</span>
                  </h1>
                  <Link to='/pricing'>    <button className="text-center mt-auto text-indigo-300 bg-indigo-200 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-200 rounded">Choose Plan
                  </button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

