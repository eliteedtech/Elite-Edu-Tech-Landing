"use client"

import AOS from "aos";
import "aos/dist/aos.css"
import StarsRating from "./StarsRating";
import { useEffect } from "react";

export default function TestimonialsCard({ image, rating, isActive, testimony, testifier, testifierInfo }) {
    useEffect(() => {
        AOS.init({})
    }, [])
 
   
    return (
      <div
        className="my-10 mb-0 w-full md:max-w-[216px]  lg:max-w-[384px]  md:max-h-[512px] md:mr-5  "
        data-aos="fade-left "
      >
        <div className="flex shadow-xl py-5 px-6   flex-col rounded-xl bg-white w-full justify-center items-center ">
          <div className="flex w-full justify-left items-center">
            <img
              src={image}
              alt=""
              className="rounded-full my-2 mr-5 size-12 md:ml-1"
            />
            <div className="w-full text-left">
              <h4 className="font-bold text-indigo-800">{testifier}</h4>
              <p className="text-gray-700  text-sm mb-1">{testifierInfo}</p>
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
            <p className="text-gray-700 my-5 mt-1">{testimony}</p>
            <p className="w-full text-left">
              <StarsRating rating={rating} />
            </p>
          </div>
        </div>
      </div>
    );
}
