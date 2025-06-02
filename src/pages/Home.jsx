"use client";
import { useState, useEffect } from "react";
import Hero from "../pages/Hero";
import About from "../pages/About2";
import Feature from "../pages/Features";
import FeaturesMobile from "../pages/features-mobile";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQSections";
import Getintouch from "./Getintouch";
import TestimonialsAndPartners from "./combined-testimonials-partners";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the 'lg' breakpoint in Tailwind
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section>
        <Hero />
        <About />
        {/* {isMobile ? <FeaturesMobile /> : <Feature />} */}
        <Feature />
        <Pricing />
        <FAQ />
        <TestimonialsAndPartners />
        <Getintouch />
        {/* <Contact /> */}
      </section>
    </main>
  );
};

export default Home;
