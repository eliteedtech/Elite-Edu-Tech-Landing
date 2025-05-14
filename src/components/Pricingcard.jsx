
import React from 'react';
import { Check,X } from 'lucide-react';


const Pricingcard = ({ title, price, description, features, isPopular, isEnterprice, btnlinks }) => {
  const specialFeatures = [
    "Biometric attendance",
    "Financial management",
    "Student portal",
  ];
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl shadow-md h-full bg-white 
        hover:shadow-xl transition-transform duration-300 overflow-hidden    ${
          isPopular ? 'scale-105' : 'hover:shadow-[0_4px_10px_rgba(59,130,246,0.5)]'
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
    >
    
      {isPopular && (
        <div className="bg-red-800 text-white font-bold text-xs px-3 py-1 rounded-bl-xl  absolute top-0 right-0 uppercase z-10 shadow">
          Popular
        </div>
      )}

      <div className={`p-6 border-t-4 ${isPopular ?  "border-red-800" :  "border-indigo-600" }`}>
        <h1 className="text-xl font-bold text-indigo-900 mb-3 mt-3">{title}</h1>
        <p className="mb-4  text-gray-600">{description}</p>
        {/* <p className='mb-4'>{price}</p> */}
        
      
        <ul className="space-y-3 mb-6">
  {features.map((feature, index) => {
    const isSpecialInStarter =
      title === "Starter" &&
      (feature === "Financial management" || feature === "Student portal");

    const isSpecialFeature =
      feature === "Biometric attendance" || isSpecialInStarter;

    return (
      <li
        key={index}
        className={`flex items-start   ${
          isSpecialFeature ? ' text-gray-400' : 'text-gray-500'
        }  `}
      >
         
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 mt-0.5 ${
            isSpecialFeature ? 'bg-gray-500' : 'bg-indigo-600'
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

    
      <div className="bg-gray-50 py-4 px-6 rounded-b-md">
        <a
          href="#"
          className={`rounded-md w-full block text-center px-4 py-2 mt-1 font-medium
          ${
            isPopular
              ? 'bg-red-800 text-white hover:bg-red-900'
              : isEnterprice
              ? 'bg-indigo-50 text-indigo-600 border border-blue-600 hover:bg-indigo-100'
              : 'bg-indigo-600 text-white  hover:bg-indigo-900 '
          }`}
        >
          {btnlinks}
        </a>
      </div>
    </div>
  );
};

export default Pricingcard;
