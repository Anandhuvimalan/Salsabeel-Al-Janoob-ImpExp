import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutCompany from "../components/AboutCompany";
import FeaturesSection from "../components/FeaturesSection";
import HomeSection from "../components/HomeSection";
import OurJourney from "../components/OurJourney";
import Testimonials from "../components/testimonials";
import Testimonial from "../components/Testimonial";
import Frequent from "../components/Frequently";
import Footer from "../components/Footer";
import LogoSVG from "../assets/logo.svg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [heroAnimationTriggered, setHeroAnimationTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setHeroAnimationTriggered(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 relative">
      {/* Always render HeroSection, but initially hidden */}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <HeroSection animationTriggered={heroAnimationTriggered} />
      </div>

      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <>
          <WhyChooseUs />
          <AboutCompany />
          <HomeSection />
          <FeaturesSection />
          <Testimonials />
          <OurJourney />
          <Testimonial />
          <Frequent />
          <Footer />
        </>
      )}
    </div>
  );
};

const Preloader = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{ 
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 1.8 
        }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <SvgAnimation />
          <SplitTextAnimation text="Salsabeel Al Janoob" />
        </div>
      </motion.div>

      <motion.div
        className="fixed inset-0"
        style={{ backgroundColor: "#F78C22" }}
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 2.4,
        }}
      />
    </>
  );
};

const SvgAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0 0 0)" 
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        opacity: { duration: 0.4 }
      }}
      className="flex items-center justify-center"
    >
      <img src={LogoSVG} alt="Animation SVG" className="mx-auto" />
    </motion.div>
  );
};

const SplitTextAnimation = ({ text }) => {
  const textArray = text.split("");

  return (
    <motion.div
      className="flex space-x-1 text-white text-2xl font-bold mt-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.3,
          },
        },
      }}
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                ease: [0.215, 0.61, 0.355, 1]
              }
            },
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Home;