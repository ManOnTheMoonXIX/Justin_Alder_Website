import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { Toaster } from "@/components/ui/sonner";
import cityBg from "./assets/citybg.jpeg";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    backgroundImage: `url(${cityBg})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "brightness(1.3)",
    transform: "translateZ(0)", // Force GPU acceleration
  } as const;

  return (
    <div className="scroll-smooth relative font-outfit overflow-x-hidden min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            "bg-darkBg border border-gray-800 text-white shadow-xl shadow-black/30",
          descriptionClassName: "text-gray-300",
          duration: 5000,
        }}
      />
      <Navbar scrollPosition={scrollPosition} />

      <div id="Home" style={parallaxStyle}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <LandingPage />
      </div>

      <div id="Skills" className="bg-gray-950 min-h-screen">
        <Skills />
      </div>

      <div id="Projects" className="bg-gray-950 min-h-screen">
        <Projects />
      </div>

      <div id="Education" className="bg-gray-950 min-h-screen">
        <Education />
      </div>

      <div id="Contact" style={parallaxStyle}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
