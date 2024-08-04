import React,{useEffect} from "react";
import Pricing from "./components/pricing/Pricing";
import Table from "./components/pricing/Table";
import Faq from "./components/pricing/Faq";

const Prices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHash();

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);
  return (
    <div id="top" className="container mx-auto px-5 py-8">
      <div className="bg-indigo-10 flex flex-col gap-8 items-center py-10 px-8 sm:px-20 relative">
        <div className="absolute inset-0 top-0 flex items-start justify-center">
          <img className="h-auto max-w-full" src="Abstrac-bg.png" alt="" />
        </div>
        <div className=" z-[1]">
          <img src="T-logo.png" alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center  z-[1]">
          <div>
            <h1 className="text-2xl font-semibold">
            Our Pricing
            </h1>{" "}
          </div>
          <div>
            {" "}
            <p className="text-center">
            At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle
            </p>{" "}
          </div>
        </div>
      </div>
      <Pricing/>
      <Table/>
      <Faq/>
    </div>
  );
};

export default Prices;
