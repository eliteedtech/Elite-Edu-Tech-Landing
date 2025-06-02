"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import TestimonialsCard from "../components/ui/testimonials-card";

// const testimonials = [
//   {
//     testifierFirstName: "Ahmed",
//     testifierLastName: "Muhammad",
//     testimony:
//       "Elite EdTech has completely transformed how we manage our school. The attendance system has improved punctuality, and parents love being able to track their children's progress through the parent portal.",
//     testifierInfo: "Principal, Kano Science Academy",
//     isActive: true,
//     rating: 5,
//   },
//   {
//     testifierFirstName: "Fatima",
//     testifierLastName: "Okoye",
//     testimony:
//       "The grading system has saved me hours of work each week. I can now focus more on teaching and less on administrative tasks. The student analytics help me identify which students need extra attention.",
//     testifierInfo: "Teacher, Lagos Model School",
//     isActive: false,
//     rating: 5,
//   },
//   {
//     testifierFirstName: "David",
//     testifierLastName: "Ibrahim",
//     testimony:
//       "The student portal makes it easy to keep track of my assignments and grades. I can access study materials anytime and the notification system ensures I never miss important deadlines or events.",
//     testifierInfo: "Student, University of Lagos",
//     isActive: false,
//     rating: 5,
//   },
//   {
//     testifierFirstName: "Aisha",
//     testifierLastName: "Bello",
//     testimony:
//       "As a parent, I love how I can monitor my child's academic progress in real-time. The communication features help me stay connected with teachers and school activities.",
//     testifierInfo: "Parent, Abuja International School",
//     isActive: false,
//     rating: 5,
//   },
//   {
//     testifierFirstName: "Ibrahim",
//     testifierLastName: "Sani",
//     testimony:
//       "The financial management module has streamlined our fee collection process. We can now generate detailed reports and track payments efficiently.",
//     testifierInfo: "Bursar, Kaduna Grammar School",
//     isActive: false,
//     rating: 5,
//   },
// ]

const testimonials = [
  {
    testifierFirstName: "Amina",
    testifierLastName: "Abdullahi",
    testimony:
      "Since we started using Elite Edu Tech, managing student records has become seamless. Our teachers can now spend more time on lessons and less on paperwork.",
    testifierInfo: "Principal, HIDAYATUL ABADIYA",
    isActive: true,
    rating: 5,
  },
  {
    testifierFirstName: "Sulaiman",
    testifierLastName: "Yusuf",
    testimony:
      "The parent portal is a game changer. Parents now receive instant updates on attendance and performance. Communication has never been easier.",
    testifierInfo: "Admin, SAYYADA KHADIJA",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Fatima",
    testifierLastName: "Shehu",
    testimony:
      "Grading used to take me hours. With Elite Edu Tech, I finish in minutes and get visual analytics to help guide my teaching.",
    testifierInfo: "Teacher, UMARUL FARUK",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Abdullahi",
    testifierLastName: "Nasir",
    testimony:
      "Elite Edu Tech has helped us digitize our attendance. The reports are instant and error-free.",
    testifierInfo: "Principal, KHALIL ARABIC SEC SCH",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Zainab",
    testifierLastName: "Ibrahim",
    testimony:
      "As a parent, I appreciate being able to track my daughter’s academic progress anytime. It keeps me informed and involved.",
    testifierInfo: "Parent, NANA KHADIJA JASS",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Maryam",
    testifierLastName: "Aliyu",
    testimony:
      "The student dashboard is clean and simple. I always know my grades, assignments, and what to work on next.",
    testifierInfo: "Student, NURUDIN GIRLS SAS",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Hafsat",
    testifierLastName: "Mustapha",
    testimony:
      "We’ve been able to improve student discipline with the real-time attendance alerts. Parents love the transparency.",
    testifierInfo: "Vice Principal, ASSAYYADA KHADIJA",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Umar",
    testifierLastName: "Lawal",
    testimony:
      "Elite Edu Tech’s performance analytics help me focus on weaker students before exams. It’s truly data-driven teaching.",
    testifierInfo: "Teacher, GIRIDAZUL MUARIF",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Aisha",
    testifierLastName: "Salihu",
    testimony:
      "Communication with parents used to be slow. Now they get updates on tests, attendance, and events directly to their phones.",
    testifierInfo: "Admin, DAAWAH COMP COLLEGE",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Nasiru",
    testifierLastName: "Abubakar",
    testimony:
      "The fee tracking feature is fantastic. We now generate detailed financial reports effortlessly.",
    testifierInfo: "Bursar, ADO BAYERO COLLEGE",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Bilal",
    testifierLastName: "Haruna",
    testimony:
      "The AI assistant is like a private tutor. It helped me improve in math and English.",
    testifierInfo: "Student, KANO CAPITAL BOYS",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Salma",
    testifierLastName: "Yahaya",
    testimony:
      "Elite Edu Tech makes onboarding new students smooth. It handles documentation and class assignment automatically.",
    testifierInfo: "Registrar, ABUBAKAR GUMI COLLEGE",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Khadija",
    testifierLastName: "Garba",
    testimony:
      "With Elite Edu Tech, lesson planning and content sharing are much easier. Students even access lessons from home.",
    testifierInfo: "Teacher, MANNARUL ISLAM",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Bashir",
    testifierLastName: "Jibril",
    testimony:
      "The SMS alerts keep parents informed in real time — attendance, announcements, and academic reports.",
    testifierInfo: "Admin, MIFTAHUL KHAIR",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Rabi",
    testifierLastName: "Umar",
    testimony:
      "Elite Edu Tech helped us go paperless. Result computation and printing are just a few clicks away.",
    testifierInfo: "Principal, DARUL KHAIRAT",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Nura",
    testifierLastName: "Ismail",
    testimony:
      "I love how teachers share materials and resources online. It’s like school continues at home.",
    testifierInfo: "Student, FADIMATUZZAHARAU",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Halima",
    testifierLastName: "Kabir",
    testimony:
      "The dashboard gives our school leadership real-time insights. We track trends and respond quickly.",
    testifierInfo: "Vice Principal, ABSA COLLEGE",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Usman",
    testifierLastName: "Bashir",
    testimony:
      "Generating term results is no longer stressful. Everything is automated and error-free.",
    testifierInfo: "Exam Officer, HIDAYATUL ABADIYA",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Asiya",
    testifierLastName: "Saidu",
    testimony:
      "My child now loves studying. She interacts with the AI assistant when I’m not around to help.",
    testifierInfo: "Parent, SAYYADA KHADIJA",
    isActive: false,
    rating: 5,
  },
  {
    testifierFirstName: "Jamilu",
    testifierLastName: "Danladi",
    testimony:
      "Our school operations are now fully digital — from attendance to announcements. Elite Edu Tech is reliable and easy to use.",
    testifierInfo: "Principal, DAAWAH COMP COLLEGE",
    isActive: false,
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00356B]/5 dark:bg-[#00356B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A51C30]/5 dark:bg-[#A51C30]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 rounded-full text-[#00356B] dark:text-[#A51C30] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Trusted by Thousands
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent mb-6">
            What Our Users Say
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hear from schools, teachers, students, and parents who have
            transformed their educational experience with Elite EdTech
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#00356B] dark:text-[#A51C30] hover:scale-110 -ml-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-[#00356B] dark:text-[#A51C30] hover:scale-110 -mr-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {getVisibleTestimonials().map((testimonial, index) => {
              const firstLetter =
                testimonial.testifierFirstName?.charAt(0)?.toUpperCase() || "";
              const lastLetter =
                testimonial.testifierLastName?.charAt(0)?.toUpperCase() || "";

              return (
                <div
                  key={testimonial.index}
                  className={`transform transition-all duration-500 ${
                    index === 1 ? "scale-105 z-10" : "scale-95 opacity-75"
                  }`}
                >
                  <TestimonialsCard
                    Letters={firstLetter + lastLetter}
                    testimony={testimonial.testimony}
                    testifierFirstName={testimonial.testifierFirstName}
                    testifierLastName={testimonial.testifierLastName}
                    testifierInfo={testimonial.testifierInfo}
                    isActive={index === 1}
                    rating={testimonial.rating}
                  />
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#A51C30] to-[#00356B] scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Schools" },
            { number: "50K+", label: "Students" },
            { number: "2K+", label: "Teachers" },
            { number: "4.9/5", label: "Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
