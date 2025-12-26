import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectsSection: React.FC = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

    return (
        <section id="projects" className="scroll-mt-32" ref={ref as React.RefObject<HTMLElement>}>
            <h2 className={`text-2xl font-display font-semibold text-white mb-6 scroll-reveal-slide-right ${isVisible ? 'revealed' : ''}`}>
                Projects
            </h2>
            <div className="space-y-6">
                {PROJECTS.map((project) => (
                    <div key={project.id} className={`group p-6 bg-zinc-900/30 hover:bg-zinc-800/40 border border-zinc-800 rounded-xl transition-all duration-300 hover:scale-[1.01] stagger-item ${isVisible ? 'revealed' : ''}`}>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-display font-medium text-lg text-white group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            {/* Project Links */}
                            <div className="flex gap-3">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-1" title="Live Demo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-1" title="View Code">
                                        <i className="devicon-github-original text-lg"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs rounded font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
