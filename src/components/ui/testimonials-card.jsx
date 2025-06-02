"use client"

import { Star, Quote } from "lucide-react"

const TestimonialsCard = ({
  Letters,
  testimony,
  testifierFirstName,
  testifierLastName,
  testifierInfo,
  isActive,
  rating,
}) => {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border ${
        isActive
          ? "border-[#A51C30] dark:border-[#00356B] ring-2 ring-[#A51C30]/20 dark:ring-[#00356B]/20"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <Quote className="w-8 h-8 text-[#A51C30]/20 dark:text-[#00356B]/20" />
      </div>

      {/* Avatar */}
      <div className="flex items-center mb-6">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 ${
            isActive ? "bg-gradient-to-br from-[#A51C30] to-[#00356B]" : "bg-gradient-to-br from-[#00356B] to-[#A51C30]"
          }`}
        >
          {Letters}
        </div>
        <div>
          <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
            {testifierFirstName} {testifierLastName}
          </h4>
          <p className="text-[#A51C30] dark:text-[#00356B] text-sm font-medium">{testifierInfo}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Testimony */}
      <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{testimony}"</blockquote>

      {/* Gradient Border Effect */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#A51C30]/10 to-[#00356B]/10 rounded-2xl pointer-events-none" />
      )}
    </div>
  )
}

export default TestimonialsCard
