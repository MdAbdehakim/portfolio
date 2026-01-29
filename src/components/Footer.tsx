'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        © {currentYear} Abdelhakim Mahdad. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/MdAbdehakim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium"
                        >
                            <Github size={18} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdelhakimmahdad/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium"
                        >
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:hakimmhdad.123@gmail.com"
                            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium"
                        >
                            <Mail size={18} />
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
