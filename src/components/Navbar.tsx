import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import nameImg from "../assets/name.png";

const MENU_ITEMS = ["Home", "Skills", "Projects", "Education", "Contact"];

interface NavbarProps {
  scrollPosition: number;
}

function scrollToSection(
  e: React.MouseEvent,
  sectionId: string,
  callback?: () => void
) {
  e.preventDefault();
  const element = document.getElementById(sectionId.replace("#", ""));
  if (element) {
    const navbarHeight = 80; // Height of navbar
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
    if (callback) callback();
  }
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  function handleClick(e: React.MouseEvent) {
    scrollToSection(e, href, onClick);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-base md:text-lg lg:text-xl"
    >
      {children}
    </a>
  );
}

function MenuItem({
  item,
  onItemClick,
}: {
  item: string;
  onItemClick?: () => void;
}) {
  return (
    <li className="relative group cursor-pointer">
      <NavLink href={`#${item}`} onClick={onItemClick}>
        {item}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full" />
      </NavLink>
    </li>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] md:hidden"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <div
        className="fixed top-[80px] left-0 right-0 bg-darkBg2 shadow-lg overflow-hidden animate-in slide-in-from-top duration-300"
        style={{ maxHeight: "calc(100vh - 80px)" }}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 py-8 text-white">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item} item={item} onItemClick={onClose} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Navbar({ scrollPosition }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] ${
        scrollPosition > 50 ? "bg-black/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto h-full px-4 py-3 flex justify-between items-center">
        <a href="#Home" className="text-teal h-full flex items-center">
          <img
            src={nameImg}
            alt="Justin Alder"
            className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert"
            style={{
              filter:
                "brightness(0) invert(1) sepia(1) saturate(1000%) hue-rotate(150deg)",
            }}
          />
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8 items-center text-white">
            {MENU_ITEMS.map((item) => (
              <MenuItem key={item} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}

export default Navbar;
