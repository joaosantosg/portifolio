import Image from 'next/image';

const ProfileSection = () => {
	return (
		<div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-16">
			<div className="max-w-2xl w-full">
				{/* Card Container */}
				<div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
					{/* Profile Image */}
					<div className="relative w-32 h-32 mx-auto mb-6">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full p-1">
							<div className="w-full h-full rounded-full overflow-hidden bg-white">
								<Image
									src="/portrait.jpg"
									alt="Joao Santos"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
						{/* Online Status */}
						<div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
					</div>

					{/* Name and Title */}
					<div className="text-center mb-6">
						<h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							João Santos
						</h1>
						<h2 className="text-2xl text-slate-300 mb-4">Backend Developer</h2>

						{/* Animated Divider */}
						<div className="flex justify-center mb-4">
							<div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></div>
						</div>

						<p className="text-lg text-slate-400 leading-relaxed">
							Backend Developer with a passion for creating scalable and efficient solutions. I specialize in Java, Spring Boot, and clean code practices to deliver high-quality software that meets user needs.
						</p>
					</div>

					{/* Contact Cards */}
					<div className="space-y-3 mb-6">
						<div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-200">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
									<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
									<a href="mailto:jv18.victor@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
										jv18.victor@gmail.com
									</a>
								</div>
							</div>
						</div>

						<div className="bg-white/5 rounded-xl p-3 border border-white/10">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
									<svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<div>
									<p className="text-xs text-slate-400 uppercase tracking-wide">Localização</p>
									<p className="text-white">Anápolis, GO</p>
								</div>
							</div>
						</div>
					</div>

					{/* Social Links */}
					<div className="flex justify-center space-x-4">
						<a
							href="https://github.com/joaosantosg"
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
						</a>

						<a
							href="https://www.linkedin.com/in/joaovictorguim/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
						>
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
					</div>
				</div>

			{/*	Vertical Divider*/}




			</div>
		</div>
	);
};

export default ProfileSection;
