import React from 'react';
import { GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="lg:col-span-1 hidden lg:block">
      <div className="sticky top-32 space-y-8">
        
        {/* Social Links & Resume Box */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm">
          <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors border-b border-zinc-800/50 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-black rounded text-white group-hover:scale-110 transition-transform">
                <i className="devicon-github-original text-xl"></i>
              </div>
              <div>
                <div className="text-sm font-medium text-white">GitHub</div>
                <div className="text-xs text-zinc-500">Check my code</div>
              </div>
            </div>
            <svg className="text-zinc-600 group-hover:text-white transition-colors" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors border-b border-zinc-800/50 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#0077b5] rounded text-white group-hover:scale-110 transition-transform">
                <i className="devicon-linkedin-plain text-xl"></i>
              </div>
              <div>
                <div className="text-sm font-medium text-white">LinkedIn</div>
                <div className="text-xs text-zinc-500">Connect with me</div>
              </div>
            </div>
            <svg className="text-zinc-600 group-hover:text-white transition-colors" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href={RESUME_LINK} download className="flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded text-white group-hover:scale-110 transition-transform">
                <i className="devicon-googlecloud-plain text-xl" style={{ color: '#4285F4' }}></i>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Resume</div>
                <div className="text-xs text-zinc-500">Download CV</div>
              </div>
            </div>
            <svg className="text-zinc-600 group-hover:text-white transition-colors" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
