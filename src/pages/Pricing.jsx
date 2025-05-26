import React from "react";
import Pricingcard from "../components/Pricingcard";
import  pricingPlans from "../components/Pricingplans";
import button from "../components/Bottons";
import Addons from "../components/addons";
import addonPlans from "../components/addonplans";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
   
  return (
    <div className=" flex  flex-col items-center  justify-center   my-3  ">
      <div className=" w-full max-w-6xl px-4 ">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#00356B] dark:text-[#A51C30] mb-1">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400 not-italic">
          Choose the plan that works best for your educational needs.
        </p>
      
        
        
        <div data-aos="zoom-out-up" className=" mt-8 flex gap-4 items-center justify-center  ">
          {pricingPlans.map((plan, index) => (
            <Pricingcard key={index} {...plan} btnlinks={button[index]} />
          ))}
        </div>
        
        <div  data-aos="zoom-out-right">
          <Addons items={addonPlans} />
        </div>
      </div>
    </div>
  );
}



 export default App;
