const HeaderBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 h-16 bg-[#131313]/60 backdrop-blur-md z-50">
      <div className="text-xl font-bold text-[#00FF9F] drop-shadow-[0_0_8px_rgba(0,255,159,0.5)] font-headline tracking-tighter uppercase">[TERMINAL_ARCHITECT]</div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="font-headline tracking-tighter uppercase text-sm text-[#00FF9F] border-b-2 border-[#00FF9F] pb-1 transition-all active:scale-95" href="#identity">//01.IDENTITY</a>
        <a className="font-headline tracking-tighter uppercase text-sm text-[#e2e2e2] opacity-70 hover:opacity-100 hover:text-[#00FF9F] transition-all active:scale-95" href="#projects">//02.PROJECTS</a>
        <a className="font-headline tracking-tighter uppercase text-sm text-[#e2e2e2] opacity-70 hover:opacity-100 hover:text-[#00FF9F] transition-all active:scale-95" href="#skills">//03.SKILLS</a>
        <a className="font-headline tracking-tighter uppercase text-sm text-[#e2e2e2] opacity-70 hover:opacity-100 hover:text-[#00FF9F] transition-all active:scale-95" href="#connect">//04.CONNECT</a>
      </nav>
      <button className="bg-primary-container text-on-primary-container px-4 py-1 font-headline text-sm font-bold active:scale-95 transition-transform drop-shadow-[0_0_10px_rgba(0,255,159,0.3)]">
        ESTABLISH_LINK
      </button>
    </header>
  );
};

export default HeaderBar;