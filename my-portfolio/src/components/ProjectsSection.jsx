import React, { useState } from 'react';
import { projects } from '../assets/data';
import { FaGithub } from 'react-icons/fa';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const getInitialVariant = (index) => {
    switch (index % 3) {
      case 0:
        return { opacity: 0, x: -100 };
      case 1:
        return { opacity: 0, y: 100 };
      case 2:
        return { opacity: 0, x: 100 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-10 text-white tracking-tight">My <span className="text-purple-500">Projects</span></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProjects.map((project, index) => (
          <motion.div className="text-center space-y-2 hover:shadow-lg hover:shadow-purple-500/30 hover:scale " initial={getInitialVariant(index)} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }}>
            <div className="relative group overflow-hidden rounded-lg">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              </div>

              <div className="absolute top-0 left-0 right-0 h-48 bg-black/70 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-sm text-gray-100 text-center leading-relaxed">{project.description}</p>
              </div>
            </div>

            <div className="relative z-10 px-5 pt-3 pb-5  backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>

              <div className="flex  items-center px-4 py-2  rounded-md backdrop-blur-sm transition-all duration-300 hover:bg-purple-900/40">  {project.demoLink ? (
                <a href={project.demoLink} className="text-purple-400 text-sm font-semibold hover:underline hover:text-purple-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  Live Demo ↗
                </a>
              ) : (
                <></>
              )}

                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`text-gray-300 hover:text-white transition-colors duration-200 ${project.demoLink ? 'ml-auto' : 'mx-auto'}`} aria-label="GitHub Link">
                    <FaGithub size={20} />
                  </a>
                ) : (
                  <span className="invisible">
                    <FaGithub size={20} />
                  </span>
                )}
              </div>
            </div>
          </motion.div>

        ))}
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center px-6 py-2 text-md font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition shadow-md"
          >
            {showAll ? (
              <>
                <CaretUpOutlined className="mr-2" />
                Show Less
              </>
            ) : (
              <>
                <CaretDownOutlined className="mr-2" />
                Show More
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
