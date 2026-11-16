import { useState, FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'draft' | null>(null);
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [topic, setTopic] = useState('Workforce Leadership Opportunity');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [draftReady, setDraftReady] = useState(false);

  const handleCopy = async (value: string, field: 'email' | 'phone' | 'draft') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2200);
    } catch {
      setCopiedField(null);
    }
  };

  const buildFormattedBody = () => {
    return [
      `Hi Supriya,`,
      '',
      message.trim(),
      '',
      '---',
      `From: ${name.trim()}`,
      organization.trim() ? `Organization: ${organization.trim()}` : null,
      `Topic: ${topic}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFormError('Please enter your name and a brief message before composing.');
      return;
    }
    setFormError(null);
    setDraftReady(true);

    const subject = encodeURIComponent(`${topic} — ${name.trim()}`);
    const body = encodeURIComponent(buildFormattedBody());
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#0F172A] text-slate-100 py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.02em] text-blue-400">
              Connect &amp; Collaborate
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Open to strategic workforce &amp; resource leadership conversations.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-[54ch] tracking-[0.01em]">
              Whether you are exploring senior WFM leadership, enterprise bench transformation, or advisory collaboration, reach out directly or download the full CV below.
            </p>

            <div className="mt-8 space-y-4 border-t border-slate-800 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div className="min-w-0">
                  <div className="text-xs text-slate-400">Email</div>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="mt-0.5 inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white hover:text-blue-300 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div>
                  <div className="text-xs text-slate-400">Direct Phone</div>
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="mt-0.5 inline-flex items-center gap-2 font-mono-tabular text-sm sm:text-base font-medium text-white hover:text-blue-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>{PROFILE.phone}</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.cvPdfPath}
                  download="Supriya_Singh_WFM_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-white">
                Compose a Direct Inquiry
              </h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Prepares a structured email directly to {PROFILE.email} or copies your brief for LinkedIn messaging.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950/70 border border-slate-700/80 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Company or Firm"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-950/70 border border-slate-700/80 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Conversation Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-950/70 border border-slate-700/80 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Workforce Leadership Opportunity">
                      Workforce Leadership Opportunity
                    </option>
                    <option value="Resource Planning & Bench Strategy">
                      Resource Planning &amp; Bench Strategy
                    </option>
                    <option value="Speaking / Executive Network">
                      Speaking / Executive Network
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share context on the role, team scale, or conversation you have in mind..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-950/70 border border-slate-700/80 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 resize-y"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-xs font-medium text-amber-300">
                    {formError}
                  </p>
                )}

                {draftReady && !formError && (
                  <p role="status" className="text-xs text-blue-300">
                    Email draft opened in your mail client. You can also copy the formatted message below.
                  </p>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-blue-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Open Email Draft</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!name.trim() || !message.trim()) {
                        setFormError('Please enter your name and message before copying.');
                        return;
                      }
                      setFormError(null);
                      handleCopy(buildFormattedBody(), 'draft');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copiedField === 'draft' ? (
                      <>
                        <Check className="w-4 h-4 text-blue-400" aria-hidden="true" />
                        <span>Brief Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>Copy Formatted Brief</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
