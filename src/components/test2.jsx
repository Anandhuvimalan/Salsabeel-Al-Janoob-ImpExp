import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";

import shipVideo from "../assets/videos/video1.mp4";
import constructionVideo from "../assets/videos/video2.mp4";
import storeVideo from "../assets/videos/video3.mp4";

// Carousel video data
const videos = [
  {
    src: shipVideo,
    title: "Excellence in Import & Export Services",
    description:
      "Operating since 1975 in Oman and now expanded to India, providing unmatched quality services.",
  },
  {
    src: constructionVideo,
    title: "Comprehensive Waste Management",
    description:
      "Offering specialized chemical waste and general waste management services with expert solutions.",
  },
  {
    src: storeVideo,
    title: "Retail & Consultancy Services",
    description:
      "Providing tailored solutions for retail businesses, educational guidance, and more.",
  },
];

// Animation variants
const overlayVariants = {
  hidden: { y: 0 },
  visible: { y: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = ({ animationTriggered }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  // Play the current video when the index changes
  useEffect(() => {
    videoRefs.current[currentIndex]?.play();
  }, [currentIndex]);

  // Handle video end to switch to the next video
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Entry Animation Overlay */}
      <motion.div
        className="absolute inset-0 bg-gray-100 z-50"
        variants={overlayVariants}
        initial="hidden"
        animate={animationTriggered ? "visible" : "hidden"}
      />

      <Navbar />

      {/* Hero Section Content */}
      <div className="flex items-stretch h-screen relative">
        {videos.map((video, index) => {
          const isActive = currentIndex === index;

          return (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                className="w-full h-full object-cover"
                muted
                onEnded={handleVideoEnd}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20"></div>
              </div>

              {/* Video Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white z-30">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  variants={textVariants}
                >
                  {video.title}
                </motion.h1>
                <motion.p
                  className="text-lg mb-6"
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  variants={textVariants}
                >
                  {video.description}
                </motion.p>
                <motion.button
                  className="bg-[#F57E16] hover:bg-opacity-90 text-white py-2 px-4 rounded-md font-semibold text-center w-fit"
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  variants={textVariants}
                >
                  Learn More About Us
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
