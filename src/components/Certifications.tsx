'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const certifications = [
    {
        name: 'Machine Learning with Python',
        issuer: 'Cognitive Class',
        date: '2023',
        image: '/certifications/ml-python.png',
        pdf: '/certifications/IBM ML0101EN Certificate _ Cognitive Class.pdf',
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'Crash Course on Python',
        issuer: 'Coursera',
        date: '2023',
        image: '/certifications/python-crash-course.png',
        pdf: '/certifications/Coursera XAXPPGQE887G.pdf',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        name: 'R Certification',
        issuer: '365 Data Science',
        date: '2023',
        image: '/certifications/r-certification.png',
        pdf: '/certifications/CC-AA5F9BCB60.pdf',
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'n8n: A Complete Guide to the Automation Tool',
        issuer: 'Analytics Vidhya',
        date: '2026',
        image: '/certifications/n8n-certification.png',
        pdf: '/certifications/ABDELHAKIM MAHDAD - 2026-02-07.pdf',
        color: 'from-orange-500 to-red-500',
    },
    {
        name: 'Introduction to CrewAI: Building a Researcher Assistant Agent',
        issuer: 'Analytics Vidhya',
        date: '2026',
        image: '/certifications/crewai-certification.png',
        pdf: '/certifications/ABDELHAKIM MAHDAD - 2026-02-11.pdf',
        color: 'from-cyan-500 to-blue-500',
    },
];

export default function Certifications() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="certifications">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Professional credentials validating my expertise
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 block"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    unoptimized
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors line-clamp-2">
                                    {cert.name}
                                </h3>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${cert.color}`}>
                                            <Award className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
