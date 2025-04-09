
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ title, main, languages, demoLink, sourceLink, index }: {
  title: string;
  main: string;
  languages: string[];
  demoLink?: string;
  sourceLink?: string;
  index?: number;
}) {
  return (
    <div 
      className="project-card"
      style={{
        animationDelay: `${index ? index * 150 : 0}ms`,
      }}
    >
      <div className="flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-teal">
          {title}
        </h3>
        <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">
          {main}
        </p>
        <div className="py-2 mb-4">
          <h4 className="text-base md:text-lg font-semibold flex items-center mb-3">
            Made using
          </h4>
          <div className="flex flex-wrap gap-2">
            {languages.map((language, i) => (
              <span key={i} className="language-badge">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="teal-button"
          >
            <span>Demo</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="teal-button"
          >
            <span>Source</span>
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
