import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

const App : React.FC = () => {
  return (
    <div className="container mx-auto px-20 bg-black min-h-screen text-whit overflow-x-hidden">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
