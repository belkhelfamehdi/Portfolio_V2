import { useEffect, useState } from 'react';
import {
  defaultPortfolioData,
  isPortfolioData,
  PORTFOLIO_STORAGE_KEY,
  type PortfolioData,
} from '@/data/portfolioData';
import HeaderBar from './HeaderBar';
import HeroSection from './HeroSection';
import IdentitySection from './IdentitySection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ConnectSection from './ConnectSection';
import SiteFooter from './SiteFooter';
import ArchitectureOverlay from './ArchitectureOverlay';
import PortfolioDataEditor from './PortfolioDataEditor';

const TerminalPortfolio: React.FC = () => {
  const adminEnabled =
    import.meta.env.DEV;

  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    if (!adminEnabled) {
      return;
    }

    try {
      const storedData = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
      if (!storedData) {
        return;
      }

      const parsedStoredData: unknown = JSON.parse(storedData);
      if (isPortfolioData(parsedStoredData)) {
        setPortfolioData(parsedStoredData);
      }
    } catch {
      localStorage.removeItem(PORTFOLIO_STORAGE_KEY);
    }
  }, [adminEnabled]);

  const handleApplyAdminData = (nextData: PortfolioData) => {
    if (!isPortfolioData(nextData)) {
      return;
    }

    setPortfolioData(nextData);
    if (adminEnabled) {
      localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(nextData));
    }
  };

  const handleResetAdminData = () => {
    setPortfolioData(defaultPortfolioData);
    localStorage.removeItem(PORTFOLIO_STORAGE_KEY);
    setIsAdminOpen(false);
  };

  return (
    <div className="dark font-body selection:bg-primary-container selection:text-on-primary-container">
      <HeaderBar header={portfolioData.header} />

      <main className="pt-16 min-h-screen grid-bg relative overflow-hidden">
        <div className="scanline" />
        <HeroSection
          hero={portfolioData.hero}
          onViewArchitecture={() => setIsArchitectureOpen(true)}
        />
        <IdentitySection identity={portfolioData.identity} />
        <ProjectsSection
          professionalProjects={portfolioData.professionalProjects}
          sideProjects={portfolioData.sideProjects}
        />
        <SkillsSection
          skillCategories={portfolioData.skillCategories}
          toolCategory={portfolioData.toolCategory}
        />
        <ConnectSection connect={portfolioData.connect} />
      </main>

      <ArchitectureOverlay
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
      />

      {adminEnabled ? (
        <>
          <button
            type="button"
            onClick={() => setIsAdminOpen(true)}
            className="fixed bottom-6 right-6 z-40 px-4 py-2 border border-primary-container/50 bg-background/90 text-primary font-headline text-xs uppercase tracking-widest hover:border-primary"
          >
            ADMIN_PANEL
          </button>

          <PortfolioDataEditor
            isOpen={isAdminOpen}
            data={portfolioData}
            onClose={() => setIsAdminOpen(false)}
            onApply={handleApplyAdminData}
            onReset={handleResetAdminData}
          />
        </>
      ) : null}

      <SiteFooter footer={portfolioData.footer} />
    </div>
  );
};

export default TerminalPortfolio;