import { featuredProject, sideProjects } from '@/data/portfolioData';

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-24" id="projects">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-primary uppercase tracking-tighter">PROJECT_LOGS</h2>
          <p className="text-secondary-fixed-dim font-headline text-xs tracking-widest mt-2 uppercase">// DEPLOYED_APPLICATIONS_V3.0</p>
        </div>
        <div className="hidden md:block h-[1px] flex-grow mx-12 bg-outline-variant/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 group relative bg-surface-container-low border border-outline-variant/20 overflow-hidden">
          <div className="aspect-video relative overflow-hidden">
            <img
              alt={featuredProject.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              data-alt={featuredProject.imageAlt}
              src={featuredProject.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-headline font-bold text-primary tracking-tight">{featuredProject.title}</h3>
                <p className="text-on-surface-variant mt-2 max-w-md">{featuredProject.description}</p>
              </div>
              <div className="flex gap-2">
                {featuredProject.stackBadges.map((badge) => (
                  <span key={badge} className="px-2 py-1 bg-surface-container-highest text-secondary-fixed-dim text-[10px] font-headline">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="text-xs text-outline font-headline border border-outline-variant/50 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>

            <a className="inline-flex items-center gap-2 text-primary-container font-headline font-bold text-sm group-hover:gap-4 transition-all" href={featuredProject.link}>
              {featuredProject.linkLabel} <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-8">
          {sideProjects.map((project) => (
            <div key={project.title} className="bg-surface-container border border-outline-variant/20 p-8 flex-grow group">
              {project.image ? (
                <div className="h-40 bg-surface-container-low mb-6 overflow-hidden">
                  <img
                    alt={project.imageAlt ?? project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all"
                    data-alt={project.imageAlt}
                    src={project.image}
                  />
                </div>
              ) : null}
              <h3 className="text-xl font-headline font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-headline text-secondary-fixed-dim">{project.version}</span>
                {project.link ? (
                  <a href={project.link} className="material-symbols-outlined text-primary-fixed-dim" aria-label={`Open ${project.title}`}>
                    open_in_new
                  </a>
                ) : (
                  <span className="material-symbols-outlined text-primary-fixed-dim">open_in_new</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;