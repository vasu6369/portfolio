import React from 'react';
import './App.css'
import profile from './assets/profile.jpg';
import AnimatedBackground from './AnimatedBackground';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaFolderOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {




  return (
    <div className="relative text-white min-h-screen overflow-hidden font-sans">
      <AnimatedBackground />
      <section id="home" className="w-full min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-8">
          
          <motion.div  whileInView={{ opacity: 1, x: 0 }}  initial={{ opacity: 0, x: -100 }}  whileExit={{ opacity: 0, x: -100 }}  transition={{ duration: 1.5 }}  className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Full Stack <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent contact-heading"> Developer</span>
            </h1>
            <p className="text-3xl sm:text-4xl md:text-3xl text-white">
              <Typewriter words={['Information Technology Engg student', 'Tech Enthusiast', 'Problem Solver',]}  loop={true}  cursor cursorStyle="|"  typeSpeed={100}  deleteSpeed={70}  delaySpeed={2000}/>
            </p>
            <p className="text-gray-400 leading-relaxed">
              Enhancing digital experiences that are smooth, scalable, and made to impress. Innovating the web with purpose and precision.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#showcase" className="glass-button px-5 py-2 rounded shadow flex items-center gap-2">Projects <FaFolderOpen/> </a>
              <a href="/Vasu_resume.pdf" download className="glass-button px-5 py-2 rounded shadow flex items-center gap-2">Download cv <FaDownload/></a>
            </div>

            <div className="flex gap-5 pt-4 text-2xl">
              <a href="https://github.com/vasu6369" className="icon-hover" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vasugovindaraj" className="icon-hover" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} whileExit={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="flex justify-center">
            <img 
              src={profile} 
              alt="Hero" 
              className="w-90 h-90 object-cover rounded-full shadow-2xl border-4 border-purple-500/30 hover:border-pink-500/50 transition-all duration-1000 hover:scale-105 ring-4 ring-purple-500/10 hover:ring-pink-500/20"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
