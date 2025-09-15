import { useState, useEffect } from "react"; // Import useEffect
import Lenis from "@studio-freight/lenis"; // 1. Import Lenis
import "./App.css";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useRef } from "react"; // Add useRef

function App() {
  const lenisRef = useRef(null); // Create a ref for the lenis instance

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis; // Store the instance in the ref

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

   return (
    <>
      <div className="min-h-screen bg-base-100">
        <Navbar lenisRef={lenisRef} /> {/* Pass the ref to the Navbar */}
        <main>
          <HeroSection id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Projects id="projects" />
          <Footer id="contact" />
        </main>
      </div>
    </>
  );
}

export default App;
