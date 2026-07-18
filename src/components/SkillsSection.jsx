import React, { useState } from 'react';
import { Award, BookOpen, Code2, Cpu, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { TechnicalArsenal, AcademiaDetails } from '../data/portfolioData';
import { SECTION_IDS } from '../constants/sectionIds';

export default function SkillsSection({ activeFilter, onSelectFilter }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getCategoryIcon = (category) => {
    if (category.includes("Languages")) return <Code2 size={18} className="text-signal-green" />;
    if (category.includes("Frameworks")) return <Cpu size={18} className="text-signal-yellow" />;
    return <Wrench size={18} className="text-sky-400" />;
  };

  return (
    <section id={SECTION_IDS.ARSENAL} className="py-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-6">
          <div>
            <div className="flex items-center gap-2 text-signal-green font-mono text-xs mb-2">
              <span className="w-2 h-2 rounded-full bg-signal-green"></span>
              <span>SECTION 03 // SYSTEMS CAPABILITY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              TECHNICAL ARSENAL<span className="text-signal-green">.</span>
            </h2>
          </div>
          <p className="text-fog font-mono text-xs max-w-sm text-right hidden sm:block">
            // Bento grid glass chips. Hover or focus any chip to reveal real production context.
          </p>
        </div>

        {/* Live Context Banner: shows the experience string of hovered or focused skill */}
        <div className="mb-12 glass-panel p-5 border-signal-green/30 bg-signal-green/[0.03] transition-all duration-300 min-h-[70px] flex items-center justify-between font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-signal-yellow">
              <Sparkles size={16} />
            </span>
            <div>
              <span className="text-panel-text/70 block text-[11px] uppercase tracking-wider">LIVE TELEMETRY CONTEXT</span>
              <span className="text-white font-semibold">
                {hoveredSkill ? hoveredSkill.context : "> HOVER OR FOCUS A SKILL CHIP TO READ FIELD EXPERIENCE..."}
              </span>
            </div>
          </div>
          {hoveredSkill && (
            <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-signal-green/20 text-signal-green text-xs font-bold border border-signal-green/30">
              {hoveredSkill.level}
            </span>
          )}
        </div>

        {/* Bento Grid: Categories & Glass Chips */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TechnicalArsenal.map((group, groupIdx) => (
            <div
              key={group.category}
              className="glass-panel p-6 sm:p-8 border-white/15 hover:border-white/25 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              style={{ animationDelay: `${groupIdx * 150}ms` }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(group.category)}
                    <h3 className="font-display text-lg font-bold text-white">{group.category}</h3>
                  </div>
                  <span className="text-xs text-panel-text/70">[{group.skills.length} TOKENS]</span>
                </div>

                {/* Chips List (semantic ul > li with keyboard focus and aria-describedby) */}
                <ul className="flex flex-wrap gap-3" aria-label={`${group.category} skills`}>
                  {group.skills.map((skill, skillIdx) => {
                    const descId = `desc-${group.category.replace(/\s+/g, '-')}-${skill.name.replace(/\s+/g, '-')}`;
                    const isFiltered = activeFilter === skill.name;
                    return (
                      <li key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(groupIdx * 5 + skillIdx) * 50}ms` }}>
                        <button
                          type="button"
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          onFocus={() => setHoveredSkill(skill)}
                          onBlur={() => setHoveredSkill(null)}
                          onClick={() => onSelectFilter(isFiltered ? null : skill.name)}
                          aria-describedby={descId}
                          aria-pressed={isFiltered}
                          className={`glass-chip cursor-pointer flex items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-signal-yellow transform hover:-translate-y-1 focus-visible:-translate-y-1 transition-all duration-300 ${isFiltered
                              ? 'bg-signal-yellow text-void font-bold border-signal-yellow shadow-[0_0_15px_rgba(246,230,66,0.5)]'
                              : hoveredSkill?.name === skill.name
                                ? 'bg-white/15 border-signal-green text-white shadow-[0_0_15px_rgba(57,255,136,0.25)]'
                                : 'text-panel-text hover:text-white'
                            }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-signal-green"></span>
                          <span>{skill.name}</span>
                        </button>

                        {/* Visually hidden description node for screen readers */}
                        <span id={descId} className="sr-only">
                          {skill.context}. Proficiency level: {skill.level}.
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[11px] text-panel-text/60 flex items-center justify-between">
                <span>STATUS: ACTIVE</span>
                <span className="text-signal-green">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* ACADEMIA CARD: Clean, minimal grounding panel */}
        <div className="glass-panel p-8 sm:p-12 border-white/20 relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-black/60 shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BookOpen size={180} className="text-white" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2.5 font-mono text-xs text-signal-yellow mb-4">
              <Award size={16} />
              <span>ACADEMIC FOUNDATION // GROUNDING</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2">
              {AcademiaDetails.institution}
            </h3>
            <p className="font-mono text-base text-signal-green mb-6">
              &gt; {AcademiaDetails.degree} • <span className="text-white font-bold">[{AcademiaDetails.status}]</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {AcademiaDetails.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-sans text-sm text-panel-text">
                  <CheckCircle size={16} className="text-signal-green mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-xs text-panel-text/80 flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-white/10">
              <span>PRIMARY FOCUS: <span className="text-white">{AcademiaDetails.focus}</span></span>
              <span>•</span>
              <span>LOCATION: <span className="text-white">Ioannina/Thessaloniki, Greece</span></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
