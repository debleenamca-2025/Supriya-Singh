import {
  AWARDS_AND_CREDENTIALS,
  COMPETENCY_GROUPS,
  PROFILE,
  TECH_AND_PLATFORMS,
} from '../data/portfolioData';

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200/80">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-[#1D4ED8]">Executive Profile</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Engineering rigor paired with people-first resource strategy.
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-slate-600 max-w-[64ch]">
              {PROFILE.aboutNarrative}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Education &amp; Certifications
              </h3>
              <div className="mt-4 pb-4 border-b border-slate-200/80">
                <div className="text-sm font-semibold text-slate-900">
                  {AWARDS_AND_CREDENTIALS.education.degree}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {AWARDS_AND_CREDENTIALS.education.institution}
                </div>
                <div className="mt-1 text-xs text-slate-500 flex flex-wrap items-center gap-x-2">
                  <span>{AWARDS_AND_CREDENTIALS.education.affiliation}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tabular">
                    {AWARDS_AND_CREDENTIALS.education.period}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-slate-700">
                    {AWARDS_AND_CREDENTIALS.education.grade}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-3.5">
                {AWARDS_AND_CREDENTIALS.certifications.map((cert) => (
                  <div key={cert.subtitle} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">{cert.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{cert.subtitle}</div>
                    </div>
                    <span className="font-mono-tabular text-xs text-slate-500 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-[#1D4ED8]">Core Competencies</p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Domain capabilities across the workforce lifecycle
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPETENCY_GROUPS.map((group) => (
              <div
                key={group.index}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-medium text-[#1D4ED8]">
                    {group.index}
                  </span>
                  <h4 className="mt-2 font-display text-lg font-bold text-slate-900">
                    {group.domain}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {group.description}
                  </p>

                  <ul className="mt-5 pt-4 border-t border-slate-200/80 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-slate-700 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-14 border-t border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-[#1D4ED8]">Systems &amp; Automation</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
              Platforms &amp; Technical Tooling
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {TECH_AND_PLATFORMS.map((tool) => (
                <div key={tool.name} className="pb-4 border-b border-slate-200/80">
                  <div className="text-sm font-semibold text-slate-900">{tool.name}</div>
                  <div className="mt-1 text-xs text-slate-600 leading-relaxed">{tool.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#1D4ED8]">Recognition</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
              Awards &amp; Distinctions
            </h3>

            <div className="mt-6 space-y-4">
              {AWARDS_AND_CREDENTIALS.awards.map((award) => (
                <div
                  key={award.title}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5"
                >
                  <div className="text-xs text-slate-500 flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-800">{award.issuer}</span>
                    <span className="font-mono-tabular">{award.year}</span>
                  </div>
                  <div className="mt-1.5 font-display text-base font-bold text-slate-900">
                    {award.title}
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {award.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
