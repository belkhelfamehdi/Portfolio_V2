import { useEffect, useState } from 'react';
import { isPortfolioData, type PortfolioData } from '@/data/portfolioData';

interface PortfolioDataEditorProps {
	isOpen: boolean;
	data: PortfolioData;
	onClose: () => void;
	onApply: (nextData: PortfolioData) => void;
	onReset: () => void;
}

const cloneData = (value: PortfolioData): PortfolioData =>
	JSON.parse(JSON.stringify(value)) as PortfolioData;

const splitCsv = (value: string) =>
	value
		.split(',')
		.map((item) => item.trim())
		.filter((item) => item.length > 0);

const inputClass =
	'w-full bg-surface-container-high border border-outline-variant/30 px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary';

const sectionClass =
	'border border-outline-variant/20 p-4 bg-surface-container-low space-y-3';

const PortfolioDataEditor: React.FC<PortfolioDataEditorProps> = ({
	isOpen,
	data,
	onClose,
	onApply,
	onReset,
}) => {
	const [draftData, setDraftData] = useState<PortfolioData | null>(null);
	const [activeTab, setActiveTab] = useState<'header' | 'hero' | 'identity' | 'projects' | 'skills' | 'connect' | 'footer'>('header');
	const [error, setError] = useState('');

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		setDraftData(cloneData(data));
		setActiveTab('header');
		setError('');
	}, [data, isOpen]);

	if (!isOpen || !draftData) {
		return null;
	}

	const updateDraft = (updater: (current: PortfolioData) => PortfolioData) => {
		setDraftData((current) => {
			if (!current) {
				return current;
			}
			return updater(current);
		});
	};

	const saveChanges = () => {
		if (!isPortfolioData(draftData)) {
			setError('Invalid data structure. Verify projects, skills, and content fields.');
			return;
		}
		onApply(draftData);
		setError('');
		onClose();
	};

	const downloadJson = () => {
		const blob = new Blob([JSON.stringify(draftData, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = 'portfolio-data.json';
		anchor.click();
		URL.revokeObjectURL(url);
	};

	const renderHeaderTab = () => (
		<div className="space-y-4">
			<section className={sectionClass}>
				<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Header</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<input className={inputClass} value={draftData.header.brand} onChange={(event) => updateDraft((current) => ({ ...current, header: { ...current.header, brand: event.target.value } }))} placeholder="Brand" />
					<input className={inputClass} value={draftData.header.ctaLabel} onChange={(event) => updateDraft((current) => ({ ...current, header: { ...current.header, ctaLabel: event.target.value } }))} placeholder="CTA label" />
				</div>
			</section>

			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Navigation Items</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, header: { ...current.header, navItems: [...current.header.navItems, { label: '//NEW.ITEM', href: '#new' }] } }))}>Add Item</button>
				</div>

				<div className="space-y-2">
					{draftData.header.navItems.map((item, index) => (
						<div key={`${item.label}-${index}`} className="grid grid-cols-[1fr_1fr_80px] gap-2">
							<input className={inputClass} value={item.label} onChange={(event) => updateDraft((current) => ({ ...current, header: { ...current.header, navItems: current.header.navItems.map((navItem, navIndex) => navIndex === index ? { ...navItem, label: event.target.value } : navItem) } }))} placeholder="Label" />
							<input className={inputClass} value={item.href} onChange={(event) => updateDraft((current) => ({ ...current, header: { ...current.header, navItems: current.header.navItems.map((navItem, navIndex) => navIndex === index ? { ...navItem, href: event.target.value } : navItem) } }))} placeholder="Href" />
							<button type="button" className="border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, header: { ...current.header, navItems: current.header.navItems.filter((_, navIndex) => navIndex !== index) } }))}>Remove</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);

	const renderHeroTab = () => (
		<section className={sectionClass}>
			<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Hero</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				<input className={inputClass} value={draftData.hero.initLine} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, initLine: event.target.value } }))} placeholder="Init line" />
				<input className={inputClass} value={draftData.hero.role} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, role: event.target.value } }))} placeholder="Role" />
				<input className={inputClass} value={draftData.hero.firstName} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, firstName: event.target.value } }))} placeholder="First name" />
				<input className={inputClass} value={draftData.hero.lastName} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, lastName: event.target.value } }))} placeholder="Last name" />
				<input className={inputClass} value={draftData.hero.primaryCtaLabel} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, primaryCtaLabel: event.target.value } }))} placeholder="Primary CTA" />
				<input className={inputClass} value={draftData.hero.secondaryCtaLabel} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, secondaryCtaLabel: event.target.value } }))} placeholder="Secondary CTA" />
			</div>
			<input className={inputClass} value={draftData.hero.statusLines.join(', ')} onChange={(event) => updateDraft((current) => ({ ...current, hero: { ...current.hero, statusLines: splitCsv(event.target.value) } }))} placeholder="Status lines (comma separated)" />
		</section>
	);

	const renderIdentityTab = () => (
		<div className="space-y-4">
			<section className={sectionClass}>
				<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Identity</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<input className={inputClass} value={draftData.identity.imageAlt} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, imageAlt: event.target.value } }))} placeholder="Image alt" />
					<input className={inputClass} value={draftData.identity.idTag} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, idTag: event.target.value } }))} placeholder="ID tag" />
					<input className={`${inputClass} md:col-span-2`} value={draftData.identity.terminalPath} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, terminalPath: event.target.value } }))} placeholder="Terminal path" />
				</div>
				<textarea className={`${inputClass} min-h-[90px]`} value={draftData.identity.bioInfo} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, bioInfo: event.target.value } }))} placeholder="Info paragraph" />
				<textarea className={`${inputClass} min-h-[90px]`} value={draftData.identity.bioMission} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, bioMission: event.target.value } }))} placeholder="Mission paragraph" />
			</section>

			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Identity Details</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, identity: { ...current.identity, details: [...current.identity.details, { label: 'New_Label', value: 'New_Value' }] } }))}>Add Detail</button>
				</div>
				<div className="space-y-2">
					{draftData.identity.details.map((detail, index) => (
						<div key={`${detail.label}-${index}`} className="grid grid-cols-[1fr_1fr_80px] gap-2">
							<input className={inputClass} value={detail.label} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, details: current.identity.details.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item) } }))} placeholder="Label" />
							<input className={inputClass} value={detail.value} onChange={(event) => updateDraft((current) => ({ ...current, identity: { ...current.identity, details: current.identity.details.map((item, itemIndex) => itemIndex === index ? { ...item, value: event.target.value } : item) } }))} placeholder="Value" />
							<button type="button" className="border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, identity: { ...current.identity, details: current.identity.details.filter((_, itemIndex) => itemIndex !== index) } }))}>Remove</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);

	const renderProjectsTab = () => (
		<div className="space-y-4">
			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Professional Projects</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, professionalProjects: [...current.professionalProjects, { title: 'New Project', description: 'Description', image: '', imageAlt: 'Project image', stackBadges: ['STACK'], tags: ['#TAG'], linkLabel: 'VIEW_PROJECT', link: '#' }] }))}>Add Project</button>
				</div>

				<div className="space-y-3">
					{draftData.professionalProjects.map((project, index) => (
						<div key={`${project.title}-${index}`} className="border border-outline-variant/20 p-3 space-y-2">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
								<input className={inputClass} value={project.title} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, title: event.target.value } : item) }))} placeholder="Title" />
								<input className={inputClass} value={project.linkLabel} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, linkLabel: event.target.value } : item) }))} placeholder="Link label" />
								<input className={`${inputClass} md:col-span-2`} value={project.image} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, image: event.target.value } : item) }))} placeholder="Image URL" />
								<input className={`${inputClass} md:col-span-2`} value={project.imageAlt} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, imageAlt: event.target.value } : item) }))} placeholder="Image alt" />
								<input className={`${inputClass} md:col-span-2`} value={project.link} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, link: event.target.value } : item) }))} placeholder="Link URL" />
								<input className={inputClass} value={project.stackBadges.join(', ')} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, stackBadges: splitCsv(event.target.value) } : item) }))} placeholder="Stack badges" />
								<input className={inputClass} value={project.tags.join(', ')} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, tags: splitCsv(event.target.value) } : item) }))} placeholder="Tags" />
							</div>
							<textarea className={`${inputClass} min-h-[80px]`} value={project.description} onChange={(event) => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.map((item, itemIndex) => itemIndex === index ? { ...item, description: event.target.value } : item) }))} placeholder="Description" />
							<button type="button" className="px-2 py-1 border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, professionalProjects: current.professionalProjects.filter((_, itemIndex) => itemIndex !== index) }))}>Remove Project</button>
						</div>
					))}
				</div>
			</section>

			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Personal Projects</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, sideProjects: [...current.sideProjects, { title: 'New Personal Project', description: 'Description', imageAlt: 'Personal project image', version: 'V0.1', link: '#' }] }))}>Add Project</button>
				</div>

				<div className="space-y-3">
					{draftData.sideProjects.map((project, index) => (
						<div key={`${project.title}-${index}`} className="border border-outline-variant/20 p-3 space-y-2">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
								<input className={inputClass} value={project.title} onChange={(event) => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.map((item, itemIndex) => itemIndex === index ? { ...item, title: event.target.value } : item) }))} placeholder="Title" />
								<input className={inputClass} value={project.version} onChange={(event) => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.map((item, itemIndex) => itemIndex === index ? { ...item, version: event.target.value } : item) }))} placeholder="Version" />
								<input className={`${inputClass} md:col-span-2`} value={project.link ?? ''} onChange={(event) => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.map((item, itemIndex) => itemIndex === index ? { ...item, link: event.target.value } : item) }))} placeholder="Link" />
								<input className={`${inputClass} md:col-span-2`} value={project.image ?? ''} onChange={(event) => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.map((item, itemIndex) => itemIndex === index ? { ...item, image: event.target.value } : item) }))} placeholder="Image URL (optional)" />
								<input className={`${inputClass} md:col-span-2`} value={project.imageAlt ?? ''} onChange={(event) => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.map((item, itemIndex) => itemIndex === index ? { ...item, imageAlt: event.target.value } : item) }))} placeholder="Image alt (optional)" />
							</div>
							<textarea className={`${inputClass} min-h-[80px]`} value={project.description} onChange={(event) => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.map((item, itemIndex) => itemIndex === index ? { ...item, description: event.target.value } : item) }))} placeholder="Description" />
							<button type="button" className="px-2 py-1 border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, sideProjects: current.sideProjects.filter((_, itemIndex) => itemIndex !== index) }))}>Remove Project</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);

	const renderSkillsTab = () => (
		<div className="space-y-4">
			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Skill Categories</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, skillCategories: [...current.skillCategories, { title: 'NEW_CATEGORY', icon: 'code', accent: 'primary', items: [{ name: 'NEW_SKILL', level: 50 }] }] }))}>Add Category</button>
				</div>
				<div className="space-y-3">
					{draftData.skillCategories.map((category, categoryIndex) => (
						<div key={`${category.title}-${categoryIndex}`} className="border border-outline-variant/20 p-3 space-y-2">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
								<input className={inputClass} value={category.title} onChange={(event) => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, title: event.target.value } : item) }))} placeholder="Title" />
								<input className={inputClass} value={category.icon} onChange={(event) => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, icon: event.target.value } : item) }))} placeholder="Icon" />
								<select className={inputClass} value={category.accent} onChange={(event) => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, accent: event.target.value === 'secondary' ? 'secondary' : 'primary' } : item) }))}>
									<option value="primary">primary</option>
									<option value="secondary">secondary</option>
								</select>
							</div>

							{category.items.map((skill, skillIndex) => (
								<div key={`${skill.name}-${skillIndex}`} className="grid grid-cols-[1fr_120px_80px] gap-2">
									<input className={inputClass} value={skill.name} onChange={(event) => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, items: item.items.map((skillItem, skillItemIndex) => skillItemIndex === skillIndex ? { ...skillItem, name: event.target.value } : skillItem) } : item) }))} placeholder="Skill" />
									<input className={inputClass} type="number" min={0} max={100} value={skill.level} onChange={(event) => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, items: item.items.map((skillItem, skillItemIndex) => skillItemIndex === skillIndex ? { ...skillItem, level: Math.max(0, Math.min(100, Number.parseInt(event.target.value || '0', 10))) } : skillItem) } : item) }))} placeholder="Level" />
									<button type="button" className="border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, items: item.items.filter((_, skillItemIndex) => skillItemIndex !== skillIndex) } : item) }))}>Remove</button>
								</div>
							))}

							<div className="flex gap-2">
								<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.map((item, itemIndex) => itemIndex === categoryIndex ? { ...item, items: [...item.items, { name: 'NEW_SKILL', level: 50 }] } : item) }))}>Add Skill</button>
								<button type="button" className="px-2 py-1 border border-error/40 text-error text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, skillCategories: current.skillCategories.filter((_, itemIndex) => itemIndex !== categoryIndex) }))}>Remove Category</button>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className={sectionClass}>
				<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Tool Category</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<input className={inputClass} value={draftData.toolCategory.title} onChange={(event) => updateDraft((current) => ({ ...current, toolCategory: { ...current.toolCategory, title: event.target.value } }))} placeholder="Title" />
					<input className={inputClass} value={draftData.toolCategory.icon} onChange={(event) => updateDraft((current) => ({ ...current, toolCategory: { ...current.toolCategory, icon: event.target.value } }))} placeholder="Icon" />
					<input className={`${inputClass} md:col-span-2`} value={draftData.toolCategory.tools.join(', ')} onChange={(event) => updateDraft((current) => ({ ...current, toolCategory: { ...current.toolCategory, tools: splitCsv(event.target.value) } }))} placeholder="Tools (comma separated)" />
				</div>
			</section>
		</div>
	);

	const renderConnectTab = () => (
		<div className="space-y-4">
			<section className={sectionClass}>
				<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Connect Section</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<input className={inputClass} value={draftData.connect.title} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, title: event.target.value } }))} placeholder="Title" />
					<input className={inputClass} value={draftData.connect.subtitle} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, subtitle: event.target.value } }))} placeholder="Subtitle" />
					<input className={inputClass} value={draftData.connect.form.identityPlaceholder} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, form: { ...current.connect.form, identityPlaceholder: event.target.value } } }))} placeholder="Identity placeholder" />
					<input className={inputClass} value={draftData.connect.form.submitLabel} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, form: { ...current.connect.form, submitLabel: event.target.value } } }))} placeholder="Submit label" />
					<input className={`${inputClass} md:col-span-2`} value={draftData.connect.form.messagePlaceholder} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, form: { ...current.connect.form, messagePlaceholder: event.target.value } } }))} placeholder="Message placeholder" />
				</div>
			</section>

			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Social Links</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, connect: { ...current.connect, socialLinks: [...current.connect.socialLinks, { label: 'NEW', icon: 'link', href: '#', accent: 'primary' }] } }))}>Add Link</button>
				</div>
				<div className="space-y-2">
					{draftData.connect.socialLinks.map((social, index) => (
						<div key={`${social.label}-${index}`} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_140px_80px] gap-2">
							<input className={inputClass} value={social.label} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, socialLinks: current.connect.socialLinks.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item) } }))} placeholder="Label" />
							<input className={inputClass} value={social.icon} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, socialLinks: current.connect.socialLinks.map((item, itemIndex) => itemIndex === index ? { ...item, icon: event.target.value } : item) } }))} placeholder="Icon" />
							<input className={inputClass} value={social.href} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, socialLinks: current.connect.socialLinks.map((item, itemIndex) => itemIndex === index ? { ...item, href: event.target.value } : item) } }))} placeholder="Href" />
							<select className={inputClass} value={social.accent} onChange={(event) => updateDraft((current) => ({ ...current, connect: { ...current.connect, socialLinks: current.connect.socialLinks.map((item, itemIndex) => itemIndex === index ? { ...item, accent: event.target.value === 'secondary' ? 'secondary' : 'primary' } : item) } }))}>
								<option value="primary">primary</option>
								<option value="secondary">secondary</option>
							</select>
							<button type="button" className="border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, connect: { ...current.connect, socialLinks: current.connect.socialLinks.filter((_, itemIndex) => itemIndex !== index) } }))}>Remove</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);

	const renderFooterTab = () => (
		<div className="space-y-4">
			<section className={sectionClass}>
				<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Footer</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
					<input className={inputClass} value={draftData.footer.brand} onChange={(event) => updateDraft((current) => ({ ...current, footer: { ...current.footer, brand: event.target.value } }))} placeholder="Brand" />
					<input className={inputClass} value={draftData.footer.copyright} onChange={(event) => updateDraft((current) => ({ ...current, footer: { ...current.footer, copyright: event.target.value } }))} placeholder="Copyright" />
				</div>
			</section>

			<section className={sectionClass}>
				<div className="flex justify-between items-center">
					<h3 className="font-headline text-xs tracking-widest uppercase text-primary">Footer Links</h3>
					<button type="button" className="px-2 py-1 border border-outline-variant/40 text-[11px] uppercase" onClick={() => updateDraft((current) => ({ ...current, footer: { ...current.footer, links: [...current.footer.links, { label: 'NEW_LINK', href: '#' }] } }))}>Add Link</button>
				</div>
				<div className="space-y-2">
					{draftData.footer.links.map((link, index) => (
						<div key={`${link.label}-${index}`} className="grid grid-cols-[1fr_1fr_80px] gap-2">
							<input className={inputClass} value={link.label} onChange={(event) => updateDraft((current) => ({ ...current, footer: { ...current.footer, links: current.footer.links.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item) } }))} placeholder="Label" />
							<input className={inputClass} value={link.href} onChange={(event) => updateDraft((current) => ({ ...current, footer: { ...current.footer, links: current.footer.links.map((item, itemIndex) => itemIndex === index ? { ...item, href: event.target.value } : item) } }))} placeholder="Href" />
							<button type="button" className="border border-error/40 text-error text-xs uppercase" onClick={() => updateDraft((current) => ({ ...current, footer: { ...current.footer, links: current.footer.links.filter((_, itemIndex) => itemIndex !== index) } }))}>Remove</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);

	const tabs: Array<{ id: typeof activeTab; label: string }> = [
		{ id: 'header', label: 'Header' },
		{ id: 'hero', label: 'Hero' },
		{ id: 'identity', label: 'Identity' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'connect', label: 'Connect' },
		{ id: 'footer', label: 'Footer' },
	];

	return (
		<div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4" role="dialog" aria-modal="true" aria-label="Portfolio admin panel">
			<div className="w-full max-w-6xl border border-outline-variant/40 bg-surface p-5 md:p-6 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
				<div className="flex items-center justify-between gap-4 mb-4">
					<div>
						<h2 className="font-headline text-xl md:text-2xl text-primary uppercase">Portfolio Admin Panel</h2>
						<p className="text-xs text-on-surface-variant mt-1">Customize all sections locally from one place.</p>
					</div>
					<button type="button" onClick={onClose} className="px-3 py-1 border border-outline-variant/40 text-xs font-headline uppercase hover:border-primary">Close</button>
				</div>

				<div className="flex flex-wrap gap-2 mb-4">
					{tabs.map((tab) => (
						<button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`px-3 py-1 text-xs uppercase font-headline border ${activeTab === tab.id ? 'border-primary text-primary' : 'border-outline-variant/30 text-on-surface-variant'}`}>
							{tab.label}
						</button>
					))}
				</div>

				<div className="max-h-[62vh] overflow-auto pr-1">
					{activeTab === 'header' ? renderHeaderTab() : null}
					{activeTab === 'hero' ? renderHeroTab() : null}
					{activeTab === 'identity' ? renderIdentityTab() : null}
					{activeTab === 'projects' ? renderProjectsTab() : null}
					{activeTab === 'skills' ? renderSkillsTab() : null}
					{activeTab === 'connect' ? renderConnectTab() : null}
					{activeTab === 'footer' ? renderFooterTab() : null}
				</div>

				{error ? <p className="text-sm text-error mt-3">{error}</p> : null}

				<div className="flex flex-wrap gap-3 mt-4">
					<button type="button" onClick={saveChanges} className="px-4 py-2 bg-primary text-on-primary font-headline text-xs uppercase tracking-wide">Save Changes</button>
					<button type="button" onClick={onReset} className="px-4 py-2 border border-outline-variant/40 font-headline text-xs uppercase tracking-wide hover:border-secondary-container">Reset Default</button>
					<button type="button" onClick={downloadJson} className="px-4 py-2 border border-outline-variant/40 font-headline text-xs uppercase tracking-wide hover:border-secondary-container">Download JSON</button>
				</div>
			</div>
		</div>
	);
};

export default PortfolioDataEditor;
