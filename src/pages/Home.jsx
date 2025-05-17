"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Users, Lightbulb, CheckCircle } from "lucide-react"
import Button from "../components/ui/button"
import SectionTitle from "../components/ui/section-title"
import FeatureCard from "../components/ui/feature-card"
import TestimonialCard from "../components/ui/testimonial-card"
import StatCard from "../components/ui/stats-card"
import Card from "../components/ui/card"
import Badge from "../components/ui/badge"
import Hero from "../pages/Hero"
import About from "../pages/About2"
import Feature from "../pages/Features"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"
import FAQ from "../pages/FAQSections"
import Testimonial from "./Testimonial"
import Getintouch from "./Getintouch"

// Intersection Observer for scroll animations
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return ref
}

const Home = () => {
  // Refs for scroll animations
  const featuresRef = useIntersectionObserver({ threshold: 0.1 })
  const pricingRef = useIntersectionObserver({ threshold: 0.1 })
  const testimonialRef = useIntersectionObserver({ threshold: 0.1 })
  const getintouchRef = useIntersectionObserver({ threshold: 0.1 })
  const heroRef = useIntersectionObserver({ threshold: 0.1 })
  const institutionsRef = useIntersectionObserver({ threshold: 0.1 })
  const aboutRef = useIntersectionObserver({ threshold: 0.1 })
  const faqSectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section >
        <Hero/>
        <About/>
        <Feature/>
        <Pricing/>
        <FAQ/>
        < Testimonial/>
        <Getintouch/>
        <Contact/>
      </section>
    </main>
  )
}

export default Home