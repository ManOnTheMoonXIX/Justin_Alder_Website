import React, { useState } from "react";
import ProjectCard from "src/components/Project_/ProjectCard";
import easterEggAudio from "src/assets/easteregg.mp3";

function Projects() {
  const [showGif, setShowGif] = useState(false);
  const [audio] = useState(new Audio(easterEggAudio));

  // Array of project data containing information about each project
  const projectsData = [
    {
      title: "Personal Website",
      main: "Yes, I'm including this website in my projects section.",
      languages: ["React", "Vite", "Tailwind CSS"],
      demoLink: "",
      sourceLink: "",
    },
  ];

  // Handles the Rick Roll easter egg animation and audio
  function handleGifClick() {
    setShowGif(true);
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      setShowGif(false);
      audio.pause();
    }, 15000); // Hide gif and stop audio after 15 seconds
  }

  function handleClose() {
    setShowGif(false);
    audio.pause();
  }

  // Main render section with responsive padding and grid layout
  return (
    <div id="Projects" className="p-4 md:p-8 lg:p-12 text-white">
      {/* Easter egg trigger button styled as section header */}
      <div className="relative">
        <button
          onClick={handleGifClick}
          className="text-2xl mt-14 md:text-4xl font-bold text-center block w-full no-underline text-white hover:text-white"
        >
          My Projects
        </button>
        {showGif && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <div className="max-w-md w-full">
              <img
                src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
                alt="Rick Roll"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      {/* Project cards grid with responsive columns */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            languages={project.languages}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
