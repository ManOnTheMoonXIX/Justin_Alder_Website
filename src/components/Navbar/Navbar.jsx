import React, { useState, useEffect } from "react";
import menu from "src/assets/menu.svg";
import close from "src/assets/close.svg";

const MENU_ITEMS = ["Home", "Skills", "Projects", "Education", "Contact"];

function scrollToSection(e, sectionId, callback) {
  e.preventDefault();
  const element = document.getElementById(sectionId.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    if (callback) callback();
  }
}

function NavLink({ href, children, onClick }) {
  function handleClick(e) {
    scrollToSection(e, href, onClick);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-lg md:text-xl lg:text-2xl"
    >
      {children}
    </a>
  );
}

function MenuItem({ item, onItemClick }) {
  return (
    <li className="relative group cursor-pointer">
      <NavLink href={`#${item}`} onClick={onItemClick}>
        {item}
        <span className="absolute left-0 bottom-[-0.4px] w-0 h-1 rounded-xl bg-[#66FCF1] transition-all duration-300 group-hover:w-full" />
      </NavLink>
    </li>
  );
}

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-[#1F1F1F] w-64 h-screen shadow-lg`}
    >
      <div className="flex justify-end p-4">
        <img
          src={close}
          alt="Close"
          onClick={onClose}
          className="cursor-pointer w-6 h-6"
        />
      </div>
      <ul className="flex flex-col items-center gap-6 mt-10">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item} item={item} onItemClick={onClose} />
        ))}
      </ul>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden md:flex justify-center items-center w-full">
      <div className="fixed bg-black flex justify-between items-center gap-10 py-3 px-5 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 shadow-lg z-10 ">
        <ul className="flex justify-center gap-4">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed flex justify-between items-center text-white w-full z-10 p-4">
      <div className="md:hidden ml-auto cursor-pointer">
        <img
          className="w-6 h-6"
          src={isOpen ? close : menu}
          alt="Menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <DesktopMenu />
    </nav>
  );
}

export default Navbar;
