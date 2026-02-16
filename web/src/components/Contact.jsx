import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-gray-900 text-white rounded-t-3xl md:rounded-3xl mb-10 overflow-hidden relative">
            <div className="relative z-10 text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Let's work together.
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Have a project in mind? Looking to automate your workflow?
                    Drop me a line and let's discuss how we can bring your ideas to life.
                </p>

                <div className="flex justify-center gap-6 pt-4 relative z-20">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Twitter size={24} />
                    </a>
                </div>

                <div className="pt-12 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} David Roshi. All rights reserved.
                </div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/30 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-0 w-1/2 h-full bg-cyan-500/20 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};

export default Contact;
