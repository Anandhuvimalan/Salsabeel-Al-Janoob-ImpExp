import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import image1 from '../assets/submenu/image1.webp';
import image2 from '../assets/submenu/image2.webp';
import image3 from '../assets/submenu/image3.webp';
import image4 from '../assets/submenu/image4.webp';
import image5 from '../assets/submenu/image5.webp';
import image6 from '../assets/submenu/image6.webp';
import image7 from '../assets/submenu/image7.webp';
import image8 from '../assets/submenu/image8.webp';
import image9 from '../assets/submenu/image9.webp';
import image10 from '../assets/submenu/image10.webp';
import image11 from '../assets/submenu/image11.webp';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const curtainReveal = {
  hidden: { scaleY: 1 },
  visible: {
    scaleY: 0,
    transition: { duration: 1.2, ease: 'easeInOut' },
  },
};

const timelineData = [
  {
    title: "1975: The Beginning",
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Salsabeel Al Janoob was established in Salalah, Oman, on October 19, 1975, focusing on import and export services. Guided by a vision of building bridges between Oman and the world, the company quickly gained trust for its dedication to quality and ethical business practices.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[image1, image2].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-800 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={curtainReveal}
              />
              <img
                src={img}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    title: "1980s: Expanding Horizons",
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          During the 1980s, the company diversified into waste management and civil contracting, responding to Oman’s infrastructural growth and environmental needs. This decade marked the beginning of Salsabeel Al Janoob’s reputation as a reliable multi-service provider.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[image3, image4].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-800 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={curtainReveal}
              />
              <img
                src={img}
                alt={`Image ${index + 3}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    title: "1990s: Diversification of Services",
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          In the 1990s, Salsabeel Al Janoob expanded its service offerings beyond traditional sectors, introducing Vasthu Consultancy, marriage counseling, and educational guidance to support the social and professional needs of Oman’s residents.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[image5, image6].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-800 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={curtainReveal}
              />
              <img
                src={img}
                alt={`Image ${index + 5}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    title: "2000s: Investing in Innovation",
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Entering the new millennium, the company focused on technological advancements and sustainable practices. This period saw the integration of cutting-edge waste management solutions, solar panel installations, and more comprehensive civil contracting services to meet modern needs.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[image7, image8].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-800 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={curtainReveal}
              />
              <img
                src={img}
                alt={`Image ${index + 7}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    title: "2010s: Building Global Partnerships",
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          The 2010s were defined by growth and collaboration. Salsabeel Al Janoob partnered with leading organizations, enhancing its ability to provide high-quality retail consultancy, waste management, and construction services on a larger scale.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[image9, image10].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-800 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={curtainReveal}
              />
              <img
                src={img}
                alt={`Image ${index + 9}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    title: "2024: Expansion to India",
    content: (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          In December 2024, Salsabeel Al Janoob officially expanded its operations to Coimbatore, Tamil Nadu, India. This move reflected the company’s ambition to bring its expertise to the dynamic South Asian market, marking a major milestone in its global growth strategy.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[image11].map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-800 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={curtainReveal}
              />
              <img
                src={img}
                alt={`Image ${index + 11}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
];

function App() {
  return <Timeline data={timelineData} />;
}

export default App;
