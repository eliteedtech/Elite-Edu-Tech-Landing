"use client"

import { HelpCircle, MessageCircle } from "lucide-react"
import Accordion from "../components/ui/Accordion"

export default function FAQSections() {
  const faqs = [
    {
      title: "How does Elite Edu Tech protect user data?",
      answer:
        "We take privacy and security seriously. All user data is end-to-end encrypted, stored securely, and handled in compliance with global standards like GDPR, FERPA, and COPPA. We perform regular audits and never share data with third parties.",
      defaultOpen: true,
    },
    {
      title: "Can Elite Edu Tech work with our current school systems?",
      answer:
        "Absolutely. Elite Edu Tech is built to integrate with popular LMS platforms such as Google Classroom, Moodle, Blackboard, and Canvas. We also offer robust APIs for custom integrations with your internal systems.",
    },
    {
      title: "Is onboarding or training required?",
      answer:
        "Getting started is easy. We provide hands-on onboarding support, live training sessions, step-by-step guides, and video tutorials to make sure your team is confident using our tools from day one.",
    },
    {
      title: "What devices or infrastructure do we need?",
      answer:
        "Elite Edu Tech works on any device — desktops, tablets, or smartphones. It supports all major browsers and is optimized for low-bandwidth environments, making it ideal for both urban and rural schools.",
    },
    {
      title: "What does the AI Assistant actually do?",
      answer:
        "Our AI-powered assistant is like a personal tutor. It helps students with homework, explains tough concepts, and even recommends study material — all in real time, 24/7, and in multiple languages.",
    },
    {
      title: "What support can schools expect?",
      answer:
        "We offer round-the-clock support via chat, email, or phone. Our support team understands education and technology, so whether it's a quick fix or strategic guidance, we've got your back.",
    },
  ];
  

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 p-8 text-center border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8 text-[#A51C30] dark:text-[#00356B] mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00356B] dark:text-[#A51C30]">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about our platform and services.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} answer={faq.answer} accordionOpen={faq.defaultOpen || false} />
          ))}
        </div>

        {/* Contact Support */}
        {/* <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#00356B]/5 to-[#A51C30]/5 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <MessageCircle className="w-12 h-12 text-[#A51C30] dark:text-[#00356B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00356B] dark:text-[#A51C30] mb-2">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our support team is here to help you with any questions or concerns.
            </p>
            <button className="bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
