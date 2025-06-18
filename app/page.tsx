import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

export default function Portifolio() {
	return (
		<main>
			<div className="grid grid-cols-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-full border-b border-white/10">
				{/* Left Column - Profile (5/12) */}
				<div className="col-span-5">
					<ProfileSection />
				</div>

				{/* Right Column - Skills + Experience (6/12) + Divider */}
				<div className="col-span-7 flex flex-col justify-center border-l border-white/10 pl-4 md:pl-8">	
					<div>
						<SkillsSection />
					</div>
					<div>
						<ExperienceSection />
					</div>
				</div>
			</div>
		</main>
	);
}

