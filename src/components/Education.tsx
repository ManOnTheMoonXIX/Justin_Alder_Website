import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import wolmersCrest from "../assets/wolmerscrest.jpeg";
import utechCrest from "../assets/utechcrest.jpeg";

function Education() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const educationData = [
    {
      school: "Wolmer's Boys School",
      image: wolmersCrest,
      degree: "High School Diploma",
      period: "2014 - 2021",
    },
    {
      school: "University of Technology",
      image: utechCrest,
      degree: "Bachelor of Science in Computing",
      period: "2021 - Present",
    },
  ];

  const EducationCard = ({
    edu,
    index,
  }: {
    edu: (typeof educationData)[0];
    index: number;
  }) => {
    return (
      <div
        className="w-full p-6 bg-darkBg shadow-xl shadow-black/50 rounded-2xl flex flex-col items-center transition-all duration-300 hover:shadow-teal/20 hover:shadow-2xl hover:translate-y-[-5px] cursor-pointer"
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="flex justify-center items-center mb-4 bg-black/30 p-3 rounded-full border border-teal/20">
          <img
            src={edu.image}
            alt={edu.school}
            className="w-24 h-24 object-contain rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-teal">{edu.school}</h3>
        <p className="text-gray-200 text-lg mb-2">{edu.degree}</p>
        <div className="flex items-center text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <p>{edu.period}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-16 md:py-24 px-4 text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-teal">Education</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <EducationCard key={edu.school} edu={edu} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Education;
