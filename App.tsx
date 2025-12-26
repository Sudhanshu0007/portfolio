import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileHeader from './components/ProfileHeader';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import ProjectsSection from './components/ProjectsSection';
import EducationCertificationSection from './components/EducationCertificationSection';
import Sidebar from './components/Sidebar';
import BackgroundEffects from './components/BackgroundEffects';
// import AIChat from './components/AIChat'; // Temporarily disabled: missing API

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white relative overflow-hidden">
      
      <BackgroundEffects />
      <Navbar />

      {/* Main Content Wrapper with Border Lines */}
      <div className="max-w-5xl mx-auto border-x border-white/5 min-h-screen">
        <div className="px-6 pt-32 md:pt-40 relative z-10 pb-20">
          
          <ProfileHeader />

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN (About, Experience, Stack, Projects & Education) */}
            <div className="lg:col-span-2 space-y-24">
              <AboutSection />
              <ExperienceSection />
              <StackSection />
              <ProjectsSection />
              <EducationCertificationSection />
            </div>

            {/* RIGHT COLUMN (Social Links & Resume) */}
            <Sidebar />
          </div>
        </div>
        
        <Footer />
      </div>
      
      {/* <AIChat /> */}
    </div>
  );
};

export default App;