import React from 'react';
import { BIO_POINTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section id="about" className="scroll-mt-32" ref={ref as React.RefObject<HTMLElement>}>
      <h2 className={`text-2xl font-display font-semibold text-white mb-6 scroll-reveal ${isVisible ? 'revealed' : ''}`}>
        About
      </h2>
      <ul className="space-y-4 text-zinc-400 leading-relaxed list-disc list-outside ml-4 marker:text-zinc-600">
        {BIO_POINTS.map((point, i) => (
          <li key={i} className={`pl-2 stagger-item ${isVisible ? 'revealed' : ''}`}>
            <span className="text-zinc-300">{point.split(' ').slice(0, 3).join(' ')}</span> {point.split(' ').slice(3).join(' ')}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;
