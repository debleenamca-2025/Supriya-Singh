import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CAREER_TIMELINE, CareerEntry } from '../data/portfolioData';

function RoleDetailBlock({ entry }: { entry: CareerEntry }) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3 pb-6 border-b border-slate-200/80">
        <div>
          <div className="text-xs font-medium text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[#1D4ED8] font-semibold">{entry.location}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.scope}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
            {entry.company}
          </h3>
          <p className="mt-1 text-base font-medium text-slate-700">{entry.role}</p>
        </div>

        <div className="text-left sm:text-right shrink-0">
          <div className="font-mono-tabular text-sm font-semibold text-slate-900">
            {entry.period}
          </div>
          <div className="text-xs text-slate-500 mt-0.5">{entry.duration}</div>
        </div>
      </div>

      <p className="mt-6 text-sm sm:text-[15px] leading-relaxed text-slate-600">
        {entry.summary}
      </p>

      <div className="mt-7">
        <h4 className="text-xs font-semibold text-slate-900">Key Impact Highlights</h4>
        <ul className="mt-3 space-y-2.5">
          {entry.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
            >
              <span className="font-mono-tabular text-xs font-medium text-[#1D4ED8] pt-0.5 shrink-0">
                0{idx + 1}
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/80">
        <h4 className="text-xs font-semibold text-slate-900">Key Result Areas</h4>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {entry.kras.map((kra) => (
            <div key={kra.area}>
              <div className="text-sm font-semibold text-slate-900">{kra.area}</div>
              <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                {kra.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {entry.stages && (
        <div className="mt-8 pt-6 border-t border-slate-200/80">
          <h4 className="text-xs font-semibold text-slate-900">Internal Progression</h4>
          <div className="mt-4 space-y-5">
            {entry.stages.map((stage) => (
              <div key={stage.title} className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-semibold text-slate-900">{stage.title}</span>
                  <span className="font-mono-tabular text-xs text-slate-500">{stage.period}</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {stage.bullets.map((b, i) => (
                    <li key={i} className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-7 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
        <span className="font-semibold text-slate-800 mr-2">Focus &amp; Tooling:</span>
        <span>{entry.tools.join(' · ')}</span>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(CAREER_TIMELINE[0].id);
  const [viewMode, setViewMode] = useState<'explorer' | 'full'>('explorer');

  const activeEntry =
    CAREER_TIMELINE.find((item) => item.id === selectedId) ?? CAREER_TIMELINE[0];

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-slate-200/80 bg-white/50">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <p className="text-xs font-semibold text-[#1D4ED8]">
              Career Progression (2013 – Present)
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance max-w-xl">
              Over 13 years scaling workforce operations across five IT leaders.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Experience view mode"
            className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'explorer'}
              onClick={() => setViewMode('explorer')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                viewMode === 'explorer'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interactive Explorer
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'full'}
              onClick={() => setViewMode('full')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                viewMode === 'full'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Timeline
            </button>
          </div>
        </div>

        {viewMode === 'explorer' ? (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div
              role="tablist"
              aria-label="Select organization"
              className="lg:col-span-4 space-y-2 lg:sticky lg:top-24"
            >
              {CAREER_TIMELINE.map((item) => {
                const isActive = item.id === activeEntry.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors duration-150 flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                      isActive
                        ? 'bg-white border-slate-300 shadow-xs'
                        : 'bg-transparent border-transparent hover:bg-white/70 hover:border-slate-200/80'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="font-mono-tabular text-xs text-slate-500">
                        {item.period}
                      </div>
                      <div
                        className={`mt-1 font-display text-base font-bold truncate ${
                          isActive ? 'text-[#1D4ED8]' : 'text-slate-900'
                        }`}
                      >
                        {item.shortName}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-600 truncate">{item.role}</div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                        isActive ? 'text-[#1D4ED8] translate-x-0.5' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8" role="tabpanel">
              <RoleDetailBlock entry={activeEntry} />
            </div>
          </div>
        ) : (
          <div className="mt-10 space-y-8">
            {CAREER_TIMELINE.map((entry) => (
              <RoleDetailBlock key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
