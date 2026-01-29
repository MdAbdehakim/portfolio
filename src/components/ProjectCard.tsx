'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    index: number;
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    index,
    image,
    githubUrl,
    liveUrl
}: ProjectCardProps) {
    const linkUrl = githubUrl || liveUrl || '#';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden"
        >
            {/* Project Image */}
            <div className="relative h-52 overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500" />
                )}

                {/* Floating Action Button */}
                <motion.a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 hover:text-white transition-colors group/btn"
                >
                    <ArrowUpRight size={20} className="text-slate-700 dark:text-white group-hover/btn:text-white" />
                </motion.a>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
