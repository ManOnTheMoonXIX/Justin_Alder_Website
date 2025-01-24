import React from "react";
import { GiAxolotl } from "react-icons/gi";

const LANGUAGE_BUTTON_STYLES = {
  wrapper:
    "transition group flex h-8 w-24 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-[#66FCF1] p-[1px] text-white text-sm duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-green-600/30",
  inner:
    "flex h-full w-full items-center justify-center rounded-full bg-[#0c0e19] transition duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900",
};

const LINK_STYLES =
  "text-sm md:text-lg border-[#66FCF1] border-solid rounded-md border-2 px-5 py-2 bg-[rgba(0,0,0,0.6)] backdrop-blur-md relative font-bold overflow-hidden text-white hover:text-black transition-all duration-500 flex items-center before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-green-400 before:to-[#66FCF1] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full";

function ProjectCard({ title, main, languages, demoLink, sourceLink }) {
  const renderLanguageButtons = () =>
    languages.map((language, index) => (
      <button
        key={index}
        type="button"
        className={LANGUAGE_BUTTON_STYLES.wrapper}
        onClick={(e) => e.preventDefault()}
      >
        <div className={LANGUAGE_BUTTON_STYLES.inner}>{language}</div>
      </button>
    ));

  const renderLink = (link, label) =>
    link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_STYLES}
      >
        <span className="relative z-10">{label}</span>
      </a>
    );

  return (
    <div className="w-full sm:w-[340px] intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 p-3 md:p-6 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <div className="flex-grow">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mb-2">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-1 mb-2">
          {main}
        </p>
        <div className="px-4 py-1 mb-2">
          <h4 className="text-md md:text-lg font-semibold flex items-center mb-1">
            Made using <GiAxolotl className="ml-2 text-lg md:text-xl" />
          </h4>
          <div className="flex flex-wrap gap-2 py-2">
            {renderLanguageButtons()}
          </div>
        </div>
      </div>
      <div className="mt-1 p-2 md:p-2 flex gap-2 md:gap-4">
        {renderLink(demoLink, "Demo")}
        {renderLink(sourceLink, "Source Code")}
      </div>
    </div>
  );
}

export default ProjectCard;
