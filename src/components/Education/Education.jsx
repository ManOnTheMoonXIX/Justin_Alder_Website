import React, { useState, useEffect } from "react";
import wolmers from "../../assets/wolmerscrest.jpeg";
import utech from "../../assets/utechcrest.jpeg";
import { Tilt } from "react-tilt";

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
      image: wolmers,
      degree: "High School Diploma",
      period: "2014 - 2021",
    },
    {
      school: "University of Technology",
      image: utech,
      degree: "Bachelor of Science in Computing",
      period: "2021 - Present",
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 text-white">
      <h2 className="text-2xl mt-14 md:text-4xl font-bold mb-4 text-center">
        Education
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 max-w-4xl mx-auto w-full">
        {educationData.map((edu) =>
          isMobile ? (
            <div
              key={edu.school}
              className="w-full p-3 md:p-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 text-center flex flex-col items-center"
            >
              <div className="flex justify-center items-center mb-2">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">{edu.school}</h3>
              <p className="text-gray-300 text-sm md:text-md leading-tight py-1">
                {edu.degree}
              </p>
              <p className="text-gray-400 text-sm">{edu.period}</p>
            </div>
          ) : (
            <Tilt
              key={edu.school}
              options={{
                max: 25,
                scale: 1.05,
                speed: 1000,
                transition: true,
                reverse: true,
              }}
            >
              <div className="w-full p-3 md:p-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 text-center flex flex-col items-center">
                <div className="flex justify-center items-center mb-2">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold">{edu.school}</h3>
                <p className="text-gray-300 text-sm md:text-md leading-tight py-1">
                  {edu.degree}
                </p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </div>
            </Tilt>
          )
        )}
      </div>
    </div>
  );
}

export default Education;
