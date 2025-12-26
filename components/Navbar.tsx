import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Manually set active section when clicked
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = SECTIONS.concat({ id: 'contact', label: 'Contact' });

      let activeSection = sections[0].id; // Default to first section

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        
        if (element) {
          const elementOffset = element.offsetTop;
          // If we've scrolled past this section, it's the active one
          if (scrollY >= elementOffset - 200) {
            activeSection = section.id;
            break;
          }
        }
      }

      setActiveSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-5xl w-full px-6 py-4 flex items-center justify-between border-x border-transparent md:border-white/5">
        {/* Logo - Initial S */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 bg-white text-black flex items-center justify-center font-display font-bold text-xl rounded hover:scale-105 transition-transform cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          S
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {SECTIONS.map(({ id, label }) => (
            <button 
              key={id} 
              onClick={() => scrollTo(id)} 
              className={`relative px-2 py-1 transition-all duration-300 ${
                activeSection === id
                  ? 'text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]'
                  : 'text-zinc-400'
              } hover:text-white hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.35)] hover:tracking-wide`}
            >
              <span className="relative z-10">{label}</span>
              <span
                className={`absolute inset-0 rounded-md blur-md transition-opacity duration-300 ${
                  activeSection === id ? 'opacity-30 bg-white' : 'opacity-0'
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
          <button 
            onClick={() => scrollTo('contact')} 
            className={`px-4 py-2 rounded transition-colors relative overflow-hidden ${
              activeSection === 'contact'
                ? 'bg-zinc-700 text-white shadow-[0_0_18px_rgba(255,255,255,0.2)]'
                : 'bg-zinc-800 text-white'
            } hover:bg-zinc-700`}
          >
            Contact
            <span
              className={`absolute inset-0 rounded opacity-0 blur transition-opacity duration-300 ${
                activeSection === 'contact' ? 'opacity-30 bg-white' : 'opacity-0'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
        
        {/* Mobile Menu Placeholder (Hidden on Desktop) */}
        <div className="md:hidden text-white">
           {/* Simple mobile menu could go here */}
           <button onClick={() => scrollTo('contact')} className="text-sm font-medium">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
