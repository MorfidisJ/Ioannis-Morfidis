import React from 'react';
import { ExternalLink, ArrowUpRight, Filter } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ArchiveProjects } from '../data/portfolioData';
import { SECTION_IDS } from '../constants/sectionIds';

export default function ProjectsSection({ activeFilter, onSelectFilter }) {

  const filteredProjects = activeFilter
    ? ArchiveProjects.filter(project => 
        project.stack.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase()))
      )
    : ArchiveProjects;

  return (
    <section id={SECTION_IDS.ARCHIVE} className="py-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6 gap-6">
          <div>
            <div className="flex items-center gap-2 text-signal-green font-mono text-xs mb-2">
              <span className="w-2 h-2 rounded-full bg-signal-green"></span>
              <span>SECTION 02 // SELECTED WORKS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              THE ARCHIVE<span className="text-signal-yellow">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {activeFilter && (
              <div className="flex items-center gap-2 font-mono text-xs bg-signal-yellow/10 border border-signal-yellow/30 text-signal-yellow px-3 py-1.5 rounded-lg">
                <Filter size={13} />
                <span>SHOWING: [{activeFilter}] ({filteredProjects.length})</span>
                <button 
                  onClick={() => onSelectFilter(null)}
                  className="ml-2 underline text-white hover:text-signal-yellow focus-visible:outline-2 focus-visible:outline-signal-yellow"
                >
                  CLEAR
                </button>
              </div>
            )}
            <p className="text-fog font-mono text-xs max-w-xs text-right hidden sm:block">
              // Cinematic full-bleed treatments. Hover or focus to trigger full chromatic burst.
            </p>
          </div>
        </div>

        {/* Layout: Main vertical scroll + Slim Side Project-Index Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start relative">
          
          {/* Slim Project-Index Rail (Scroll-Spy style jump links) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-32">
            <div className="glass-panel p-5 border-white/10">
              <div className="font-mono text-xs text-fog/70 mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>INDEX_RAIL</span>
                <span className="text-signal-green">4 ITEMS</span>
              </div>
              
              <ul className="space-y-2 font-mono text-xs" aria-label="Project Index Navigation">
                {ArchiveProjects.map((proj) => {
                  const isMatch = activeFilter ? proj.stack.includes(activeFilter) : true;
                  return (
                    <li key={proj.id}>
                      <a
                        href={`#project-${proj.id}`}
                        className={`flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 group ${
                          isMatch 
                            ? 'text-fog hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10' 
                            : 'text-fog/30 opacity-50'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-signal-green font-bold">{proj.id}</span>
                          <span className="group-hover:translate-x-1 transition-transform">{proj.title}</span>
                        </span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-signal-yellow transition-opacity" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-fog/60">
                <span className="text-signal-yellow">PRO TIP:</span> Use Tab key to focus cards and reveal chromatic state.
              </div>
            </div>
          </div>

          {/* Main Vertical Scroll Cards */}
          <div className="lg:col-span-9 space-y-16 sm:space-y-24">
            {filteredProjects.length === 0 ? (
              <div className="glass-panel p-12 text-center my-12 border-white/15 font-mono">
                <p className="text-lg text-white mb-2">&gt; NO_PROJECTS_FOUND FOR FILTER: "{activeFilter}"</p>
                <p className="text-sm text-fog mb-6">Reset filter to view all archive entries.</p>
                <button
                  onClick={() => onSelectFilter(null)}
                  className="px-6 py-2.5 rounded-lg bg-signal-yellow text-void font-bold text-sm hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-signal-yellow"
                >
                  RESET_FILTER
                </button>
              </div>
            ) : (
              filteredProjects.map((project) => {
                return (
                  <article
                    key={project.id}
                    id={`project-${project.id}`}
                    className="group relative rounded-3xl overflow-hidden border border-white/15 hover:border-signal-yellow/50 focus-within:border-signal-yellow/50 transition-all duration-700 bg-void/90 shadow-[0_15px_50px_rgba(0,0,0,0.8)] scroll-mt-32"
                    tabIndex={0}
                    aria-labelledby={`title-${project.id}`}
                  >
                    {/* Background Full-Bleed Simulated Image / Cinematic Container */}
                    {/* Starts muted (grayscale/saturate-50) and bursts to full saturation and brightness on hover/focus */}
                    <div className="relative min-h-[480px] lg:min-h-[560px] w-full p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
                      
                      {/* Atmospheric background gradient theme */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-30 sm:grayscale sm:saturate-50 sm:opacity-40 sm:contrast-75 group-hover:grayscale-0 group-hover:saturate-100 group-hover:opacity-100 group-hover:contrast-100 group-focus:grayscale-0 group-focus:saturate-100 group-focus:opacity-100 transition-all duration-500 ease-out will-change-[filter,opacity]`} />
                      
                      {/* Cyberpunk grid overlay */}
                      <div 
                        className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700"
                        style={{
                          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                                            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px'
                        }}
                      />

                      {/* Top Bar inside Card: Project Number & Metrics Badge */}
                      <div className="relative z-10 flex items-center justify-between w-full font-mono">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white/40 group-hover:text-white transition-colors duration-500 font-display">
                          // {project.id}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-black/60 backdrop-blur-md border border-white/15 text-signal-green font-semibold shadow-lg">
                          {project.metrics}
                        </span>
                      </div>

                      {/* Bottom-Left Glass Info Card */}
                      <div className="relative z-10 max-w-2xl mt-auto">
                        <div className="glass-panel p-6 sm:p-8 border-white/20 group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
                          
                          {/* Role & Year */}
                          <div className="flex items-center gap-3 font-mono text-xs text-signal-green mb-2">
                            <span>{project.role}</span>
                            <span>•</span>
                            <span className="text-fog">{project.year}</span>
                          </div>

                          {/* Title & Subtitle */}
                          <h3 id={`title-${project.id}`} className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-signal-yellow transition-colors">
                            {project.title}
                          </h3>
                          <p className="font-mono text-xs sm:text-sm text-fog/90 mb-4 pb-3 border-b border-white/10">
                            {project.subtitle}
                          </p>

                          {/* Description */}
                          <p className="font-sans text-sm sm:text-base text-panel-text leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Stack Chips */}
                          <div className="flex flex-wrap items-center gap-2 mb-6">
                            {project.stack.map(tech => {
                              const isFiltered = activeFilter === tech;
                              return (
                                <button
                                  key={tech}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectFilter(isFiltered ? null : tech);
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      onSelectFilter(isFiltered ? null : tech);
                                    }
                                  }}
                                  aria-label={`Filter by ${tech}`}
                                  className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow ${
                                    isFiltered
                                      ? 'bg-signal-yellow text-void font-bold'
                                      : 'bg-white/5 hover:bg-white/15 text-panel-text hover:text-white border border-white/10'
                                  }`}
                                >
                                  {tech}
                                </button>
                              );
                            })}
                          </div>

                          {/* Action Links */}
                          <div className="flex items-center gap-4 pt-2 border-t border-white/10 font-mono text-xs sm:text-sm">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Launch live preview for ${project.title}`}
                              className="inline-flex items-center gap-2 text-white hover:text-signal-yellow font-bold py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
                            >
                              <span>&gt; LAUNCH_LIVE</span>
                              <ExternalLink size={15} />
                            </a>

                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View source code for ${project.title}`}
                              className="inline-flex items-center gap-2 text-fog hover:text-white py-2 px-4 rounded-xl hover:bg-white/5 transition-all focus-visible:outline-2 focus-visible:outline-signal-yellow"
                            >
                              <GithubIcon size={15} />
                              <span>SOURCE</span>
                            </a>
                          </div>

                        </div>
                      </div>

                    </div>
                  </article>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
