import React from 'react';
import { SKILLS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StackSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section id="stack" className="scroll-mt-32" ref={ref as React.RefObject<HTMLElement>}>
      <h2 className={`text-2xl font-display font-semibold text-white mb-6 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
        Stack
      </h2>
      <div className={`p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl relative overflow-hidden group scroll-reveal-scale ${isVisible ? 'revealed' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex flex-wrap gap-6 justify-start relative z-10">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="group/icon relative">
              {skill.svg ? (
                <div className="w-9 h-9 flex items-center justify-center transform group-hover/icon:scale-110 transition-transform duration-300">
                  <svg viewBox={skill.viewBox || "0 0 24 24"} className="w-full h-full fill-current text-zinc-500 group-hover/icon:text-white transition-colors duration-300">
                    <path d={skill.svg} />
                  </svg>
                </div>
              ) : (
                <i className={`${skill.iconClass} text-4xl text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110 transform inline-block`}></i>
              )}
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-700 shadow-xl z-20">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
