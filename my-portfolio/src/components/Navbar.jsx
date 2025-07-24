import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const [shadow, setShadow] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);
    const closeNav = () => setNavOpen(false);

    const navItems = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About Me' },
        { to: 'showcase', label: 'Projects' },
        { to: 'contact', label: 'Contact Me' },
        { to:'get-in-touch',label:'Connect'}
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${shadow ? 'shadow bg-white/10 border-b border-white/20 backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="home" smooth={true} duration={500} offset={-70} className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer animate-pulse hover:animate-none">
                    Vasu
                </Link>

                <ul className="hidden md:flex gap-8 text-white text-lg font-semibold">
                    {navItems.map(({ to, label }) => (
                        <li key={to} className="relative group">
                            <Link to={to} smooth={true} duration={800} offset={-70} spy={true} activeClass="
                            " className="cursor-pointer hover:text-pink-400 transition">
                                {label}
                            </Link>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full rounded-full"></span>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden text-white text-2xl cursor-pointer z-50" onClick={toggleNav}>
                    {navOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 transition-all duration-300 ${ navOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0' }`}>
                <ul className="flex flex-col gap-6 text-white text-lg font-medium p-6">
                    {navItems.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to} smooth={true} duration={500} offset={-70} spy={true} activeClass="text-pink-500" className="cursor-pointer hover:text-pink-400 transition" onClick={closeNav}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
