import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactSection } from './components/ImpactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import { PROFILE } from './data/portfolioData';

const SECTION_IDS = ['overview', 'impact', 'experience', 'capabilities', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-slate-900">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        <main className="flex-1">
          <HeroSection onNavigate={handleNavigate} />
          <ImpactSection />
          <ExperienceSection />
          <CapabilitiesSection />
          <ContactSection />
        </main>

        <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800/80 py-7">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="font-semibold text-slate-200">{PROFILE.name}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.headlineTitle}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.location}</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.cvPdfPath}
                download="Supriya_Singh_WFM_CV.pdf"
                className="hover:text-white transition-colors"
              >
                Resume PDF
              </a>
              <button
                type="button"
                onClick={() => handleNavigate('overview')}
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
