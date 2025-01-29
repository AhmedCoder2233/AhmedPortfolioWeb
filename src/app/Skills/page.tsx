"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSanity } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-6xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-6xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-6xl" /> },
  { name: "Sanity CMS", icon: <SiSanity className="text-red-500 text-6xl" /> },
];

export default function Skills() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden flex flex-col items-center py-20"id="Skills">
      <motion.h2 
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg w-36 h-36 sm:w-44 sm:h-44 hover:bg-red-500 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {skill.icon}
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
