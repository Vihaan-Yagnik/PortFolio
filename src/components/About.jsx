import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = ({id}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section id={id} ref={targetRef} className="py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
            style={{ y: textY }}
          >
            {/* CHANGED: Adjusted text size for mobile */}
            <span className="text-lg md:text-xl font-semibold text-primary mb-2">ABOUT ME</span>
            
            {/* CHANGED: Adjusted text size for mobile */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-base-content leading-tight mb-6">
              A commitment to excellence
            </h2>

            {/* CHANGED: Adjusted text size for mobile */}
            <p className="text-lg md:text-xl text-base-content opacity-70 leading-relaxed">
              With a passion for creating seamless digital experiences, I've spent years honing my skills in full-stack development. My journey is driven by a commitment to clean code, innovative solutions, and continuous learning. I believe in building applications that are not only functional but also intuitive and a joy to use.
            </p>
          </motion.div>
          
          {/* Right Column: Image with Parallax */}
          <div className="md:w-1/2">
            <div className="w-full h-auto rounded-xl overflow-hidden shadow-2xl">
              <motion.img 
                style={{ y: imageY }}
                src="/assets/ProfileAsset.png" 
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;