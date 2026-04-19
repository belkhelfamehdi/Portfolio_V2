import type { HeroContent } from '@/data/portfolioData';

interface HeroSectionProps {
  onViewArchitecture: () => void;
  hero: HeroContent;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onViewArchitecture, hero }) => {
  return (
    <section className="min-h-[819px] flex flex-col justify-center px-8 md:px-24 relative z-10">
      <div className="max-w-4xl">
        <p className="font-headline text-secondary-fixed-dim tracking-[0.3em] text-sm mb-4 uppercase">{hero.initLine}</p>
        <h1 className="text-6xl md:text-9xl font-headline font-black text-primary leading-none tracking-tighter mb-4 crt-glow">
          {hero.firstName}
          <br />
          {hero.lastName}
        </h1>
        <h2 className="text-2xl md:text-4xl font-headline text-secondary-container font-light mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-secondary-container" />
          {hero.role}
        </h2>
        <div className="flex flex-wrap gap-6">
          <button className="group relative px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-lg flex items-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-icon="download">download</span>
            {hero.primaryCtaLabel}
            <div className="absolute inset-0 border-2 border-primary-container scale-105 opacity-0 group-hover:opacity-100 transition-all" />
          </button>
          <button
            type="button"
            onClick={onViewArchitecture}
            className="px-8 py-4 border border-outline-variant text-primary font-headline font-bold text-lg hover:bg-surface-container-high transition-all"
          >
            {hero.secondaryCtaLabel}
          </button>
        </div>
      </div>

      <div className="absolute right-8 bottom-12 hidden lg:block font-headline text-[10px] text-outline opacity-40 text-right">
        {hero.statusLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;