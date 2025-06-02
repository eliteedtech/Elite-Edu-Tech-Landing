import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import Logo from "../ui/logo";

const FooterLink = ({ title, details }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-900 dark:text-white font-semibold text-lg relative">
        {title}
        <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B]" />
      </h3>
      <ul className="space-y-3">
        {details.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="text-gray-600 dark:text-gray-400 hover:text-[#A51C30] dark:hover:text-[#00356B] transition-all duration-300 relative group flex items-center"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B] group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const products = [
    { to: "/elite-cbt", label: "Elite CBT" },
    { to: "/elite-class", label: "Elite Class" },
    { to: "/elite-library", label: "Elite Library" },
    { to: "/ai-assistant", label: "AI Assistant" },
    { to: "/pricing", label: "Pricing" },
  ];

  const company = [
    { to: "/about", label: "About Us" },
    { to: "/careers", label: "Careers" },
    { to: "/blog", label: "Blog" },
    { to: "/press", label: "Press" },
    { to: "/partners", label: "Partners" },
  ];

  const support = [
    { to: "/help", label: "Help Center" },
    { to: "/getintouch", label: "Contact Us" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" },
    { to: "/status", label: "Status" },
  ];

  const socialLinks = [
    {
      to: "#",
      icon: Facebook,
      label: "Facebook",
      color: "hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      to: "#",
      icon: Twitter,
      label: "Twitter",
      color: "hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      to: "#",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20",
    },
    {
      to: "#",
      icon: Youtube,
      label: "YouTube",
      color: "hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 relative overflow-hidden border-t border-gray-200 dark:border-gray-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00356B] to-[#A51C30]" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-5 pt-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-gray-200 dark:border-gray-700/50 pb-12">
            {/* Company Info */}
            <div className="lg:col-span-4 sm:col-span-full space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Link
                    to="/"
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Logo size="xl" withText={false} />
                  </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                  Transforming education through innovative technology solutions
                  that empower teachers and inspire students to achieve
                  excellence.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm group">
                  <Mail className="w-4 h-4 text-[#A51C30] dark:text-[#00356B] group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:contact@eliteedutech.com"
                    className="hover:text-[#A51C30] dark:hover:text-[#00356B] transition-colors duration-300"
                  >
                    eliteedutech1@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm group">
                  <Phone className="w-4 h-4 text-[#A51C30] dark:text-[#00356B] group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:+15551234567"
                    className="hover:text-[#A51C30] dark:hover:text-[#00356B] transition-colors duration-300"
                  >
                    +234 703 538 4184
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm group">
                  <MapPin className="w-4 h-4 text-[#A51C30] dark:text-[#00356B] group-hover:scale-110 transition-transform duration-300" />
                  <span>
                    Floor 1, African Alliance Building, No 1 Sani Abacha Way
                    Kano State, Nigeria
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.to}
                      className={`p-3 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2 sm:col-span-1">
              <FooterLink title="Products" details={products} />
            </div>

            <div className="lg:col-span-2 sm:col-span-1">
              <FooterLink title="Company" details={company} />
            </div>

            <div className="lg:col-span-2 sm:col-span-1">
              <FooterLink title="Support" details={support} />
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2 sm:col-span-full">
              <div className="space-y-4">
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg relative">
                  Newsletter
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B]" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Stay updated with our latest features and educational
                  insights.
                </p>
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A51C30] dark:focus:ring-[#00356B] focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-[#A51C30] to-[#00356B] text-white rounded-lg hover:from-[#00356B] hover:to-[#A51C30] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-8 space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Elite Edu Tech. All rights reserved.
            </div>
            <div className="flex items-center text-sm">
              <span className="text-gray-500 dark:text-gray-500">
                Made by Elite Edu Tech Team 
              </span>
              {/* <Heart className="w-4 h-4 mx-1 text-[#A51C30] dark:text-[#00356B] animate-pulse" /> */}
              <span className="text-gray-500 dark:text-gray-500">
                &nbsb; in Nigeria
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-[#A51C30] dark:hover:text-[#00356B] transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-[#A51C30] dark:hover:text-[#00356B] transition-colors duration-300 relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                to="/cookies"
                className="text-gray-600 dark:text-gray-400 hover:text-[#A51C30] dark:hover:text-[#00356B] transition-colors duration-300 relative group"
              >
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A51C30] to-[#00356B] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
