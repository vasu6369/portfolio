import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp, } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion';


export default function GetInTouch() {
    const contactlist = [
        { href: "https://www.linkedin.com/in/vasugovindaraj", icon: <FaLinkedin />, brandColor: "#0077b5", label: "LinkedIn" },
        { href: "https://github.com/vasu6369", icon: <FaGithub />, brandColor: "#171515", label: "GitHub" },
        { href: "https://wa.me/+916369867858", icon: <FaWhatsapp />, brandColor: "#25D366", label: "Whatsapp" },
        { href: "https://x.com/gvasu2005", icon: <FaXTwitter />, brandColor: "#000000", label: "Twitter" },
        { href: "mailto:www.gvasu2005@gmail.com", icon: <FaEnvelope />, brandColor: "#EA4335", label: "Email" },
        { href: "tel:+916369867858", icon: <FaPhone />, brandColor: "#10B981", label: "Call" }
    ];

    return (
        <motion.div id="get-in-touch" className="text-center space-y-2" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} >

            <section className="max-w-6xl mx-auto px-4 py-24" data-aos="fade-up" data-aos-delay="300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">

                    <div>
                        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6 tracking-tight">
                            Get in Touch
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            Have an idea or opportunity? Reach out to collaborate or just say hi. I'm always excited to connect with creative minds and explore new possibilities.
                        </p>

                        <div className="space-y-4 text-white/90">
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-pink-400 text-xl" />
                                <a href="mailto:www.gvasu2005@gmail.com" className="hover:underline">www.gvasu2005@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-green-400 text-xl" />
                                <a href="tel:+916369867858" className="hover:underline">+916369867858</a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">

                        {
                            contactlist.map(({ href, icon, brandColor, label }) => (
                                <ContactIcon href={href} icon={icon} brandColor={brandColor} label={label} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

function ContactIcon({ href, icon, brandColor, label }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group w-[110px] h-[110px] flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:-rotate-1 shadow-lg hover:shadow-[0_0_20px] hover:shadow-purple-500/30">
            <div className="text-3xl transition-colors duration-300 group-hover:text-white" style={{ color: brandColor }}>
                {icon}
            </div>
            <div className="text-sm font-medium transition-colors duration-300 group-hover:text-white" style={{ color: brandColor }}>
                {label}
            </div>
        </a>
    )
}


