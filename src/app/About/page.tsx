"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const aboutItems = [
    {
      id: 1,
      title: "Coding Journey",
      description:
        "A Full Stack Web Developer skilled in Next.js, React, Tailwind CSS, TypeScript, and JavaScript.",
      image: "/about3.png",
    },
    {
      id: 2,
      title: "Education",
      description:
        "Currently pursuing O Levels, balancing academics with honing my web development expertise.",
      image: "/about2.png",
    },
    {
      id: 3,
      title: "Experience",
      description:
        "Over 2 years of professional experience, creating responsive, scalable web applications.",
      image: "/about1.png",
    },
  ];

  const [draggableElements, setDraggableElements] = useState([
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 100, y: 200 },
    { id: 3, x: -100, y: -150 },
  ]);

  const skills = [
    "Web Developer",
    "Graphic Designer",
    "Video Editor",
    "Freelancer",
    "Photo Editor",
    "Computer Master",
    "UI/UX Designer",
    "Content Creator",
    "Project Manager",
  ];

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    setDraggableElements((prevState) =>
      prevState.map((el) =>
        el.id === id
          ? { ...el, x: e.clientX - 50, y: e.clientY - 50 }
          : el
      )
    );
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden" id="About">
      {/* Optimized Background Elements */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 blur-3xl opacity-30"
        animate={{ x: [0, 200, -200, 0], y: [0, 150, -150, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{ willChange: 'transform' }} // Optimized animation
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-green-400 to-yellow-400 blur-3xl opacity-30"
        animate={{ x: [200, -200, 200], y: [-100, 100, -100] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        style={{ willChange: 'transform' }} // Optimized animation
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-center text-4xl sm:text-6xl font-bold mb-12 text-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-10">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative bg-gradient-to-br from-gray-800 to-gray-600 p-6 rounded-xl shadow-2xl w-[300px] h-[400px] overflow-hidden cursor-pointer transform-gpu hover:border-4 hover:border-red-500 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.3, duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-red-600 mb-4">{item.title}</h2>
              <p className="text-white mb-4">{item.description}</p>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 w-full overflow-hidden">
  <motion.div
    className="flex w-max space-x-6"
    animate={{ x: ["0%", "-100%"] }} // Continuous scrolling effect
    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
  >
    {[...skills, ...skills].map((skill, index) => (
      <div
        key={index}
        className="text-lg md:text-xl font-semibold text-white px-6 py-3 bg-gray-800 rounded-md whitespace-nowrap"
      >
        {skill}
      </div>
    ))}
  </motion.div>
</div>


        {/* Additional Sections */}
        <div className="mt-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-center text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            "Coding is not just about writing code, it's about solving real-world problems."
          </motion.h2>
          <div className="text-center">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/ahmed-memon-5550642b5/"
              className="text-white hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/AhmedMemon1234"
              className="text-white hover:text-gray-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>

      {/* Draggable Elements */}
      {draggableElements.slice(0, 2).map((el) => ( // Limit draggable elements to 2
        <motion.div
          key={el.id}
          className="absolute w-16 h-16 bg-gradient-to-r from-rose-500 to-yellow-500 rounded-full shadow-lg cursor-pointer"
          style={{
            left: `${el.x}px`,
            top: `${el.y}px`,
          }}
          onMouseMove={(e) => handleMouseMove(e, el.id)}
          drag
        />
      ))}
    </div>
  );
};

export default About;
