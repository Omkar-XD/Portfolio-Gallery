import React, { useState } from "react";

// PROJECT IMAGES
import heart from "../assets1/AI_ML/heart.png";
import kisan from "../assets1/AI_ML/kisan.png";
import diag from "../assets1/AI_ML/diag.png";
import pharma from "../assets1/AI_ML/pharma.png";
import chatbot from "../assets1/AI_ML/chatbot.png";
import genzone from "../assets1/AI_ML/genzone.png";
import echowrite from "../assets1/AI_ML/Echowrite.png";

const projects = [
  {
    id: 1,
    title: "Heart Disease Prediction",

    imageUrl: heart,

    githubUrl:
      "https://github.com/Omkar-XD/Heart_Disease_Prediction_Project.git",

    demoUrl: "",

    description:
      "Machine learning web app that predicts heart disease risk using health-related patient data and trained classification models.",

    tools: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Machine Learning",
      "Classification Model",
    ],
  },

  {
    id: 2,
    title: "Kisan-Drishti",

    imageUrl: kisan,

    githubUrl:
      "https://github.com/Omkar-XD/Kisan-Drishti.git",

    demoUrl:
      "https://kisan-drishti.vercel.app/",

    description:
      "AI-powered agricultural platform for crop monitoring, plant disease detection, and smart farming insights.",

    tools: [
      "Next JS",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "NLP",
      "Computer Vision",
    ],
  },

  {
    id: 3,
    title: "ML Training Diagnostics Dashboard",

    imageUrl: diag,

    githubUrl:
      "https://github.com/Omkar-XD/ML-Training-Diagnostics-Dashboard",

    demoUrl:
      "https://ml-training-diagnostics-dashboard.vercel.app/",

    description:
      "Interactive ML diagnostics dashboard for visualizing training metrics, model performance, and machine learning experiments.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "Machine Learning",
      "Dashboard UI",
      "JavaScript",
    ],
  },

  {
    id: 4,
    title: "PharmaGuard AI",

    imageUrl: pharma,

    githubUrl:
      "https://github.com/Omkar-XD/PharmaGuard-AI",

    demoUrl:
      "https://pharma-guard-ai-rho.vercel.app/",

    description:
      "AI-based pharmaceutical platform for medicine validation, healthcare insights, and smart analysis.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "AI",
      "Healthcare Tech",
      "JavaScript",
    ],
  },

  {
    id: 5,
    title: "HoryX Chatbot",

    imageUrl: chatbot,

    githubUrl:
      "https://github.com/Omkar-XD/HoryX-Chatbot",

    demoUrl:
      "https://hory-x-chatbot.vercel.app/",

    description:
      "Modern AI chatbot interface with conversational UI and interactive assistant experience.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "AI Chatbot",
      "JavaScript",
    ],
  },

  {
    id: 6,
    title: "GenZOne",

    imageUrl: genzone,

    githubUrl:
      "https://github.com/Omkar-XD/GenZOne",

    demoUrl:
      "https://genzone.vercel.app/",

    description:
      "Modern Gen-Z focused web platform with dynamic UI, trending content system, and responsive design.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "Modern UI/UX",
    ],
  },

  {
    id: 7,
    title: "EchoWrite AI",

    imageUrl: echowrite,

    githubUrl:
      "https://github.com/Omkar-XD/EchoWrite-AI",

    demoUrl:
      "https://echo-write-ai-nu.vercel.app/",

    description:
      "AI writing assistant platform for content generation, smart writing workflows, and productivity enhancement.",

    tools: [
      "React JS",
      "Tailwind CSS",
      "AI",
      "Content Generation",
      "JavaScript",
    ],
  },
];

const ML_projects = () => {
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
        AI & ML Projects
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

              {/* DEMO */}
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

export default ML_projects;