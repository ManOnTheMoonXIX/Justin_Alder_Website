import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiCss3,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { DiJava, DiProlog } from "react-icons/di";

// Define skills data with consistent icon styling
const SKILLS_DATA = [
  {
    name: "React",
    icon: <SiReact className="text-5xl text-[#61DAFB]" />,
    description: "Frontend Development",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-[#F7DF1E]" />,
    description: "Web Development",
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-5xl text-[#E34F26]" />,
    description: "Web Development",
  },
  {
    name: "Python",
    icon: <SiPython className="text-5xl text-[#3776AB]" />,
    description: "Programming & Automation",
  },
  {
    name: "Java",
    icon: <DiJava className="text-5xl text-[#007396]" />,
    description: "Software Development",
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-5xl text-[#1572B6]" />,
    description: "Styling & Design",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-[#06B6D4]" />,
    description: "Styling & Design",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-5xl text-[#4479A1]" />,
    description: "Database Management",
  },
  {
    name: "Prolog",
    icon: <DiProlog className="text-5xl text-gray-400" />,
    description: "Logic Programming",
  },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof SKILLS_DATA)[0];
  index: number;
}) {
  return (
    <div
      className="skill-card bg-darkBg shadow-xl shadow-black/50 rounded-lg p-6 hover:shadow-teal/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center h-full"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex justify-center items-center h-16 mb-4">
        {skill.icon}
      </div>
      <h3 className="text-lg font-bold mb-1 text-center">{skill.name}</h3>
      <p className="text-gray-300 text-sm md:text-base text-center">
        {skill.description}
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="container mx-auto py-16 md:py-24 px-4 text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-teal">Skills</span>
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto"
      >
        <CarouselContent>
          {SKILLS_DATA.map((skill, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <SkillCard skill={skill} index={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-darkBg text-teal hover:bg-black/50 hover:text-teal border-gray-800" />
        <CarouselNext className="bg-darkBg text-teal hover:bg-black/50 hover:text-teal border-gray-800" />
      </Carousel>
    </div>
  );
}

export default Skills;
