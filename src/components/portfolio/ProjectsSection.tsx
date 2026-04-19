import type { ProfessionalProject, SideProject } from '@/data/portfolioData';

interface ProjectsSectionProps {
  professionalProjects: ProfessionalProject[];
  sideProjects: SideProject[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  professionalProjects,
  sideProjects,
}) => {
  return (
    <section className="py-24 px-8 md:px-24" id="projects">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-primary uppercase tracking-tighter">PROJECT_LOGS</h2>
          <p className="text-secondary-fixed-dim font-headline text-xs tracking-widest mt-2 uppercase">// PROJECTS + PERSONAL_PROJECTS</p>
        </div>
        <div className="hidden md:block h-[1px] flex-grow mx-12 bg-outline-variant/30" />
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-[10px] font-headline tracking-widest uppercase bg-primary-container text-on-primary-container">PROJECTS</span>
          <p className="text-xs text-secondary-fixed-dim font-headline tracking-wider uppercase">Professional work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalProjects.map((project, index) => (
            <article key={`${project.title}-${index}`} className="group relative bg-surface-container-low border border-outline-variant/20 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  data-alt={project.imageAlt}
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="p-6 relative">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-primary tracking-tight">{project.title}</h3>
                    <p className="text-on-surface-variant mt-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stackBadges.map((badge) => (
                      <span key={badge} className="px-2 py-1 bg-surface-container-highest text-secondary-fixed-dim text-[10px] font-headline">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-outline font-headline border border-outline-variant/50 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <a className="inline-flex items-center gap-2 text-primary-container font-headline font-bold text-sm group-hover:gap-4 transition-all" href={project.link}>
                  {project.linkLabel} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-[10px] font-headline tracking-widest uppercase bg-secondary-container text-on-secondary-container">PERSONAL_PROJECTS</span>
          <p className="text-xs text-secondary-fixed-dim font-headline tracking-wider uppercase">Experiments and side builds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sideProjects.map((project, index) => (
            <article key={`${project.title}-${index}`} className="bg-surface-container border border-outline-variant/20 p-6 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-headline text-outline uppercase tracking-widest">Project {index + 1}</span>
                <span className="text-[10px] font-headline text-secondary-fixed-dim">{project.version}</span>
              </div>

              {project.image ? (
                <div className="h-40 bg-surface-container-low mb-5 overflow-hidden border border-outline-variant/20">
                  <img
                    alt={project.imageAlt ?? project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all"
                    data-alt={project.imageAlt}
                    src={project.image}
                  />
                </div>
              ) : null}
              <h3 className="text-xl font-headline font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4 min-h-12">{project.description}</p>

              <div className="flex justify-end items-center">
                {project.link ? (
                  <a href={project.link} className="inline-flex items-center gap-1 text-xs font-headline tracking-wider uppercase text-primary-fixed-dim hover:text-primary-container" aria-label={`Open ${project.title}`}>
                    View
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                ) : (
                  <span className="material-symbols-outlined text-primary-fixed-dim">open_in_new</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;