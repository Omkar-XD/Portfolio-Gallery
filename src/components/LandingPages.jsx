import React, { useState } from "react";

// PROJECT IMAGES
import restaurant from "../assets1/landing_page/restaurant.png";
import health from "../assets1/landing_page/health.png";
import smart from "../assets1/landing_page/smart.png";
import portfolio from "../assets1/landing_page/portfolio.png";

const projects = [
  {
    id: 1,

    title: "Restaurant Landing Page",

    imageUrl: restaurant,

    githubUrl:
      "https://github.com/Omkar-XD/Restaurant-landing-page",

    demoUrl:
      "https://restaurant-landing-page-f456g0goy.vercel.app/",

    description:
      "Modern responsive restaurant landing page with clean UI, food showcase sections, and mobile-first design.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
    ],
  },

  {
    id: 2,

    title: "Health Camp Demo",

    imageUrl: health,

    githubUrl:
      "https://github.com/Omkar-XD/health-camp-demo-2",

    demoUrl:
      "https://v0-health-camp-demo.vercel.app/",

    description:
      "Modern healthcare landing page designed for medical camps, patient engagement, registrations, and responsive healthcare promotion.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "Modern UI",
    ],
  },

  {
    id: 3,

    title: "SmartSave Energy Analyzer",

    imageUrl: smart,

    githubUrl:
      "https://github.com/Omkar-XD/Smartsave-Energy-analyzer",

    demoUrl:
      "https://smartsave-energy-analyzer.vercel.app/",

    description:
      "Smart energy consumption analyzer platform for tracking electricity usage, analyzing efficiency, and promoting energy-saving insights.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Analytics Dashboard",
      "Responsive UI",
    ],
  },
  {
  id: 4,

  title: "Personal Portfolio Website",

  imageUrl: portfolio,

  githubUrl:
    "https://github.com/Omkar-XD/portfolio",

  demoUrl:
    "https://omkarcportfolio.netlify.app/",

  description:
    "Personal portfolio website built to showcase projects, skills, certifications, and contact functionality with modern responsive UI and smooth user experience.",

  tools: [
    "React JS",
    "Tailwind CSS",
    "JavaScript",
    "Email.js",
    "Responsive Design",
    "Modern UI/UX",
  ],
}
];

const LandingPages = () => {

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
        Landing Pages
      </h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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
                className="w-full h-auto object-contain bg-white"
              />
            </div>

            {/* CONTENT */}
            <div className="pt-5 flex flex-col items-center">

              <h3 className="text-xl font-bold text-white text-center mb-4">
                {project.title}
              </h3>

              {/* BUTTONS */}
              <div className="flex gap-3 flex-wrap justify-center">

                {/* GITHUB */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  GitHub
                </a>

                {/* DEMO */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Live Demo
                </a>

                {/* DETAILS */}
                <button
                  onClick={() => openModal(project)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Details
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
            <p className="text-center text-lg text-white mb-6">
              {selectedProject.description}
            </p>

            {/* TOOLS */}
            <h3 className="text-xl font-bold text-center text-white mb-4">
              Technologies Used
            </h3>

            <ul className="flex justify-center flex-wrap gap-3 mb-8">

              {selectedProject.tools.map((tool, index) => (
                <li
                  key={index}
                  className="BgGradient text-white px-4 py-2 rounded-lg text-sm"
                >
                  {tool}
                </li>
              ))}

            </ul>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 flex-wrap">

              {/* GITHUB */}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                GitHub
              </a>

              {/* WEBSITE */}
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
              >
                Visit Website
              </a>

              {/* CLOSE */}
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
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

export default LandingPages;