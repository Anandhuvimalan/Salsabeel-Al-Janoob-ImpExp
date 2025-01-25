import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Excellence in Quality",
    description: "Delivering unmatched quality in all our services to exceed client expectations.",
    icon: "⭐", // Replace with an SVG or appropriate icon
  },
  {
    title: "Sustainability",
    description: "Implementing eco-friendly and sustainable solutions in all operations.",
    icon: "🌱", // Replace with an SVG or appropriate icon
  },
  {
    title: "Reliability",
    description: "Ensuring consistent and dependable service with every engagement.",
    icon: "✔️", // Replace with an SVG or appropriate icon
  },
  {
    title: "Comprehensive Solutions",
    description: "Providing end-to-end solutions tailored to client needs, from planning to execution.",
    icon: "🔧", // Replace with an SVG or appropriate icon
  },
];

const RevealSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animations of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-6 lg:px-10 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do for Our Clients</h2>
        <p className="text-gray-600">
          We are committed to delivering unparalleled service excellence, tailored to meet the unique needs of our clients across industries and regions.
        </p>
      </div>
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RevealSection;
