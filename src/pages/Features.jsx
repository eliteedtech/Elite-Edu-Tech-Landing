import React, { useEffect} from 'react'
// -----------Animation----------
import Aos from 'aos'
import 'aos/dist/aos.css';
// -----------Components--------
//import Button from './components/ui/Button2.jsx';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button2';

// -----------Images-----------
import OurTeam from "../assets/about/our-team4.jpg"
import Achievement from "../assets/features-images/Analytics4.jpg"
import AI from "../assets/features-images/AI.jpg"
import Analytics from "../assets/features-images/Analytics.jpg"
import CBT from "../assets/features-images/CBT4.jpg"
import Offline from "../assets/features-images/Offline.jpg"

export default function Features() {

  const products = [{title: "Smart CBT",
                    text: "Our advanced Computer-Based Testing system makes assessments seamless, secure, and smart with automatic grading and detailed analysis.",
                    listProducts: ["Anti-cheating technology with randomized questions", "Instant results and performance analytics", "Support for multiple question types"],
                    cardName: "Smart CBT Illustration",  image: CBT},
                    {title: "AI Bot",
                      text: "Our intelligent AI assistant helps students with homework, answers questions, and provides 24/7 learning support tailored to each student's needs.",
                      listProducts: ["Natural language processing for human-like interactions", "Personalized learning recommendations", "Multilingual support for diverse classrooms"],
                      cardName: "AI Bot Illustration",  image: AI},
                    {title: "Real-Time Analytics",
                      text: "Gain valuable insights into student performance, financial trends, and operational efficiency with our powerful data analytics tools.",
                      listProducts: ["Customizable dashboards for administrators", "Trend analysis and predictive insights", "Exportable reports for stakeholders"],
                      cardName: "Analytics Dashboard",  image: Analytics},
                    {title: "Offline Mode",
                      text: "Keep learning uninterrupted with our robust offline functionality, perfect for regions with intermittent internet connectivity.",
                      listProducts: ["Automatic synchronization when back online", "Full access to learning materials and assessments", "Minimal data usage when syncing"],
                      cardName: "Offline Mode",  image: Offline},
                    {title: "Gamified Rewards",
                      text: "Boost engagement and motivation with our interactive rewards system that makes learning fun through achievements, badges, and friendly competition.",
                      listProducts: ["Achievement badges and level progression", "Leaderboards for healthy competition", "Customizable reward systems per school"],
                      cardName: "Gamified Rewards",  image: Achievement}
                  ]
    
   const featImages = [{image: CBT}, {image: AI}, {image: Analytics}, {image: Offline}, {image: Achievement},]

    useEffect( () =>{
        Aos.init({
          duration: 1500,
        })
      }, )
                    
  return (
    <section className='features-wrapper min-h-screen pb-16'>
      {/* <div className="features-hero bg-gradient-to-b relative overflow-hidden from-blue-900 via-blue-800 to-white min-h-screen">
        <div data-aos="zoom-in" className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className='mt-10 font-extrabold text-3xl md:text-5xl text-center text-white pt-38'>Smart School Management,</h1>
          <h3 className='text-center text-lg md:text-xl text-white break-words md:w-[60%] mx-auto py-10'>Elite EdTech provides cutting-edge technology solutions for schools across Nigeria, streamlining administration and enhancing the learning experience.</h3>
          <div className="flex justify-center gap-6">
            <div className="pt-1">
              <Button type="btn-custom" 
                customBtnStyle="w-full hover:scale-105 text-white bg-red-600 px-5 font-semibold p-[10px] min-w-24 font-sans cursor-pointer rounded-lg transition duration-200 shadow-2xl cursor-pointer hover:shadow-xl " 
                text="Get Started" /></div>
            <div className=""><Button type="btn-custom" 
                customBtnStyle="w-full hover:scale-105 text-indigo-600 border-2 border-white px-5 p-[14px] min-w-24 font-sans text-white font-bold rounded-lg transition duration-200 cursor-pointer shadow-2xl cursor-pointer  hover:shadow-xl" 
                text="Request a Demo" /></div>
          </div>
          <div className="flex justify-center gap-5 text-3xl pt-5">
            <i className='animate-bounce delay-150'>🎓</i>
            <i className='animate-pulse'>📖</i>
            <i className='animate-bounce delay-150'>🧠</i>
          </div>
        </div>
      </div> */}
      <div className='container px-8 m-auto dark:bg-gray-950'>
        <div className="flex flex-col py-8">
          <h1 className="tracking-wide text-[#00356B] dark:text-[#A51C30] font-bold text-2xl text-center mt-5 md:text-3xl">Smart Features That Transform Learning</h1>
        </div>
        {products.map((product, index) => { 
          const isEven = index % 2 === 0;
          
          return(
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-10 '>
            <div className={`border-indigo-200  ${isEven ? "md:order-2" : "md:order-1"} mb-10 md:mb-0`} data-aos={isEven ? "zoom-in-left" : "zoom-in-right"}>
              <div className="w-full max-w-xl h-[300px] text-2xl flex justify-center items-center md:mb-24">
                <img 
                    alt={product.cardName} 
                    src={product.image} 
                    className="md:w-[550px] h-[250px] md:h-[350px] hover:shadow-indigo-200/50 transition rounded-xl shadow-2xl" />   
              </div>
            </div>
            <div className={`${isEven ? "md:order-1" : "md:order-2"}`} data-aos={isEven ? "zoom-in-right" : "zoom-in-left"}>
              <h1 className='font-bold text-[#00356B] dark:text-[#A51C30] text-2xl mt-2'>{product.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 my-4">{product.text}</p>
              {product.listProducts.map((listProduct, i) => (
                <ul className="mb-1">
                  <li key={i} className="mb-1 flex gap-2 text-[#00356B] dark:text-[#A51C30]"><span className='text-[#00356B] dark:text-[#A51C30]'><Check /></span>{listProduct}</li>
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
