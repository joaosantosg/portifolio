const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Mid Level Software Engineer (Full Stack)',
			company: 'Equitys Tecnologia',
			period: '2023 - Present',
			highlights: 'Develop applications using React, Angular, Java Spring Boot, Fast API. Focus on performance optimization and code quality.',
			status: 'current'
		},
		{
			role: 'Software Enginner',
			company: 'João Santos Soluções',
			period: '2023 - Present',
			highlights: 'Freelance projects focusing on backend development with Java and Spring Boot. Implemented RESTful APIs and optimized database queries.',
			status: 'current'	
		},
		{
			role: 'Frontend Developer',
			company: 'Fábrica de Tecnologias Turing',
			period: '2022 - 2023',
			highlights: 'Developed user interfaces with React and TypeScript, improving user experience and accessibility.',
			status: 'past'
		},

	];

		// Extrai o ano inicial de cada experiência
	const startYears = experiences.map(exp => {
		const [start] = exp.period.split(' - ');
	
		return parseInt(start);
	});

	// Acha o ano mais antigo
	const oldestYear = Math.min(...startYears);

	// Pega o ano atual
	const currentYear = new Date().getFullYear();

	// Calcula o total de anos de experiência
	const totalYearsOfExperience = currentYear - oldestYear;


	return (
		<div className="min-h-full flex justify-cente  px-4 sm:px-6 lg:px-8 pb-16">
			<div className=" w-full">
				{/* Card Container */}
				<div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
					{/* Header */}
					<div className="text-center mb-10">
						<h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							Professional Experience
						</h3>
						<div className="flex justify-center mb-4">
							<div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
						</div>
						<p className="text-slate-300 text-lg">
							My journey as a software engineer, showcasing my roles, responsibilities, and achievements across various companies.
						</p>
					</div>

					{/* Timeline */}
					<div className="relative">
						{/* Timeline Line */}
						<div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

						{/* Experience Items */}
						<div className="space-y-8">
							{experiences.map((exp, index) => (
								<div key={exp.company} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
									{/* Timeline Dot */}
									<div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
										<div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
											exp.status === 'current'
												? 'bg-gradient-to-r from-green-400 to-green-500'
												: 'bg-gradient-to-r from-blue-500 to-cyan-500'
										}`}>
											{exp.status === 'current' && (
												<div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
											)}
										</div>
									</div>

									{/* Content Card */}
									<div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
										index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
									}`}>
										<div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
											{/* Period Badge */}
											<div className="flex justify-between items-start mb-4">
                                     <span className={`px-3 py-1 text-xs font-medium rounded-full ${
										 exp.status === 'current'
											 ? 'bg-green-500/20 text-green-300 border border-green-500/30'
											 : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
									 }`}>
                                        {exp.period}
                                     </span>
												{exp.status === 'current' && (
													<span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                                           Present 
                                        </span>
												)}
											</div>

											{/* Role and Company */}
											<div className="space-y-2 mb-4">
												<h4 className="text-xl font-bold text-white">{exp.role}</h4>
												<div className="flex items-center space-x-2">
													<svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
														<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
														<circle cx="12" cy="10" r="3"/>
													</svg>
													<p className="text-cyan-300 font-medium">{exp.company}</p>
												</div>
											</div>

											{/* Highlights */}
											<div className="pt-4 border-t border-white/10">
												<div className="flex items-start space-x-2">
													<svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
														<path d="M9 12l2 2 4-4"/>
														<circle cx="12" cy="12" r="9"/>
													</svg>
													<p className="text-sm text-slate-300 leading-relaxed">{exp.highlights}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Bottom Stats */}
					<div className="mt-12 pt-8 border-t border-white/10">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
							<div className="text-center">
								{/* Calculate the years from the most antque  */}
								<div className="text-3xl font-bold text-white mb-1"> { totalYearsOfExperience} + </div>
								<div className="text-xs text-slate-400 uppercase tracking-wide">Years of Experience</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white mb-1">{ experiences.length}</div>
								<div className="text-xs text-slate-400 uppercase tracking-wide">Companies Worked</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-white mb-1">15+</div>
								<div className="text-xs text-slate-400 uppercase tracking-wide">Projetos</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
