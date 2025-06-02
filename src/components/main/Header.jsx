"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react"
import Logo from "../ui/logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/getintouch", label: "Contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-between items-center px-4 mx-auto container max-w-7xl">
        <div className="z-50">
          <Link to="/">
            <Logo size="xl" withText={false} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                isActive(link.to)
                  ? "text-[#A51C30] dark:text-[#00356B]"
                  : "text-[#00356B] dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#00356B]"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B] transition-all duration-300 ${
                  isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
              {isActive(link.to) && (
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[#A51C30] dark:text-[#00356B] animate-pulse" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full border-2 border-[#00356B]/20 dark:border-[#A51C30]/20 text-[#00356B] dark:text-[#A51C30] hover:bg-[#00356B]/10 dark:hover:bg-[#A51C30]/10 hover:border-[#00356B] dark:hover:border-[#A51C30] transition-all duration-300 hover:scale-105"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} className="text-[#A51C30]" /> : <Moon size={18} className="text-[#00356B]" />}
          </button>
          <Link to="/getintouch">
            <button className="bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-2 rounded-xl">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${
            isMenuOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
          }`}
        >
          <nav className="flex flex-col items-center gap-8 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  isActive(link.to)
                    ? "text-[#A51C30] dark:text-[#00356B] bg-gray-100 dark:bg-gray-800"
                    : "text-[#00356B] dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#00356B] hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/getintouch" className="mt-4 w-full">
              <button className="w-full bg-gradient-to-r from-[#A51C30] to-[#00356B] hover:from-[#00356B] hover:to-[#A51C30] text-white font-semibold px-8 py-3 rounded-xl">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
