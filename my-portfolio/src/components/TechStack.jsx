import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../assets/data';

export default function TechStack() {
    return (
       <motion.div  initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }}  transition={{ duration: 1 }} viewport={{ once: false }} className="mb-5">
            <h3 className="text-3xl font-semibold text-center mb-5">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5 justify-items-center">
                {techStack.map((tech, i) => (
                    <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }}  whileInView={{ opacity: 1, scale: 1 }}  transition={{ duration: 0.5, delay: i * 0.1 }} className="w-32 h-16 flex flex-col items-center justify-center px-4 py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-purple-500/10 transition">
                        <img src={tech.img} alt={tech.name} className="w-8 h-8 mb-1" />
                        <span className="text-sm font-medium text-center">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>

    );
}
