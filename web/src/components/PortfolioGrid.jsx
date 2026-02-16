import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

const categories = ["All", "Websites", "Webapps", "Automations"];

const PortfolioGrid = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(project =>
        filter === "All" ? true : project.category === filter
    );

    return (
        <section className="py-20 px-6 md:px-20 bg-gray-50 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">
                        My Work
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Selected Projects</h2>
                </div>

                <div className="flex gap-4 mt-6 md:mt-0 relative z-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? "bg-gray-900 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-1">{project.title}</h3>
                                    </div>
                                    <div className="p-2 bg-gray-100 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                                <p className="text-gray-500 mt-3 text-sm line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex gap-2 mt-4">
                                    {project.tools.map((tool, index) => (
                                        <span key={index} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default PortfolioGrid;
