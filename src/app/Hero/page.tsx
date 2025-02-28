"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"; // Importing social media icons
import Link from "next/link";

export default function Hero() {
  const texts = ["Full Stack Web Developer", "Backend Developer", "Frontend Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1)); // Remove a character
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
        }
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1)); // Add a character
        if (displayedText === fullText) {
          setIsDeleting(true); // Start deleting after the text is complete
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left Section */}
          <motion.div
            className="flex flex-col gap-6 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-normal text-white tracking-wide">
              Hello, I&apos;m Ahmed Memon
            </h1>

            {/* Typing Animation */}
            <h2 className="text-[20px] sm:text-4xl text-rose-400 font-semibold font-sans tracking-wide">
              {displayedText}
              <span className="text-white">{cursorVisible ? "|" : " "}</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-6">
              I am a passionate developer with 2+ years of experience building stunning web solutions. I specialize in React, Next.js, TailwindCSS, and JavaScript, creating responsive and high-performance applications.
            </p>

            <div className="flex gap-6 justify-start">
              <button className="px-6 py-2 bg-rose-500 hover:bg-rose-600 transition-all rounded-md shadow-md w-full sm:w-auto">
              <Link href="mailto:ahmedmemon3344@gmail.com">
  <p>Hire Me</p>
</Link>
              </button>
              <button className="px-6 py-2 bg-rose-500 hover:bg-rose-600 transition-all rounded-md shadow-md w-full sm:w-auto">
              <a href="/Skills" download className="text-white">My Skills</a>
              </button>
            </div>

            {/* Social Icons under Buttons */}
            <div className="mt-6 flex justify-start gap-6">
              <a href="https://www.linkedin.com/in/ahmed-memon-5550642b5/" className="text-white hover:text-blue-600 transition-colors">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/AhmedMemon1234" className="text-white hover:text-gray-400 transition-colors">
                <FaGithub size={30} />
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center items-center"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-r from-rose-400 to-blue-500 opacity-40 blur-xl hidden sm:block md:hidden"
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: 360,
                x: [-50, 50, -50],
              }}
              transition={{ repeat: Infinity, duration: 12 }}
            />
            <Image
              src="/heropic.webp"
              alt="My Image"
              width={500}
              height={500}
              className="relative z-10 rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="relative mt-10 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Building Scalable Apps", "Responsive Designs", "Performance Optimization"].map(
          (feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:bg-red-500 transition-all duration-100"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {feature}
            </motion.div>
          )
        )}
      </div>

      {/* Background 3D Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 max-768:hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 blur-3xl"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, 150, -150, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
