"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Primary/Preloader"; // Adjust path as needed

import Nav from "./components/Primary/Nav";
import Hero from "./components/Primary/Hero";
import Services from "./components/Primary/Services";
import AboutUs from "./components/Primary/AboutUs";
import Testimonials from "./components/Primary/Testimonials";
import Team from "./components/Primary/Team";
import QandA from "./components/Primary/QandA";
import CTA from "./components/Primary/CTA";
import Footer from "./components/Primary/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to match your preloader's total animation time
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Reset scroll to top after loading
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-primary font-sans w-full overflow-x-hidden scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* The main site reveals below */}
      {!isLoading && (
        <div className="animate-in fade-in duration-1000">
          <Nav />
          <Hero />
          <Services />
          <AboutUs />
          <Testimonials />
          <Team />
          <QandA />
          <CTA />
          <Footer />
        </div>
      )}
    </main>
  );
}