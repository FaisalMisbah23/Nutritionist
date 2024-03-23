import React from 'react'
import { useState } from 'react';

const blogs=[
    {
        category:'Weight Loss Tips',
        title:'10 Effective Strategies for Sustainable Weight Loss',
        content:'Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.',
        img:'B-Section.png'
    },
    {
        category:'Weight Loss Tips',
        title:'The Role of Portion Control in Weight Management',
        content:'Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.',
        img:'B-Section-1.png'
    },
    {
        category:'Weight Loss Tips',
        title:'Understanding Emotional Eating and How to Overcome It',
        content:'Explore the connection between emotions and eating habits. Get valuable insights on how to identify emotional triggers and develop healthier coping mechanisms.',
        img:'B-Section-2.png'
    },
    {
        category:'Weight Loss Tips',
        title:'How to Stay Motivated on Your Weight Loss Journey',
        content:'Find effective strategies to stay motivated and overcome obstacles during your weight loss journey. Get tips on setting realistic goals, tracking progress, and celebrating achievements.',
        img:'B-Section-3.png'
    },
    {
        category:'Healthy Eating',
        title:'The Benefits of a Plant-Based Diet for Overall Health',
        content:'Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle.',
        img:'B-Section-4.png'
    },
    {
        category:'Healthy Eating',
        title:'Understanding Macronutrients: Carbohydrates, Proteins, and Fats',
        content:'Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals.',
        img:'B-Section-5.png'
    },
    {
        category:'Fitness and Exercise',
        title:'Cardio vs. Strength Training: Which Is Better for Weight Loss?',
        content:'Explore the benefits of both cardio and strength training exercises for weight loss. Find out how to combine them effectively to maximize your results.',
        img:'B-Section-6.png'
    },
    {
        category:'Fitness and Exercise',
        title:'Building a Home Workout Routine: Tips and Best Practices',
        content:'Discover how to create an effective workout routine at home. Learn about equipment options, exercise techniques, and ways to stay motivated.',
        img:'B-Section-7.png'
    },
    {
        category:'Mindset and Motivation',
        title:'Developing a Positive Body Image and Self-Confidence',
        content:'Explore techniques for cultivating a positive body image and improving self-confidence. Learn how to embrace your body and appreciate your unique qualities.',
        img:'B-Section-8.png'
    },
    {
        category:'Mindset and Motivation',
        title:'Overcoming Self-Sabotage in Your Weight Loss Journey',
        content:'Identify self-sabotaging behaviors and learn strategies to overcome them. Discover how to shift your mindset and develop healthier habits.',
        img:'B-Section-9.png'
    },
    {
        category:'Recipes and Meal Planning',
        title:'Healthy and Flavorful Lunch Ideas for a Busy Lifestyle',
        content:'Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to make and packed with essential nutrients.',
        img:'B-Section-10.png'
    },
    {
        category:'Recipes and Meal Planning',
        title:'Satisfying and Nutritious Dinner Recipes for Weight Loss',
        content:'Find a collection of flavorful dinner recipes that are both satisfying and supportive of your weight loss goals. These recipes are designed to be healthy and delicious.',
        img:'B-Section-11.png'
    },

]

const Section = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <>
 <div className='container mx-auto px-5 py-8'>
      <div className='bg-indigo-10 flex flex-col gap-8 items-center py-10 px-8 sm:px-20 relative'>
      <div className="absolute inset-0 top-0 flex items-start justify-center">
        <img className='h-auto max-w-full' src="Abstrac-bg.png" alt="" />
    </div>
                <div className=' z-[1]'><img src="T-logo.png" alt="" /></div>
                <div className='flex flex-col gap-4 items-center  z-[1]'>
                <div><h1 className='text-2xl font-semibold'>Our Blogs</h1> </div>
                <div> <p>Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.</p> </div>
                </div>
            </div>
        <div className='bg-indigo-300 text-white flex flex-wrap gap-4 md:gap-8 items-center md:justify-between justify-start px-20 py-6'>
          <button className={`${selectedCategory === 'All' ? 'bg-indigo-50 p-3 ' : ''}`} onClick={()=>handleCategoryClick('All')}>All</button>
          <button className={`${selectedCategory === 'Weight Loss Tips' ? 'bg-indigo-50 p-3 ' : ''}`} onClick={()=>handleCategoryClick('Weight Loss Tips')}>Weight Loss Tips</button>
          <button className={`${selectedCategory === 'Healthy Eating' ? 'bg-indigo-50 p-3 ' : ''}`} onClick={()=>handleCategoryClick('Healthy Eating')}>Healthy Eating</button>
          <button className={`${selectedCategory === 'Fitness and Exercise' ? 'bg-indigo-50 p-3 ' : ''}`} onClick={()=>handleCategoryClick('Fitness and Exercise')}>Fitness and Exercise</button>
          <button className={`${selectedCategory === 'Mindset and Motivation' ? 'bg-indigo-50 p-3 ' : ''}`} onClick={()=>handleCategoryClick('Mindset and Motivation')}>Mindset and Motivation</button>
          <button className={`${selectedCategory === 'Recipes and Meal Planning' ? 'bg-indigo-50 p-3 ' : ''}`} onClick={()=>handleCategoryClick('Recipes and Meal Planning')}>Recipes and Meal Planning</button>
        </div>
      </div>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-12 px-12 divide-x-[0.25px] divide-y-[0.25px] divide-indigo-90 ">
       {filteredBlogs.map((blog,index)=>(
         <div key={index} className="px-12 py-4 md:w-1/2 flex flex-col items-start bg-indigo-10 ">
         <span className="text-md font-medium border-b-2 border-indigo-200 mb-12">{blog.category}</span>
         <div className='flex items-center mb-8'>
         <div  className='w-[20%]'>
         </div>
         <div className='w-[80%]'>
         <img className='relative right-0' src={blog.img} alt="" />
         </div></div>
         <div className='flex items-center justify-between max-[640px]:flex-col max-[640px]:gap-4 max-[640px]:items-start'>
         <div className='w-[70%] text-left mr-4 max-[500px]:w-full'>
         <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blog.title}</h2>
         <p className="leading-relaxed">{blog.content}</p>   
         </div>
         <div className='w-[25%] max-[500px]:w-full'>
       <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded font-semibold">Read More</button>
       </div>
       </div>
           </div>
       ))}
      </div>
    </div>
  </section>
  </>
  )
}

export default Section
