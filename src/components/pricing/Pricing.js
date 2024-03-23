import React from 'react';
import { useState } from 'react';

const monthsData = [
   {
    name:'Basic Plan',
    discount:'Up to 50% off on Yearly Plan',
    price:'$49',
    feature:['Personalized nutrition plan tailored to your goals and dietary preferences.','Access to our mobile app for convenient meal tracking and progress monitoring.','Email support to address your questions and concerns.','Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.']
},
{
    name:'Premium Plan',
    discount:'Up to 50% off on Yearly Plan',
    price:'$79',
    feature:['All the features included in the Basic Plan.','One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.','Recipe recommendations and meal planning assistance.','Priority email support for quicker responses to your inquiries.','Educational resources and guides to deepen your understanding of nutrition and healthy habits.']
},
   {
    name:'Ultimate Plan',
    discount:'Up to 50% off on Yearly Plan',
    price:'$99',
    feature:['All the features included in the Plus Plan.','Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.','Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.','Customized meal plans and recipe suggestions based on your preferences and nutritional needs.','Priority email and phone support for immediate assistance.']
},

];

const yearsData = [
   {
    name:'Basic Plan',
    discount:'Up to 50% off on Yearly Plan',
    price:'$249',
    feature:['Personalized nutrition plan tailored to your goals and dietary preferences.','Access to our mobile app for convenient meal tracking and progress monitoring.','Email support to address your questions and concerns.','Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.']
},
{
    name:'Premium Plan',
    discount:'Up to 50% off on Yearly Plan',
    price:'$474',
    feature:['All the features included in the Basic Plan.','One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.','Recipe recommendations and meal planning assistance.','Priority email support for quicker responses to your inquiries.','Educational resources and guides to deepen your understanding of nutrition and healthy habits.']
},
   {
    name:'Ultimate Plan',
    discount:'Up to 50% off on Yearly Plan',
    price:'$594',
    feature:['All the features included in the Plus Plan.','Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.','Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.','Customized meal plans and recipe suggestions based on your preferences and nutritional needs.','Priority email and phone support for immediate assistance.']
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
        <div>
        <div className="flex justify-center rounded overflow-hidden mb-2">
  <button onClick={handleMonth} className={`py-1 px-4 ${selectedPlan === 'month' ? 'bg-indigo-300 text-white focus:outline-none border-2 border-indigo-300' : 'border-2 border-indigo-300'}`}>Monthly</button>
  <button onClick={handleYear} className={`py-1 px-4 ${selectedPlan === 'year' ? 'bg-indigo-300 text-white focus:outline-none border-2 border-indigo-300' : 'border-2 border-indigo-300'}`}>Annually</button>
</div>
      <h1 className="text-md opacity-80 text-center text-gray-900 mb-6">Save 50% on Yearly</h1>
        <div className="flex flex-wrap -m-4">
       {data.map((item)=>(
           <div className=" p-4 xl:w-1/3 md:w-1/2 w-full">
           <div className="bg-indigo-10 p-6 rounded-lg flex flex-col relative overflow-hidden">
             <h2 className="text-lg title-font mb-1 font-semibold">{item.name}</h2>
             <h2 className="text-sm mb-5">{item.discount}</h2>
             <div className='bg-indigo-80 border-indigo-200 border-[1px] px-2 py-3 rounded-lg mb-4'>
             {item.feature.map((f, index) => (
    <div key={index} className={`mb-5 py-1 ${index !== item.feature.length - 1 ? 'border-b-[1px] border-indigo-200' : ''}`}>
        <p className="flex items-center text-gray-600">{f}</p>
    </div>
))}

           </div>
            {item.name==='Ultimate Plan'? <div className='bg-indigo-300 px-2 py-3 rounded-lg mb-4'>
            <p className="flex items-center text-white mb-5">The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.
            </p>
           </div>:null}
            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4">
               <span>{item.price}</span>
               <span className="text-lg ml-1 font-normal text-gray-500">{`${selectedPlan === 'month' ? '/mo' : '/year'}`}</span>
             </h1>
             <button className="mt-auto text-bold text-indigo-300 bg-indigo-200 py-2 px-4 w-full focus:outline-none hover:bg-indigo-200 rounded text-center">Choose Plan
             </button>
           </div>
         </div>
       ))}
        </div></div>
      </div>
    </section>
  );
};

export default Pricing;
