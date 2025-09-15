// src/components/Skills.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'; 
import { FaReact, FaNodeJs, FaDocker, FaPython, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiVite, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiKubernetes } from 'react-icons/si';

// ... (servicesData remains the same)
const servicesData = [
  {
    id: '01',
    title: 'Frontend Development',
    description: 'Building beautiful, responsive, and blazing-fast user interfaces from scratch.',
    technologies: [
      { name: 'React', icon: <FaReact size={28} className="text-blue-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs size={28} /> },
      { name: 'Vite', icon: <SiVite size={28} className="text-purple-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-teal-400" /> },
    ],
  },
  {
    id: '02',
    title: 'Backend & API Solutions',
    description: 'Designing robust and scalable server-side logic and APIs to power applications.',
    technologies: [
      { name: 'Node.js', icon: <FaNodeJs size={28} className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress size={28} /> },
      { name: 'MongoDB', icon: <SiMongodb size={28} className="text-green-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} className="text-blue-700" /> },
    ],
  },
  {
    id: '03',
    title: 'DevOps & Cloud',
    description: 'Streamlining development pipelines and deploying apps on cloud infrastructure.',
    technologies: [
      { name: 'Docker', icon: <FaDocker size={28} className="text-blue-500" /> },
      { name: 'Kubernetes', icon: <SiKubernetes size={28} className="text-blue-500" /> },
      { name: 'AWS', icon: <FaAws size={28} className="text-orange-500" /> },
      { name: 'Python', icon: <FaPython size={28} className="text-yellow-400" /> },
    ],
  },
];


const Skills = ({id}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // --- MODIFICATION START ---
  // Create transforms for the title (unchanged)
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);

  // NEW: Create transforms for scale and opacity for the "pop up" effect
  const cardsScale = useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1]); // Starts at 80% size, ends at 100%
  const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]); // Fades in
  // --- MODIFICATION END ---


  return (
    <section id={id} ref={targetRef} className="py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.h2 
          style={{ y: titleY }}
          className="text-4xl font-extrabold text-center text-base-content mb-12"
        >
          What I Can Help You With
        </motion.h2>
        
        {/* MODIFIED: Apply the new scale and opacity styles */}
        <motion.div
          style={{ scale: cardsScale, opacity: cardsOpacity }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* ... (the rest of the component remains the same) */}
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="p-8 border border-base-content/20 rounded-2xl cursor-pointer bg-base-200/50 transition-colors duration-300 hover:bg-base-300"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">{service.id}</span>
                <h3 className="text-2xl font-bold text-base-content">{service.title}</h3>
              </div>
              
              <div className="mt-4 h-24 relative">
                <AnimatePresence>
                  {hoveredIndex === index ? (
                    <motion.div
                      key="technologies"
                      className="absolute inset-0 flex flex-wrap items-center gap-x-6 gap-y-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.technologies.map((tech) => (
                        <div key={tech.name} title={tech.name}>
                          {tech.icon}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="description"
                      className="absolute inset-0 text-base-content/70"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;