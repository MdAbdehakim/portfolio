'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                    >
                        <Image
                            src="/logo.png"
                            alt="Abdelhakim Mahdad Logo"
                            width={140}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ scale: 1.05 }}
                                className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="/cv.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-emerald-500/25"
                        >
                            <Download size={18} />
                            Download CV
                        </motion.a>

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-lg text-slate-600 dark:text-slate-300 hover:text-emerald-500 font-medium"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/cv.pdf"
                                download
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-emerald-500 text-white font-semibold rounded-full"
                            >
                                <Download size={18} />
                                Download CV
                            </motion.a>
                            <div className="flex justify-center pt-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
