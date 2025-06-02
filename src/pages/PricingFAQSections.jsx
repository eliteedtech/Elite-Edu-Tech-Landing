"use client"

import { HelpCircle, MessageCircle } from "lucide-react"
import Accordion from "../components/ui/Accordion"

export default function FAQSections() {
  const faqs = [
    {
      title: "What's the difference between Basic and Standard plans?",
      answer:
        "The Basic plan includes essential features like class management, grading, and report cards. The Standard plan adds advanced features like timetable scheduling, assignments module, analytics, parent access, and custom branding.",
      defaultOpen: true,
    },
    {
      title: "Can I upgrade from Basic to Standard plan anytime?",
      answer:
        "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining term period, and all your data will be preserved during the upgrade.",
    },
    {
      title: "Are the add-ons compatible with both plans?",
      answer:
        "Yes, all premium add-ons are compatible with both Basic and Standard plans. You can mix and match add-ons based on your school's specific needs.",
    },
    {
      title: "How does the payment system work?",
      answer:
        "Payments are made per term. You can pay via bank transfer, card payment, or mobile money. We also offer flexible payment plans for larger institutions.",
    },
    {
      title: "Is there a free trial available?",
      answer:
        "Yes, we offer a 30-day free trial for both plans. This includes full access to all features so you can evaluate the system before making a commitment.",
    },
    {
      title: "What kind of support is included?",
      answer:
        "Both plans include email support and access to our knowledge base. The Standard plan includes priority support, and you can add 24/7 dedicated support through our Priority Support add-on.",
    },
  ]

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
          Find answers to common questions about our pricing and plans.
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
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#00356B]/5 to-[#A51C30]/5 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <MessageCircle className="w-12 h-12 text-[#A51C30] dark:text-[#00356B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00356B] dark:text-[#A51C30] mb-2">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our team is here to help you choose the right plan for your school.
            </p>
            <button className="bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
