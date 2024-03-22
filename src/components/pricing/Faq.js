import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-4 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">FAQ</h1>
        <h2 className="text-sm font-medium title-font text-gray-900 md:mx-32">We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.</h2>
      </div>
      <div className='flex max-[770px]:flex-col max-[770px]:gap-6 max-[770px]:items-center items-start justify-between'>
      <div className="bg-indigo-10 px-6 py-8 flex flex-col md:w-[65%] max-[770px]:w-full divide-y divide-[#dbdbd9] rounded-lg">
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> How does the billing work?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
              billing options, including monthly and annual subscription plans, as well as pay-as-you-go
              pricing for certain services. Payment is typically made through a credit card or other
              secure online payment method.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> Can I get a refund for my subscription?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
              guarantee for most of its subscription plans. If you are not satisfied with your
              subscription within the first 30 days, you can request a full refund. Refunds for
              subscriptions that have been active for longer than 30 days may be considered on a
              case-by-case basis.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> How do I cancel my subscription?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
              log in to your account and navigate to the subscription management page. From there, you
              should be able to cancel your subscription and stop future billing.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> Is there a free trial?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
              for a limited time. During the trial period, you will have access to a limited set of
              features and functionality, but you will not be charged.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> How do I contact support?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
              have any other questions, you can contact the company's support team by submitting a support
              request through the website or by emailing support@ourwebsite.com.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span> Do you offer any discounts or promotions?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
              from time to time. To stay up-to-date on the latest deals and special offers, you can sign
              up for the company's newsletter or follow it on social media.
            </p>
          </details>
        </div>
      </div>
      <div className='flex flex-col gap-4 items-center bg-indigo-10 max-[770px]:w-full p-6 md:w-[30%] rounded-lg'>
        <img src="logo-pricing.png" alt="" />
        <h1 className='font-title text-lg'>Ask you question</h1>
        <h3 className='font-light text-md'>Feel free to Ask a question on anytime</h3>
        <Link to='/contact'>   <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded">Ask a Question
        </button></Link>
      </div>
      </div>
    </div>
  </section>
//     <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
//     <div className="mx-auto px-5">
//       <div className="flex flex-col items-center">
//         <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
//         <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions
//         </p>
//       </div>
//       <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//               <span> How does the billing work?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </summary>
//             <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
//               billing options, including monthly and annual subscription plans, as well as pay-as-you-go
//               pricing for certain services. Payment is typically made through a credit card or other
//               secure online payment method.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//               <span> Can I get a refund for my subscription?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </summary>
//             <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
//               guarantee for most of its subscription plans. If you are not satisfied with your
//               subscription within the first 30 days, you can request a full refund. Refunds for
//               subscriptions that have been active for longer than 30 days may be considered on a
//               case-by-case basis.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//               <span> How do I cancel my subscription?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </summary>
//             <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
//               log in to your account and navigate to the subscription management page. From there, you
//               should be able to cancel your subscription and stop future billing.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//               <span> Is there a free trial?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </summary>
//             <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
//               for a limited time. During the trial period, you will have access to a limited set of
//               features and functionality, but you will not be charged.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//               <span> How do I contact support?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </summary>
//             <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
//               have any other questions, you can contact the company's support team by submitting a support
//               request through the website or by emailing support@ourwebsite.com.
//             </p>
//           </details>
//         </div>
//         <div className="py-5">
//           <details className="group">
//             <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//               <span> Do you offer any discounts or promotions?</span>
//               <span className="transition group-open:rotate-180">
//                 <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
//                   <path d="M6 9l6 6 6-6" />
//                 </svg>
//               </span>
//             </summary>
//             <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
//               from time to time. To stay up-to-date on the latest deals and special offers, you can sign
//               up for the company's newsletter or follow it on social media.
//             </p>
//           </details>
//         </div>
//       </div>
//     </div>
//   </div>
  )
}

export default Faq
