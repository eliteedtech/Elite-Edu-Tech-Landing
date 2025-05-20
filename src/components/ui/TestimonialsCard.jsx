"use client"
import AOS from "aos";
import "aos/dist/aos.css"
import StarsRating from "./StarsRating";
import { useEffect } from "react";

export default function TestimonialsCard({ Letters, rating, testimony, testifierFirstName, testifierLastName, testifierInfo }) {
    useEffect(() => {
      
        AOS.init({
           duration: 3000,
      once: true,  
        })
    }, [])
 
   
    return (
      <>
      <div
        className="my-5 mb-0 w-full md:max-w-[300px]  md:p-5 lg:max-w-[400px] md:max-h-[512px]"
        data-aos="fade-up "
      >
        <div className="flex align-start dark:shadow-xl lg:h-90 sm:h-110 md:w-90 shadow-2xl py-4 px-6 flex-col rounded-xl bg-white dark:bg-gray-950 w-full justify-around items-center dark:rounded-xl dark:border dark:border-[#A51C30]  dark:shadow-[0_0_10px_0_rgba(0,0,0,0.1)] dark:rounded-xl ">
          <div className="flex space-x-3 w-full justify-left items-start">
            {/* <img
              src={image}
              alt=""
              className="rounded-full my-2 mr-5 size-12 md:ml-1"
            /> */}
            <div className="w-16 h-12 rounded-full font-[28px] bg-[#0000FF] flex justify-center align-center text-white text-2xl">
              <div className="flex items-center justify-center">
                {Letters}
              </div>
            </div>
            <div className="w-full text-left">
              <h4 className="font-bold text-[#00356B] dark:text-[#A51C30]">
                {testifierFirstName} {testifierLastName}
              </h4>
              <p className="text-gray-700 dark:text-gray-400 w-full text-sm mb-1">
                {testifierInfo}
              </p>
            </div>
          </div>

          <div className="flex mt-2 justify-start w-full">
            <svg
              class="w-8 h-8 text-blue-200 mb-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="Windframe_u8pKPMBoC"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
            </svg>
          </div>

          <div className="md:flex md:flex-col md:mx-2 mb-3 md:w-full ">
            <p className="text-gray-700 dark:text-gray-400 my-5 mt-1">
              {testimony}
            </p>
            <p className="w-full text-left dark:text-gray-400">
              <StarsRating rating={rating} />
            </p>
          </div>
        </div>
      </div>
      </>
    );
}
