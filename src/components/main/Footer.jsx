"use client"

import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

const FooterLink = ({ title, details }) => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
      <ul>
        {details.map((item, index) => (
          <li key={index} className="mb-3">
            <Link
              to={item.to}
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 relative group"
            >
              {item.link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  const { darkMode } = useTheme()

  const products = [
    { to: "/elitecbt", link: "Elite CBT" },
    { to: "/eliteclass", link: "Elite Class" },
    { to: "/elitelibrary", link: "Elite Library" },
    { to: "/aiasistant", link: "AI Assistant" },
    { to: "/pricing", link: "Pricing" },
  ]

  const company = [
    { to: "/aboutus", link: "About Us" },
    { to: "/careers", link: "Careers" },
    { to: "/blog", link: "Blog" },
    { to: "/press", link: "Press" },
    { to: "/partners", link: "Partners" },
  ]

  const support = [
    { to: "/help", link: "Help Center" },
    { to: "/contactus", link: "Contact Us" },
    { to: "/privacy", link: "Privacy Policy" },
    { to: "/terms", link: "Terms of Services" },
    { to: "/status", link: "Status" },
  ]

  return (
    <footer className={`bg-gray-900 text-gray-400 px-5 pt-16`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-gray-800 pb-10 mx-auto container">
        <div className="lg:col-span-4 sm:col-span-full">
          <Link to="/">
            <h1 className="text-2xl font-bold text-[#00356B] hover:text-[#00356B]/90 transition-colors duration-300">
              Elite Edu Tech
            </h1>
          </Link>
          <p className="mt-4 max-w-md">
            Transforming education through innovative technology solutions that empower teachers and inspire students.
          </p>
          <div className="flex space-x-5 mt-6 mb-4">
            <a
              href="#"
              className="hover:text-[#00356B]/90 transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#00356B]/90 transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 sm:col-span-1">
          <FooterLink title="Products" details={products} />
        </div>

        <div className="lg:col-span-2 sm:col-span-1">
          <FooterLink title="Company" details={company} />
        </div>

        <div className="lg:col-span-2 sm:col-span-1">
          <FooterLink title="Support" details={support} />
        </div>
      </div>

      <div className="flex justify-center py-8 text-sm">
        &copy; {new Date().getFullYear()} Elite Edu Tech. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer