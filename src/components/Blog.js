import React from 'react';

const blog = [
    {category:'Weight Loss',
    title:'The Benefits of Hydration for Weight Loss',
    text:'Discover how staying hydrated can support your weight loss goals and improve overall health.',
    img:'blog.png',
    date:"23 May 2023 - 5 min read",
    author:'Mark Wilson',authImg:'Image-4.png'
    },
    {category:'Mindful Eating',
    title:'Cultivating a Healthy Relationship with Food',
    text:'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
    img:'blog-1.png',
    author:'Emily Johnson',authImg:'Image-1.png',
    date:"23 May 2023 - 5 min read" 
    },
    {category:'Understanding Macronutrients',
    title:'Carbohydrates, Proteins, and Fats',
    text:'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
    img:'blog-2.png',
    author:'Sarah Thompson',authImg:'Image-2.png',
    date:"23 May 2023 - 5 min read"  
    },
    {category:'Healthy Snacks on the Go',
    title:'Quick and Nutritious Options',
    text:'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
    img:'blog-3.png',
    author:'Emily Johnson',authImg:'Image-1.png',
    date:"23 May 2023 - 5 min read"  
    },
];

const Blogs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto mt-10">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Blogs</h1>
          <h2 className="text-sm font-medium title-font text-gray-900 md:mx-32">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {blog.map((item, index)=>(
               <div className="p-4 md:w-1/3" key={index}>
               <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.img} alt="blog" />
                 <div className="p-6">
                   <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.category}</h2>
                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                   <p className="leading-relaxed mb-3">{item.text}</p>
                   <div className="flex items-center flex-wrap">
                     <div className="flex items-center">
                       <img alt="author" className="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.authImg} />
                       <div className="flex-grow">
                         <h2 className="text-gray-900 title-font text-md">{item.author}</h2>
                         <p className="text-gray-500 text-sm">{item.date}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
