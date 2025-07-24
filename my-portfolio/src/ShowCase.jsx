import React, { useState } from 'react';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection ';
import { motion } from 'framer-motion';


export default function ShowCase() {
  const [activeTab, setActiveTab] = useState("projects");

  return (

    <section id="showcase" className="w-full px-6 py-10 text-white">
      <div className="max-w-screen-2xl mx-auto text-center">
        <motion.div className="text-center space-y-2" initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }}>
          <h2 className="text-4xl font-bold text-purple-400 mb-2">Portfolio Showcase</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Explore my journey through projects and certifications. Each section represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-10">
          <motion.div className="text-center space-y-2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: false }}>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-4 rounded-lg text-white font-medium transition 
    ${activeTab === "projects"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-white/10 hover:bg-white/20 animate-bounce ring-1 ring-purple-500 ring-opacity-50 shadow-lg shadow-purple-600/50"
                }`}
            >
              <> &lt;/&gt; </> Projects
            </button>
          </motion.div>

          <motion.div className="text-center space-y-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: false }}>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-8 py-4 rounded-lg text-white font-medium transition 
    ${activeTab === "certificates"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-white/10 hover:bg-white/20 animate-bounce ring-1 ring-purple-500 ring-opacity-50 shadow-lg shadow-purple-600/50"
                }`}
            >
              🏅 Certificates
            </button>



          </motion.div>
        </div>

        {activeTab === "projects" ? <ProjectsSection /> : <CertificatesSection />}
      </div>
    </section>
  );
}
