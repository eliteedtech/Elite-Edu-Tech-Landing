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
  const testimonialRef = useIntersectionObserver({ threshold: 0.1 })
  const statsRef = useIntersectionObserver({ threshold: 0.1 })
  const ctaRef = useIntersectionObserver({ threshold: 0.1 })
  const blogRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      Hero Section
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge variant="primary">Revolutionizing Education</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Empowering Education Through Technology
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                Our innovative platform combines AI-powered learning tools with interactive content to create engaging
                educational experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                    >
                      <img
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">5,000+</span> educators trust our
                  platform
                </p>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full opacity-70 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img src="/placeholder.svg?height=600&width=600" alt="Education Platform" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <SectionTitle
            title="Powerful Educational Tools"
            subtitle="Our comprehensive suite of educational technology solutions designed to enhance learning experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-10 w-10" />}
              title="Elite CBT"
              description="Computer-based testing platform with advanced analytics and instant feedback."
              link="#"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Elite Class"
              description="Virtual classroom environment with interactive tools and collaboration features."
              link="#"
            />
            <FeatureCard
              icon={<Lightbulb className="h-10 w-10" />}
              title="Elite Library"
              description="Extensive digital resource library with curriculum-aligned content."
              link="#"
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10" />}
              title="AI Assistant"
              description="Intelligent tutoring system providing personalized learning support."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialRef} className="py-16 md:py-24 px-4 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <TestimonialCard
                quote="Elite Edu Tech has transformed how we deliver education. The interactive tools and AI-powered features have significantly improved student engagement and learning outcomes."
                name="Dr. Sarah Johnson"
                title="Principal, Westlake Academy"
                imageSrc="/placeholder.svg?height=48&width=48"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <SectionTitle
                title="Trusted by Leading Educational Institutions"
                subtitle="See why thousands of schools and universities choose Elite Edu Tech to enhance their teaching and learning experiences."
                centered={false}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300"
                  >
                    <img src="/placeholder.svg?height=60&width=120" alt={`Partner ${i}`} className="max-h-12 w-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-16 md:py-24 bg-indigo-600 dark:bg-indigo-900 px-4 relative overflow-hidden opacity-0 transition-opacity duration-1000"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 dark:bg-indigo-800 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 dark:bg-indigo-800 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Educational Experience?
            </h2>
            <p className="text-lg text-indigo-100">
              Join thousands of educators who are already using Elite Edu Tech to enhance learning outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="default" size="xl" className="bg-white text-indigo-600 hover:bg-gray-100 shadow-lg">
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-white text-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 md:py-24 px-4 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StatCard number="5,000+" label="Schools" />
            <StatCard number="100,000+" label="Teachers" />
            <StatCard number="2M+" label="Students" />
            <StatCard number="98%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        ref={blogRef}
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <SectionTitle
            title="Latest from Our Blog"
            subtitle="Stay updated with the latest trends and insights in educational technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI in Education",
                excerpt: "Discover how artificial intelligence is transforming the educational landscape.",
                date: "May 10, 2023",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Enhancing Student Engagement",
                excerpt: "Strategies and tools to boost student participation and interest in learning.",
                date: "April 25, 2023",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Remote Learning Best Practices",
                excerpt: "Tips and techniques for effective remote and hybrid learning environments.",
                date: "April 12, 2023",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden mb-4 -mx-6 -mt-6">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 group"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home