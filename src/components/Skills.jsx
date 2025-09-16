// src/components/Skills.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { FaReact, FaNodeJs, FaDocker, FaPython, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiVite, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiKubernetes } from 'react-icons/si';

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
  
  // Note: The main parallax logic for the whole container has been removed from here.

  return (
    <section id={id} className="py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* You can optionally add the parallax back to just the title */}
        <h2 className="text-4xl font-extrabold text-center text-base-content mb-12">
          What I Can Help You With
        </h2>
        
        {/* The grid container is now a regular div */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {servicesData.map((service, index) => (
            // --- CHANGE: motion.div is now here, on each individual card ---
            <motion.div
              key={service.id}
              className="p-8 border border-base-content/20 rounded-2xl cursor-pointer bg-base-200/50 transition-colors duration-300 hover:bg-base-300"
              onMouseEnter={() => setHoveredIndex(index)}
              // Animation props are now here for each card
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.3 }} // Animation triggers when 30% of the card is visible
              transition={{ duration: 0.5 }}
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
                        <div key={tech.name} title={tech.name}>{tech.icon}</div>
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
            </motion.div>
          ))}
        </div >
      </div>
    </section>
  );
};

export default Skills;