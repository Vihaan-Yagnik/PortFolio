import React, { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import MatterCanvas from "./MatterCanvas"; // Import the Matter.js canvas

const HeroSection = ({ id }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      // Find the elements for animation
      const heroTitle = heroRef.current.querySelector(".hero-title");
      const heroSubtext = heroRef.current.querySelector(".hero-subtext");
      const svgShapes = heroRef.current.querySelectorAll(".animated-svg-shape");

      // Animate the main text
      if (heroTitle) {
        animate(
          heroTitle,
          { opacity: [0, 1], y: [20, 0] },
          { delay: 0.5, duration: 0.8, easing: "ease-out" }
        );
      }

      // Animate the subtext
      if (heroSubtext) {
        animate(
          heroSubtext,
          { opacity: [0, 1], y: [20, 0] },
          { delay: 0.8, duration: 0.8, easing: "ease-out" }
        );
      }

      // Animate the SVG circles
      if (svgShapes.length > 0) {
        animate(
          svgShapes,
          {
            opacity: [0, 1],
            scale: [0.5, 1],
            y: [-20, 0],
          },
          {
            delay: stagger(0.1, { start: 0.2 }),
            duration: 0.6,
            easing: "ease-out",
          }
        );
      }
    }
  }, []);

  return (
    <section
      id={id}
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-base-100"
    >
      {/* SVG Background Elements */}
      <div className="absolute inset-0 w-full h-full opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Animated Circles */}
          <circle
            cx="20"
            cy="20"
            r="5"
            fill="currentColor"
            className="text-primary animated-svg-shape"
          />
          <circle
            cx="80"
            cy="30"
            r="7"
            fill="currentColor"
            className="text-secondary animated-svg-shape"
          />
          <circle
            cx="40"
            cy="70"
            r="6"
            fill="currentColor"
            className="text-accent animated-svg-shape"
          />
          <circle
            cx="60"
            cy="85"
            r="8"
            fill="currentColor"
            className="text-info animated-svg-shape"
          />
          <circle
            cx="10"
            cy="60"
            r="4"
            fill="currentColor"
            className="text-warning animated-svg-shape"
          />
          <circle
            cx="90"
            cy="50"
            r="5"
            fill="currentColor"
            className="text-error animated-svg-shape"
          />
          <rect
            x="5"
            y="40"
            width="8"
            height="8"
            fill="currentColor"
            className="text-neutral animated-svg-shape"
          />
          <rect
            x="70"
            y="10"
            width="6"
            height="6"
            fill="currentColor"
            className="text-base-content animated-svg-shape"
          />
          <circle
            cx="30"
            cy="90"
            r="3"
            fill="currentColor"
            className="text-primary animated-svg-shape"
          />
          <circle
            cx="75"
            cy="65"
            r="6"
            fill="currentColor"
            className="text-secondary animated-svg-shape"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-4 mb-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-base-content hero-title">
          Hey There I'am A Fullstack Developer
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-base-content opacity-80 hero-subtext">
          "Crafting seamless experiences from concept to deployment."
        </p>
      </div>

      {/* Matter.js Playground below the text */}
      <div className="relative z-10 w-full max-w-lg h-64 border-2 border-base-content rounded-box overflow-hidden shadow-lg">
        <MatterCanvas />
      </div>
    </section>
  );
};

export default HeroSection;
