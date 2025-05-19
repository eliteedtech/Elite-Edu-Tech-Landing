
import React,{useEffect} from 'react';
import { Check,X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Pricingcard = ({ title, price, description, features, isPopular, isEnterprice, btnlinks }) => {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
    })
  }, [])
  const specialFeatures = [
    "Biometric attendance",
    "Financial management",
    "Student portal",
  ];
  return (
    <div data-aos="zoom-in-out"
      className={`relative  h-full flex flex-col justify-between  rounded-2xl shadow-md  bg-white dark:bg-gray-950 
        hover:shadow-xl transition-transform duration-300 overflow-hidden dark:border dark:border-[#00356B] ${
          isPopular ? '   border-[#A51C30] dark:border-[#A51C30]' : 'hover:shadow-[0_4px_10px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_4px_10px_rgba(59,130,246,0.5)]'
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
    >
    
      {isPopular && (
        <div className="bg-[#A51C30] text-white dark:text-[#00356B] font-bold text-xs px-3 py-2 rounded-bl-xl  absolute top-0 right-0 uppercase z-10 shadow dark:shadow-[0_4px_10px_rgba(59,130,246,0.5)]">
          Popular
        </div>
      )}

      <div className={`pl-6 py-2 border-t-4 ${isPopular ?  "border-[#A51C30]" :  "border-[#00356B]" }`}>
        <h1 className="text-xl font-bold text-[#00356B] dark:text-[#A51C30] mb-2 mt-2">{title}</h1>
        <p className="mb-2 text-gray-600 dark:text-gray-400">{description}</p>
        {/* <p className='mb-4'>{price}</p> */}
        
      
        <ul className="space-y-2">
        {features.map((feature, index) => {
        const isSpecialInStarter =
        title === "Starter" &&
        (feature === "Financial management" || feature === "Student portal");

      const isSpecialFeature =
      feature === "Biometric attendance" || isSpecialInStarter;

    return (
      <li
        key={index}
        className={`flex items-start  lg:text-base  md:text-base sm:text-xs dark:text-gray-400  ${
          isSpecialFeature ? ' text-gray-400' : 'text-gray-500'
        }  `}
      >
         
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 mt-0.5 dark:text-gray-400 ${
            isSpecialFeature ? 'bg-gray-500' : 'bg-[#00356B] dark:bg-[#A51C30]'
          }`}
        >
          {isSpecialFeature ? (
            <X className="w-3 h-3 text-white" />
          ) : (
            <Check className="w-3 h-3 text-white" />
          )}
        </div>
        <span>
          {feature}
        </span>
      </li>
    );
  })}
        </ul>


      </div>

    
      <div className="bg-gray-50 dark:bg-gray-950 py-2 px-3 rounded-b-md dark:border-gray-950">
        <a
          href="#"
          className={`rounded-md w-full block text-center px-4 py-2 mb-1  font-medium
          ${
            isPopular
              ? 'bg-[#A51C30] text-white hover:bg-[#A51C30]'
              : isEnterprice
              ? 'bg-[#00356B] dark:bg-[#A51C30] text-[#00356B] dark:text-[#A51C30] border border-[#00356B] dark:border-[#A51C30] hover:bg-[#00356B] dark:hover:bg-[#A51C30]'
              : 'bg-[#00356B] dark:bg-[#A51C30] text-white  hover:bg-[#00356B] dark:hover:bg-[#A51C30] '
          }`}
        >
          {btnlinks}
        </a>
      </div>
    </div>
  );
};

export default Pricingcard;
