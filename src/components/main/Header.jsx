"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"
import Button from "../ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"
import Logo from "../ui/Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-between items-center px-4 mx-auto container">
        <Link to="/" className="z-50">
          <Logo size="sm" withText />
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex items-center gap-8 font-medium hidden">
          <Link
            to="/"
            className={`px-2 py-1 ${
              isActive("/")
                ? "text-[#A51C30] dark:text-[#00356B] font-semibold"
                : "text-[#00356B] dark:text-[#A51C30] hover:text-[#A51C30] dark:hover:text-[#00356B]"
            } transition-all duration-300 relative group`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#A51C30] dark:bg-[#00356B] transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/about"
            className={`${
              isActive("/about")
                ? "text-[#00356B] dark:text-[#00356B]"
                : "text-[#00356B]/70 dark:text-[#00356B]/70 hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70"
            } transition-all duration-300 relative group`}
          >
            About
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#00356B] dark:bg-[#00356B] transition-all duration-300 ${
                isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/features"
            className={`${
              isActive("/features")
                ? "text-[#00356B] dark:text-[#00356B]"
                : "text-[#00356B]/70 dark:text-[#00356B]/70 hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70"
            } transition-all duration-300 relative group`}
          >
            Features
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#00356B] dark:bg-[#00356B] transition-all duration-300 ${
                isActive("/features") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/pricing"
            className={`${
              isActive("/pricing")
                ? "text-[#00356B] dark:text-[#00356B]"
                : "text-[#00356B]/70 dark:text-[#00356B]/70 hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70"
            } transition-all duration-300 relative group`}
          >
            Pricing
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#00356B] dark:bg-[#00356B] transition-all duration-300 ${
                isActive("/pricing") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/getintouch"
            className={`${
              isActive("/getintouch")
                ? "text-[#00356B] dark:text-[#00356B]"
                : "text-[#00356B]/70 dark:text-[#00356B]/70 hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70"
            } transition-all duration-300 relative group`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#00356B] dark:bg-[#00356B] transition-all duration-300 ${
                isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border-2 border-[#00356B] dark:border-[#A51C30] text-[#00356B] dark:text-[#A51C30] hover:bg-[#00356B]/10 dark:hover:bg-[#A51C30]/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} className="text-[#A51C30]" /> : <Moon size={18} className="text-[#00356B]" />}
            </button>
            <Button variant="primary" size="md" className="bg-[#A51C30] dark:bg-[#00356B] hover:bg-[#00356B] dark:hover:bg-[#A51C30] text-white font-semibold">
              Get Started
            </Button>
          </div>
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
            className="p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
          }`}
        >
          <div className="flex flex-col items-center gap-6 text-lg font-medium">
            <Link
              to="/"
              className={`px-4 py-3 ${
                isActive("/") ? "text-[#A51C30] dark:text-[#00356B] font-semibold" : "text-[#00356B] dark:text-[#A51C30] hover:text-[#A51C30] dark:hover:text-[#00356B]"
              } transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-[#00356B] dark:text-[#00356B]" : "text-[#00356B]/70 dark:text-[#00356B]/70"
              } hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70 transition-all duration-300`}
            >
              About
            </Link>
            <Link
              to="/features"
              className={`${
                isActive("/features") ? "text-[#00356B] dark:text-[#00356B]" : "text-[#00356B]/70 dark:text-[#00356B]/70"
              } hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70 transition-all duration-300`}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className={`${
                isActive("/pricing") ? "text-[#00356B] dark:text-[#00356B]" : "text-[#00356B]/70 dark:text-[#00356B]/70"
              } hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70 transition-all duration-300`}
            >
              Pricing
            </Link>
            <Link
              to="/getintouch"
              className={`${
                isActive("/getintouch") ? "text-[#00356B] dark:text-[#00356B]" : "text-[#00356B]/70 dark:text-[#00356B]/70"
              } hover:text-[#00356B]/70 dark:hover:text-[#00356B]/70 transition-all duration-300`}
            >
              Get in Touch
            </Link>
            <div className="mt-4 md:hidden">
              <Button variant="outline" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header