import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileSection from './components/ProfileSection';
import TechStack from './components/TechStack';
import EducationExperience from './components/EducationExperience';

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="about" className="w-full px-6 py-16 text-white relative z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <ProfileSection/>
        <TechStack/>
        <EducationExperience/>
      </div>
    </section>
  );
}
