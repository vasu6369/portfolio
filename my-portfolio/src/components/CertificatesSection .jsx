import React, { useState } from 'react'
import { certificates } from '../assets/data'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion';


export default function CertificatesSection() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

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

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8" id="certificates">
      <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-tight">My <span className="text-purple-500">Certificates</span></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedCertificates.map((cert, index) => (
          <motion.div className="text-center space-y-2" initial={getInitialVariant(index)} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }}>
            <div key={cert.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer" data-aos="zoom-in" data-aos-delay={index * 200} onClick={() => setSelectedCertificate(cert)}>
              <img src={cert.image} alt={cert.title} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-md font-semibold px-4 py-2 bg-purple-600 rounded-full shadow-lg">View Certificate</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {certificates.length > 3 && (
        <div className="text-center mt-10">
          <button onClick={() => setShowAll(!showAll)} className="flex items-center justify-center px-6 py-2 text-md font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition shadow-md">
            {showAll ? (
              <><CaretUpOutlined className="mr-2" />Show Less</>
            )
              :
              (
                <><CaretDownOutlined className="mr-2" />Show More</>
              )}
          </button>
        </div>
      )}

      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative max-w-3xl w-full bg-black rounded-xl overflow-hidden shadow-xl animate-fadeIn">
            <button className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full shadow" onClick={() => setSelectedCertificate(null)}>Close ✕</button>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
