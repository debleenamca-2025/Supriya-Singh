import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, User } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_KPIS, MARQUEE_ITEMS, PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="overview" className="pt-10 sm:pt-14 lg:pt-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="text-[#1D4ED8] font-semibold">Senior Workforce Manager</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>India Resource Planning Lead at NashTech</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Noida, India</span>
              </p>

              <h1 className="font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-bold leading-[1.06] tracking-tight text-slate-900 text-balance max-w-2xl">
                {PROFILE.heroHeadline}
              </h1>

              <p className="mt-6 text-base sm:text-[17px] leading-[1.68] text-slate-600 max-w-[62ch]">
                {PROFILE.heroSummary}
              </p>
            </div>

            <div className="mt-9 pt-7 border-t border-slate-200/90 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('impact')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <span>Explore Proven Impact</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.cvPdfPath}
                download="Supriya_Singh_WFM_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] rounded-lg"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Resume PDF</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <figure className="w-full bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="relative w-full aspect-square lg:aspect-auto lg:flex-1 lg:min-h-[380px] rounded-xl overflow-hidden bg-slate-100">
                {!imgError ? (
                  <img
                    src={PROFILE.photoPath}
                    alt="Portrait of Supriya Singh, Senior Workforce Manager"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 p-6 text-center">
                    <User className="w-12 h-12 mb-3 text-slate-400" aria-hidden="true" />
                    <span className="font-display font-semibold text-slate-800">{PROFILE.name}</span>
                    <span className="text-xs text-slate-500 mt-1">{PROFILE.headlineTitle}</span>
                  </div>
                )}
              </div>

              <figcaption className="pt-3.5 px-1 flex items-center justify-between gap-4 text-xs text-slate-500">
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">{PROFILE.name}</span>
                  <span>B.Tech CS · MCTS Certified · {PROFILE.languages}</span>
                </div>
                <span className="font-mono-tabular text-slate-600 shrink-0">2013 – Present</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        <div className="mt-10 bg-white border border-slate-200/90 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {HERO_KPIS.map((kpi) => (
            <div key={kpi.label} className="p-6">
              <div className="font-mono-tabular text-2xl sm:text-[26px] font-medium tracking-tight text-slate-900">
                {kpi.value}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-slate-800">{kpi.label}</div>
              <div className="mt-1 text-xs text-slate-500 leading-relaxed">{kpi.context}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-14 border-y border-slate-200/80 bg-white/70 overflow-hidden py-3.5 select-none"
      >
        <div className="animate-marquee flex items-center gap-8 text-xs font-medium tracking-wide text-slate-500">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={`${item}-${idx}`} className="inline-flex items-center gap-8 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-slate-300">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
