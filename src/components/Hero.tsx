'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const roles = [
    'Big Data & Cloud Computing Engineer',
    'Machine Learning Enthusiast',
    'Python Developer',
    'Data Engineering Expert',
];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6"
                >
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">Abdelhakim Mahdad</span>
                </motion.h1>

                {/* Typing effect subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-12 sm:h-14 mb-8"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
                        {displayText}
                        <span className="animate-pulse text-emerald-500">|</span>
                    </p>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-12"
                >
                    I specialize in <span className="text-emerald-500 font-semibold">Python</span>,{' '}
                    <span className="text-emerald-500 font-semibold">Machine Learning</span>, and{' '}
                    <span className="text-emerald-500 font-semibold">Big Data technologies</span>.
                    Passionate about solving complex challenges through data-driven solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-xl shadow-emerald-500/30"
                    >
                        <Sparkles size={20} className="group-hover:animate-spin" />
                        Let&apos;s Work Together
                    </motion.a>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                    >
                        View My Work
                        <ArrowDown size={20} />
                    </motion.a>
                </motion.div>

                {/* Scroll indicator below buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-5 h-5 border-r-2 border-b-2 border-emerald-500 rotate-45 opacity-70" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
