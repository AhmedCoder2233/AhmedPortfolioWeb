"use client"
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden py-20" id="Contact">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-rose-400 tracking-wider">
            Contact Me
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            Let's create something amazing together. Reach out to me!
          </p>
        </motion.div>

        {/* Contact Form with Scroll Animation */}
        <motion.div
          className="flex justify-center items-center gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: false }}
        >
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full transform transition duration-500 hover:scale-105">
            <h3 className="text-3xl font-semibold text-white mb-6 text-center">Send me a Message</h3>
            <form action="https://wa.me/03368952826" method="get" target="_blank">
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="text-sm text-gray-300">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-4 mt-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="text-sm text-gray-300">Your Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-4 mt-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="text-sm text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-4 mt-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-md shadow-md w-full transform transition duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="mt-12 flex justify-center gap-6 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: false }}
        >
          <a href="https://twitter.com" className="hover:text-blue-400 transition-colors duration-300">
            Twitter
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-600 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://github.com" className="hover:text-gray-400 transition-colors duration-300">
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
