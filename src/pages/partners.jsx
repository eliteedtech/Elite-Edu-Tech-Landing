"use client"

import { useEffect, useState } from "react"

const partners = [
//   {
//     id: 1,
//     name: "Federal Ministry of Education",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/qdsmndavhroawatubxap.jpg",
//     description: "National Education Regulator",
//   },
//   {
//     id: 2,
//     name: "Kano State Ministry of Education",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868289/nvpdiwnoceb4wvysixc0.png",
//     description: "State Education Partner",
//   },
//   {
//     id: 3,
//     name: "Universal Basic Education Commission (UBEC)",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/fw0srelcghncsbf35abh.png",
//     description: "Basic Education Support",
//   },
//   {
//     id: 4,
//     name: "National Information Technology Development Agency (NITDA)",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/vlbzgdw5qcejg3f00ajq.png",
//     description: "ICT Policy and Capacity Building",
//   },
//   {
//     id: 5,
//     name: "Kano State Science and Technical Schools Board",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/jgouz9yxueivum2gglyb.png",
//     description: "STEM Education Partner",
//   },
//   {
//     id: 6,
//     name: "National Examination Council (NECO)",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/byjptydymntugk2nquzq.jpg",
//     description: "Assessment Partner",
//   },
  {
    id: 7,
    name: "Brainstorm IT Solutions",
    logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868290/z43l11849qpwmefhzygo.png",
    description: "Technology & EdTech Development Partner",
  },
//   {
//     id: 8,
//     name: "Nigerian Educational Research and Development Council (NERDC)",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/jinitszwon5yuql2ml6z.jpg",
//     description: "Curriculum Development Partner",
//   },
//   {
//     id: 9,
//     name: "TETFund (Tertiary Education Trust Fund)",
//     logo: "https://res.cloudinary.com/sirdurx/image/upload/v1748868789/tkqy6jdp2pjanbwrz8l5.jpg",
//     description: "Tertiary Education Support",
//   },
]

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return // Pause auto-rotation when hovering

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  const getVisiblePartners = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % partners.length
      visible.push({ ...partners[index], position: i })
    }
    return visible
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Collaborating with leading organizations to deliver world-class educational solutions
          </p>
        </div>

        {/* Partners Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex items-center justify-center space-x-8 md:space-x-12">
            {getVisiblePartners().map((partner, index) => {
              const isCenter = index === 2
              const isAdjacent = index === 1 || index === 3
              const isEdge = index === 0 || index === 4

              return (
                <div
                  key={`${partner.id}-${partner.position}`}
                  className={`transition-all duration-700 ease-in-out transform ${
                    isCenter ? "scale-110 z-20" : isAdjacent ? "scale-90 z-10 opacity-80" : "scale-75 opacity-50"
                  }`}
                >
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border
                      ${
                        isCenter
                          ? "border-[#A51C30] dark:border-[#00356B] ring-2 ring-[#A51C30]/20 dark:ring-[#00356B]/20"
                          : "border-gray-200 dark:border-gray-700"
                      } ${isEdge ? "hidden md:block" : ""}
                      w-[280px] h-[280px] flex flex-col items-center justify-between p-6`}
                  >
                    {/* Logo Container - Fixed Height */}
                    <div className="flex items-center justify-center h-32 w-full mb-4">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                            isCenter ? "filter-none" : "filter grayscale hover:grayscale-0"
                          }`}
                          onError={(e) => {
                            e.target.src = "/placeholder.svg?height=100&width=200"
                            e.target.onerror = null
                          }}
                        />
                      </div>
                    </div>

                    {/* Partner Info - Fixed Height */}
                    <div className="text-center h-24 flex flex-col justify-center">
                      <h3
                        className={`font-semibold text-lg mb-2 line-clamp-2 ${
                          isCenter ? "text-[#00356B] dark:text-[#A51C30]" : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {partner.name}
                      </h3>
                      <p
                        className={`text-sm line-clamp-2 ${
                          isCenter ? "text-[#A51C30] dark:text-[#00356B]" : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {partner.description}
                      </p>
                    </div>

                    {/* Center Highlight */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00356B]/5 to-[#A51C30]/5 rounded-2xl pointer-events-none" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#A51C30] to-[#00356B] w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to partner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Global Standards",
              description: "Our partnerships ensure we meet international education standards and best practices.",
            },
            {
              title: "Cutting-edge Technology",
              description: "Access to the latest educational technologies and innovative learning solutions.",
            },
            {
              title: "Continuous Innovation",
              description: "Collaborative research and development for next-generation educational tools.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <h4 className="text-xl font-semibold text-[#00356B] dark:text-[#A51C30] mb-3">{benefit.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
