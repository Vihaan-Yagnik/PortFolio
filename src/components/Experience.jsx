// src/components/Experience.jsx
import React from 'react';
import { motion } from 'motion/react';
import { FaBriefcase } from 'react-icons/fa';

// You can easily update your work history here
const experienceData = [
  {
    id: 1,
    date: '2025 - Present', // Note: As of Sept 2025, this is current.
    title: 'Software Development Intern',
    company: 'Kevit.io, Rajkot',
    description: [
      'Engineered and implemented robust API endpoints with integrated business logic for a Customer Relationship Management (CRM) system.',
      'Led the design and development of a responsive and intuitive user interface for the CRM application.',
      'Collaborated effectively with team members, taking ownership of both frontend and backend development cycles.',
      'Managed and optimized CI/CD pipelines utilizing Docker, Kubernetes, and GitHub Actions to streamline deployment.'
    ],
  },
  {
    id: 2,
    date: '2024 - 2025',
    title: 'Software Development Intern',
    company: 'GN-Websoft Pvt. Ltd., Rajkot',
    description: [
      'Developed automated web scraping scripts to extract and process critical business data from various online sources.',
      'Spearheaded the complete refactoring of a legacy frontend codebase from .NET to a modern Angular framework.',
      'Built a full-stack Learning Management System (LMS) from the ground up using React and .NET, delivering a production-ready application.',
    ],
  },
];

const Experience = ({id}) => {
  return (
    <section id={id} className="py-20 bg-base-100"> {/* Changed from bg-base-200 to match the flow */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-base-content mb-16">
          My Experience
        </h2>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative pl-12 mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // --- THIS LINE IS CHANGED ---
              // By removing `once: true`, the animation will run every time the element enters the viewport.
              viewport={{ amount: 0.3 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* The dot on the timeline */}
              <div className="absolute -left-1.5 top-1.5 h-8 w-8 bg-base-100 rounded-full border-4 border-primary flex items-center justify-center">
                <FaBriefcase className="text-primary text-sm" />
              </div>
              
              {/* Card Content */}
              <div className="p-6 bg-base-300 rounded-lg shadow-md">
                <span className="text-sm font-semibold text-primary">{item.date}</span>
                <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                <p className="text-base-content/80 mb-4">{item.company}</p>
                <ul className="list-disc pl-5 space-y-2 text-base-content/70">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;