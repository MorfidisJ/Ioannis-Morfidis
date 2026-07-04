import React from 'react';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { Developer, TerminalSystemInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-glass-border bg-void/90 relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10 font-mono text-xs sm:text-sm">
          
          {/* Sign-off text */}
          <div className="flex items-center gap-2 text-white">
            <span className="p-1.5 rounded bg-white/5 border border-white/10 text-signal-green">
              <Terminal size={14} />
            </span>
            <span className="font-bold">&gt; SESSION_END //</span>
            <span className="text-signal-green">{Developer.name}</span>
            <span className="text-fog/60">// 2026</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={Developer.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-signal-yellow text-fog hover:text-signal-yellow transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={Developer.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-signal-yellow text-fog hover:text-signal-yellow transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={Developer.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-signal-yellow text-fog hover:text-signal-yellow transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
            >
              <TwitterIcon size={16} />
            </a>
            <a
              href={`mailto:${Developer.socials.email}`}
              aria-label="Send Direct Email"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-signal-yellow text-fog hover:text-signal-yellow transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 hover:border-white/20 transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow group"
          >
            <span>&gt; RETURN_TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-signal-green" />
          </button>

        </div>

        {/* System specs info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-fog/50 gap-2">
          <span>BUILT WITH REACT.JS // TAILWIND CSS V3.4 // "TERMINAL GLASS" V2</span>
          <span>{TerminalSystemInfo.os} // COMPLIANT WITH WCAG AA & REDUCED-MOTION</span>
        </div>

      </div>
    </footer>
  );
}
