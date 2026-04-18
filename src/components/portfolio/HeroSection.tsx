const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[819px] flex flex-col justify-center px-8 md:px-24 relative z-10">
      <div className="max-w-4xl">
        <p className="font-headline text-secondary-fixed-dim tracking-[0.3em] text-sm mb-4 uppercase">System.Initialize(BELKHELFA_MEHDI)</p>
        <h1 className="text-6xl md:text-9xl font-headline font-black text-primary leading-none tracking-tighter mb-4 crt-glow">
          BELKHELFA
          <br />
          MEHDI
        </h1>
        <h2 className="text-2xl md:text-4xl font-headline text-secondary-container font-light mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-secondary-container" />
          FullStack Developer
        </h2>
        <div className="flex flex-wrap gap-6">
          <button className="group relative px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-lg flex items-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-icon="download">download</span>
            DOWNLOAD_CV.EXE
            <div className="absolute inset-0 border-2 border-primary-container scale-105 opacity-0 group-hover:opacity-100 transition-all" />
          </button>
          <button className="px-8 py-4 border border-outline-variant text-primary font-headline font-bold text-lg hover:bg-surface-container-high transition-all">
            &gt; VIEW_ARCHITECTURE
          </button>
        </div>
      </div>

      <div className="absolute right-8 bottom-12 hidden lg:block font-headline text-[10px] text-outline opacity-40 text-right">
        <p>LATENCY: 14MS</p>
        <p>UPLINK: ENCRYPTED</p>
        <p>STATUS: OPERATIONAL</p>
      </div>
    </section>
  );
};

export default HeroSection;