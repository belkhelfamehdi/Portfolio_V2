import HeaderBar from './HeaderBar';
import HeroSection from './HeroSection';
import IdentitySection from './IdentitySection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ConnectSection from './ConnectSection';
import SiteFooter from './SiteFooter';

const TerminalPortfolio: React.FC = () => {
  return (
    <div className="dark font-body selection:bg-primary-container selection:text-on-primary-container">
      <HeaderBar />

      <main className="pt-16 min-h-screen grid-bg relative overflow-hidden">
        <div className="scanline" />
        <HeroSection />
        <IdentitySection />
        <ProjectsSection />
        <SkillsSection />
        <ConnectSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default TerminalPortfolio;