import React from 'react';
import TerminalSim from './TerminalSim';
import Photo from '../assets/me.jpeg';

interface HUDCornersProps {
  className?: string;
}

const HUDCorners: React.FC<HUDCornersProps> = ({ className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green" />
  </div>
);

const AboutSection: React.FC = () => {
  const hudFrameStyles = "border border-neon-green rounded-md bg-black shadow-[0_0_15px_#00FFB3]";
  const labelStyles = "absolute -top-3 left-4 text-xs bg-black px-2 text-neon-green tracking-wider border border-neon-green rounded";

  return (
    <section
      id="portfolio"
      className="w-full bg-black text-neon-green font-mono flex items-center justify-center px-4 py-12"
    >
      <div className="relative z-10 w-full max-w-6xl rounded-lg border border-neon-green shadow-[0_0_30px_#00FFB3] p-2 bg-black/90">
        <div className={labelStyles}>
          [ IDENTITY.CONSOLE ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`flex flex-col justify-between items-center p-4 relative ${hudFrameStyles}`}>
            <HUDCorners />

            <div className="flex-1 flex items-center justify-center relative z-10">
              <img
                src={Photo}
                alt="Belkhelfa Mehdi"
                className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-sm border border-neon-green shadow-[0_0_20px_#00FFB3]"
              />
            </div>

            <div className="mt-4 w-full text-center relative z-10">
              <div className="text-base md:text-lg font-bold tracking-widest border-t border-neon-green pt-2">
                BELKHELFA MEHDI
              </div>
              <div className="text-sm text-neon-green mt-1 animate-flicker">
                [ ACTIVE ]
              </div>
            </div>
          </div>

          <div className={`md:col-span-2 p-4 relative flex flex-col ${hudFrameStyles}`}>
            <div className="text-xs mb-2 tracking-wide">
              :: USER DATA STREAM
            </div>


              <TerminalSim />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;