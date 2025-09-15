// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ lenisRef }) => {
  const scrollToSection = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -100, // Optional: adds a small margin from the top
        duration: 1.5, // Optional: controls the scroll speed
      });
    }
  };

  const navLinks = [
    { name: "Home", target: "#home" },
    { name: "Skills", target: "#skills" },
    { name: "Experience", target: "#experience" },
    { name: "Projects", target: "#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-center">
        <div className="navbar bg-base-300 rounded-box shadow-lg max-w-lg mx-auto">
          {/* Mobile Menu (Hamburger) */}
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks.map((link) => (
                  <li key={link.name} onClick={() => scrollToSection(link.target)}>
                    <a>{link.name}</a>
                  </li>
                ))}
                <li onClick={() => scrollToSection("#contact")}><a>Contact Me</a></li>
              </ul>
            </div>
          </div>

          {/* Main Nav Links (Desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link) => (
                <li key={link.name} onClick={() => scrollToSection(link.target)}>
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="navbar-end">
            {/* Contact Me Button */}
            <button onClick={() => scrollToSection("#contact")} className="btn btn-primary ml-2 flex-shrink-0">
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;