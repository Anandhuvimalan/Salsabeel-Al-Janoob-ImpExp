import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BentoTilt } from "../components/AboutCompany"; // Reuse BentoTilt
import services from "../components/ServicesData";

const ServiceDetails = () => {
  const { serviceSlug } = useParams();

  // Find the matching service using the slug
  const service = services.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === serviceSlug
  );

  const [serviceImage, setServiceImage] = useState(null);
  const [featuresImage, setFeaturesImage] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (service?.image) {
      service.image().then((module) => setServiceImage(module.default));
    }
    if (service?.featuresImage) {
      service.featuresImage().then((module) => setFeaturesImage(module.default));
    }
  }, [service]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold text-gray-300">Service Not Found</h1>
      </div>
    );
  }

  // Animation Variants for Headings
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <NavBar />
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        ></div>
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-white px-6 lg:px-10 py-3 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {service.title}
          </motion.h1>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 px-6 lg:px-10 mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
          transition={{ duration: 1 }}
        >
          {/* Left: Description */}
          <div className="flex flex-col justify-start">
            <motion.h2
              className="text-3xl font-bold text-indigo-400 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
            >
              Overview
            </motion.h2>
            <p className="text-lg text-gray-400">{service.description}</p>
          </div>
          {/* Right: Image */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ height: "100%" }}
              whileInView={{ height: "0%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            ></motion.div>
            <img
              src={serviceImage}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Feature Section */}
      <div className="py-16 px-6 lg:px-10 mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-200 mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          Features
        </motion.h2>
        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Left: Feature Image */}
          <div className="col-span-1 flex items-center justify-center">
            {featuresImage && (
              <img
                src={featuresImage}
                alt="Features"
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>

          {/* Right: Feature List */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
              >
                <h3 className="text-xl font-bold text-indigo-400">{feature.title}</h3>
                <p className="mt-4 text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-6 lg:px-10 mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-200 mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          Benefits
        </motion.h2>
        <motion.div
          className="grid h-full w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(6,_minmax(100px,_1fr))] gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {service.benefits.map((benefit, index) => (
            <BentoTilt
              key={index}
              className={`${
                index === 0
                  ? "col-span-1 sm:col-span-2 row-span-3"
                  : index === 1
                  ? "row-span-2 sm:row-span-4"
                  : index < 4
                  ? "row-span-2 sm:row-span-3"
                  : "row-span-1 sm:row-span-2"
              } bg-gray-800 p-6 relative rounded-3xl overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-indigo-400 mb-2">{benefit.title}</h3>
                <p className="text-base text-gray-400">{benefit.description}</p>
              </div>
            </BentoTilt>
          ))}
        </motion.div>
      </div>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 ? (
        <section className="bg-black text-white w-full py-16">
          <div className="mx-auto px-6 lg:px-10">
            <div className="pb-8">
              <h2 className="text-4xl font-bold text-left">
                Frequently asked <span className="text-gray-400">questions</span>
              </h2>
            </div>
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1, y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-700 last:border-none"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none hover:text-gray-300 transition-colors"
                  >
                    <span className="text-lg hover:text-blue-500 transition-colors">
                      {faq.question}
                    </span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-gray-400"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: openIndex === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-gray-400"
                  >
                    <p className="py-2">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : (
        <div className="py-16 px-6 lg:px-10 mx-auto">
          <motion.h2
            className="text-4xl font-bold text-gray-200 mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-gray-400 text-center">
            No FAQs available for this service.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ServiceDetails;
