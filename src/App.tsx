import { useEffect, useState } from 'react';
import Terminal from './components/terminal/Terminal';
import { defaultPortfolioData } from './data/portfolioData';
import type { PortfolioData } from './data/portfolioData';

const App: React.FC = () => {
  const [portfolioData] = useState<PortfolioData>(defaultPortfolioData);

  useEffect(() => {
    document.title = 'BELKHELFA MEHDI // TERMINAL_ARCHITECT';
    document.documentElement.classList.add('dark');
  }, []);

  const terminalData = {
    hero: portfolioData.hero,
    identity: portfolioData.identity,
    professionalProjects: portfolioData.professionalProjects,
    connect: portfolioData.connect,
    header: portfolioData.header,
  };

  return (
    <div className="dark">
      <Terminal portfolioData={terminalData} />
    </div>
  );
};

export default App;