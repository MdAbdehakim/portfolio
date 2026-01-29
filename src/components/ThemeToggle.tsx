'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <Sun className="absolute w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                <Moon className="absolute w-full h-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-100" />
            </div>
        </motion.button>
    );
}
