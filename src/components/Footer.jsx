import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Company Info */}
        <motion.div variants={childVariants}>
          <h4 className="text-xl font-bold mb-4">Salsabeel Al Janoob</h4>
          <p className="text-sm leading-relaxed text-gray-400">
            Salsabeel Al Janoob Trd Est & ImpExp, providing top-notch services
            since 1975. Excellence in quality service and straightforward
            commitment.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={childVariants}>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={childVariants}>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-sm leading-relaxed text-gray-400">
            <span className="block"><strong>Oman:</strong> +968 9171 8606</span>
            <span className="block"><strong>India:</strong> +91 93494 74746</span>
            <span className="block">Email: info@salsabeelaljanoobimpexp.com</span>
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={childVariants}>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {[
              { href: "https://facebook.com", icon: "fab fa-facebook", label: "Facebook" },
              { href: "https://twitter.com", icon: "fab fa-twitter", label: "Twitter" },
              { href: "https://linkedin.com", icon: "fab fa-linkedin", label: "LinkedIn" },
              { href: "https://instagram.com", icon: "fab fa-instagram", label: "Instagram" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-gray-300"
                aria-label={social.label}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Embedded Maps */}
        <motion.div variants={childVariants} className="lg:col-span-2">
          <h4 className="text-xl font-bold mb-4">Our Locations</h4>
          <div className="space-y-6 lg:space-y-0 lg:flex lg:space-x-6">
            {[{
              title: "Oman Office",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31572.236640720196!2d54.04145491715924!3d17.020864901065378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd93128b0cdd43b%3A0xf482dd474b52604e!2sSalalah%2C%20Oman!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
            }, {
              title: "India Office",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7864949832956!2d76.96414531520312!3d10.998764792141294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c39f1bdb8e1%3A0x5d7fd8f2e684236f!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2s!4v1700000000001!5m2!1sen!2s",
            }].map((location, index) => (
              <div key={index} className="flex-1">
                <h5 className="font-semibold text-sm mb-2">{location.title}</h5>
                <iframe
                  src={location.src}
                  className="w-full h-52 border-0 rounded-lg shadow-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 border-t border-gray-800 pt-5 text-center"
      >
        <p className="text-sm text-gray-500">&copy; 2025 Salsabeel Al Janoob. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
