import React, { useState } from "react";

// COMPONENTS
import Sidebar from "./components/Sidebar";
import Freelance from "./components/Freelance";
import LandingPages from "./components/LandingPages";
import ML_Projects from "./components/ML_projects";
import Full_Stack from "./components/Full_Stack";

// NEW COMPONENTS
import Python from "./components/python";
import Socket from "./components/socketio";

const App = () => {

  // DEFAULT ACTIVE SECTION
  const [activeComponent, setActiveComponent] = useState("Freelance");

  // SIDEBAR STATE
  const [isMinimized, setIsMinimized] = useState(false);

  // RENDER COMPONENTS
  const renderComponent = () => {

    switch (activeComponent) {

      case "Freelance":
        return <Freelance />;

      case "Frontend Pages":
        return <LandingPages />;

      case "AI_ML Projects":
        return <ML_Projects />;

      case "Full_Stack":
        return <Full_Stack />;

      // NEW
      case "Python":
        return <Python />;

      // NEW
      case "Socket.io":
        return <Socket />;

      default:
        return <Freelance />;
    }
  };

  return (
    <div className="lg:flex min-h-screen">

      {/* SIDEBAR */}
      <Sidebar
        setActiveComponent={setActiveComponent}
        toggleSidebar={() => setIsMinimized(!isMinimized)}
        isMinimized={isMinimized}
        activeComponent={activeComponent}
      />

      {/* MAIN CONTENT */}
      <main
        className={`
          flex-1
          bg-gradient-to-b
          from-[#2e2466]
          to-[#0f1b67]
          transition-all
          duration-300
          ${isMinimized ? "lg:ml-20" : "lg:ml-64"}
          p-4
          min-h-screen
        `}
      >
        {renderComponent()}
      </main>
    </div>
  );
};

export default App;