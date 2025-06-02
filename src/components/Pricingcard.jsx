"use client"

import { Check, X, Star, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const Pricingcard = ({
  id,
  title,
  price,
  period,
  features,
  excludedFeatures,
  popular,
  description,
  onSelect,
  selectedAddons,
}) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleSelectPlan = () => {
    const planData = {
      id,
      title,
      price,
      period,
      features,
      excludedFeatures,
      description,
    }
    onSelect(planData)
  }

  const calculateTotal = () => {
    const planPrice = Number.parseInt(price.replace(/[₦,]/g, ""))
    const addonsTotal = selectedAddons.reduce((total, addon) => {
      const addonPrice = Number.parseInt(addon.price.replace(/[₦/term]/g, ""))
      return total + addonPrice
    }, 0)
    return planPrice + addonsTotal
  }

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
        popular ? "ring-2 ring-[#A51C30] dark:ring-[#00356B] scale-105" : ""
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 z-10">
          <div className="bg-gradient-to-r from-[#A51C30] to-[#00356B] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <Star className="w-4 h-4 mr-2" />
            Most Popular
          </div>
        </div>
      )}

      {/* Gradient Background for Popular */}
      &nbsp;
      {popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#00356B]/5 to-[#A51C30]/5 pointer-events-none" />
      )}

      <div className="relative p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30] mb-2">{title}</h3>
          {description && <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>}

          {/* <div className="flex items-baseline justify-center mb-4">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">{price}</span>
            {period && <span className="text-gray-500 dark:text-gray-400 ml-2">/{period}</span>}
          </div> */}

          {selectedAddons.length > 0 && (
            <div className="bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total with add-ons:</p>
              <p className="text-2xl font-bold text-[#A51C30] dark:text-[#00356B]">
                ₦{calculateTotal().toLocaleString()}/{period}
              </p>
            </div>
          )}
        </div>

        {/* Features Toggle */}
        <div className="mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {showDetails ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {showDetails ? "Hide Details" : "View All Features"}
            </span>
          </button>
        </div>

        {/* Features List */}
        <div
          className={`space-y-3 mb-8 transition-all duration-500 ${showDetails ? "h-[400px] opacity-100 overflow-y-auto custom-scrollbar" : "max-h-32 opacity-70"} overflow-hidden`}
        >
          {/* Included Features */}
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{feature}</span>
            </div>
          ))}

          {/* Excluded Features */}
          {showDetails &&
            excludedFeatures.map((feature, index) => (
              <div key={`excluded-${index}`} className="flex items-start opacity-50">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <X className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm line-through">{feature}</span>
              </div>
            ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleSelectPlan}
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            popular
              ? "bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white shadow-lg hover:shadow-xl"
              : "border-2 border-[#00356B] dark:border-[#A51C30] text-[#00356B] dark:text-[#A51C30] hover:bg-[#00356B] hover:text-white dark:hover:bg-[#A51C30] dark:hover:text-white"
          }`}
        >
          Select {title}
        </button>

        {/* Additional Info */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          No setup fees • Cancel anytime • 30-day money-back guarantee
        </p>
      </div>
    </div>
  )
}

export default Pricingcard
