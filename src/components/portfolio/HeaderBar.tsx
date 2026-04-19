import type { HeaderContent } from '@/data/portfolioData';

interface HeaderBarProps {
  header: HeaderContent;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ header }) => {
  const handleEstablishLink = () => {
    const connectSection = document.getElementById('connect');
    connectSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    window.setTimeout(() => {
      const identityInput = document.getElementById('identity-identifier');
      if (identityInput instanceof HTMLInputElement) {
        identityInput.focus();
      }
    }, 500);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 h-16 bg-[#131313]/60 backdrop-blur-md z-50">
      <div className="text-xl font-bold text-[#00FF9F] drop-shadow-[0_0_8px_rgba(0,255,159,0.5)] font-headline tracking-tighter uppercase">{header.brand}</div>
      <nav className="hidden md:flex items-center gap-8">
        {header.navItems.map((item, index) => (
          <a
            key={`${item.label}-${index}`}
            className={`font-headline tracking-tighter uppercase text-sm transition-all active:scale-95 ${
              index === 0
                ? 'text-[#00FF9F] border-b-2 border-[#00FF9F] pb-1'
                : 'text-[#e2e2e2] opacity-70 hover:opacity-100 hover:text-[#00FF9F]'
            }`}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        onClick={handleEstablishLink}
        className="bg-primary-container text-on-primary-container px-4 py-1 font-headline text-sm font-bold active:scale-95 transition-transform drop-shadow-[0_0_10px_rgba(0,255,159,0.3)]"
      >
        {header.ctaLabel}
      </button>
    </header>
  );
};

export default HeaderBar;