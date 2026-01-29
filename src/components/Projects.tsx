'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Multi-Agent System for Big Data Resource Management',
        description: 'Distributed system with multi-agent architecture for automatic workload management, dynamic scalability, and real-time resource monitoring. Achieved +10,000 tasks processed with auto-scaling from 7 to 204 dynamic nodes.',
        tags: ['Python', 'Pandas', 'Multiprocessing', 'Asyncio', 'Tkinter'],
        image: '/projects/multi-agent.png',
        github: 'https://github.com/MdAbdehakim/multi-agent-bigdata',
    },
    {
        title: 'AI-Powered Educational System for Africa',
        description: 'Personalized recommendation system using Holland Codes (RIASEC) to match students with suitable educational and career pathways. Built with Random Forest and Gradient Boosting models.',
        tags: ['Python', 'Streamlit', 'Machine Learning', 'Random Forest'],
        image: '/projects/education-ai.png',
    },
    {
        title: 'Traffic Flow Prediction with Self-Supervised Learning',
        description: 'Traffic prediction using SimCLR self-supervised learning technique. The model learned meaningful traffic patterns through contrastive learning without costly labeled data.',
        tags: ['Python', 'PyTorch', 'SimCLR', 'Deep Learning'],
        image: '/projects/traffic-prediction.png',
    },
    {
        title: 'Fake Banknote Detection with AI',
        description: 'AI classification system using Decision Trees to detect counterfeit currency. Variance identified as the key feature for classification with impressive accuracy.',
        tags: ['Python', 'Scikit-learn', 'Decision Tree', 'Data Analysis'],
        image: '/projects/banknote-detection.png',
    },
    {
        title: 'Big Data Integration & Cleaning System',
        description: 'Efficient system for integrating and cleaning heterogeneous data from various sources. Applied duplicate removal, data normalization, and interactive visualization.',
        tags: ['Python', 'Pandas', 'ETL', 'Data Visualization'],
        image: '/projects/data-integration.png',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
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
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A selection of my academic and personal projects showcasing my skills in
                        Machine Learning, Data Engineering, and AI.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            image={project.image}
                            githubUrl={project.github}
                        />
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-slate-500 dark:text-slate-400 mb-4">
                        More projects available on my GitHub profile
                    </p>
                    <motion.a
                        href="https://github.com/MdAbdehakim"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View GitHub Profile
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
