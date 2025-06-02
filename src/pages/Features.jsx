"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Check,
  ExternalLink,
  ChevronRight,
  Star,
  Users,
  Clock,
  Shield,
  ChevronLeft,
} from "lucide-react";


// Import your images
import CBT from "../assets/dashboard.jpg";
import SchoolManagementImg from "../assets/dashboard.jpg";
import AttendanceImg from "../assets/dashboard.jpg";
import GovernmentImg from "../assets/dashboard.jpg";

export default function Features() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // const products = [
  //   {
  //     id: "elscholar",
  //     title: "Elite Scholar",
  //     shortDesc: "Advanced Computer-Based Testing",
  //     text: "Our advanced Computer-Based Testing system makes assessments seamless, secure, and smart with automatic grading and detailed analysis.",
  //     listProducts: [
  //       "Anti-cheating technology with randomized questions",
  //       "Instant results and performance analytics",
  //       "Support for multiple question types",
  //       "Automated grading and feedback",
  //       "Secure browser environment",
  //     ],
  //     cardName: "Smart CBT Illustration",
  //     image: CBT,
  //     link: "/smart-cbt",
  //     stats: { users: "5K+", rating: 4.9, uptime: "99.9%" },
  //     badge: "Most Popular",
  //   },
  //   {
  //     id: "ai-bot",
  //     title: "AI Assistant",
  //     shortDesc: "24/7 Intelligent Learning Support",
  //     text: "Our intelligent AI assistant helps students with homework, answers questions, and provides 24/7 learning support tailored to each student's needs.",
  //     listProducts: [
  //       "Natural language processing for human-like interactions",
  //       "Personalized learning recommendations",
  //       "Multilingual support for diverse classrooms",
  //       "Voice and text interaction capabilities",
  //       "Integration with curriculum standards",
  //     ],
  //     cardName: "AI Bot Illustration",
  //     image: AI,
  //     link: "/ai-assistant",
  //     stats: { users: "3K+", rating: 4.8, uptime: "99.8%" },
  //     badge: "AI Powered",
  //   },
  //   {
  //     id: "analytics",
  //     title: "Real-Time Analytics",
  //     shortDesc: "Comprehensive Performance Insights",
  //     text: "Gain valuable insights into student performance, financial trends, and operational efficiency with our powerful data analytics tools.",
  //     listProducts: [
  //       "Customizable dashboards for administrators",
  //       "Trend analysis and predictive insights",
  //       "Exportable reports for stakeholders",
  //       "Real-time performance monitoring",
  //       "Advanced data visualization",
  //     ],
  //     cardName: "Analytics Dashboard",
  //     image: Analytics,
  //     link: "/analytics",
  //     stats: { users: "2K+", rating: 4.7, uptime: "99.9%" },
  //     badge: "Data Driven",
  //   },
  //   // {
  //   //   id: "offline-mode",
  //   //   title: "Offline Mode",
  //   //   shortDesc: "Uninterrupted Learning Experience",
  //   //   text: "Keep learning uninterrupted with our robust offline functionality, perfect for regions with intermittent internet connectivity.",
  //   //   listProducts: [
  //   //     "Automatic synchronization when back online",
  //   //     "Full access to learning materials and assessments",
  //   //     "Minimal data usage when syncing",
  //   //     "Offline content caching",
  //   //     "Progressive web app technology",
  //   //   ],
  //   //   cardName: "Offline Mode",
  //   //   image: Offline,
  //   //   link: "/offline-mode",
  //   //   stats: { users: "4K+", rating: 4.6, uptime: "100%" },
  //   //   badge: "Always Available",
  //   // },
  //   // {
  //   //   id: "gamified-rewards",
  //   //   title: "Gamified Rewards",
  //   //   shortDesc: "Engaging Learning Through Play",
  //   //   text: "Boost engagement and motivation with our interactive rewards system that makes learning fun through achievements, badges, and friendly competition.",
  //   //   listProducts: [
  //   //     "Achievement badges and level progression",
  //   //     "Leaderboards for healthy competition",
  //   //     "Customizable reward systems per school",
  //   //     "Social learning features",
  //   //     "Progress tracking and milestones",
  //   //   ],
  //   //   cardName: "Gamified Rewards",
  //   //   image: Achievement,
  //   //   link: "/gamified-rewards",
  //   //   stats: { users: "6K+", rating: 4.9, uptime: "99.7%" },
  //   //   badge: "Engaging",
  //   // },
  // ]

  // Check if mobile screen

  const products = [
    {
      id: "elscholar",
      title: "Elite Scholar",
      shortDesc: "Complete School Management System",
      text: "Elite Scholar offers everything your school needs to succeed — academics, finance, communication, and daily operations, all in one powerful platform.",
      listProducts: [
        "Timetable, attendance, and result management",
        "Finance and payroll modules",
        "Student, staff, and parent portals",
        "Multi-campus and biometric support",
        "Real-time reporting and notifications",
      ],
      cardName: "Smart School Management Illustration",
      image: SchoolManagementImg,
      link: "/school-management",
      stats: { users: "100+ Schools", rating: 4.9, uptime: "99.9%" },
      badge: "Most Trusted",
    },
    {
      id: "elite-cbt",
      title: "Elite CBT",
      shortDesc: "Advanced Computer-Based Testing",
      text: "Elite CBT is a smart, secure and efficient way to conduct assessments with instant grading, analytics, and anti-cheating safeguards.",
      listProducts: [
        "Randomized questions to prevent malpractice",
        "Real-time performance analytics",
        "Support for all question types",
        "Instant feedback and grading",
        "Secure browser environment",
      ],
      cardName: "Smart CBT Illustration",
      image: CBT,
      link: "/smart-cbt",
      stats: { users: "5K+", rating: 4.9, uptime: "99.9%" },
      badge: "Most Popular",
    },
    {
      id: "elite-attendance",
      title: "Elite Attendance",
      shortDesc: "Biometric & Smart Attendance System",
      text: "Track and manage attendance for students and staff with our biometric and smart reporting tools to boost accountability and reduce absenteeism.",
      listProducts: [
        "Biometric and RFID attendance integration",
        "Daily, weekly, and term reports",
        "SMS/email alerts for absentees",
        "Real-time admin dashboard",
        "Sync with academic calendar and HR",
      ],
      cardName: "Attendance System",
      image: AttendanceImg,
      link: "/attendance",
      stats: { users: "3K+", rating: 4.8, uptime: "99.8%" },
      badge: "Highly Reliable",
    },
    {
      id: "elite-government",
      title: "Elite Government",
      shortDesc: "Optimized for Public & Government Schools",
      text: "Tailored for government and public institutions, Elite Government offers monitoring, mass data handling, and accountability across education zones.",
      listProducts: [
        "Mass record import/export tools",
        "Zonal and LGA-based reporting",
        "Offline-first support for rural areas",
        "Government policy compliance modules",
        "Bulk messaging and analytics dashboards",
      ],
      cardName: "Government School Suite",
      image: GovernmentImg,
      link: "/government-schools",
      stats: { users: "80+ Gov. Schools", rating: 4.7, uptime: "99.6%" },
      badge: "Govt Optimized",
    },
    // {
    //   id: "ai-bot",
    //   title: "AI Assistant",
    //   shortDesc: "24/7 Intelligent Learning Support",
    //   text: "Our intelligent AI assistant helps students with homework, answers questions, and provides 24/7 learning support tailored to each student's needs.",
    //   listProducts: [
    //     "Natural language processing for human-like interactions",
    //     "Personalized learning recommendations",
    //     "Multilingual support for diverse classrooms",
    //     "Voice and text interaction capabilities",
    //     "Integration with curriculum standards",
    //   ],
    //   cardName: "AI Bot Illustration",
    //   image: AI,
    //   link: "/ai-assistant",
    //   stats: { users: "3K+", rating: 4.8, uptime: "99.8%" },
    //   badge: "AI Powered",
    // },
    // {
    //   id: "analytics",
    //   title: "Real-Time Analytics",
    //   shortDesc: "Comprehensive Performance Insights",
    //   text: "Gain valuable insights into student performance, financial trends, and operational efficiency with our powerful data analytics tools.",
    //   listProducts: [
    //     "Customizable dashboards for administrators",
    //     "Trend analysis and predictive insights",
    //     "Exportable reports for stakeholders",
    //     "Real-time performance monitoring",
    //     "Advanced data visualization",
    //   ],
    //   cardName: "Analytics Dashboard",
    //   image: Analytics,
    //   link: "/analytics",
    //   stats: { users: "2K+", rating: 4.7, uptime: "99.9%" },
    //   badge: "Data Driven",
    // },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-cycle through products on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setSelectedProduct((prev) => (prev + 1) % products.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isMobile, products.length]);

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const handleTryNow = (link) => {
    window.open(link, "_blank");
  };

  const goToPrevious = () => {
    setSelectedProduct(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  const goToNext = () => {
    setSelectedProduct((prev) => (prev + 1) % products.length);
  };

  const currentProduct = products[selectedProduct];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      {/* <div className="bg-gradient-to-r from-[#00356B] to-[#A51C30] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
            Smart Features That Transform Learning
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover our comprehensive suite of educational technology solutions
          </p>
        </div>
      </div> */}

      {/* Mobile Navigation Indicators */}
      {isMobile && (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#00356B] dark:text-[#A51C30]" />
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedProduct + 1} of {products.length}
                </span>
                <div className="flex space-x-1">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProduct(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedProduct
                          ? "bg-gradient-to-r from-[#A51C30] to-[#00356B] w-6"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#00356B] dark:text-[#A51C30]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div
          className={`grid gap-8 ${
            isMobile ? "grid-cols-1" : "lg:grid-cols-4"
          }`}
        >
          {/* Desktop Sidebar - Hidden on Mobile */}
          {!isMobile && (
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-[#00356B] dark:text-[#A51C30] mb-6">
                  Our Products
                </h3>
                <nav className="space-y-2">
                  {products.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProduct(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                        selectedProduct === index
                          ? "bg-gradient-to-r from-[#00356B] to-[#A51C30] text-white shadow-lg"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">
                            {product.title}
                          </div>
                          <div
                            className={`text-xs mt-1 ${
                              selectedProduct === index
                                ? "text-white/80"
                                : "text-gray-500"
                            }`}
                          >
                            {product.shortDesc}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            selectedProduct === index
                              ? "rotate-90"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                      {product.badge && (
                        <div
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                            selectedProduct === index
                              ? "bg-white/20 text-white"
                              : "bg-[#A51C30]/10 text-[#A51C30]"
                          }`}
                        >
                          {product.badge}
                        </div>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Main Content Area - Full Width on Mobile */}
          <div className={isMobile ? "col-span-1" : "lg:col-span-3"}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Product Header */}
              <div className="bg-gradient-to-r from-[#00356B]/10 to-[#A51C30]/10 p-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-[#00356B] dark:text-[#A51C30] mb-2">
                      {currentProduct.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {currentProduct.shortDesc}
                    </p>
                  </div>
                  {currentProduct.badge && (
                    <div className="inline-block px-4 py-2 bg-[#A51C30] text-white rounded-full text-sm font-semibold">
                      {currentProduct.badge}
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#A51C30]" />
                    <span className="font-semibold">
                      {currentProduct.stats.users}
                    </span>
                    <span className="text-gray-500">Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">
                      {currentProduct.stats.rating}
                    </span>
                    <span className="text-gray-500">Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="font-semibold">
                      {currentProduct.stats.uptime}
                    </span>
                    <span className="text-gray-500">Uptime</span>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div data-aos="zoom-in-left" className="order-2 md:order-1">
                    <div className="relative group">
                      <img
                        alt={currentProduct.cardName}
                        src={currentProduct.image || "/placeholder.svg"}
                        className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Details */}
                  <div data-aos="zoom-in-right" className="order-1 md:order-2">
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                      {currentProduct.text}
                    </p>

                    <h4 className="font-bold text-[#00356B] dark:text-[#A51C30] text-xl mb-4">
                      Key Features:
                    </h4>

                    <div className="space-y-3 mb-8">
                      {currentProduct.listProducts.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#00356B] to-[#A51C30] rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleTryNow(currentProduct.link)}
                        className="flex-1 bg-gradient-to-r from-[#A51C30] to-[#00356B] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#00356B] hover:to-[#A51C30] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        Try it Now
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="flex-1 border-2 border-[#00356B] dark:border-[#A51C30] text-[#00356B] dark:text-[#A51C30] py-3 px-6 rounded-xl font-semibold hover:bg-[#00356B] hover:text-white dark:hover:bg-[#A51C30] transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Clock className="w-8 h-8 text-[#A51C30] mb-3" />
                <h4 className="font-semibold text-[#00356B] dark:text-[#A51C30] mb-2">
                  Quick Setup
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Get started in minutes with our easy setup process
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Shield className="w-8 h-8 text-[#A51C30] mb-3" />
                <h4 className="font-semibold text-[#00356B] dark:text-[#A51C30] mb-2">
                  Secure & Reliable
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Enterprise-grade security with 99.9% uptime guarantee
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-[#A51C30] mb-3" />
                <h4 className="font-semibold text-[#00356B] dark:text-[#A51C30] mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Round-the-clock assistance from our expert team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
