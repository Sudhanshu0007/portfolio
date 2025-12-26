import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EducationCertificationSection: React.FC = () => {
  const eduReveal = useScrollReveal({ threshold: 0.2 });
  const certReveal = useScrollReveal({ threshold: 0.2 });
  
  return (
    <>
      {/* EDUCATION SECTION */}
      <section id="education" className="scroll-mt-32" ref={eduReveal.ref as React.RefObject<HTMLElement>}>
        <h2 className={`text-2xl font-display font-semibold text-white mb-6 scroll-reveal ${eduReveal.isVisible ? 'revealed' : ''}`}>Education</h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className={`p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-800/40 transition-colors scroll-reveal-scale ${eduReveal.isVisible ? 'revealed' : ''}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <h3 className="font-display font-medium text-lg text-white">
                  {edu.degree}
                </h3>
                <span className="text-sm text-zinc-500 font-mono">{edu.year}</span>
              </div>
              <p className="text-zinc-400 text-sm font-medium mb-2">{edu.institution}</p>
              <p className="text-zinc-400 text-sm mb-2">{edu.field}</p>
              {edu.gpa && (
                <p className="text-zinc-500 text-sm">
                  <span className="text-zinc-400">CGPA:</span> {edu.gpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="scroll-mt-32" ref={certReveal.ref as React.RefObject<HTMLElement>}>
        <h2 className={`text-2xl font-display font-semibold text-white mb-6 scroll-reveal-slide-left ${certReveal.isVisible ? 'revealed' : ''}`}>Certifications</h2>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={cert.id} className={`group p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-800/40 transition-all duration-300 stagger-item ${certReveal.isVisible ? 'revealed' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-display font-medium text-white group-hover:text-blue-400 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-zinc-500 text-xs">Issued: {cert.date}</p>
                </div>
                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 text-zinc-500 hover:text-white transition-colors"
                    title="View Credential"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EducationCertificationSection;
