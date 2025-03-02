import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const skills = [
  {
    category: "Frontend",
    items: ["React Js", "HTML", "CSS", "JavaScript", "Tailwind"]
  },
  {
    category: "Backend",
    items: ["Python", "Flask", "MySQL", "Firebase", "NodeJS", "ExpressJS", "MongoDB"]
  },
  {
    category: "Others",
    items: ["Git", "VSCode", "Canva", "GitHub", "ChatGPT"]
  }
];

const Skills = () => {
  return (
    <motion.div 
      className="min-h-screen text-white flex flex-col items-center py-10 relative overflow-hidden"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{
        background: "linear-gradient(270deg,rgb(0, 0, 85),rgb(0, 5, 153),rgb(0, 0, 0),rgb(52, 48, 58))",
        backgroundSize: "400% 400%"
      }}
    >
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="text-lg text-gray-300 mb-10">
        Here are some of my skills on which I have been working!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
        {skills.slice(0, 2).map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg border border-violet-700 shadow-lg w-80 "
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{skill.category}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-sm px-4 py-2  border border-violet-700 shadow-lg rounded-full hover:bg-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Centered "Others" section */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg border border-violet-700 shadow-lg w-80 md:col-span-2 mx-auto"
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Others</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills[2].items.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-sm px-4 py-2  border border-violet-700 shadow-lg rounded-full hover:bg-black"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
