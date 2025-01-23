import React, { useState, useEffect } from "react";
import { FaReact, FaPython, FaJava, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Tilt } from "react-tilt";

// Define skills data
const SKILLS_DATA = [
  {
    name: "React",
    icon: <FaReact />,
    description: "Frontend Development",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    description: "Web Development",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    description: "Web Development",
  },
  {
    name: "Python",
    icon: <FaPython />,
    description: "Programming & Automation",
  },
  {
    name: "Java",
    icon: <FaJava />,
    description: "Software Development",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Styling & Design",
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
    description: "Database Management",
  },
];

// Tilt configuration options
const TILT_OPTIONS = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  transition: true,
  reverse: true,
};

function Skills() {
  // Track if device is mobile for conditional rendering
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handler to update mobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reusable skill card component to reduce code duplication
  const SkillCard = ({ skill }) => {
    const cardContent = (
      <div className="w-full sm:w-64 p-3 md:p-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 text-center flex flex-col items-center">
        <div className="flex justify-center items-center">
          <div className="text-4xl mb-2">{skill.icon}</div>
        </div>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <p className="text-gray-300 text-sm md:text-md leading-tight py-1">
          {skill.description}
        </p>
      </div>
    );

    // Conditionally wrap with Tilt component for non-mobile devices
    return isMobile ? (
      cardContent
    ) : (
      <Tilt options={TILT_OPTIONS}>{cardContent}</Tilt>
    );
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 text-white">
      <h2 className="text-2xl mt-14 md:text-4xl font-bold mb-4 text-center">
        Skills
      </h2>

      {/* Responsive grid layout for skill cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {SKILLS_DATA.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
