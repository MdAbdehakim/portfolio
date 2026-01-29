'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdelhakimmahdad/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/MdAbdehakim', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hakimmhdad.123@gmail.com', label: 'Email' },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Photo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl"></div>

                            {/* Photo container */}
                            <div className="relative w-72 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/profile.jpg"
                                    alt="Abdelhakim Mahdad"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Social Links Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-xl flex gap-4"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 text-slate-500 hover:text-emerald-500 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={22} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                                Ingénieur{' '}
                                <span className="gradient-text">Big Data</span>
                                <br />
                                & Cloud Computing
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Ingénieur diplômé en <span className="text-emerald-500 font-semibold">Big Data & Cloud Computing</span>,
                                je suis à la recherche d&apos;une opportunité en tant qu&apos;Ingénieur Big Data ou Data Scientist.
                            </p>

                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Ayant acquis une première expérience pratique sur l&apos;écosystème{' '}
                                <span className="text-emerald-500 font-semibold">Spark</span> et les{' '}
                                <span className="text-emerald-500 font-semibold">systèmes Multi-Agents</span> durant mes projets,
                                je souhaite aujourd&apos;hui approfondir mes compétences techniques et apporter ma motivation
                                au sein d&apos;une équipe data innovante.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-2xl font-bold text-emerald-500">Master</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Big Data & Cloud</div>
                            </div>
                            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-2xl font-bold text-emerald-500">5+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Projets réalisés</div>
                            </div>
                            <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-2xl font-bold text-emerald-500">Spark</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Junior</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
