import React from 'react';
import { NAME, EMAIL, GITHUB_LINK, LINKEDIN_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-zinc-800 bg-zinc-900/20 relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-x border-white/5">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-8 h-8 bg-zinc-800 text-white flex items-center justify-center font-display font-bold text-lg rounded mb-2">
            S
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm group">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
            <span className="group-hover:underline decoration-zinc-600 underline-offset-4">Email</span>
          </a>
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm group">
            <i className="devicon-github-original text-lg"></i>
            <span className="group-hover:underline decoration-zinc-600 underline-offset-4">GitHub</span>
          </a>
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm group">
            <i className="devicon-linkedin-plain text-lg"></i>
            <span className="group-hover:underline decoration-zinc-600 underline-offset-4">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
