import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "@/assets/Services/image1_128.webp";
import image2 from "@/assets/Services/image2_128.webp";
import image3 from "@/assets/Services/image3_128.webp";
import image4 from "@/assets/Services/image4_128.webp";
import image5 from "@/assets/Services/image5_128.webp";
import image6 from "@/assets/Services/image6_128.webp";
import image7 from "@/assets/Services/image7_128.webp";
import image8 from "@/assets/Services/image8_128.webp";
import image9 from "@/assets/Services/image9_128.webp";
import image10 from "@/assets/Services/image10_128.webp";
import image11 from "@/assets/Services/image11_128.webp";

const services = [
  {
    id: 1,
    title: "Export & Imports",
    image: image1,
    description: "Comprehensive export and import services with global reach.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Chemical Waste Management",
    image: image2,
    description: "Safe and efficient management of chemical waste materials.",
    gradient: "from-blue-500 to-green-500",
  },
  {
    id: 3,
    title: "All Waste Management",
    image: image3,
    description: "End-to-end waste management solutions for all types of waste.",
    gradient: "from-red-500 to-yellow-500",
  },
  {
    id: 4,
    title: "Civil Contracts",
    image: image4,
    description: "From design to construction, landscaping, and maintenance.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    id: 5,
    title: "Laundry Services",
    image: image5,
    description: "Professional laundry services for businesses and individuals.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Retail Consultancy",
    image: image6,
    description: "Expert advice for 24x7 stores, restaurants, and supermarkets.",
    gradient: "from-green-500 to-lime-500",
  },
  {
    id: 7,
    title: "Educational & Career Guidance",
    image: image7,
    description: "Guiding students toward the right educational and career paths.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    id: 8,
    title: "Foreign Language Learning Centers",
    image: image8,
    description: "Learn foreign languages with expert trainers.",
    gradient: "from-gray-500 to-zinc-500",
  },
  {
    id: 9,
    title: "Vasthu Consultancy",
    image: image9,
    description: "Traditional Vasthu advice for your home and workspace.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 10,
    title: "Marriage & Family Counselling",
    image: image10,
    description: "Counseling for healthy relationships and family harmony.",
    gradient: "from-fuchsia-500 to-rose-500",
  },
  {
    id: 11,
    title: "Drug Addiction Counseling",
    image: image11,
    description: "Helping individuals overcome addiction with professional guidance.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const HomeSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-gray-900 text-gray-300 py-12 sm:py-16 md:py-20 w-full">
      <div className="mx-auto px-6 lg:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-left text-gray-100 w-3/4 md:w-1/2 leading-snug md:leading-relaxed">
          Your Gateway to Excellence: Explore Our Expert Services
        </h1>

        {isMobile ? (
          /* ------------------- MOBILE VIEW ------------------- */
          <div className="space-y-0">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block"
              >
                <div className="flex items-center border-b border-gray-700 py-4">
                  <div className="w-3/4 text-left pr-4">
                    <h2 className="text-lg font-bold text-gray-200">
                      {service.title}
                    </h2>
                    <p className="text-sm text-gray-400 leading-tight">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-1/4 flex justify-end items-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-32 h-12 object-cover rounded-full border border-gray-700"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* ------------------- DESKTOP VIEW ------------------- */
          <motion.div
            className="space-y-0"
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                <Link
                  to={`/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative block border-b border-gray-700 py-4 group overflow-hidden cursor-pointer"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-b ${service.gradient} scale-y-0 origin-bottom pointer-events-none z-0 group-hover:scale-y-100 transition-transform duration-500 ease-out`}
                  ></motion.div>

                  <motion.div
                    className="relative z-10 flex items-center justify-between"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <div className="absolute top-0 left-1 z-20 flex">
                      <span className="text-gray-400 text-sm font-bold">0</span>
                      <div className="overflow-hidden w-5 h-6">
                        <motion.div
                          variants={{
                            rest: { y: 0 },
                            hover: { y: -24 },
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <span className="text-gray-400 text-sm font-bold block h-6">
                            {service.id}
                          </span>
                          <span className="text-gray-400 text-sm font-bold block h-6">
                            {service.id}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      className="relative z-10 w-2/4 text-left pl-8"
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 20, transition: { duration: 0.5 } },
                      }}
                    >
                      <h2 className="text-lg font-bold text-gray-200">
                        {service.title}
                      </h2>
                    </motion.div>

                    <motion.div
                      className="relative z-10 w-2/4 text-left"
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 20, transition: { duration: 0.5 } },
                      }}
                    >
                      <p className="text-sm text-gray-300">
                        {service.description}
                      </p>
                    </motion.div>

                    <motion.div
                      className="w-1/4 flex justify-end"
                      variants={{
                        rest: { x: 0 },
                        hover: { x: -10, transition: { duration: 0.5 } },
                      }}
                    >
                      <div className="relative w-32 h-12 overflow-hidden rounded-full border border-gray-700">
                        <motion.div
                          className="absolute inset-0 flex flex-col"
                          variants={{
                            rest: { y: 0, transition: { duration: 0.5 } },
                            hover: { y: -48, transition: { duration: 0.5 } },
                          }}
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-32 h-12 object-cover"
                          />
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-32 h-12 object-cover"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};


export default HomeSection;
