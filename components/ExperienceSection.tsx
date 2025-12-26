import React from 'react';
import { EXPERIENCES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section id="experience" className="scroll-mt-32" ref={ref as React.RefObject<HTMLElement>}>
      <h2 className={`text-2xl font-display font-semibold text-white mb-6 scroll-reveal-slide-left ${isVisible ? 'revealed' : ''}`}>
        Experience
      </h2>
      <div className="space-y-8 relative border-l border-zinc-800 ml-3">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="font-display font-medium text-lg text-white">{exp.role}</h3>
              <span className="text-sm text-zinc-500 font-mono">{exp.period}</span>
            </div>
            <div className="text-zinc-400 text-sm font-medium mb-3">{exp.company}</div>
            <ul className="space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start">
                  <span className="mr-2 text-zinc-600">-</span> {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
