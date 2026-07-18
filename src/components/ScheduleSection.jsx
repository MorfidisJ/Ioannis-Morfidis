import React, { useState } from 'react';
import { Calendar, Clock, ExternalLink, ShieldCheck, Terminal, ArrowRight, X, Zap, Cpu, Rocket } from 'lucide-react';
import { CalendarScheduleData, TerminalSystemInfo } from '../data/portfolioData';
import TerminalWindow from './TerminalWindow';
import { SECTION_IDS } from '../constants/sectionIds';

export default function ScheduleSection() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeModalUrl, setActiveModalUrl] = useState(null);

  const handleOpenBooking = (option) => {
    setSelectedOption(option.id);
    setActiveModalUrl(option.url);
  };

  const handleCloseModal = () => {
    setActiveModalUrl(null);
  };

  const renderBadgeIcon = (iconKey) => {
    switch (iconKey) {
      case 'zap':
        return <Zap size={13} className="shrink-0" strokeWidth={2.5} />;
      case 'cpu':
        return <Cpu size={13} className="shrink-0" strokeWidth={2.5} />;
      case 'rocket':
        return <Rocket size={13} className="shrink-0" strokeWidth={2.5} />;
      default:
        return <Terminal size={13} className="shrink-0" strokeWidth={2.5} />;
    }
  };

  return (
    <section id={SECTION_IDS.SCHEDULE} className="py-24 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/30 text-signal-green font-mono text-xs mb-4">
            <Calendar size={14} />
            <span>SECTION 05 // TEMPORAL SYNC & CALENDAR</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            THE SCHEDULE<span className="text-signal-yellow">.</span>
          </h2>
          <p className="text-fog font-sans text-sm sm:text-base max-w-xl mx-auto">
            Directly synchronize with Ioannis Morfidis&apos; real-time availability queue via Cal.com. Select your duration protocol below.
          </p>
        </div>

        {/* Terminal Window Container */}
        <TerminalWindow
          title="bash — schedule_sync.sh — interactive_booking"
          headerActions={
            <span className="text-signal-green text-[11px] hidden sm:flex items-center gap-1.5">
              <ShieldCheck size={13} />
              <span>CAL.COM // LIVE SYNC</span>
            </span>
          }
          bodyClassName="p-6 sm:p-10 font-mono text-sm sm:text-base"
          footerContent={
            <div className="flex items-center justify-between flex-wrap gap-4 text-xs text-fog/50">
              <div className="flex items-center gap-2">
                <span className="text-signal-green font-bold">{TerminalSystemInfo.prompt}</span>
                <span className="inline-block w-2 h-4 bg-signal-green animate-blink"></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse"></span>
                <span className="text-white/60">INTEGRATED WITH CAL.COM SCHEDULE PLATFORM</span>
              </div>
            </div>
          }
        >
          {/* Introductory system text */}
          <div className="text-panel-text mb-8 space-y-1 font-mono text-xs sm:text-sm">
            <p>&gt; MORFIDIS_OS {TerminalSystemInfo.version}</p>
            <p>&gt; QUERYING CAL.COM API ENDPOINTS... <span className="text-signal-green">200 OK</span></p>
            <p className="text-white font-bold">&gt; {CalendarScheduleData.status}</p>
          </div>

          {/* Meeting Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {CalendarScheduleData.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isYellowAccent = option.accent === '#F6E642';

              return (
                <div
                  key={option.id}
                  className={`flex flex-col justify-between p-6 rounded-2xl bg-black/50 border transition-all duration-300 relative group ${
                    isSelected
                      ? 'border-signal-yellow shadow-[0_0_25px_rgba(246,230,66,0.25)] bg-white/[0.04]'
                      : 'border-white/15 hover:border-white/30 hover:bg-white/[0.02]'
                  }`}
                >
                  <div>
                    {/* Top badge & Duration */}
                    <div className="flex items-center justify-between mb-4 text-xs font-mono">
                      <span 
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold ${
                          isYellowAccent
                            ? 'bg-signal-yellow/10 text-signal-yellow border border-signal-yellow/30'
                            : 'bg-signal-green/10 text-signal-green border border-signal-green/30'
                        }`}
                      >
                        {renderBadgeIcon(option.icon)}
                        <span>{option.badge}</span>
                      </span>
                      <span className="text-panel-text/70 flex items-center gap-1">
                        <Clock size={13} />
                        <span>{option.duration}</span>
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-white mb-2 font-sans tracking-tight group-hover:text-signal-yellow transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-panel-text text-xs font-sans leading-relaxed mb-6">
                      {option.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] text-panel-text/60 mb-1">
                      <span>&gt; {option.command}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Inline Modal Trigger */}
                      <button
                        type="button"
                        onClick={() => handleOpenBooking(option)}
                        aria-label={`Schedule ${option.title} inside terminal modal`}
                        className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-signal-yellow cursor-pointer ${
                          isYellowAccent
                            ? 'bg-signal-yellow text-void hover:bg-white shadow-[0_0_15px_rgba(246,230,66,0.3)]'
                            : 'bg-signal-green text-void hover:bg-signal-yellow shadow-[0_0_15px_rgba(57,255,136,0.3)]'
                        }`}
                      >
                        <span>BOOK_SLOT</span>
                        <ArrowRight size={14} />
                      </button>

                      {/* Direct New Tab Launch Button */}
                      <a
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${option.title} booking page in new tab`}
                        className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-panel-text hover:text-white border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-signal-yellow flex items-center justify-center shrink-0"
                        title="Open in new tab"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TerminalWindow>

      </div>

      {/* Interactive Cal.com Embed Modal */}
      {activeModalUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Cal.com Booking Modal"
        >
          <div className="glass-panel border-white/20 bg-void/95 w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.9)] animate-scale-up border">
            
            {/* Modal Header */}
            <div className="bg-black/80 px-6 py-4 border-b border-white/15 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-green animate-pulse"></span>
                <span className="text-white font-bold">&gt; EXECUTE: CAL.COM LIVE EMBED</span>
                <span className="hidden sm:inline text-fog/50">({activeModalUrl})</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeModalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-fog hover:text-white transition-colors text-xs border border-white/10 focus-visible:outline-2 focus-visible:outline-signal-yellow"
                >
                  <span>NEW_TAB</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label="Close booking modal"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-fog hover:text-rose-400 transition-colors border border-white/10 focus-visible:outline-2 focus-visible:outline-signal-yellow"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Iframe Content */}
            <div className="flex-1 w-full bg-void relative">
              <iframe
                key={activeModalUrl}
                src={`${activeModalUrl}?embed=true&theme=dark`}
                title="Cal.com Booking Interface"
                className="w-full h-full border-0 bg-void"
                allow="camera; microphone; autoplay; encrypted-media"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="bg-black/60 px-6 py-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-fog/60">
              <span>SECURITY: TLS 1.3 ENCRYPTED SOCKET</span>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-signal-yellow hover:underline"
              >
                [ CLOSE_TERMINAL ]
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
