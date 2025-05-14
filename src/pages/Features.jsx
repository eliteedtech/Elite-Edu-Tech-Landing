import React from 'react'
//import Button from './components/ui/Button2.jsx';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button2';

export default function Features() {

  const products = [{title: "Smart CBT",
                    text: "Our advanced Computer-Based Testing system makes assessments seamless, secure, and smart with automatic grading and detailed analysis.",
                    listProducts: ["Anti-cheating technology with randomized questions", "Instant results and performance analytics", "Support for multiple question types"],
                    cardName: "Smart CBT Illustration",  },
                    {title: "AI Bot",
                      text: "Our intelligent AI assistant helps students with homework, answers questions, and provides 24/7 learning support tailored to each student's needs.",
                      listProducts: ["Natural language processing for human-like interactions", "Personalized learning recommendations", "Multilingual support for diverse classrooms"],
                      cardName: "AI Bot Illustration",  },
                    {title: "Real-Time Analytics",
                      text: "Gain valuable insights into student performance, financial trends, and operational efficiency with our powerful data analytics tools.",
                      listProducts: ["Customizable dashboards for administrators", "Trend analysis and predictive insights", "Exportable reports for stakeholders"],
                      cardName: "Analytics Dashboard",  },
                    {title: "Offline Mode",
                      text: "Keep learning uninterrupted with our robust offline functionality, perfect for regions with intermittent internet connectivity.",
                      listProducts: ["Automatic synchronization when back online", "Full access to learning materials and assessments", "Minimal data usage when syncing"],
                      cardName: "Offline Mode",  },
                    {title: "Gamified Rewards",
                      text: "oost engagement and motivation with our interactive rewards system that makes learning fun through achievements, badges, and friendly competition.",
                      listProducts: ["Achievement badges and level progression", "Leaderboards for healthy competition", "Customizable reward systems per school"],
                      cardName: "Gamified Rewards",  }
                  ]
  return (
    <section className='features-wrapper min-h-screen pb-16'>
      <div className=' container px-8 m-auto pt-8'>
        <div className="flex flex-col py-8">
          <h1 className="tracking-wide text-indigo-800 font-bold text-2xl text-center mt-5 md:text-3xl">Smart Features That Transform Learning</h1>
        </div>
        {products.map((product, index) => { 
          const isEven = index % 2 === 0;
          
          return(
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-15 md:mb-25'>
            <div className={`border-indigo-200  ${isEven ? "md:order-2" : "md:order-1"} mb-10 md:mb-0`}>
              <div className="w-full max-w-xl h-[300px] text-2xl flex justify-center items-center md:mb-24">
                <img alt={product.cardName} src={`https://placehold.co/600x400/blue/white?text=${product.cardName}`} class="hover:shadow-indigo-200/50 transition rounded-xl shadow-2xl" />   
              </div>
            </div>
            <div className={`${isEven ? "md:order-1" : "md:order-2"} mb-10 md:mb-0`}>
              <h1 className='font-bold text-indigo-600 text-2xl mt-2'>{product.title}</h1>
              <p className="text-gray-600 my-4">{product.text}</p>
              {product.listProducts.map((listProduct, i) => (
                <ul className="mb-1">
                  <li key={i} className="mb-1 flex gap-2"><span className='text-blue-600'><Check /></span>{listProduct}</li>
              </ul>
              ))}
              <div className="max-w-[120px] mt-5"><Button type={"btn-danger"} text={"Try it Now"}/></div>
            </div>
          </div>
        )})}
      </div>
    </section>
  )
}
