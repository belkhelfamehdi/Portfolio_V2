import type { FooterContent } from '@/data/portfolioData';

interface SiteFooterProps {
  footer: FooterContent;
}

const SiteFooter: React.FC<SiteFooterProps> = ({ footer }) => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center border-t border-[#3a4a3f]/20 bg-[#0e0e0e] relative z-10 shadow-[0_-4px_40px_rgba(0,255,159,0.1)]">
      <div className="text-lg font-black text-[#14d1ff] font-headline uppercase mb-4 md:mb-0">{footer.brand}</div>
      <div className="flex gap-8 mb-6 md:mb-0">
        {footer.links.map((link) => (
          <a key={link.label} className="font-headline text-[10px] tracking-widest uppercase text-[#3a4a3f] hover:text-[#00FF9F] hover:drop-shadow-[0_0_5px_rgba(0,255,159,0.8)] hover:translate-y-[-2px] transition-transform" href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className="font-headline text-[10px] tracking-widest uppercase text-on-surface opacity-50">
        {footer.copyright}
      </div>
    </footer>
  );
};

export default SiteFooter;