"use client"

import { useEffect } from "react"
import Button from "../components/ui/Button2"
import { Outlet } from "react-router-dom"
import { Triangle, Sparkles, BookOpen, Users, Award } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { GoDeviceMobile } from "react-icons/go"
import dashboardImage from "../assets/dashboard.jpg"

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  // const products = [
  //   {
  //     title: "Smart CBT",
  //     description: " Computer-Based Testing with anti-cheating technology",
  //     image:
  //       "https://img.freepik.com/premium-photo/3d-illustration-online-exam-concept-with-laptop-computer-test-papers_1314467-12345.jpg",
  //     features: ["Randomized Questions", "Instant Results", "Secure Testing"],
  //     color: "from-blue-500 to-indigo-600",
  //   },
  //   {
  //     title: "AI Assistant",
  //     description: "24/7 intelligent learning support for students",
  //     image:
  //       "https://img.freepik.com/premium-photo/3d-robot-teacher-with-books-educational-ai-concept_1314467-23456.jpg",
  //     features: ["Natural Language", "Personalized Learning", "Multilingual"],
  //     color: "from-purple-500 to-pink-600",
  //   },
  //   {
  //     title: "Analytics Dashboard",
  //     description: "Real-time insights into student performance and trends",
  //     image:
  //       "https://img.freepik.com/premium-photo/3d-analytics-dashboard-with-charts-graphs-data-visualization_1314467-34567.jpg",
  //     features: ["Custom Reports", "Trend Analysis", "Performance Tracking"],
  //     color: "from-green-500 to-teal-600",
  //   },
  // ]

  const stats = [
    { number: "10K+", label: "Students", icon: Users },
    { number: "500+", label: "Schools", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Award },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#00356B] via-[#004080] to-[#A51C30] w-full md:pt-0 pt-16 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          <Triangle size={120} className="absolute top-32 right-32 text-white/5 animate-bounce" fill="currentColor" />
          <Sparkles size={60} className="absolute top-60 left-20 text-white/10 animate-pulse delay-700" />
        </div>

        <div className="flex px-4 md:flex-row gap-y-10 flex-col items-center pt-20 min-h-screen mx-auto container relative z-10">
          <div className="relative md:w-1/2 md:text-start text-center">
            <div data-aos="fade-right" className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Transforming Education Since 2020
              </div>

              <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold leading-tight text-white">
                Revolutionize Your
                <span className="block  bg-clip-text text-[#A51C30]">
                  Learning Experience
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                With <span title="Elite Edu Tech">EET</span> Empower your school with seamless digital tools to manage academics, finance, and communication — all in one place.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="flex items-center space-x-2 text-white">
                      <Icon className="w-5 h-5 text-[#A51C30]" />
                      <span className="font-bold text-lg">{stat.number}</span>
                      <span className="text-white/80">{stat.label}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex sm:flex-row flex-col gap-4 mt-8 sm:w-auto">
                <Button
                  text="Get Started"
                  type="btn-custom"
                  customBtnStyle="bg-[#A51C30] hover:bg-[#8B1A2A] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
                />
                <button className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <GoDeviceMobile className="w-5 h-5" />
                  Request a Demo
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center md:w-1/2 w-full">
            <div data-aos="zoom-in-left" className="relative">
              <div className="w-full max-w-[700px] h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl border border-white/20"></div>
                <img
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  src={dashboardImage || "/placeholder.svg"}
                  alt="student learning animation"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#A51C30] text-white p-3 rounded-full shadow-lg animate-bounce">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Showcase Section */}
      {/* <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00356B] dark:text-[#A51C30] mb-4">
              Our Core Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our suite of innovative educational technology solutions designed to enhance learning outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative p-8">
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30] mb-3">{product.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-[#A51C30] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#00356B] to-[#A51C30] text-white py-3 rounded-xl font-semibold hover:from-[#A51C30] hover:to-[#00356B] transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                    Explore More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <Outlet />
    </div>
  )
}

export default Hero
