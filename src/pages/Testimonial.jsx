import { useState } from "react";
// import Carousel from "../components/Carousel";
import TestimonialsCard from "../components/ui/TestimonialsCard";
// import { Circle } from "lucide-react";
let testimonials = [
  {
    // image: "src/assets/testimonial images/alex-suprun.jpg",
    testifierFirstName: 'Ahmed',
    testifierLastName: 'Muhammad',
    testimony:
      `Elite EdTech has completely transformed how
      we manage our scholl. The attendance system has
      improved punctuality, and parents love being able to
      track their children's progress through the parent portal`,
    // testifier: "Ahmed Muhammad",
    testifierInfo: "Principal, Kano Science Academy",
    isActive: true,
    rating: 5,
  },
  {
    // image: "src/assets/testimonial images/diego.jpg",
    testifierFirstName: 'Fatima',
    testifierLastName: 'Okoye',
    testimony:
      `The grading system has saved me hours of work
      each week. I can now focus more on teaching and less
      on administrative tasks. The student analytics help 
      me identify which students need extra attention.`,
    // testifier: "Fatima Okoye",
    testifierInfo: "Teacher, Lagos Model School",
    isActive: false,
    rating: 5,
  },
  {
    // image: "src/assets/testimonial images/alex-suprun.jpg",
    testifierFirstName: 'David',
    testifierLastName: 'Ibrahim',
    testimony:
      `The student portal makes it easy to keep track of my
      assignments and grades. I can access study materials anytime
      and the notification system ensures i never mis important deadlines or events.`,
    // testifier: "David Ibrahim",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: false,
    rating: 5,
  },
];

export default function Testimonial() {

  return (
    <div className=" flex justify-center w-full bg-white dark:bg-gray-950 ">
      <div className="py-20 mx-5 flex flex-col lg:max-w-[1024px] md:max-w-[737px] sm:max-w-[600px] justify-center items-center">
        <h3 className="text-3xl font-bold text-[#00356B] dark:text-[#A51C30] mb-4">
          What Our Users Say
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5 text-center text-md">
          Hear from schools that have transformed their management with Elite
          EdTech
        </p>

        {/* Testimoials Section */}
        <div className="w-full  ">
          <div className="w-full px-5 flex flex-col md:flex-row justify-center items-center md:justify md:items-center">
            {testimonials.map((testimonial, index) => {

                const firstLetter = testimonial.testifierFirstName?.charAt(0)?.toUpperCase() || "";
                const lastLetter = testimonial.testifierLastName?.charAt(0)?.toUpperCase() || "";

              return (
                  <TestimonialsCard
                    key={index}
                    // image={testimonial.image}
                    Letters={firstLetter + lastLetter}
                    testimony={testimonial.testimony}
                    testifierFirstName={testimonial.testifierFirstName}
                    testifierLastName={testimonial.testifierLastName}
                    testifierInfo={testimonial.testifierInfo}
                    isActive={testimonial.isActive}
                    rating={testimonial.rating}
                  />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
