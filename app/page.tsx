import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Portifolio() {
  return (
    <main>
      <div className="grid grid-cols-12  pb-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-full border-b border-white/10">
        {/* Left Column - Profile (mobile: full width, md+: 5/12) */}
        <div className="col-span-12 md:col-span-5">
          <div className="md:sticky md:top-0 md:h-screen md:overflow-y-auto">
            <ProfileSection />
          </div>
        </div>

        {/* Right Column - Skills + Experience (mobile: full width, md+: 7/12) */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pl-8">
          <div className="col-span-12">
            <SkillsSection />
          </div>
          <div className="col-span-12 mt-8">
            <ExperienceSection />
          </div>
        </div>
      </div>
    </main>
  );
}
