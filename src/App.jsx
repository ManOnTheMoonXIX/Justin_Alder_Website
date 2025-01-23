import Contact from "./components/Contact/Contact";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project_/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
function App() {
  return (
    <div className="scroll-smooth relative h-screen font-outfit overflow-y-auto">
      <div
        id="Home"
        className="min-h-screen w-full relative bg-gray-950 bg-fixed bg-center bg-no-repeat bg-cover"
      >
        <Navbar />
        <div>
          <LandingPage />
        </div>
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

      <div
        id="Contact"
        className="min-h-screen w-full relative bg-city bg-fixed bg-center bg-no-repeat bg-cover"
      >
        <Contact />
      </div>
    </div>
  );
}

export default App;
