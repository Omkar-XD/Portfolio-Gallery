import React, { useState } from "react";

// PROJECT IMAGE
import legacy from "../assets1/FullStack/legacy.png";

const projects = [
  {
    id: 1,

    title: "LEGACY XI STORE",

    imageUrl: legacy,

    githubUrl:
      "https://github.com/Omkar-XD/LEGACY-XI-STORE",

    demoUrl:
      "https://legacy-xi-store.vercel.app/",

    description:
      "Full-stack football jersey e-commerce platform featuring secure authentication, protected admin dashboard, CRUD product management, responsive UI, and modern shopping experience powered by MongoDB, Express, React, and Node.js.",

    tools: [
      "React.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Axios",
      "React Router",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "MongoDB Atlas",
      "Mongoose",
      "Admin Panel",
      "Protected Admin Routes",
      "CRUD Management",
    ],
  },
];

const Full_Stack = () => {

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
        FullStack Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">

        {projects.map((project) => (
          <div
            key={project.id}
            className="BGblur rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl p-5"
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
            <p className="text-center text-lg mb-6 text-white leading-8">
              {selectedProject.description}
            </p>

            {/* TECH STACK */}
            <h3 className="font-bold text-center text-2xl mb-5 text-white">
              Tech Stack
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

export default Full_Stack;