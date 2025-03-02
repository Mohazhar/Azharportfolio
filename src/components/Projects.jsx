import React from "react";

const projects = [
  { title: "Project 1", desc: "Description of project 1", link: "#" },
  { title: "Project 2", desc: "Description of project 2", link: "#" },
  { title: "Project 3", desc: "Description of project 3", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.desc}</p>
            <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
