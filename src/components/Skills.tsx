'use client';

import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Brain,
    Wrench,
    FileCode,
    BarChart3,
    GitBranch,
    Cpu
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: Code,
        color: 'from-blue-500 to-cyan-500',
        skills: [
            { name: 'Python', level: 75 },
            { name: 'R', level: 65 },
            { name: 'Java', level: 50 },
            { name: 'SQL', level: 85 },
            { name: 'HTML/CSS', level: 80 },
        ],
    },
    {
        title: 'Machine Learning',
        icon: Brain,
        color: 'from-emerald-500 to-teal-500',
        skills: [
            { name: 'Supervised Learning', level: 90 },
            { name: 'Unsupervised Learning', level: 85 },
            { name: 'Deep Learning', level: 60 },
            { name: 'Scikit-learn', level: 70 },
            { name: 'PyTorch', level: 55 },
        ],
    },
    {
        title: 'Big Data & Databases',
        icon: Database,
        color: 'from-orange-500 to-amber-500',
        skills: [
            { name: 'Hadoop', level: 65 },
            { name: 'Oracle Database', level: 50 },
            { name: 'Data Mining', level: 85 },
            { name: 'ETL Pipelines', level: 30 },
            { name: 'Data Visualization', level: 85 },
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: Wrench,
        color: 'from-purple-500 to-pink-500',
        skills: [
            { name: 'Jupyter Notebook', level: 95 },
            { name: 'Git/GitHub', level: 85 },
            { name: 'LaTeX', level: 90 },
            { name: 'VS Code', level: 90 },
            { name: 'Linux', level: 20 },
        ],
    },
];

const techIcons = [
    { icon: FileCode, label: 'Python' },
    { icon: Brain, label: 'ML' },
    { icon: Database, label: 'Big Data' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: GitBranch, label: 'Git' },
    { icon: Cpu, label: 'Deep Learning' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-white dark:bg-slate-900">
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
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building end-to-end data solutions
                    </p>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4 sm:gap-8 mb-16 flex-wrap"
                >
                    {techIcons.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all">
                                <tech.icon className="w-8 h-8 text-emerald-500" />
                            </div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                {tech.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Bars */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-emerald-500 font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
