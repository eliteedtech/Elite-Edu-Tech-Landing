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
    <div className="min-h-screen flex  items-center  justify-center">
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#00356B] dark:text-[#A51C30] mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-xl font-semibold text-gray-600 dark:text-gray-400 not-italic">
          Choose the plan that works best for your educational needs.
        </p>
        
        <div data-aos="zoom-out-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 w-full max-w-6xl mx-auto justify-items-center">
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
