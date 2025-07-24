import React from 'react';
import { motion } from 'framer-motion';

export default function ProfileSection() {
    return (
        <motion.div  className="text-center space-y-2" initial={{ opacity: 0, y: -100 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 1 }}  viewport={{ once: false }} >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                About Me
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
                I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving complex challenges and continuously expanding my skill set. Currently exploring exciting opportunities to innovate and contribute in the tech world.
            </p>
        </motion.div>
    );
}
