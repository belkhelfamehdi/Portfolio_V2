const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center border-t border-[#3a4a3f]/20 bg-[#0e0e0e] relative z-10 shadow-[0_-4px_40px_rgba(0,255,159,0.1)]">
      <div className="text-lg font-black text-[#14d1ff] font-headline uppercase mb-4 md:mb-0">BELKHELFA_MEHDI</div>
      <div className="flex gap-8 mb-6 md:mb-0">
        <a className="font-headline text-[10px] tracking-widest uppercase text-[#3a4a3f] hover:text-[#00FF9F] hover:drop-shadow-[0_0_5px_rgba(0,255,159,0.8)] hover:translate-y-[-2px] transition-transform" href="#">TERMINAL_LOG</a>
        <a className="font-headline text-[10px] tracking-widest uppercase text-[#3a4a3f] hover:text-[#00FF9F] hover:drop-shadow-[0_0_5px_rgba(0,255,159,0.8)] hover:translate-y-[-2px] transition-transform" href="#">NETWORK_STATUS</a>
        <a className="font-headline text-[10px] tracking-widest uppercase text-[#3a4a3f] hover:text-[#00FF9F] hover:drop-shadow-[0_0_5px_rgba(0,255,159,0.8)] hover:translate-y-[-2px] transition-transform" href="#">ENCRYPTION_PROTOCOL</a>
      </div>
      <div className="font-headline text-[10px] tracking-widest uppercase text-on-surface opacity-50">
        © 2024 SYSTEM_ARCHITECT // ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default SiteFooter;