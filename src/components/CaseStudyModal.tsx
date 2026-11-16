import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!study) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [study, onClose]);

  return (
    <AnimatePresence>
      {study && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-[#1D4ED8] font-semibold">{study.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.categoryLabel}</span>
                </div>
                <h3
                  id="case-study-modal-title"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 text-balance"
                >
                  {study.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study details"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 py-4 px-5 bg-[#F8F9FB] border border-slate-200/80 rounded-xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500">{study.metricUnit}</div>
                <div className="mt-1 font-mono-tabular text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
                  <span className="text-slate-500">{study.beforeMetric}</span>
                  <ArrowRight className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
                  <span className="text-[#1D4ED8]">{study.afterMetric}</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 max-w-xs leading-relaxed">
                {study.outcome}
              </div>
            </div>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700">
              <div>
                <h4 className="font-display text-sm font-semibold text-slate-900">
                  Operational Challenge
                </h4>
                <p className="mt-1.5 text-slate-600">{study.challenge}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <h4 className="font-display text-sm font-semibold text-slate-900">
                  Execution & Strategic Interventions
                </h4>
                <ul className="mt-2.5 space-y-2.5">
                  {study.strategy.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="font-mono-tabular text-xs font-medium text-[#1D4ED8] pt-0.5 shrink-0">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800 mr-2">Frameworks & Tools:</span>
                  <span>{study.tools.join(' · ')}</span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1D4ED8] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Close Brief
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
