"use client"

import { useEffect, useRef } from "react"
import Testimonial from "./Testimonial"
import Hero from "./Hero"
import About from "./About"
import Features from "./Features"
import Pricing from "./Pricing"
import Institutions from "./Institutions"
import FAQSections from "./FAQSections"
import GetinTouch from "./GetinTouch"

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
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Features ref={featuresRef} />
      <Pricing ref={pricingRef} />
      <Testimonial ref={testimonialRef} />
      <Institutions ref={institutionsRef} />
      <FAQSections ref={faqSectionRef} />
      <GetinTouch ref={getintouchRef} />
    </main>
  )
}

export default Home