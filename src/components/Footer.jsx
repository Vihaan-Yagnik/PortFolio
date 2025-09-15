// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({id}) => {
  return (
    <footer id={id} className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-xl">
      {/* Main container for the connect section */}
      <div className="flex flex-col items-center gap-4">
        {/* Styled "Let's Connect" text */}
        <h3 className="text-xl font-bold">Let's Connect</h3>

        {/* Social Links */}
        <div className="grid grid-flow-col gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover transition-transform duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover transition-transform duration-300 hover:scale-110"
            aria-label="Twitter Profile"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6">
        <p>Copyright © 2025 - Vihaan Yagnik</p>
      </div>
    </footer>
  );
};

export default Footer;