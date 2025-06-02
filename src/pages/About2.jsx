"use client"

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Sparkles, Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react"

// Import image
import OurTeam from "../assets/about/our-team4.jpg"

export default function About2() {
  const misVis = [
    {
      title: "Our Mission",
      text: "To empower schools across Nigeria with technology that simplifies administration, enhances teaching, and improves learning outcomes for every student.",
      icon: Target,
    },
    {
      title: "Our Vision",
      text: "We envision a future where every school in Africa has access to affordable, efficient, and culturally relevant technology solutions.",
      icon: Eye,
    },
  ]

  const misVisCard = [
    {
      emoji: "✨",
      title: "Innovation",
      text: "Constantly evolving our solutions to meet the changing needs of education",
      icon: Lightbulb,
      color: "from-blue-500 to-indigo-600",
    },
    {
      emoji: "🤝",
      title: "Integrity",
      text: "Building trust through honest practices and reliable service",
      icon: Heart,
      color: "from-red-500 to-pink-600",
    },
    {
      emoji: "🏆",
      title: "Excellence",
      text: "Delivering quality in every aspect of our products and services",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
    },
  ]

  const stats = [
    { number: "500+", label: "Schools Served", icon: Users },
    { number: "50K+", label: "Students Impacted", icon: Users },
    { number: "2K+", label: "Teachers Empowered", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Award },
  ]

  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00356B]/5 dark:bg-[#00356B]/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#A51C30]/5 dark:bg-[#A51C30]/10 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#00356B]/5 dark:bg-[#00356B]/10 rounded-full blur-2xl animate-pulse delay-500" />
        <Sparkles
          size={60}
          className="absolute top-32 right-32 text-[#A51C30]/10 dark:text-[#A51C30]/20 animate-pulse delay-700"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 rounded-full text-[#00356B] dark:text-[#A51C30] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            About Elite EdTech
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent mb-6">
            Revolutionizing Education Technology
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Empowering African schools with innovative solutions built for the future of education
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Section */}
          <div data-aos="zoom-in-right" className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00356B]/20 to-[#A51C30]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                alt="Our Team"
                src={OurTeam || "/placeholder.svg"}
                className="relative w-full h-[400px] object-cover rounded-2xl  shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00356B] to-[#A51C30] bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div data-aos="zoom-in-left" className="space-y-8">
            {misVis.map((item, id) => {
              const Icon = item.icon
              return (
                <div
                  key={id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00356B] to-[#A51C30] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#00356B] dark:text-[#A51C30] mb-3">{item.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#00356B] dark:text-[#A51C30] mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {misVisCard.map((data, id) => {
              const Icon = data.icon
              return (
                <div
                  key={id}
                  data-aos="zoom-out-up"
                  data-aos-delay={id * 200}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00356B]/10 to-[#A51C30]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{data.emoji}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#00356B] dark:text-[#A51C30] mb-4 group-hover:text-[#A51C30] dark:group-hover:text-[#00356B] transition-colors duration-300">
                      {data.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{data.text}</p>

                    {/* Decorative Icon */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Icon className="w-8 h-8 text-[#A51C30] dark:text-[#00356B]" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#00356B] to-[#A51C30] rounded-3xl p-8 md:p-12" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00356B] dark:text-[#A51C30] mb-4">
              Ready to Transform Your School?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of schools across Nigeria that have already revolutionized their educational experience with
              Elite EdTech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-[#00356B] dark:border-[#A51C30] text-[#00356B] dark:text-[#A51C30] px-8 py-3 rounded-xl font-semibold hover:bg-[#00356B] hover:text-white dark:hover:bg-[#A51C30] dark:hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
