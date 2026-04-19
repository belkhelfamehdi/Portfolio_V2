import type { ConnectContent } from '@/data/portfolioData';

interface ConnectSectionProps {
  connect: ConnectContent;
}

const ConnectSection: React.FC<ConnectSectionProps> = ({ connect }) => {
  return (
    <section className="py-32 px-8 md:px-24 relative overflow-hidden" id="connect">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-headline font-black text-primary mb-6 tracking-tighter crt-glow">{connect.title}</h2>
        <p className="font-headline text-secondary-container tracking-[0.2em] uppercase mb-16">{connect.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-12">
          {connect.socialLinks.map((social) => (
            <a key={social.label} className="group relative" href={social.href}>
              <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all ${
                social.accent === 'secondary'
                  ? 'border-secondary-container text-secondary-container group-hover:bg-secondary-container group-hover:text-on-secondary-container shadow-[0_0_15px_rgba(20,209,255,0.3)]'
                  : 'border-primary-container text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container shadow-[0_0_15px_rgba(0,255,159,0.3)]'
              }`}>
                <span className="material-symbols-outlined text-3xl" data-weight="fill">{social.icon}</span>
              </div>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-headline text-[10px] opacity-0 group-hover:opacity-100 transition-opacity tracking-widest text-primary">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-32">
          <form className="max-w-md mx-auto space-y-4">
            <div className="relative">
              <input id="identity-identifier" name="identityIdentifier" className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container text-primary font-headline text-sm p-4 placeholder:text-outline/50" placeholder={connect.form.identityPlaceholder} type="text" />
            </div>
            <div className="relative">
              <textarea className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container text-primary font-headline text-sm p-4 placeholder:text-outline/50" placeholder={connect.form.messagePlaceholder} rows={4} />
            </div>
            <button className="w-full bg-primary-container text-on-primary-container py-4 font-headline font-black text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all" type="submit">
              {connect.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;