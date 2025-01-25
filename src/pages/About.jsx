import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import OurJourney from "../components/OurJourney";
import LeaderShip from "../components/LeaderShip";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import heroBg from "../assets/hero.jpg";
import omanOffice from "../assets/submenu/image1.webp";
import indiaOffice from "../assets/submenu/image2.webp";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const curtainReveal = {
    hidden: { scaleY: 1 },
    visible: {
      scaleY: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with Curtain Reveal */}
          <motion.div
            className="absolute inset-0 bg-purple-800 origin-top"
            initial="hidden"
            animate="visible"
            variants={curtainReveal}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                About Salsabeel Al Janoob ImpExp
              </h1>
              <p className="text-lg md:text-xl">
                Excellence in Import, Export, and Retail Solutions Across
                Borders.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <OurJourney />

      {/* About the Company */}
      <section className="py-12 px-6 lg:px-10 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            About Our Journey
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Salsabeel Al Janoob ImpExp began its journey in 1975 under the
            visionary leadership of{" "}
            <strong>Khalfan Abdullah Khalfan Al Mandary</strong>, with a
            singular goal: to deliver exceptional quality and reliable services
            to clients worldwide...
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Our growth story is one of resilience, adaptability, and relentless
            pursuit of perfection. By investing in state-of-the-art technology,
            fostering a highly skilled workforce, and adhering to stringent
            quality standards...
          </p>
        </motion.div>
      </section>

      {/* Oman Office */}
      <section className="py-12 px-6 lg:px-10 bg-gray-800 flex flex-col md:flex-row items-center gap-8 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Our Operations in Oman
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Salsabeel Al Janoob started its journey in the Sultanate of Oman,
            offering unmatched quality and service excellence. Our operations
            include trade, waste management, and consultancy services, tailored
            to the unique needs of the region...
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="md:w-1/2"
        >
          <img
            src={omanOffice}
            alt="Oman Office"
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </section>

      {/* India Office */}
      <section className="py-12 px-6 lg:px-10 bg-gray-900 flex flex-col md:flex-row-reverse items-center gap-8 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Our Operations in India
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            In 2024, we expanded to India, bringing our expertise and commitment
            to Coimbatore, Tamil Nadu. Our Indian operations focus on importing
            and exporting goods, retail consultancy, and various support
            services...
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="md:w-1/2"
        >
          <img
            src={indiaOffice}
            alt="India Office"
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </section>
      <LeaderShip/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
