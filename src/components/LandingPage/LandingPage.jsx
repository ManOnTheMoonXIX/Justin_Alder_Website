import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaPaperPlane } from "react-icons/fa"; // Kept only the FaPaperPlane import

const CONTENT = {
  name: "Justin Alder",
  welcome: "Welcome To My Portfolio",
  description:
    "Final Year Computer Science Student and Aspiring Software Engineer from Jamaica",
};

const TypedText = ({ delay, text, className, onComplete }) => (
  <TypeAnimation
    sequence={[delay, text, onComplete || (() => {})]}
    wrapper="div"
    speed={70}
    className={className}
    cursor={false}
  />
);

function LandingPage() {
  const [animationsComplete, setAnimationsComplete] = useState(false);

  const fadeInClass = `transform transition-all duration-700 ${
    animationsComplete
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white px-4 sm:px-6 md:px-8">
      <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg text-center space-y-6">
        <TypedText
          delay={200}
          text={CONTENT.name}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold"
        />
        <TypedText
          delay={700}
          text={CONTENT.welcome}
          className="text-xl sm:text-2xl md:text-3xl font-semibold"
        />
        <TypedText
          delay={1200}
          text={CONTENT.description}
          className="text-lg sm:text-xl md:text-2xl font-semibold"
          onComplete={() => setAnimationsComplete(true)}
        />

        {/* Removed the social icons section entirely */}
      </div>

      <div className={`mt-6 ${fadeInClass}`}>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1xoFjRudN873ymSm9EjTEtpylyrRVXfOGqfNJnFLfrTw/edit?usp=sharing",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="
          text-sm md:text-lg 
          border-[#66FCF1] border-2 rounded-md
          px-5 py-2
          bg-[rgba(0,0,0,0.5)]
          backdrop-blur-md 
          font-bold
          text-white
          hover:text-black
          transition-all duration-500
          flex items-center justify-center gap-2
          relative overflow-hidden
          before:absolute before:inset-0 
          before:w-0 before:bg-gradient-to-r 
          before:from-green-400 before:to-[#66FCF1]
          before:transition-all before:duration-500
          hover:before:w-full"
        >
          <span className="relative z-10">My Resume</span>
          <FaPaperPlane className="relative z-10" />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
