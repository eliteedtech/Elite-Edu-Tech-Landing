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
  useEffect(()=> {
      AOS.init({
        duration: 1000,
      })
    })
  return (
    
   <div className=" pt-20 pb-10  mx-auto bg-blue-50 ">
     <div className=" mx-auto ">
    <h1 className=" text-center text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">Simple, Transparent Pricing</h1>
    <p className="text-center text-xl  font-semibold text-gray-600 not-italic">Choose the plan that works best for your educational needs.</p>
        
     <div data-aos="zoom-out-up" className=" p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  mx-auto  border-gray-100 mt-3 ">
      {pricingPlans.map((plan, index) => (
        
        <Pricingcard key={index} {...plan} btnlinks={button[index]}/>
        

      ))}
    </div>
    
   <div className="px-4"data-aos="zoom-out-right"> <Addons items={addonPlans} /></div>
   </div>
   </div>
  );
}

export default App;
