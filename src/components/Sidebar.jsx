import React, { useState } from "react";

import {
  FaChevronLeft,
  FaLaptopCode,
  FaCog,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTiktok,
  FaPython,
} from "react-icons/fa";

import {
  AiOutlineLaptop,
  AiOutlineMenu,
} from "react-icons/ai";

import { MdAnimation } from "react-icons/md";

import { AiFillPhone } from "react-icons/ai";

import { FiFileText } from "react-icons/fi";

import { SiSocketdotio } from "react-icons/si";

const Sidebar = ({
  setActiveComponent,
  toggleSidebar,
  isMinimized,
  activeComponent,
}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isSocialOpen, setIsSocialOpen] = useState(false);

  // CHANGE ACTIVE COMPONENT
  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setIsSidebarOpen(false);
  };

  // MOBILE SIDEBAR
  const toggleMobileSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // SOCIAL DROPDOWN
  const toggleSocialDropdown = () => {
    setIsSocialOpen(!isSocialOpen);
  };

  // SIDEBAR ITEMS
  const sidebarItems = [
    {
      icon: <FaLaptopCode />,
      label: "Freelance",
    },

    {
      icon: <AiOutlineLaptop />,
      label: "Frontend Pages",
    },

    {
      icon: <MdAnimation />,
      label: "AI_ML Projects",
    },

    {
      icon: <FaCog />,
      label: "Full_Stack",
    },

    // NEW
    {
      icon: <FaPython />,
      label: "Python",
    },

    // NEW
    {
      icon: <SiSocketdotio />,
      label: "Socket.io",
    },
  ];

  return (
    <div className="fixed z-50 shadow-lg">

      {/* MOBILE BUTTON */}
      <button
        className="fixed bottom-4 right-4 BgGradient text-white p-3 rounded-full shadow-lg z-50 lg:hidden"
        onClick={toggleMobileSidebar}
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`
          bg-gradient-to-b
          from-[#1f1353]
          to-[#1a2356]
          text-white
          h-full
          fixed
          left-0
          top-0
          p-4
          transform
          ${isMinimized ? "w-20" : "w-64"}
          transition-all
          duration-500
          ease-in-out
          z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        {/* HEADER */}
        <div
          className={`
            flex
            items-center
            overflow-hidden
            ${isMinimized
              ? "flex-col items-center"
              : "justify-between"}
            mb-6
          `}
        >

          {!isMinimized && (
            <h2 className="text-2xl font-bold whitespace-nowrap">
              Omkar Chavan
            </h2>
          )}

          <button
            className={`
              text-white
              focus:outline-none
              ${isMinimized ? "mt-2" : ""}
            `}
            onClick={toggleSidebar}
          >
            <FaChevronLeft
              className={`
                transform
                transition-transform
                duration-300
                ${isMinimized ? "rotate-180" : ""}
              `}
            />
          </button>
        </div>

        {/* NAVIGATION */}
        <ul className="space-y-3">

          {sidebarItems.map(({ icon, label }, index) => (

            <li
              key={index}
              onClick={() => handleComponentChange(label)}
              className={`
                py-3
                cursor-pointer
                px-4
                rounded-xl
                flex
                items-center
                relative
                transition-all
                duration-300
                hover:bg-bgbluer
                ${activeComponent === label
                  ? "bg-bgbluer"
                  : ""}
              `}
            >

              {/* ICON */}
              <div className="text-xl w-8 flex-shrink-0">
                {icon}
              </div>

              {/* LABEL */}
              {!isMinimized && (
                <span className="ml-3 overflow-hidden text-base font-medium">
                  {label}
                </span>
              )}

            </li>
          ))}

          {/* BACK TO PORTFOLIO */}
          <li
            className="
              py-3
              px-4
              rounded-xl
              flex
              items-center
              hover:bg-bgbluer
              transition-all
              duration-300
            "
          >

            <div className="text-xl w-8 flex-shrink-0">
              <FiFileText />
            </div>

            {!isMinimized && (
  <a
    href="https://omkarportfoliov2.netlify.app/"
    className="
      ml-3
      overflow-hidden
      text-base
      font-medium
      transition-all
      duration-300
      hover:text-purple-400
    "
  >
    Back to Portfolio
  </a>
)}
          </li>
        </ul>

        {/* DIVIDER */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* SOCIAL LINKS */}
        <div className="mt-auto">

          {isMinimized ? (

            <div className="relative">

              <button
                onClick={toggleSocialDropdown}
                className="
                  bg-bgbluer
                  p-2
                  rounded-full
                  w-12
                  h-12
                  flex
                  justify-center
                  items-center
                  text-white
                "
              >
                <AiFillPhone />
              </button>

              {isSocialOpen && (
                <div
                  className="
                    absolute
                    top-14
                    left-0
                    bg-bgbluer
                    p-2
                    rounded-md
                    shadow-lg
                    space-y-2
                  "
                >

                  {[                    
                    {
                      icon: <FaWhatsapp />,
                      label: "Whatsapp",
                      link: "https://wa.me/918591258069",
                    },

                    {
                      icon: <FaInstagram />,
                      label: "Instagram",
                      link: "https://www.instagram.com/its.omkarr_/",
                    },

                    {
                      icon: <FaLinkedin />,
                      label: "LinkedIn",
                      link: "https://www.linkedin.com/in/omkar-chavan-8b59a8334",
                    },
                  ].map(({ icon, label, link }, index) => (

                    <div
                      key={index}
                      className="group relative flex justify-center"
                    >

                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg p-2"
                      >
                        {icon}
                      </a>

                      <span
                        className="
                          absolute
                          left-10
                          bg-gray-700
                          text-white
                          p-1
                          rounded-md
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-200
                          whitespace-nowrap
                        "
                      >
                        {label}
                      </span>

                    </div>
                  ))}
                </div>
              )}
            </div>

          ) : (

            <div className="flex justify-center gap-4 items-center">

              {[
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/918591258069",
                },

                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/its.omkarr_/",
                },

                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/omkar-chavan-8b59a8334",
                },
              ].map(({ icon, link }, index) => (

                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white
                    text-xl
                    p-2
                    hover:scale-110
                    transition-transform
                  "
                >
                  {icon}
                </a>

              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;