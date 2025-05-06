import React from 'react';
import TerminalSim from './TerminalSim';
import Photo from '../assets/MehdiBelkhelfa.png';

const AboutSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen w-full bg-black text-neon-green font-mono flex items-center justify-center px-4 py-12"
    >
      {/* Outer HUD glow frame */}
      <div className="relative z-10 w-full max-w-6xl rounded-lg border border-neon-green shadow-[0_0_60px_#00FFB3] p-2 bg-black/90">
        {/* Top Label */}
        <div className="absolute -top-4 left-4 text-xs bg-black px-2 text-neon-green tracking-wider border border-neon-green rounded">
          [ IDENTITY.CONSOLE ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avatar Panel with HUD frame */}
          <div className="flex flex-col justify-between items-center border border-neon-green rounded-md p-4 bg-black shadow-[0_0_15px_#00FFB3] relative">
            {/* HUD scanner corners */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green" />
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex items-center justify-center relative z-10">
              <img
                src={Photo}
                alt="Belkhelfa Mehdi"
                className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-sm border border-neon-green shadow-[0_0_20px_#00FFB3]"
              />
            </div>

            {/* Name and Status */}
            <div className="mt-4 w-full text-center relative z-10">
              <div className="text-base md:text-lg font-bold tracking-widest border-t border-neon-green pt-2">
                BELKHELFA MEHDI
              </div>
              <div className="text-sm text-neon-green mt-1 animate-flicker">
                [ ACTIVE ]
              </div>
            </div>
          </div>

          {/* Terminal HUD Panel */}
          <div className="md:col-span-2 border border-neon-green rounded-md p-4 bg-black shadow-[0_0_15px_#00FFB3] relative flex flex-col">
            <div className="text-xs mb-2 tracking-wide">
              :: USER DATA STREAM
            </div>

            <div className="flex-1 rounded-md border border-neon-green bg-black/80 shadow-[0_0_20px_#00FFB3] p-3 overflow-y-auto max-h-[400px] md:max-h-full">
              <TerminalSim />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
