"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Projects() {
  // Sample project data
  const projects = [
    {
      title: "Project One",
      description: "This is my Restaurent Web",
      link: "https://restaurent-web-u2bu.vercel.app/",
      image: "/restaurent.png",
    },
    {
      title: "Project Two",
      description: "This is my 2nd Ecommerce Web.",
      link: "https://final-hackathon-3-zzop.vercel.app/",
      image: "/3-devices-black (1).png",
    },
    {
      title: "Project Three",
      description: "This is my Food Website (Basic).",
      link: "https://assignment4-5-by-ahmed-owbr.vercel.app/",
      image: "/3-devices-black (3).png",
    },
    {
      title: "Project Four",
      description: "This is my Ecommerce Web.",
      link: "https://hackathon3-sw9s.vercel.app/",
      image: "/project.png",
    },
    {
      title: "Project Fifth",
      description: "This is my Ecommerce Web.",
      link: "https://ecommerce-project-x5p4.vercel.app/",
      image: "/projects3.png",
    },
    {
      title: "Project Sixth",
      description: "This is my Simple Blog Website.",
      link: "https://blog-assignment-pearl.vercel.app/",
      image: "/project2.png",
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden flex flex-col items-center py-20" id="projects">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }:any) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep the trigger active infinitely
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500" id="Projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view
        y: inView ? 0 : 50, // Slide up when in view
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut", // Smooth transition
      }}
    >
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0"></div>
      </div>
      <div className="p-6 text-center relative z-10">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-500 hover:text-rose-600 font-semibold transition-colors"
        >
          View Project
        </a>
      </div>

      {/* 3D Hover Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-40 blur-2xl transform scale-110"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
