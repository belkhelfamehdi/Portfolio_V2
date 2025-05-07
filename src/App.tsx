import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Intro from './components/Intro'; // <- add this

const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="container relative mx-auto md:px-20 bg-black min-h-screen text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 2px)`,
        }}
      />
      {!introFinished ? (
        <Intro onFinish={() => setIntroFinished(true)} />
      ) : (
        <>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </>
      )}
    </div>
  );
};

export default App;
