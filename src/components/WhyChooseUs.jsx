import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Reusable animation settings
const animationDuration = 1.4;
const animationEase = "easeInOut";

const CardReveal = ({ children, overlayColor, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const overlayVariants = {
    hidden: { height: "100%" },
    visible: {
      height: "0%",
      transition: { duration: animationDuration, ease: animationEase, delay },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-auto overflow-hidden mx-auto my-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
    >
      {/* Animated overlay */}
      <motion.div
        className={`absolute inset-0 z-10 ${overlayColor}`}
        variants={overlayVariants}
        initial="hidden"
        animate={controls}
      />
      {/* Card content */}
      <div className="relative w-full h-full p-1 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      title: "Global Reach",
      description:
        "Simplifying global trade with seamless export and import solutions that connect businesses worldwide.",
      lottiePath: "https://lottie.host/3484028b-1711-4d0f-ab64-0891b8d3c24d/XNRDqdQQjZ.lottie",
      bgColor: "bg-amber-50",
      overlayColor: "bg-gray-50",
    },
    {
      id: 2,
      title: "Eco-Friendly Practices",
      description:
        "Driving sustainability through innovative waste management and renewable energy solutions.",
      lottiePath: "https://lottie.host/0c380c50-8a31-4bae-b0de-d8d65068fb95/ph9UaI16IF.lottie",
      bgColor: "bg-blue-50",
      overlayColor: "bg-gray-50",
    },
    {
      id: 3,
      title: "Trusted Compliance",
      description:
        "Delivering certified solutions with global standards to ensure safety and reliability.",
      lottiePath: "https://lottie.host/a41a7c5f-8947-439e-8bad-7873a9feb92d/2e1RAUl79Y.lottie",
      bgColor: "bg-emerald-50",
      overlayColor: "bg-gray-50",
    },
    {
      id: 4,
      title: "Customer First",
      description:
        "Creating tailored solutions to meet your unique needs and ensure lasting partnerships.",
      lottiePath: "https://lottie.host/e8982c94-e123-47c7-81ba-3ef112e2bf64/ViiTPVBuSH.lottie",
      bgColor: "bg-indigo-50",
      overlayColor: "bg-gray-50",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-10 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us
        </h2>
        {/* Cards container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-10">
          {cards.map((card, index) => (
            <CardReveal
              key={card.id}
              overlayColor={card.overlayColor}
              delay={index * 0.2}
            >
              <div
                className={`rounded-lg h-full flex flex-col justify-between items-center text-center p-6 sm:p-8 ${card.bgColor}`}
              >
                {/* Lottie Animation */}
                <div className="mb-8" aria-label={card.title}>
                  <DotLottieReact
                    src={card.lottiePath}
                    loop
                    autoplay
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
