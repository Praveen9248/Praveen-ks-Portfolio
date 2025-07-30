import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts";
import { useState } from "react";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navElements = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Certifications", path: "#certifications" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-4 bg-gray-100 text-gray-900 w-full dark:bg-gray-800 dark:text-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-4">
          <div>
            <span className="p-1 bg-gradient-to-r from-blue-500 to-teal-500 text-gray-100 rounded-xl text-2xl font-bold dark:bg-gray-900">
              PK
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-gray-900 dark:text-gray-100">
          {navElements.map((element) => (
            <HashLink
              key={element.name}
              smooth
              to={element.path}
              className={element.className || " text-xl"}
            >
              {element.name}
            </HashLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1E__SDt_YBUzskKc5tiQdIaPojfy1ojEQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-1 rounded hover:from-blue-600 hover:to-teal-600 text-xl font-bold"
          >
            Resume
          </a>
        </div>
        <div className="md:hidden text-3xl">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} beatFade />
          </button>
        </div>
        <div className="text-xl pr-4">
          <span>
            {isDarkMode ? (
              <button onClick={toggleTheme}>
                <FontAwesomeIcon icon={faSun} beatFade />
              </button>
            ) : (
              <button onClick={toggleTheme}>
                <FontAwesomeIcon icon={faMoon} beatFade />
              </button>
            )}
          </span>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-lg z-40 flex flex-col items-center space-y-4 py-4 text-gray-900 dark:text-gray-100">
          {navElements.map((element) => (
            <HashLink
              key={element.name}
              smooth
              to={element.path}
              onClick={() => setIsMenuOpen(false)} // close menu after click
              className={element.className || "text-xl"}
            >
              {element.name}
            </HashLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1E__SDt_YBUzskKc5tiQdIaPojfy1ojEQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-1 rounded hover:from-blue-600 hover:to-teal-600 text-xl font-bold"
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
};

export default NavBar;
