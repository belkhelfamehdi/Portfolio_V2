import me from "@/assets/me.jpeg";

const IdentitySection: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface-container-low relative" id="identity">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/30">
        <div className="lg:col-span-4 aspect-square bg-surface-container-lowest overflow-hidden relative group">
          <img
            alt="Belkhelfa Mehdi portrait"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
            data-alt="Cyberpunk style digital portrait of a young man with neon green lighting accents, wearing techwear, cinematic and moody atmosphere"
            src={me}
          />
          <div className="absolute bottom-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 font-headline text-xs font-bold">
            ID: MK-7721
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <div className="bg-surface-container-highest px-6 py-3 flex justify-between items-center border-b border-outline-variant/20">
            <span className="font-headline text-xs text-on-surface-variant tracking-widest uppercase">/USER/BIO/ROOT_ACCESS</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-error" />
              <div className="w-2 h-2 bg-secondary-container" />
              <div className="w-2 h-2 bg-primary-container" />
            </div>
          </div>

          <div className="bg-surface-container p-8 flex-grow font-body text-on-surface-variant leading-relaxed">
            <p className="mb-6"><span className="text-primary-fixed-dim font-headline mr-2">[INFO]</span> I am a full-stack architect specializing in high-performance digital ecosystems. My approach combines the structural integrity of backend systems with the fluid precision of modern frontend frameworks.</p>
            <p className="mb-6"><span className="text-primary-fixed-dim font-headline mr-2">[MISN]</span> Transforming complex business requirements into elegant, scalable, and secure codebases. I don't just build websites; I engineer digital experiences.</p>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-outline-variant/20">
              <div>
                <p className="font-headline text-[10px] text-outline uppercase tracking-tighter">Location</p>
                <p className="text-primary tracking-tight">ALGIERS // ALGERIA</p>
              </div>
              <div>
                <p className="font-headline text-[10px] text-outline uppercase tracking-tighter">Experience</p>
                <p className="text-primary tracking-tight">3+ YEARS_ACTIVE</p>
              </div>
              <div>
                <p className="font-headline text-[10px] text-outline uppercase tracking-tighter">Current_Focus</p>
                <p className="text-primary tracking-tight">CLOUD_ARCHITECTURE</p>
              </div>
              <div>
                <p className="font-headline text-[10px] text-outline uppercase tracking-tighter">Availability</p>
                <p className="text-primary tracking-tight">OPEN_FOR_DIRECTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;