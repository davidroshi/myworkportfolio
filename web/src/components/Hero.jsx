import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
            >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                    Portfolio
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight font-sans">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">David Roshi</span>
                </h1>
                <h2 className="text-2xl md:text-4xl text-gray-600 font-light max-w-2xl">
                    Web Developer & <br className="md:hidden" />
                    <span className="font-normal text-gray-800">AI Automation Specialist</span>
                </h2>
                <p className="text-gray-500 max-w-xl pt-4 leading-relaxed">
                    I build high-performance websites and leverage AI to automate complex workflows.
                    Specializing in WordPress, Webflow, and custom integrations.
                </p>

                <div className="pt-8 relative z-20">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        View My Work
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
