"use client"
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Footer Heading */}
        <motion.h3
          className="text-center text-3xl sm:text-4xl font-bold text-rose-400 tracking-wide mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let&apos;s Connect and Build Something Amazing!
        </motion.h3>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/ahmed-memon-5550642b5/"
            className="text-gray-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/AhmedMemon1234"
            className="text-gray-300 hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={30} />
          </a>
        </motion.div>

        {/* Contact Link or CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg text-gray-400 mb-4">
            Reach out to me for collaborations or just to say hello!
          </p>
          <a
            href="https://wa.me/03368952826"
            className="text-rose-400 text-xl font-semibold hover:text-rose-500 transition-all duration-300"
          >
            Send a Message on WhatsApp
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} Ahmed Memon. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
