import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gray-800 text-white px-6 shadow-lg relative overflow-hidden">
      {/* Adaptive Background Animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(270deg, #001f3f, #00509d, #000000, #342f3a)",
          backgroundSize: "400% 400%",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Animated Profile Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-40 h-40 md:w-64 md:h-64 mb-10 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg"
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(0,150,255,0.3) 0%, rgba(0,0,0,0) 70%)",
              "radial-gradient(circle, rgba(0,150,255,0.5) 0%, rgba(0,0,0,0) 70%)",
              "radial-gradient(circle, rgba(0,150,255,0.3) 0%, rgba(0,0,0,0) 70%)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <img src={profilePic} alt="Profile" className="relative z-10" />
      </motion.div>

      <div className="mt-6 md:mt-0 md:ml-20">
        <h2 className="text-4xl font-bold">
          Hello, I'm
          <motion.span
            className="text-blue-400 ml-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            MOHAMMED AZHARUDEEN
          </motion.span>
        </h2>
        <p className="w-40 h-40 md:w-230 mt-7 mb-10 mr-30 border-blue-400">
          A Web Developer passionate about building amazing websites. I am a frontend developer with a strong passion for full-stack development and data analytics. I have hands-on experience working with React, Vite, Flask, and MySQL, developing interactive and scalable web applications. I have worked on projects ranging from smart human detection using YOLO to full-stack courier management systems with animations, transitions, and an admin dashboard.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 inline-block bg-white-500 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-black-600"
        >
          <a href="#projects">View My Work</a>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
