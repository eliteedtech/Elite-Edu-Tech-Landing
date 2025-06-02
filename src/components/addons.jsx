"use client"

import { Plus, Sparkles, Check, Minus } from "lucide-react"

const Addons = ({ items, selectedAddons, onAddonToggle }) => {
  const handleAddonToggle = (addon) => {
    const isSelected = selectedAddons.some((selected) => selected.id === addon.id)

    if (isSelected) {
      // Remove addon
      const updatedAddons = selectedAddons.filter((selected) => selected.id !== addon.id)
      onAddonToggle(updatedAddons)
    } else {
      // Add addon
      const updatedAddons = [...selectedAddons, addon]
      onAddonToggle(updatedAddons)
    }
  }

  const isAddonSelected = (addonId) => {
    return selectedAddons.some((addon) => addon.id === addonId)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-center mb-2">
          <Sparkles className="w-6 h-6 text-[#A51C30] dark:text-[#00356B] mr-2" />
          <h2 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30]">Premium Add-ons</h2>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Enhance your plan with these powerful additional features
        </p>
        {selectedAddons.length > 0 && (
          <div className="mt-4 text-center">
            <span className="inline-flex items-center px-3 py-1 bg-[#A51C30]/10 dark:bg-[#00356B]/10 text-[#A51C30] dark:text-[#00356B] rounded-full text-sm font-medium">
              {selectedAddons.length} add-on{selectedAddons.length > 1 ? "s" : ""} selected
            </span>
          </div>
        )}
      </div>

      {/* Add-ons Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((addon, index) => {
            const isSelected = isAddonSelected(addon.id)

            return (
              <div
                key={index}
                className={`group relative rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                  isSelected
                    ? "border-[#A51C30] dark:border-[#00356B] bg-gradient-to-br from-[#A51C30]/5 to-[#00356B]/5"
                    : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:border-[#A51C30] dark:hover:border-[#00356B]"
                }`}
                onClick={() => handleAddonToggle(addon)}
              >
                {/* Selection Indicator */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "border-[#A51C30] dark:border-[#00356B] bg-[#A51C30] dark:bg-[#00356B]"
                        : "border-gray-300 dark:border-gray-500"
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#A51C30] to-[#00356B]"
                      : "bg-gradient-to-br from-[#00356B] to-[#A51C30] group-hover:scale-110"
                  }`}
                >
                  {isSelected ? <Check className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
                </div>

                {/* Content */}
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    isSelected
                      ? "text-[#A51C30] dark:text-[#00356B]"
                      : "text-[#00356B] dark:text-[#A51C30] group-hover:text-[#A51C30] dark:group-hover:text-[#00356B]"
                  }`}
                >
                  {addon.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{addon.description}</p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  {/* <span
                    className={`font-bold text-lg ${
                      isSelected ? "text-[#A51C30] dark:text-[#00356B]" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {addon.price}
                  </span> */}

                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isSelected
                        ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50"
                        : "bg-[#00356B]/10 dark:bg-[#A51C30]/10 text-[#00356B] dark:text-[#A51C30] hover:bg-[#00356B]/20 dark:hover:bg-[#A51C30]/20"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Minus className="w-4 h-4 inline mr-1" />
                        Remove
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 inline mr-1" />
                        Add
                      </>
                    )}
                  </button>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none ${
                    isSelected
                      ? "bg-gradient-to-br from-[#A51C30]/10 to-[#00356B]/10"
                      : "group-hover:opacity-100 bg-gradient-to-br from-[#00356B]/5 to-[#A51C30]/5"
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Selected Add-ons Summary */}
        {/* {selectedAddons.length > 0 && (
          <div className="mt-8 p-6 bg-gradient-to-r from-[#00356B]/5 to-[#A51C30]/5 rounded-xl border border-[#A51C30]/20 dark:border-[#00356B]/20">
            <h4 className="text-lg font-semibold text-[#00356B] dark:text-[#A51C30] mb-4">
              Selected Add-ons ({selectedAddons.length})
            </h4>
            <div className="space-y-2">
              {selectedAddons.map((addon, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">{addon.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#A51C30] dark:text-[#00356B] font-semibold">{addon.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddonToggle(addon)
                      }}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">Total Add-ons Cost:</span>
                  <span className="text-xl font-bold text-[#A51C30] dark:text-[#00356B]">
                    ₦
                    {selectedAddons
                      .reduce((total, addon) => {
                        const price = Number.parseInt(addon.price.replace(/[₦/term]/g, ""))
                        return total + price
                      }, 0)
                      .toLocaleString()}
                    /term
                  </span>
                </div>
              </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Addons
