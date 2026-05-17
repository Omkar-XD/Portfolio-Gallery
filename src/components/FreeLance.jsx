import React, { useState } from "react";

// PROJECT IMAGES
import saraswati from "../assets1/freelance/saraswati.png";
import risenshine from "../assets1/freelance/risenshine.png";

const projects = [
  {
    id: 1,
    title: "Saraswati Classes",
    imageUrl: saraswati,

    // LIVE WEBSITE
    demoUrl: "https://www.saraswaticlass.in/",

    // GITHUB
    githubUrl: "https://github.com/Omkar-XD",

    description:
      "Educational coaching institute website with responsive modern UI and student-focused sections.",

    tools: ["React JS", "Tailwind CSS", "JavaScript"],
  },

  {
    id: 2,
    title: "Risen Shine Coaching",
    imageUrl: risenshine,

    // LIVE WEBSITE
    demoUrl: "https://www.risenshinecoaching.in/",

    // GITHUB
    githubUrl: "https://github.com/Omkar-XD/Rise-N-Shine-Coaching",

    description:
      "Professional coaching institute website designed for course promotion and online visibility.",

    tools: ["React JS", "Tailwind CSS", "JavaScript"],
  },
];

const Freelance = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen px-4 py-6">
      {/* TITLE */}
      <h2 className="text-4xl text-white font-bold mb-10 text-center">
        Freelance Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="BGblur rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl p-4"
          >
            {/* IMAGE */}
            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="pt-6 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-white text-center mb-5">
                {project.title}
              </h3>

              {/* BUTTONS */}
              <div className="flex gap-4 flex-wrap justify-center">
                {/* GITHUB */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  GitHub
                </a>

                {/* LIVE DEMO */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Live Demo
                </a>

                {/* DETAILS */}
                <button
                  onClick={() => openModal(project)}
                  className="bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="BGblur2 rounded-2xl p-6 w-full max-w-5xl relative overflow-y-auto max-h-[95vh]">

            {/* TITLE */}
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              {selectedProject.title}
            </h2>

            {/* IMAGE */}
            <div className="bg-white rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-center text-lg mb-6 text-white">
              {selectedProject.description}
            </p>

            {/* TOOLS */}
            <h3 className="font-bold text-center text-xl mb-4 text-white">
              Technologies Used
            </h3>

            <ul className="flex justify-center flex-wrap gap-3 mb-8">
              {selectedProject.tools.map((tool, index) => (
                <li
                  key={index}
                  className="BgGradient text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {tool}
                </li>
              ))}
            </ul>

            {/* MODAL BUTTONS */}
            <div className="flex justify-center gap-4 flex-wrap">

              {/* GITHUB */}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                GitHub
              </a>

              {/* WEBSITE */}
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Visit Website
              </a>

              {/* CLOSE */}
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Freelance;