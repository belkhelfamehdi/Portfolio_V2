import me from "@/assets/me.jpeg";
import type { IdentityContent } from '@/data/portfolioData';

interface IdentitySectionProps {
  identity: IdentityContent;
}

const IdentitySection: React.FC<IdentitySectionProps> = ({ identity }) => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface-container-low relative" id="identity">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/30">
        <div className="lg:col-span-4 aspect-square bg-surface-container-lowest overflow-hidden relative group">
          <img
            alt={identity.imageAlt}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
            data-alt="Cyberpunk style digital portrait of a young man with neon green lighting accents, wearing techwear, cinematic and moody atmosphere"
            src={me}
          />
          <div className="absolute bottom-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 font-headline text-xs font-bold">
            {identity.idTag}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <div className="bg-surface-container-highest px-6 py-3 flex justify-between items-center border-b border-outline-variant/20">
            <span className="font-headline text-xs text-on-surface-variant tracking-widest uppercase">{identity.terminalPath}</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-error" />
              <div className="w-2 h-2 bg-secondary-container" />
              <div className="w-2 h-2 bg-primary-container" />
            </div>
          </div>

          <div className="bg-surface-container p-8 flex-grow font-body text-on-surface-variant leading-relaxed">
            <p className="mb-6"><span className="text-primary-fixed-dim font-headline mr-2">[INFO]</span> {identity.bioInfo}</p>
            <p className="mb-6"><span className="text-primary-fixed-dim font-headline mr-2">[MISN]</span> {identity.bioMission}</p>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/20">
              {identity.details.map((detail) => (
                <div key={detail.label}>
                  <p className="font-headline text-[10px] text-outline uppercase tracking-tighter">{detail.label}</p>
                  <p className="text-primary tracking-tight">{detail.value}</p>
                </div>
              ))}
            </div>

            {identity.education && identity.education.length > 0 && (
              <div className="mt-8 pt-8 border-t border-outline-variant/20">
                <p className="font-headline text-[10px] text-outline uppercase tracking-tighter mb-4">EDUCATION</p>
                <div className="space-y-4">
                  {identity.education.map((edu, index) => (
                    <div key={index} className="bg-surface-container-lowest p-4 border border-outline-variant/20">
                      <p className="text-primary font-headline">{edu.degree}</p>
                      <p className="text-on-surface-variant text-sm">{edu.institution}</p>
                      <p className="text-outline text-xs">{edu.location}</p>
                      <p className="text-primary-container text-xs mt-1">{edu.period}</p>
                      {edu.description && <p className="text-on-surface-variant text-sm mt-2">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;