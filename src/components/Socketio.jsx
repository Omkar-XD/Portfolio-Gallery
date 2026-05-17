import React, { useState } from "react";

// PROJECT IMAGES
import anon from "../assets1/socket.io/anon.png";
import snapcode from "../assets1/socket.io/snapcode.png";
import vibechat from "../assets1/socket.io/vibechat.png";

const projects = [
  {
    id: 1,

    title: "SnapCode Room",

    imageUrl: snapcode,

    githubUrl:
      "https://github.com/Omkar-XD/SnapCode_Room",

    demoUrl:
      "https://snapcode-room.netlify.app/",

    description:
      "Real-time collaborative coding room application powered by Socket.io for live code sharing and synchronized communication.",

    tools: [
      "React JS",
      "Socket.io",
      "Node.js",
      "Express.js",
      "JavaScript",
    ],
  },

  {
    id: 2,

    title: "Vibe Chat",

    imageUrl: vibechat,

    githubUrl:
      "https://github.com/Omkar-XD/Vibe-Chat",

    demoUrl:
      "https://vibe-chat-pink.vercel.app",

    description:
      "Modern real-time chat platform with instant messaging, live communication, and responsive chat interface.",

    tools: [
      "React JS",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    id: 3,

    title: "AnonConnect",

    imageUrl: anon,

    githubUrl:
      "https://github.com/Omkar-XD/AnonConnect",

    demoUrl:
      "https://anon-connect-psi.vercel.app",

    description:
      "Anonymous real-time messaging platform enabling secure and instant communication using Socket.io.",

    tools: [
      "React JS",
      "Socket.io",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
  },
];

const Socketio = () => {

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
        Socket.io Projects
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

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Live Demo
                </a>

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

              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
              >
                Visit Website
              </a>

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

export default Socketio;