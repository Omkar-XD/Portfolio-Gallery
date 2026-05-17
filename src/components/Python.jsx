import React, { useState } from "react";

// PROJECT IMAGES
import newsportal from "../assets1/python/news portal.png";
import todo from "../assets1/python/todo.png";
import vehiclespeed from "../assets1/python/vehiclespeeddetection.png";

const projects = [
  {
    id: 1,

    title: "Online News Portal",

    imageUrl: newsportal,

    githubUrl:
      "https://github.com/Omkar-XD/Online-News-Portal",

    demoUrl: "",

    description:
      "Python-based online news portal application for browsing and managing categorized news content with clean UI structure.",

    tools: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
    ],
  },

  {
    id: 2,

    title: "TO-DO App",

    imageUrl: todo,

    githubUrl:
      "https://github.com/Omkar-XD/TO-DO-app",

    demoUrl:
      "https://to-do-app-eight-rouge.vercel.app/",

    description:
      "Task management application for organizing daily activities with responsive interface and productivity-focused workflow.",

    tools: [
      "Python",
      "React JS",
      "Tailwind CSS",
      "JavaScript",
    ],
  },

  {
    id: 3,

    title: "Vehicle Speed Detection System",

    imageUrl: vehiclespeed,

    githubUrl:
      "https://github.com/Omkar-XD/Vehicle-Speed-Detection-System-using-OpenCV",

    demoUrl: "",

    description:
      "Computer vision project using OpenCV for vehicle tracking and real-time speed detection from video streams.",

    tools: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "NumPy",
      "Machine Learning",
    ],
  },
];

const Python = () => {

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
        Python Projects
      </h2>

      {/* GRID */}
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

              <div className="flex gap-3 flex-wrap justify-center">

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  GitHub
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Live Demo
                  </a>
                )}

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

            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              {selectedProject.title}
            </h2>

            <div className="bg-white rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-center text-lg text-white mb-6">
              {selectedProject.description}
            </p>

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

            <div className="flex justify-center gap-4 flex-wrap">

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                GitHub
              </a>

              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  Visit Website
                </a>
              )}

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

export default Python;