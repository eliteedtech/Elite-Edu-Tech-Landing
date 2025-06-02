"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Accordion({ title, answer, accordionOpen = false }) {
  const [accordionState, setAccordionState] = useState(accordionOpen)

  function toggleAccordion() {
    setAccordionState(!accordionState)
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-4 bg-gray-50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300">
      <button
        className="flex w-full justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#A51C30] dark:focus:ring-[#00356B] focus:ring-inset"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg md:text-xl font-semibold text-[#00356B] dark:text-[#A51C30] pr-4">{title}</h3>
        <div
          className={`flex-shrink-0 transition-transform duration-300 ${accordionState ? "rotate-180" : "rotate-0"}`}
        >
          <ChevronDown size={24} className="text-[#00356B] dark:text-[#A51C30]" />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          accordionState ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-600 pt-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}
