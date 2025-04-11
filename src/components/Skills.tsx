import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
import { ArrowDown, ArrowUp } from "lucide-react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track the current slide index
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Handle manual navigation
  const scrollToPrev = () => {
    api?.scrollPrev();
  };

  const scrollToNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="container mx-auto py-16 md:py-24 px-4 text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-12 text-center">
        My <span className="text-teal">Skills</span>
      </h2>

      <div
        className={`relative mx-auto ${isMobile ? "mt-16" : ""}`}
        style={{
          maxWidth: isMobile ? "300px" : "none",
          height: isMobile ? "450px" : "auto",
        }}
      >
        {isMobile && (
          <>
            {/* Navigation indicators */}
            <button
              onClick={scrollToPrev}
              className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 bg-darkBg text-teal rounded-full p-2 shadow-lg hover:bg-black/60 focus:outline-none"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToNext}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-10 bg-darkBg text-teal rounded-full p-2 shadow-lg hover:bg-black/60 focus:outline-none"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </>
        )}

        <div className={isMobile ? "overflow-hidden h-full touch-none" : ""}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              containScroll: false,
              skipSnaps: false,
            }}
            orientation={isMobile ? "vertical" : "horizontal"}
            className={`w-full ${
              isMobile
                ? "" // No specific height here - let the parent div control it
                : "max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl"
            } mx-auto relative`}
          >
            <CarouselContent className={isMobile ? "h-full" : ""}>
              {SKILLS_DATA.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className={isMobile ? "h-1/3" : "md:basis-1/2 lg:basis-1/3"}
                >
                  <div className={`p-1 h-full ${isMobile ? "py-2" : ""}`}>
                    <SkillCard skill={skill} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Only show arrows for desktop view */}
            {!isMobile && (
              <>
                <CarouselPrevious className="bg-darkBg text-teal hover:bg-black/50 hover:text-teal border-gray-800 -left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="bg-darkBg text-teal hover:bg-black/50 hover:text-teal border-gray-800 -right-12 top-1/2 -translate-y-1/2" />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Skills;
