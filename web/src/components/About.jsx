import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                    About Me
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Bridging the gap between code and creativity.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    I'm David Roshi, a passionate developer based in [Location]. With a background in both
                    Web Development and AI Automation, I help businesses build robust digital products
                    and streamline their operations.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    My approach is simple: clean code, user-centric design, and efficient automation.
                    Whether it's a custom WordPress site or a complex React application, I bring
                    technical expertise and a creative eye to every project.
                </p>
            </div>
            <div className="flex-1 relative">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative z-10"
                >
                    <img
                        src="https://i.ibb.co/qYmXp40M/Gemini-Generated-Image-cmyutecmyutecmyu.png"
                        alt="David Roshi"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl -z-0 hidden md:block" />
            </div>
        </section>
    );
};

export default About;
