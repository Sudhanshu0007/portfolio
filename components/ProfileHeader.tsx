import React, { useState, useEffect } from 'react';
import { NAME, ROLE, LOCATION, EMAIL } from '../constants';
import Typewriter from './Typewriter';

const ProfileHeader: React.FC = () => {
  const [time, setTime] = useState(new Date());

  // Timing constants for typewriter sequencing
  const nameSpeed = 70;
  const nameStartDelay = 120;
  const taglineText = "Writing code with an eye for the small things.";
  const taglineDelayBuffer = 400; // small pause after name finishes
  const taglineStartDelay = nameStartDelay + NAME.length * nameSpeed + taglineDelayBuffer;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar Placeholder */}
        {/* <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden relative">
          <img 
            src={`https://ui-avatars.com/api/?name=${NAME}&background=random&color=fff&size=256`} 
            alt="Avatar" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-900"></div>
        </div> */}

        <div className="flex-1 w-full">
          {/* ANIMATED NAME */}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 animate-slide-up">
            <Typewriter text={NAME} speed={nameSpeed} startDelay={nameStartDelay} />
          </h1>
          <p
            className="text-zinc-400 font-mono text-sm md:text-base mb-6 animate-fade-in opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <Typewriter text={taglineText} speed={45} startDelay={taglineStartDelay} />
          </p>

          {/* INFO GRID / BENTO STYLE - GLASSMORPHISM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md animate-fade-in opacity-0 shadow-2xl shadow-black/50" style={{ animationDelay: '0.5s' }}>
            
            {/* Role */}
            <div className="bg-black/40 p-4 flex items-center gap-3 hover:bg-black/50 transition-colors">
              <span className="p-2 bg-white/5 border border-white/5 rounded-lg text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
              </span>
              <span className="text-sm font-medium text-zinc-200">{ROLE}</span>
            </div>

            {/* Location */}
            <div className="bg-black/40 p-4 flex items-center gap-3 hover:bg-black/50 transition-colors">
              <span className="p-2 bg-white/5 border border-white/5 rounded-lg text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
              </span>
              <span className="text-sm font-medium text-zinc-200">{LOCATION}</span>
            </div>

            {/* Time */}
            <div className="bg-black/40 p-4 flex items-center gap-3 hover:bg-black/50 transition-colors">
              <span className="p-2 bg-white/5 border border-white/5 rounded-lg text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
              </span>
              <span className="text-sm font-medium text-zinc-200">
                {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} 
                <span className="text-zinc-500 font-normal ml-1">// Local time</span>
              </span>
            </div>

            {/* Email */}
            <div className="bg-black/40 p-4 flex items-center gap-3 hover:bg-black/50 transition-colors">
              <span className="p-2 bg-white/5 border border-white/5 rounded-lg text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </span>
              <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-zinc-200 hover:text-white transition-colors truncate">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
