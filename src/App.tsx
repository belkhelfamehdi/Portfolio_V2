import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import FormationsSection from './components/FormationsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Intro from './components/Intro';
import CustomCursor from './components/CustomCursor';

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${width}%` }}
    />
  );
};

const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <CustomCursor />
      {introFinished && <ScrollProgress />}
      {introFinished && <div className="scan-line" />}

      <div className="relative mx-auto md:px-20 bg-black min-h-screen text-white overflow-x-hidden">
        {/* Dot grid */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />
        {/* CRT scanlines */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(to bottom, rgba(255,255,255,0.018), rgba(255,255,255,0.018) 1px, transparent 1px, transparent 3px)`,
          }}
        />

        {!introFinished ? (
          <Intro onFinish={() => setIntroFinished(true)} />
        ) : (
          <div className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <FormationsSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
