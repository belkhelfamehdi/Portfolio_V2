import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

const App : React.FC = () => {
  return (
    <div className="container relative mx-auto px-20 bg-black min-h-screen text-whit overflow-x-hidden">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#00FFB3_1px,transparent_1px)] [background-size:20px_20px] opacity-10 " />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 2px)`,
        }}
      />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
