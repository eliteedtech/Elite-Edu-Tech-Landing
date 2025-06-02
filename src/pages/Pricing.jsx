"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Star, Shield, Zap, Users, CheckCircle, ArrowRight } from "lucide-react"
import FAQSections from "./PricingFAQSections"
import Addons from "../components/addons"
import Pricingcard from "../components/Pricingcard"

function PricingPage() {
  const [selectedAddons, setSelectedAddons] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  const pricingPlans = [
    {
      id: "basic",
      title: "Basic Plan",
      price: "₦1,500",
      period: "term",
      description: "Essential features for small schools",
      features: [
        "Class & Subject Management",
        "Session & Term Setup",
        "Grading & Result Computation",
        "Student & Staff Records",
        "E-Lessons Board Module",
        "Report Card Generation",
        "Promotion & Graduation Tools",
        "Academic Calendar",
        "School Fees Payment System",
      ],
      excludedFeatures: [
        "Timetable Scheduling Module",
        "E-Assignments/Homeworks Module",
        "Student Application & Enrollment",
        "Basic Analytics & Reporting",
        "Notice Board",
        "Parent/Child Access to Reportsheet",
        "Custom Branding & Themes",
        "Payment Reminder SMS & WhatsApp",
        "Roll call Attendance",
        "Staff Attendance",
      ],
      popular: false,
    },
    {
      id: "standard",
      title: "Standard Plan",
      price: "₦2,000",
      period: "term",
      description: "Complete solution for growing schools",
      features: [
        "Class & Subject Management",
        "Session & Term Setup",
        "Grading & Result Computation",
        "Student & Staff Records",
        "E-Lessons Board Module",
        "Report Card Generation",
        "Promotion & Graduation Tools",
        "Academic Calendar",
        "School Fees Payment System",
        "Timetable Scheduling Module",
        "E-Assignments/Homeworks Module",
        "Student Application & Enrollment",
        "Basic Analytics & Reporting",
        "Notice Board",
        "Parent/Child Access to Reportsheet",
        "Custom Branding & Themes",
        "Payment Reminder SMS & WhatsApp",
        "Roll call Attendance",
        "Staff Attendance",
      ],
      excludedFeatures: [],
      popular: true,
    },
  ]

  const addonPlans = [
    {
      id: "advanced-analytics",
      title: "Advanced Analytics",
      description: "Deep insights into student performance with predictive analytics and custom reporting dashboards.",
      price: "₦500/term",
    },
    {
      id: "mobile-app",
      title: "Mobile App Access",
      description: "Native mobile apps for iOS and Android with offline capabilities and push notifications.",
      price: "₦300/term",
    },
    {
      id: "ai-assistant",
      title: "AI Learning Assistant",
      description: "24/7 intelligent tutoring system with personalized learning recommendations.",
      price: "₦800/term",
    },
    {
      id: "api-access",
      title: "API Integration",
      description: "Full REST API access for custom integrations with existing school management systems.",
      price: "₦400/term",
    },
    {
      id: "priority-support",
      title: "Priority Support",
      description: "24/7 dedicated support with faster response times and direct technical assistance.",
      price: "₦200/term",
    },
    {
      id: "backup-recovery",
      title: "Advanced Backup & Recovery",
      description: "Automated daily backups with instant recovery and data redundancy across multiple servers.",
      price: "₦250/term",
    },
  ]

  const handlePlanSelection = (plan) => {
    const planDetails = {
      selectedPlan: plan,
      selectedAddons: selectedAddons,
      totalCost: calculateTotalCost(plan, selectedAddons),
      timestamp: new Date().toISOString(),
    }

    console.log("=== PLAN SELECTION DETAILS ===")
    console.log("Selected Plan:", plan)
    console.log("Selected Add-ons:", selectedAddons)
    console.log("Total Cost:", planDetails.totalCost)
    console.log("Full Details:", planDetails)
    console.log("===============================")

    // You can also send this to your backend API
    // sendPlanSelectionToAPI(planDetails)
  }

  const calculateTotalCost = (plan, addons) => {
    const planPrice = Number.parseInt(plan.price.replace(/[₦,]/g, ""))
    const addonsTotal = addons.reduce((total, addon) => {
      const addonPrice = Number.parseInt(addon.price.replace(/[₦/term]/g, ""))
      return total + addonPrice
    }, 0)
    return planPrice + addonsTotal
  }

  const features = [
    { icon: Shield, text: "Secure & Reliable" },
    { icon: Zap, text: "Fast Performance" },
    { icon: Users, text: "24/7 Support" },
    { icon: CheckCircle, text: "Easy Setup" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00356B]/5 dark:bg-[#00356B]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#A51C30]/5 dark:bg-[#A51C30]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 rounded-full text-[#00356B] dark:text-[#A51C30] text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Elite Scholar Plans & Pricing
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent mb-6">
              Choose Your Perfect Plan
            </h1>

            {/* <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive school management solutions designed for Nigerian educational institutions.
            </p> */}

            {/* Features Grid
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Icon className="w-8 h-8 text-[#A51C30] dark:text-[#00356B] mb-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {feature.text}
                    </span>
                  </div>
                )
              })}
            </div> */}
          </div>

          {/* Pricing Cards */}
          <div data-aos="zoom-out-up" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Pricingcard
                  key={index}
                  {...plan}
                  onSelect={() => handlePlanSelection(plan)}
                  selectedAddons={selectedAddons}
                />
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div data-aos="zoom-out-right" className="mb-20">
            <Addons items={addonPlans} selectedAddons={selectedAddons} onAddonToggle={setSelectedAddons} />
          </div>

          {/* Selected Summary */}
          {selectedAddons.length > 0 && (
            <div data-aos="fade-up" className="mb-20">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30] mb-6 text-center">
                  Selected Add-ons Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedAddons.map((addon, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">{addon.title}</span>
                      <span className="text-[#A51C30] dark:text-[#00356B] font-semibold">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {/* <div data-aos="fade-up" className="mb-20">
            <FAQSections />
          </div> */}

          {/* CTA Section */}
          {/* <div className="text-center" data-aos="fade-up">
            <div className="bg-gradient-to-r from-[#00356B] to-[#A51C30] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your School?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of Nigerian schools already using Elite Scholar to enhance their educational experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#00356B] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default PricingPage
