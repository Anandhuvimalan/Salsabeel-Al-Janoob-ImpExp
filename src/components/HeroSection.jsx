import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "./NavBar";

const MAX_VISIBLE_LAYERS = 5;

function buildStepsFromImages(images, texts) {
  return images.map((image, i) => ({
    background: images[(i + 1) % images.length],
    overlay: image,
    heading: texts[i]?.heading || `Default Heading ${i + 1}`,
    subtext: texts[i]?.subtext || `Default Subtext ${i + 1}`,
  }));
}

const getClipPath = (expanded) =>
  expanded
    ? "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%)"
    : "polygon(0% 0%, 0% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 100% 100%, 100% 0%)";

const HeroSection = ({ count = 3 }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [baseSteps, setBaseSteps] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [isLottieVisible, setIsLottieVisible] = useState(true);

  // businessContent.js
 const overlayTexts = [
  { heading: "Innovate with Us", subtext: "Empowering businesses with cutting-edge solutions." },
  { heading: "Your Growth Partner", subtext: "Scaling your business to new heights." },
  { heading: "Driving Digital Excellence", subtext: "Transforming ideas into impactful results." },
];


  useEffect(() => {
    async function loadImages() {
      try {
        const imports = [];
        for (let i = 1; i <= count; i++) {
          const mod = await import(`@/assets/HeroSection/hero${i}.webp`);
          imports.push(mod.default);
        }
        setLoadedImages(imports);
      } catch (err) {
        console.error("Failed to import images:", err);
      }
    }
    loadImages();
  }, [count]);

  useEffect(() => {
    if (loadedImages.length === count) {
      const steps = buildStepsFromImages(loadedImages, overlayTexts);
      setBaseSteps(steps);
      setLoading(false);
    }
  }, [loadedImages, count]);

  useEffect(() => {
    const handleScroll = () => {
      setIsLottieVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index) => {
    setExpandedIndex(index);
    setTimeout(() => {
      setActiveIndex(index + 1);
    }, 1000);
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stepsToRender = [];
  if (!loading && baseSteps.length > 0) {
    const startIndex = Math.max(0, activeIndex - (MAX_VISIBLE_LAYERS - 1));
    for (let i = startIndex; i <= activeIndex; i++) {
      const stepData = baseSteps[i % baseSteps.length];
      const isExpanded = i <= expandedIndex;

      stepsToRender.push(
        <div
          key={i}
          className="absolute inset-0"
          style={{
            zIndex: i + 1,
            backgroundImage: `url(${stepData.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleClick(i)}
        >
          <div
            className="absolute inset-0 pointer-events-none bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${stepData.overlay})`,
              clipPath: getClipPath(isExpanded),
            }}
          />
          <motion.div
            className="absolute left-10 top-[40vh] transform -translate-y-1/2 text-white"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-6xl font-extrabold">{stepData.heading}</h1>
            <p className="text-2xl mt-4">{stepData.subtext}</p>
          </motion.div>
        </div>
      );
    }
  }

  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {stepsToRender}
        {/* Lottie animation */}
        <div
          className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 z-[100001] transition-opacity duration-300 ${
            isLottieVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "60px", height: "40px" }}
        >
          <DotLottieReact
            src="https://lottie.host/3ca97358-8486-4f22-a40b-d8c43f277eed/LLyVg4xw83.lottie"
            loop
            autoplay
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
