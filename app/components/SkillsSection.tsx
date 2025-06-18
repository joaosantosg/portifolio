const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages',
			items: ['Java', 'TypeScript', 'Python'],
			icon: (
				<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3" />
				</svg>
			),
		},
		{
			category: 'Backend',
			items: ['Spring Boot', 'NestJS', 'Fast API', 'Hibernate', 'JPA', 'REST APIs'],
			icon: (
				<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
				</svg>
			),
		},
		{
			category: 'Databases',
			items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle '],
			icon: (
				<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
				</svg>
			),
		},
		{
			category: 'Cloud & DevOps',
			items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins', 'Azure Pipelines', 'Azure DevOps'],
			icon: (
				<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		},
		{
			category: 'Frontend',
			items: ['React', 'Angular', 'Vue.js', 'Material UI'],
			icon: (
				<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
				</svg>
			),
		},
		{
			category: 'Testing & Quality',
			items: ['JUnit', 'Mockito', 'Jest', 'SonarQube', 'Code Coverage'],
			icon: (
				<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
				</svg>
			),
		},
	];

	const FIRST_YEAR = 2022	; // Adjust this to your actual first year of experience
	const TECHNOLOGIES_COUNT = skills.reduce((count, group) => count + group.items.length, 0);

	return (
		<div className="flex items-center justify-center h-full min-h-full px-4 sm:px-6 lg:px-8 py-16">
			<div className="w-full max-w-6xl ">
				{/* Card Container */}
				<div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
					{/* Header */}
					<div className="text-center mb-8">
						<h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							Core Skills
						</h3>
						<div className="flex justify-center mb-4">
							<div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-slate-300 text-lg">
							Technologies and tools I work with regularly
						</p>
					</div>

					{/* Skills Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{skills.map((skillGroup, index) => (
							<div
								key={skillGroup.category}
								className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
							>
								{/* Category Header */}
								<div className="flex items-center space-x-3 mb-4">
									<div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
										index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
											index === 1 ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
											index === 2 ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
											index === 3 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
											index === 4 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
												'bg-gradient-to-r from-pink-500 to-pink-600'
									}`}>
										{skillGroup.icon}
									</div>
									<div>
										<h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
										<div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-1"></div>
									</div>
								</div>

								{/* Skills Tags */}
								<div className="flex flex-wrap gap-2">
									{skillGroup.items.map((skill, skillIndex) => (
										<span
											key={skill}
											className="px-3 py-1.5 text-sm bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
											style={{
												animationDelay: `${skillIndex * 100}ms`
											}}
										>
                                  {skill}
                               </span>
									))}
								</div>

								{/* Skill Count */}
								<div className="mt-4 pt-4 border-t border-white/10">
									<p className="text-xs text-slate-400 uppercase tracking-wider">
										{skillGroup.items.length} {skillGroup.items.length === 1 ? 'Skill' : 'Skills'}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Bottom Stats */}
					<div className="mt-8 pt-6 border-t border-white/10">
						<div className="flex justify-center items-center space-x-8">
							<div className="text-center">
								<div className="text-2xl font-bold text-white">{  ( new Date().getFullYear() - FIRST_YEAR) }+</div>
								<div className="text-xs text-slate-400 uppercase tracking-wide">Years </div>
							</div>
							<div className="w-px h-12 bg-white/20"></div>
							<div className="text-center">
								<div className="text-2xl font-bold text-white">{TECHNOLOGIES_COUNT}+</div>
								<div className="text-xs text-slate-400 uppercase tracking-wide">Technologies</div>
							</div>
							<div className="w-px h-12 bg-white/20"></div>
							<div className="text-center">
								<div className="text-2xl font-bold text-white">15+</div>
								<div className="text-xs text-slate-400 uppercase tracking-wide">Projects</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
