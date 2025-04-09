import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FileText } from "lucide-react";

const CONTENT = {
  name: "Justin Alder",
  welcome: "Welcome To My Portfolio",
  description:
    "Final Year Computer Science Student and Aspiring Software Engineer from Jamaica",
};

interface TypedTextProps {
  delay: number;
  text: string;
  className?: string;
  onComplete?: () => void;
}

const TypedText = ({ delay, text, className, onComplete }: TypedTextProps) => (
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
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] text-white px-4 sm:px-6 md:px-8 relative z-10">
      <div className="bg-black/70 p-6 md:p-8 rounded-xl shadow-2xl shadow-black/30 text-center space-y-6 max-w-2xl backdrop-blur-sm border border-gray-800">
        <TypedText
          delay={200}
          text={CONTENT.name}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal"
        />
        <TypedText
          delay={700}
          text={CONTENT.welcome}
          className="text-xl sm:text-2xl md:text-3xl font-semibold"
        />
        <TypedText
          delay={1200}
          text={CONTENT.description}
          className="text-lg sm:text-xl md:text-2xl text-gray-200"
          onComplete={() => setAnimationsComplete(true)}
        />
      </div>

      <div className={`mt-8 ${fadeInClass}`}>
        <a
          href="https://docs.google.com/document/d/1xoFjRudN873ymSm9EjTEtpylyrRVXfOGqfNJnFLfrTw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="teal-button"
        >
          <span>My Resume</span>
          <FileText className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
