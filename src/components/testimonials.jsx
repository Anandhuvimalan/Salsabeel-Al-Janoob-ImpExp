import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/submenu/image1.webp";
import image2 from "../assets/submenu/image2.webp";
import image3 from "../assets/submenu/image3.webp";
import image4 from "../assets/submenu/image4.webp";
import image5 from "../assets/submenu/image5.webp";

// Section data
const sections = [
  {
    title: "Integrated Civil Infrastructure Solutions",
    description:
      "Delivering comprehensive civil contracting services, from design to construction, demolition of old structures, and expert landscaping. We specialize in fencing, boulder laying, solar panel installations for power and water heating, as well as painting, electrical works, and annual maintenance contracts.",
    icon: "🏗️",
    image: image1,
  },
  {
    title: "Premium Laundry Management Services",
    description:
      "Providing state-of-the-art laundry solutions for residential and commercial clients, ensuring meticulous care, superior quality, and timely service tailored to meet diverse requirements.",
    icon: "🧺",
    image: image2,
  },
  {
    title: "Retail Business Development Expertise",
    description:
      "Offering end-to-end consultancy for setting up and optimizing retail operations, including 24/7 convenience stores, cake shops, ice cream parlors, fast-food outlets, restaurants, cafeterias, supermarkets, and hypermarkets. We help businesses thrive in competitive markets.",
    icon: "🏬",
    image: image3,
  },
  {
    title: "Holistic Education & Career Advancement",
    description:
      "Empowering students and professionals with career counseling, strategic planning, and access to foreign language learning centers. We provide personalized pathways to achieve academic and professional excellence.",
    icon: "🎓",
    image: image4,
  },
  {
    title: "Specialized Well-Being and Advisory Services",
    description:
      "Offering Vasthu consultancy for harmonious living spaces, marriage and family counseling to strengthen relationships, and dedicated drug addiction recovery programs to support individuals and families on their path to wellness.",
    icon: "🧠",
    image: image5,
  },
];

// Testimonials Component
const Testimonials1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // Unique key for progress reset
  const intervalRef = useRef(null);

  const descriptionDuration = 10; // Duration for the progress bar and description (in seconds)

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
      setProgressKey((prevKey) => prevKey + 1); // Reset progress animation
    }, descriptionDuration * 1000);
  };

  // Handles manual section selection
  const handleSectionClick = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);
    setProgressKey((prevKey) => prevKey + 1); // Reset progress animation
    startAutoPlay(); // Restart auto-play after manual interaction
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 px-6 lg:px-10 text-gray-300">
      <div className="text-center py-12">
        <motion.h1
          className="text-5xl font-bold text-purple-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Trusted Partner in Diverse Service Solutions
        </motion.h1>
        <motion.p
          className="text-gray-300 text-base mt-3 leading-7 tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From civil infrastructure to laundry management, retail development, education, and well-being services, we deliver tailored solutions designed to empower businesses and individuals with excellence and innovation.
        </motion.p>
      </div>

      <div className="flex flex-grow">
        <div className="w-full lg:w-1/2 pr-6 lg:pr-10 relative bg-gray-900 shadow-md">
          <div className="mt-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col mb-8 cursor-pointer transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleSectionClick(index)}
                aria-label={`View section: ${section.title}`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold text-gray-200">
                    {section.title}
                  </p>
                  <span className="text-3xl ml-12 text-purple-400">
                    {section.icon}
                  </span>
                </div>

                <AnimatePresence initial={false} mode="wait">
                  {index === activeIndex && (
                    <motion.div
                      key={section.description}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm mt-2 pr-4 leading-relaxed">
                        {section.description}
                      </p>

                      <div className="relative mt-4 h-1 rounded-full bg-gray-700">
                        <motion.div
                          className="absolute top-0 left-0 h-1 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                          key={progressKey} // Reset progress animation
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{
                            duration: descriptionDuration,
                            ease: "linear",
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={sections[activeIndex].image}
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
