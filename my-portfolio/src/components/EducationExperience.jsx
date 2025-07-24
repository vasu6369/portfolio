import React from 'react';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function EducationExperience() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-6" >
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <FaGraduationCap className="text-green-400" />
          Education
        </h3>
        <div className="bg-white/5 p-5 rounded-lg border border-white/10 mb-4">
          <h4 className="text-lg font-medium">Karpagam College of Engineering</h4>
          <p className="text-gray-400 text-sm">B.Tech Information Technology (2023 - 2027)</p>
          <p className="text-sm text-gray-300">CGPA: 8.2</p>
        </div>
        <div className="bg-white/5 p-5 rounded-lg border border-white/10">
          <h4 className="text-lg font-medium">Good Luck Matric Hr Sec School</h4>
          <p className="text-gray-400 text-sm">12th (2022 - 2023)</p>
          <p className="text-sm text-gray-300">Percentage: 94%</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-6">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <FaLaptopCode className="text-blue-400" />
          Experience
        </h3>
        <div className="bg-white/5 p-5 rounded-lg border border-white/10">
          <h4 className="text-lg font-medium">Internship at HaskelAI</h4>
          <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1 mt-2">
            <li>Worked as Fullstack Intern (June–Sep 2025)</li>
            <li>Built microservices using Spring Boot & React</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
