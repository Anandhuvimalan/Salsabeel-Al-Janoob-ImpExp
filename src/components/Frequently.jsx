import { motion } from "framer-motion";
import { useState } from "react";

function Frequent() {
  const faqs = [
    {
      question: "What is Salsabeel Al Janoob?",
      answer:
        "Salsabeel Al Janoob is a service provider with operations in the Sultanate of Oman and India, offering import-export services along with a range of other solutions like waste management, civil contracts, and consultancy services.",
    },
    {
      question: "Where are your operations based?",
      answer:
        "Our Sultanate of Oman operations are based in Salalah and Barka, while our India operations are headquartered in Coimbatore, Tamilnadu.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We offer services such as export & import, specialized chemical waste management, civil contracts, retail consultancy, educational and career guidance, and much more. Visit our Services section for detailed information.",
    },
    {
      question: "Can you manage specialized chemical waste?",
      answer:
        "Yes, we specialize in chemical waste management, ensuring environmentally compliant solutions.",
    },
    {
      question: "Do you offer retail consultancy?",
      answer:
        "Yes, we provide consultancy for setting up and managing 24x7 convenience stores, cake shops, fast food stalls, restaurants, supermarkets, and more.",
    },
    {
      question: "What kind of civil contracts do you handle?",
      answer:
        "We handle design to construction, demolition of old buildings, landscaping, fencing, boulder laying, painting, electric works, solar panel connections, and all types of annual maintenance contracts.",
    },
    {
      question: "Do you provide educational and career guidance?",
      answer:
        "Yes, we guide students with career counseling, foreign language learning, and provide vasthu and family counseling services.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us via email at info@salsabeelaljanoobimpexp.com or through phone/WhatsApp. Visit our Contact section for more details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white w-full py-16">
      <div className="mx-auto px-10">
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
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {faqs.map((faq, index) => (
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
                animate={{
                  height: openIndex === index ? "auto" : 0,
                }}
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
  );
}

export default Frequent;
