import React from "react";
import { motion } from "framer-motion";

const leadershipTeam = [
  {
    name: "Khalfan Abdullah Khalfan Al Mandary",
    title: "Chairman",
    email: "info@salsabeelaljanoobimpexp.com",
    message: "Leading with integrity and vision for a brighter future.",
  },
  {
    name: "Pramod Haridasan",
    title: "Managing Director & General Manager",
    phone: ["+968 9171 8606", "+91 93494 74746"],
    email: "pramodsh@salsabeelaljanoobimpexp.com",
    message:
      "Dedicated to excellence and fostering business relationships worldwide.",
  },
  {
    name: "Sasidharan Kunnath",
    title: "Director, Business Enhance",
    phone: ["+917550350680"],
    email: "s.kunnath@salsabeelaljanoobimpexp.com",
    message:
      "Enhancing businesses with innovative strategies and strong partnerships.",
  },
];

const OurLeadership = () => {
  return (
    <div className="bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Our Leadership
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {leadershipTeam.map((leader, index) => (
          <motion.div
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-80 transform transition-all hover:scale-105 hover:shadow-2xl"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <img
                src={`https://via.placeholder.com/150?text=${leader.name.split(
                  " "
                )[0]}`}
                alt={leader.name}
                className="w-24 h-24 rounded-full border-4 border-gray-600 shadow-md"
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {leader.name}
              </h3>
              <p className="text-gray-400 font-medium mb-4">{leader.title}</p>
              <p className="italic text-gray-300 mb-6">"{leader.message}"</p>
              <div className="text-sm text-gray-400 space-y-2">
                {leader.phone && (
                  <p>
                    <strong>Phone:</strong>{" "}
                    {leader.phone.map((num, i) => (
                      <span key={i} className="block">
                        {num}
                      </span>
                    ))}
                  </p>
                )}
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-blue-400 hover:underline"
                  >
                    {leader.email}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurLeadership;
