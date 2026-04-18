import { useEffect } from 'react';
import TerminalPortfolio from './components/portfolio/TerminalPortfolio';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'BELKHELFA MEHDI // TERMINAL_ARCHITECT';
    document.documentElement.classList.add('dark');

    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <TerminalPortfolio />
  );
};

export default App;
