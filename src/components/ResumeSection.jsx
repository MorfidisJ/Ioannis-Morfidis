import React, { useState } from 'react';
import { Terminal, FileDown, ExternalLink, Copy, Check, ShieldCheck, Sparkles, FileText, Award } from 'lucide-react';
import { ResumeData, TerminalSystemInfo } from '../data/portfolioData';

export default function ResumeSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}/Ioannis-Morfidis-Resume.pdf`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-24 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-6">
          <div>
            <div className="flex items-center gap-2 text-signal-green font-mono text-xs mb-2">
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse"></span>
              <span>SECTION 04 // CURRICULUM VITAE & CREDENTIALS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              THE DOSSIER<span className="text-signal-yellow">.</span>
            </h2>
          </div>
          <p className="text-fog font-mono text-xs max-w-md text-right hidden sm:block">
            // Verified binary artifact. Immediate direct download or inline browser preview available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Interactive Terminal Download Card */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel border-white/20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative bg-void/95 group hover:border-white/30 transition-all duration-500">
              
              {/* Window Header Chrome */}
              <div className="bg-black/60 px-5 py-3.5 border-b border-white/15 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-fog/80">dos — {ResumeData.filename} — read-only</span>
                </div>
                <div className="flex items-center gap-2 text-signal-green text-[11px]">
                  <ShieldCheck size={14} />
                  <span>SHA-256 VERIFIED</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 sm:p-8 font-mono text-sm sm:text-base space-y-6">
                
                {/* File Metadata Ribbon */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <FileText size={16} className="text-signal-yellow" />
                    <span>{ResumeData.filename}</span>
                  </div>
                  <div className="flex items-center gap-4 text-fog/80">
                    <span>SIZE: <strong className="text-white">{ResumeData.filesize}</strong></span>
                    <span>•</span>
                    <span>TYPE: <strong className="text-white">{ResumeData.filetype}</strong></span>
                  </div>
                </div>

                {/* Summary Text */}
                <div className="text-fog font-sans text-sm sm:text-base leading-relaxed border-l-2 border-signal-green pl-4 py-1">
                  {ResumeData.summary}
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                  
                  {/* Primary Download CTA */}
                  <a
                    href="/Ioannis-Morfidis-Resume.pdf"
                    download="Ioannis_Morfidis_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-signal-green hover:bg-signal-yellow text-void font-mono font-extrabold text-sm tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(57,255,136,0.4)] hover:shadow-[0_0_30px_rgba(246,230,66,0.6)] focus-visible:outline-2 focus-visible:outline-signal-yellow transform hover:-translate-y-0.5 active:translate-y-0 group/btn"
                  >
                    <FileDown size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                    <span>&gt; DOWNLOAD_RESUME.PDF</span>
                  </a>

                  {/* Secondary Preview CTA */}
                  <a
                    href="/Ioannis-Morfidis-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-sm font-bold border border-white/15 hover:border-white/30 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-signal-yellow"
                  >
                    <ExternalLink size={16} className="text-signal-yellow" />
                    <span>PREVIEW_IN_TAB</span>
                  </a>

                  {/* Copy Link Button */}
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    aria-label="Copy direct download link"
                    className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-fog hover:text-white font-mono text-xs border border-white/10 hover:border-white/20 transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
                  >
                    {copied ? <Check size={16} className="text-signal-green" /> : <Copy size={16} />}
                    <span>{copied ? 'COPIED!' : 'COPY_LINK'}</span>
                  </button>
                </div>

                {/* Terminal Footer Prompt */}
                <div className="pt-2 flex items-center gap-2 text-xs text-fog/50 font-mono">
                  <span className="text-signal-green font-bold">{TerminalSystemInfo.prompt}</span>
                  <span>cat cv_status.log</span>
                  <span className="inline-block w-2 h-4 bg-signal-green animate-blink"></span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Highlights & Credentials Bento Grid */}
          <div className="lg:col-span-5 w-full space-y-4">
            
            <div className="flex items-center justify-between pb-2 px-1 font-mono text-xs text-fog/80">
              <span className="flex items-center gap-2 text-signal-yellow">
                <Sparkles size={14} />
                <span>EXECUTIVE HIGHLIGHTS</span>
              </span>
              <span>[4 CREDENTIALS]</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {ResumeData.highlights.map((item, idx) => (
                <div 
                  key={item.label}
                  className="glass-panel p-5 border-white/15 hover:border-signal-yellow/40 transition-all duration-300 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-gradient-to-br from-white/[0.04] to-black/60 hover:-translate-y-0.5"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2 font-mono text-xs">
                    <span className="text-signal-green font-bold tracking-wider">&gt; {item.label}</span>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-fog/60 group-hover:text-signal-yellow transition-colors">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-white font-sans text-sm sm:text-base font-semibold leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-signal-green/[0.03] border border-signal-green/20 text-xs font-mono text-fog flex items-start gap-3">
              <Award size={18} className="text-signal-green shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-bold block mb-1">RECRUITER & HR NOTE</span>
                <p className="leading-relaxed text-fog/90 font-sans text-xs">
                  For background screening, official transcripts, or reference letters, initiate direct contact via section 05 or email morfidisioannis@gmail.com.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
