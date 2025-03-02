import { motion } from "framer-motion";
import { FaCode, FaRobot } from "react-icons/fa";

const experiences = [
  {
    title: "Software Developer",
    company: "Izet e-payments Pvt Ltd",
    date: "Feb 2025 - Present",
    description:
      "Developed and enhanced an AI-powered chatbot using the MERN stack, integrating machine learning capabilities for intelligent responses and seamless user interaction.",
    skills: ["MongoDB", "ReactJS", "ExpressJS", "NodeJS", "MySQL"],
    icon: <FaCode className="text-blue-400 text-2xl" />,
  },
  {
    title: "AI/ML & Web Developer",
    company: "Squad of Creators",
    date: "Sept 2021 - Present",
    description:
      "Actively engaged in Web, Python, and AI/ML development, with a focus on writing clean code and clear, structured documentation to enhance collaboration and project efficiency.",
    skills: ["Web Development", "Python", "git", "github", "Networking"],
    icon: <FaRobot className="text-purple-400 text-2xl" />,
  },
];

const Experience = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Experience</h2>
      <p className="text-center text-gray-300 mb-12">
        My work experience as a Developer and other roles on different clubs and team projects.
      </p>
      <div className="max-w-4xl mx-auto grid gap-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="border border-violet-700 rounded-lg p-6 bg-gray-900 shadow-md"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4.8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {exp.icon}
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
            <p className="text-xs text-gray-500 mb-3">{exp.date}</p>
            <p className="text-gray-300 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-md border border-violet-700 hover:bg-violet-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
