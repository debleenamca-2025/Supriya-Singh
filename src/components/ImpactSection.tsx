import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  BENCHMARK_BARS,
  CASE_STUDIES,
  CaseCategory,
  CaseStudy,
  PLAYBOOK_PILLARS,
} from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

const FILTER_TABS: { id: CaseCategory; label: string }[] = [
  { id: 'all', label: 'All Initiatives' },
  { id: 'bench', label: 'Bench & Cost' },
  { id: 'forecasting', label: 'Forecasting & Tools' },
  { id: 'deployment', label: 'Global Scale' },
];

export function ImpactSection() {
  const [filter, setFilter] = useState<CaseCategory>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activePillarId, setActivePillarId] = useState<string>(PLAYBOOK_PILLARS[0].id);

  const visibleStudies =
    filter === 'all' ? CASE_STUDIES : CASE_STUDIES.filter((s) => s.category === filter);

  const activePillar =
    PLAYBOOK_PILLARS.find((p) => p.id === activePillarId) ?? PLAYBOOK_PILLARS[0];

  return (
    <section id="impact" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <p className="text-xs font-semibold text-[#1D4ED8]">
              Measurable Transformation
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance max-w-xl">
              Quantified impact across bench economics, forecasting, and scale.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter transformation case studies"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start md:self-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleStudies.map((study) => (
            <article
              key={study.id}
              className="group bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 hover:border-slate-300"
            >
              <div>
                <div className="text-xs font-medium text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-slate-900 font-semibold">{study.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.categoryLabel}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-900 text-balance">
                  {study.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {study.summary}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-200/80 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">{study.metricUnit}</div>
                  <div className="mt-1 font-mono-tabular text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-2">
                    <span className="text-slate-400">{study.beforeMetric}</span>
                    <ArrowRight className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
                    <span className="text-[#1D4ED8]">{study.afterMetric}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedStudy(study)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-[#1D4ED8] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-14 border-t border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#1D4ED8]">Verified Benchmarks</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 text-balance">
              Before &amp; After Operational Deltas
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Every engagement focuses on measurable financial and operational movement—lowering idle bench carry while improving planning precision.
            </p>

            <div className="mt-7 space-y-6">
              {BENCHMARK_BARS.map((bar) => (
                <div key={bar.id} className="pb-5 border-b border-slate-200/70 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{bar.label}</div>
                      <div className="text-xs text-slate-500">{bar.organization}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono-tabular text-sm font-semibold text-[#1D4ED8]">
                        {bar.beforeLabel} → {bar.afterLabel}
                      </span>
                      <div className="text-[11px] font-medium text-slate-500">{bar.deltaText}</div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1.5" aria-hidden="true">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-400 w-10">Before</span>
                      <div className="flex-1 h-2 bg-slate-200/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: bar.beforePct / 100 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full w-full bg-slate-400 origin-left rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold text-slate-700 w-10">After</span>
                      <div className="flex-1 h-2 bg-slate-200/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: bar.afterPct / 100 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full w-full bg-[#1D4ED8] origin-left rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold text-[#1D4ED8]">Operating Playbook</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900">
              How I Architect Workforce Strategy
            </h3>

            <div
              role="tablist"
              aria-label="Workforce strategy pillars"
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2"
            >
              {PLAYBOOK_PILLARS.map((pillar) => {
                const isActive = pillar.id === activePillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`px-3 py-2.5 text-left rounded-xl border transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                      isActive
                        ? 'bg-[#0F172A] border-[#0F172A] text-white'
                        : 'bg-[#F8F9FB] border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`font-mono-tabular text-[11px] ${
                        isActive ? 'text-blue-300' : 'text-slate-400'
                      }`}
                    >
                      {pillar.index}
                    </div>
                    <div className="mt-0.5 text-xs font-semibold leading-snug truncate">
                      {pillar.title.split('&')[0].trim()}
                    </div>
                  </button>
                );
              })}
            </div>

            <div role="tabpanel" className="mt-7 pt-6 border-t border-slate-200/80">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-xl font-bold text-slate-900">
                  {activePillar.index}. {activePillar.title}
                </h4>
                <span className="text-xs text-slate-500">{activePillar.subtitle}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {activePillar.description}
              </p>

              <ul className="mt-5 space-y-3">
                {activePillar.practices.map((practice, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                  >
                    <span className="font-mono-tabular text-xs font-medium text-[#1D4ED8] pt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500">
                <span className="font-semibold text-slate-800 mr-2">Core Deliverables:</span>
                <span>{activePillar.deliverables}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </section>
  );
}
