import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.svg";

const services = [
  {
    title: "Export & Imports",
    description: "Expert services to streamline cross-border trade.",
    image: () => import("@/assets/Services/image1.webp"),
    image1: () => import("@/assets/Services/image1_128.webp"),
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Chemical Waste Management",
    description: "Safe and sustainable solutions for managing chemical waste.",
    image: () => import("@/assets/Services/image2.webp"),
    image1: () => import("@/assets/Services/image2_128.webp"),
    gradient: "from-blue-500 to-green-500",
  },
  {
    title: "All Waste Management",
    description: "Comprehensive waste management services for all types of waste.",
    image: () => import("@/assets/Services/image3.webp"),
    image1: () => import("@/assets/Services/image3_128.webp"),
    gradient: "from-red-500 to-yellow-500",
  },
  {
    title: "Civil Contracts",
    description: "Reliable civil contracting services for your projects.",
    image: () => import("@/assets/Services/image4.webp"),
    image1: () => import("@/assets/Services/image4_128.webp"),
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    title: "Laundry Services",
    description: "Hassle-free laundry services tailored to your needs.",
    image: () => import("@/assets/Services/image5.webp"),
    image1: () => import("@/assets/Services/image5_128.webp"),
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Retail Consultancy",
    description: "Expert advice to enhance your retail strategies.",
    image: () => import("@/assets/Services/image6.webp"),
    image1: () => import("@/assets/Services/image6_128.webp"),
    gradient: "from-green-500 to-lime-500",
  },
  {
    title: "Educational & Career Guidance",
    description: "Comprehensive guidance for students and professionals.",
    image: () => import("@/assets/Services/image7.webp"),
    image1: () => import("@/assets/Services/image7_128.webp"),
    gradient: "from-orange-500 to-pink-500",
  },
  {
    title: "Foreign Language Learning Centers",
    description: "Learn new languages with ease and proficiency.",
    image: () => import("@/assets/Services/image8.webp"),
    image1: () => import("@/assets/Services/image8_128.webp"),
    gradient: "from-gray-500 to-zinc-500",
  },
  {
    title: "Vasthu Consultancy",
    description: "Enhance your living and working spaces with Vasthu expertise.",
    image: () => import("@/assets/Services/image9.webp"),
    image1: () => import("@/assets/Services/image9_128.webp"),
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Marriage & Family Counselling",
    description: "Strengthen relationships with professional counselling.",
    image: () => import("@/assets/Services/image10.webp"),
    image1: () => import("@/assets/Services/image10_128.webp"),
    gradient: "from-fuchsia-500 to-rose-500",
  },
  {
    title: "Drug Addiction Counseling",
    description: "Support and guidance to overcome drug addiction.",
    image: () => import("@/assets/Services/image11.webp"),
    image1: () => import("@/assets/Services/image11_128.webp"),
    gradient: "from-emerald-500 to-teal-500",
  },
];


const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setIsServicesOpen(false);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const preload = async () => {
      const loadedImages = await Promise.all(
        services.map((service) =>
          service.image1().then((module) => module.default)
        )
      );
      setPreloadedImages(loadedImages);
    };
    preload();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`block md:block lg:hidden text-white w-full fixed z-[10000] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-gray-900" : "bg-transparent"}`}
    >
      <div className="top-0 left-0 w-full flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2 z-50">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-bold">Salsabeel Al Janoob ImpExp</span>
        </div>
        <div
          className="z-50 cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <svg
            className="hb"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            stroke="#FFF"
            strokeWidth=".6"
            fill="rgba(255,255,255,0)"
            strokeLinecap="round"
            style={{ cursor: "pointer", width: "30px", height: "30px" }}
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-102%", opacity: 1 }}
            className="absolute top-0 left-0 w-full h-[100vh] bg-gray-900 text-white z-40 flex flex-col overflow-y-auto"
          >
            <div className="py-20 px-6 space-y-6">
              <Link
                to="/"
                className="text-lg font-semibold hover:underline text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-expanded={isServicesOpen}
                >
                  <h2 className="text-lg font-semibold">Services</h2>
                  <span
                    className="text-xl"
                    style={{
                      transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ↑
                  </span>
                </div>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 1, height: 0 }}
                      className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden"
                    >
                      {services.map((service, index) => (
                        <Link
                        key={index}
                        to={`/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center p-3 bg-gray-800 text-white rounded-md shadow-sm hover:shadow-md transition-shadow text-left"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default SPA navigation
                          setIsMenuOpen(false); // Close the menu
                          setIsServicesOpen(false); // Close the services dropdown
                          window.location.href = `/${service.title.toLowerCase().replace(/\s+/g, "-")}`; // Trigger full page refresh
                        }}
                      >
                          {preloadedImages[index] ? (
                            <img
                              src={preloadedImages[index]}
                              alt={service.title}
                              className="w-16 h-16 rounded-md mr-4 object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gray-700 rounded-md" />
                          )}
                          <div>
                            <h3 className="text-sm font-bold">{service.title}</h3>
                            <p className="text-sm text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to="/about"
                className="text-lg font-semibold hover:underline text-left block mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/careers"
                className="text-lg font-semibold text-left block"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-lg font-semibold hover:underline text-left block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const NavbarDesktop = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  useEffect(() => {
    const preload = async () => {
      const images = {};
      for (const [index, service] of services.entries()) {
        const imageModule = await service.image();
        images[index] = imageModule.default;
      }
      setPreloadedImages(images);
    };

    preload();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setIsScrolled(currentScrollY > 50); // Change background after 50px scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const hasBackground = isScrolled || isNavHovered;

  return (
    <nav
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
      className={`hidden lg:block fixed top-0 left-0 w-full z-[10000] py-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        hasBackground
          ? "bg-gray-900 text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto px-10 w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-bold">Salsabeel Al Janoob ImpExp</span>
        </div>

        <div className="hidden lg:flex space-x-6 items-center">
          <Link
            to="/"
            className="px-4 py-2 border-2 border-transparent rounded-full hover:border-current transition-all"
          >
            Home
          </Link>

          <div
            className="group relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="px-4 py-2 rounded-full border-2 border-transparent hover:border-current transition-all"
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              Services
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 1, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 1, height: 0 }}
                  className="absolute left-[calc(50%-52vw)] w-screen bg-gray-900 text-white overflow-hidden rounded-md z-40"
                >
                  <div className="px-10 max-w-full grid grid-cols-12 py-8">
                    <div className="col-span-7">
                      <div className="h-[85vh] w-full overflow-hidden">
                        <motion.img
                          src={
                            hoveredServiceIndex !== null
                              ? preloadedImages[hoveredServiceIndex]
                              : preloadedImages[0]
                          }
                          alt="Services"
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.1 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-span-5 grid grid-cols-2 gap-0 ml-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative flex flex-col justify-start items-start w-full h-full bg-gray-900 rounded-lg overflow-hidden group"
                        onMouseEnter={() => setHoveredServiceIndex(index)}
                        onMouseLeave={() => setHoveredServiceIndex(null)}
                      >
                        <Link
                          
                          className="w-full h-full relative z-10 flex items-center justify-start p-4"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default SPA navigation
                            setIsMenuOpen(false); // Close menu
                            setIsServicesOpen(false); // Close services dropdown
                            window.location.href = `/${service.title.toLowerCase().replace(/\s+/g, "-")}`; // Trigger full page refresh
                          }}
                        >
                          <div>
                            <h3
                              className={`text-base font-semibold text-gray-200 transform transition-transform duration-500 ${
                                hoveredServiceIndex === index ? "translate-x-2" : "translate-x-0"
                              }`}
                            >
                              {service.title}
                            </h3>
                            <p
                              className={`text-gray-300 pt-2 text-sm leading-tight transform transition-transform duration-500 ${
                                hoveredServiceIndex === index ? "translate-x-2" : "translate-x-0"
                              }`}
                            >
                              {service.description}
                            </p>
                          </div>
                        </Link>
                        <div
                          className={`absolute inset-0 bg-gradient-to-b ${
                            service.gradient
                          } scale-y-0 origin-bottom transition-transform duration-500 ease-out ${
                            hoveredServiceIndex === index ? "scale-y-100" : ""
                          }`}
                        ></div>
                      </motion.div>
                    ))}
                  </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/about"
            className="px-4 py-2 rounded-full border-2 border-transparent hover:border-current transition-all"
          >
            About
          </Link>
          <Link
            to="/careers"
            className="px-4 py-2 rounded-full border-2 border-transparent hover:border-current transition-all"
          >
            Careers
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};


const Navbar = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
    </>
  );
};

export default Navbar;
