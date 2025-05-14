import { useState } from "react";
// import Carousel from "../components/Carousel";
import TestimonialsCard from "../components/TestimonialsCard";
// import { Circle } from "lucide-react";
let testimonials = [
  {
    image: "assets/testimonial images/alex-suprun.jpg",
    testimony:
      "1- The AI Learning Assistant has completely changed how I study. It's like having a personal tutor available 24/7. My grades have improved significantly since I started using Elite Edu Tech, and I feel much more confident in my abilities.",
    testifier: "Alex Prun",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: true,
    rating: 5,
  },
  {
    image: "assets/testimonial images/diego.jpg",
    testimony:
      "Person 2  - The AI Learning Assistant has completely changed how I study.It's like having a personal tutor available 24/7. My grades have improved significantly since I started using Elite Edu Tech, and I feel much more confident in my abilities.",
    testifier: "Diego",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: false,
    rating: 2,
  },
  {
    image: "assets/testimonial images/alex-suprun.jpg",
    testimony:
      "Person 3 - The AI Learning Assistant has completely changed how I study.It's like having a personal tutor available 24/7. My grades have improved significantly since I started using Elite Edu Tech, and I feel much more confident in my abilities.",
    testifier: "Oguy Yagiz",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: false,
    rating: 4,
  },
];

export default function Testimonial() {
  return (
    <div className=" flex justify-center w-full bg-indigo-50 ">
      <div className="py-20 mx-5 flex flex-col lg:max-w-[1024px] md:max-w-[737px] sm:max-w-[600px] justify-center items-center">
        <h3 className="text-3xl font-bold text-indigo-900 mb-4">
          What Our Users Say
        </h3>
        <p className="text-gray-600 mb-5 text-center text-md">
          Hear from schools that have transformed their management with Elite
          EdTech
        </p>

        {/* Testimoials Section */}
        <div className="w-full  ">
          <div className="w-full px-5 flex flex-col md:flex-row justify-center items-center md:justify md:items-center">
            {testimonials.map((testimonial, index) => {
              return (
                <>
                  <TestimonialsCard
                    image={testimonial.image}
                    testimony={testimonial.testimony}
                    testifier={testimonial.testifier}
                    testifierInfo={testimonial.testifierInfo}
                    isActive={testimonial.isActive}
                    rating={testimonial.rating}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
