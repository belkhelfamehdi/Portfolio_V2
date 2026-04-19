import type { SkillCategory, ToolCategory } from '@/data/portfolioData';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  toolCategory: ToolCategory;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skillCategories,
  toolCategory,
}) => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface-container-lowest" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-primary uppercase tracking-tighter inline-block border-x-4 border-primary-container px-8">TECHNICAL_STRENGTHS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skillCategories.map((category) => {
            const barClass =
              category.accent === 'secondary'
                ? 'h-full bg-secondary-container shadow-[0_0_10px_rgba(20,209,255,0.5)]'
                : 'h-full bg-primary-fixed-dim shadow-[0_0_10px_rgba(0,255,159,0.5)]';

            return (
              <div key={category.title} className="space-y-6">
                <h3 className="font-headline text-sm text-secondary-fixed-dim tracking-widest uppercase flex items-center gap-4">
                  <span className="material-symbols-outlined text-sm">{category.icon}</span> // {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between font-headline text-xs text-on-surface">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-surface-container-highest relative">
                        <div className={barClass} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="space-y-6">
            <h3 className="font-headline text-sm text-secondary-fixed-dim tracking-widest uppercase flex items-center gap-4">
              <span className="material-symbols-outlined text-sm">{toolCategory.icon}</span> // {toolCategory.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolCategory.tools.map((tool) => (
                <span key={tool} className="px-3 py-2 bg-surface-container-high border-l-2 border-primary-container font-headline text-xs text-primary uppercase">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;