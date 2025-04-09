import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { toast } from "sonner";

function Projects() {
  const [isEasterEggPlaying, setIsEasterEggPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Array of project data containing information about each project
  const projectsData = [
    {
      title: "QuickTix: Ticket Booking Terminal Interface",
      main: "A terminal-style interface for booking and managing tickets, built with FastAPI and a custom command language called SadeScript.",
      languages: ["Python", "HTML", "Azure"],
      demoLink:
        "https://ticket-cli-web-fzdadsehb5a2fzhj.canadacentral-01.azurewebsites.net",
      sourceLink: "https://github.com/ManOnTheMoonXIX/QuickTix-SadeScript",
    },
    {
      title: "Academic Probation Alert System",
      main: "A hybrid application to manage student academic records, calculate GPAs, and send alerts for students on academic probation.",
      languages: ["Python", "Prolog", "MySQL"],
      demoLink: "",
      sourceLink:
        "https://github.com/ManOnTheMoonXIX/Academic-Probation-Alert-Python-and-Prolog-Project",
    },
    {
      title: "Space Invaders",
      main: "A work-in-progress 2D Space Invaders game built with vanilla JavaScript, HTML, and CSS.",
      languages: ["HTML", "JavaScript", "CSS"],
      demoLink: "",
      sourceLink: "https://github.com/ManOnTheMoonXIX/Space-Invaders",
    },
    {
      title: "Personal Website",
      main: "Yes, I'm including this website in my projects section. Built with React and Tailwind CSS, it showcases my skills and projects.",
      languages: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "",
      sourceLink: "https://github.com/ManOnTheMoonXIX/Justin_Alder_Website",
    },
    {
      title: "Coming Soon",
      main: "More projects are in the works! Check back soon or visit my GitHub for the latest updates.",
      languages: ["Stay", "Tuned", "Please"],
      demoLink: "",
      sourceLink: "https://github.com/ManOnTheMoonXIX",
    },
  ];

  // Handles the Rick Roll easter egg animation and audio
  function handleEasterEgg() {
    if (isEasterEggPlaying) return; // Don't trigger if already playing

    if (!audioRef.current) {
      audioRef.current = new Audio("/src/assets/easteregg.mp3");
    }

    audioRef.current.play().catch((e) => {
      console.error("Audio playback failed:", e);
      toast.error("Couldn't play audio. Try clicking again!", {
        className:
          "bg-darkBg border border-gray-800 text-white shadow-xl shadow-black/30",
        descriptionClassName: "text-gray-300",
      });
    });

    setIsEasterEggPlaying(true);
    toast("🎵 Never gonna give you up! 🎵", {
      duration: 20000, // Doubled from 10000 to 20000 ms
      className:
        "bg-darkBg border border-gray-800 text-white shadow-xl shadow-black/30",
      descriptionClassName: "text-gray-300",
    });

    // Auto stop after 20 seconds (doubled from 10 seconds)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsEasterEggPlaying(false);
      }
    }, 20000);
  }

  return (
    <div className="container mx-auto py-16 md:py-24 px-4 text-white relative">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          My{" "}
          <span className="text-teal cursor-pointer" onClick={handleEasterEgg}>
            Projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
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
