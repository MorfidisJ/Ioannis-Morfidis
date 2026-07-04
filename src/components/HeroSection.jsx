import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, ArrowRight, Play, CheckCircle2, FileDown } from 'lucide-react';
import { Developer } from '../data/portfolioData';

export default function HeroSection({ activeFilter, onSelectFilter }) {
  const fullStatusText = "> SYSTEM READY · CSE STUDENT · CO-FOUNDER, UNIMATES";
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [copied, setCopied] = useState(false);

  // 1-second atmospheric typing flourish that is skippable
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullStatusText.length) {
        setTypedText(fullStatusText.slice(0, index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 18); // ~900ms total

    const handleSkip = () => {
      setTypedText(fullStatusText);
      setIsTypingDone(true);
      clearInterval(interval);
    };

    window.addEventListener('keydown', handleSkip, { once: true });
    window.addEventListener('click', handleSkip, { once: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
    };
  }, []);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(Developer.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Name, Skippable Boot Strip & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1-second skippable terminal strip ABOVE the name */}
            <div className="h-6 flex items-center mb-4">
              <span className="terminal-text text-xs sm:text-sm font-mono tracking-tight flex items-center gap-1.5">
                <span>{typedText}</span>
                {!isTypingDone && <span className="inline-block w-2 h-4 bg-signal-green animate-blink"></span>}
              </span>
            </div>

            {/* Display Name: Condensed High-Contrast Grotesk, no gradient gimmick */}
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[0.95] mb-6">
              IOANNIS<br />
              MORFIDIS<span className="text-signal-green">.</span>
            </h1>

            {/* Bio & Current Focus */}
            <p className="text-fog text-base sm:text-lg max-w-xl font-sans leading-relaxed mb-8">
              {Developer.bio}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#archive"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-signal-green text-void font-mono font-bold text-sm hover:bg-signal-yellow transition-all duration-300 shadow-[0_0_20px_rgba(57,255,136,0.3)] hover:shadow-[0_0_25px_rgba(246,230,66,0.5)] focus-visible:outline-2 focus-visible:outline-signal-yellow group"
              >
                <span>&gt; EXPLORE_ARCHIVE</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-sm border border-white/10 hover:border-signal-yellow/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-signal-yellow group/cv"
              >
                <FileDown size={16} className="text-signal-yellow group-hover/cv:-translate-y-0.5 transition-transform" />
                <span>DOSSIER_CV</span>
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-sm border border-white/10 hover:border-white/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-signal-yellow"
              >
                <Terminal size={16} className="text-signal-green" />
                <span>INITIATE_CONTACT</span>
              </a>
            </div>

            {/* Active Filter notification banner if a stack token is clicked */}
            {activeFilter && (
              <div className="mt-8 p-3 rounded-xl bg-signal-yellow/10 border border-signal-yellow/30 flex items-center justify-between max-w-md animate-fade-in font-mono text-xs">
                <div className="flex items-center gap-2 text-signal-yellow font-semibold">
                  <Sparkles size={14} />
                  <span>FILTER ACTIVE: [{activeFilter}]</span>
                </div>
                <button
                  onClick={() => onSelectFilter(null)}
                  className="text-fog hover:text-white underline text-[11px] focus-visible:outline-2 focus-visible:outline-signal-yellow"
                  aria-label="Clear active stack filter"
                >
                  RESET
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Signature Live JSON Hero Block */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel p-5 sm:p-7 relative overflow-hidden group border-white/15 hover:border-white/25 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
              
              {/* Window header chrome */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-fog/70">Developer.json</span>
                </div>
                <div className="text-[11px] text-signal-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse"></span>
                  <span>LIVE_OBJECT</span>
                </div>
              </div>

              {/* Editable/Interactive JSON Code Block */}
              <div className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                <div className="text-fog">
                  <span className="text-purple-400">const</span> <span className="text-signal-yellow font-bold">Developer</span> = <span className="text-white">&#123;</span>
                </div>

                {/* status */}
                <div className="pl-6 py-0.5">
                  <span className="text-sky-300">status</span>: <span className="text-emerald-400">"{Developer.status}"</span>,
                </div>

                {/* stack array (INTERACTIVE TOKENS) */}
                <div className="pl-6 py-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span className="text-sky-300">stack</span>: <span className="text-white">[</span>
                  {Developer.stack.map((tech, index) => {
                    const isSelected = activeFilter === tech;
                    return (
                      <span key={tech} className="inline-flex items-center">
                        <button
                          type="button"
                          onClick={() => onSelectFilter(isSelected ? null : tech)}
                          aria-label={`Filter projects by ${tech}`}
                          aria-pressed={isSelected}
                          className={`px-2 py-0.5 rounded-md transition-all duration-200 cursor-pointer font-bold focus-visible:outline-2 focus-visible:outline-signal-yellow text-xs sm:text-sm ${
                            isSelected
                              ? 'bg-signal-yellow text-void shadow-[0_0_12px_rgba(246,230,66,0.6)] scale-105'
                              : 'bg-white/10 hover:bg-white/20 text-signal-green hover:text-signal-yellow border border-white/10 hover:border-signal-yellow/40'
                          }`}
                        >
                          "{tech}"
                        </button>
                        {index < Developer.stack.length - 1 && <span className="text-white mr-1">,</span>}
                      </span>
                    );
                  })}
                  <span className="text-white">],</span>
                </div>

                {/* currentFocus */}
                <div className="pl-6 py-0.5">
                  <span className="text-sky-300">currentFocus</span>: <span className="text-amber-300">"{Developer.currentFocus}"</span>,
                </div>

                {/* location */}
                <div className="pl-6 py-0.5">
                  <span className="text-sky-300">location</span>: <span className="text-emerald-400">"{Developer.location}"</span>,
                </div>

                {/* render method */}
                <div className="pl-6 py-0.5">
                  <span className="text-sky-300">render</span>: () <span className="text-purple-400">=&gt;</span> <span className="text-white">&lt;</span><span className="text-rose-400">Experience</span> <span className="text-white">/&gt;</span>
                </div>

                <div className="text-white">&#125;</div>
              </div>

              {/* Helper instruction tooltip */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-fog/60">
                <span className="flex items-center gap-1.5">
                  <Play size={12} className="text-signal-yellow" />
                  <span>CLICK_TOKENS_TO_FILTER</span>
                </span>
                <span className="text-[11px] text-signal-green/80">INTERACTIVE_STATE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
