import { useEffect } from 'react';

interface ArchitectureOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ArchitectureNode {
  title: string;
  subtitle: string;
  accentClass: string;
}

const architectureNodes: ArchitectureNode[] = [
  {
    title: 'FRONTEND_NODE',
    subtitle: 'React + Vite + TypeScript',
    accentClass: 'border-primary-container text-primary-container',
  },
  {
    title: 'SERVICE_LAYER',
    subtitle: 'APIs + Business Logic',
    accentClass: 'border-secondary-container text-secondary-container',
  },
  {
    title: 'DATA_CORE',
    subtitle: 'PostgreSQL + Persistence',
    accentClass: 'border-primary-container text-primary-container',
  },
  {
    title: 'INFRA_LINK',
    subtitle: 'Docker + Cloud Delivery',
    accentClass: 'border-secondary-container text-secondary-container',
  },
];

const ArchitectureOverlay: React.FC<ArchitectureOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const navigateToSection = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Architecture map"
    >
      <div className="w-full max-w-5xl border border-outline-variant/40 bg-surface-container-low p-6 md:p-8 shadow-[0_0_70px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="font-headline text-xs tracking-[0.25em] text-secondary-fixed-dim uppercase">System Mapping</p>
            <h2 className="font-headline text-2xl md:text-4xl text-primary uppercase tracking-tight">Architecture Overlay</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 border border-outline-variant/40 text-xs font-headline uppercase hover:border-primary"
          >
            CLOSE
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {architectureNodes.map((node) => (
            <div
              key={node.title}
              className={`text-left border p-4 md:p-5 bg-surface-container ${node.accentClass}`}
            >
              <p className="font-headline text-xs tracking-[0.18em] uppercase opacity-80 mb-2">{node.title}</p>
              <p className="text-sm md:text-base text-on-surface">{node.subtitle}</p>
              <p className="mt-4 text-[11px] font-headline uppercase tracking-widest opacity-75">Overview</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/belkhelfamehdi"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-primary-container text-on-primary-container font-headline text-xs uppercase tracking-wider"
          >
            OPEN_GITHUB_REPO
          </a>
          <button
            type="button"
            onClick={() => navigateToSection('projects')}
            className="px-4 py-2 border border-outline-variant/40 font-headline text-xs uppercase tracking-wider hover:border-secondary-container"
          >
            VIEW_PROJECT_LOGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureOverlay;
