import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Menu, X, ShieldCheck } from 'lucide-react';
import { TerminalSystemInfo } from '../data/portfolioData';
import { SECTION_IDS } from '../constants/sectionIds';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Focus first element on open
    const firstBtn = drawerRef.current?.querySelector('a[href], button');
    firstBtn?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: SECTION_IDS.HERO, label: '01 // HERO', href: `#${SECTION_IDS.HERO}` },
    { id: SECTION_IDS.ARCHIVE, label: '02 // ARCHIVE', href: `#${SECTION_IDS.ARCHIVE}` },
    { id: SECTION_IDS.ARSENAL, label: '03 // ARSENAL', href: `#${SECTION_IDS.ARSENAL}` },
    { id: SECTION_IDS.RESUME, label: '04 // DOSSIER', href: `#${SECTION_IDS.RESUME}` },
    { id: SECTION_IDS.SCHEDULE, label: '05 // SCHEDULE', href: `#${SECTION_IDS.SCHEDULE}` },
    { id: SECTION_IDS.TERMINAL, label: '06 // TERMINAL', href: `#${SECTION_IDS.TERMINAL}` }
  ];

  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-void/80 backdrop-blur-xl border-b border-glass-border py-3 shadow-glass' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo / Terminal status */}
          <a
            href={`#${SECTION_IDS.HERO}`}
            onClick={(e) => handleLinkClick(e, `#${SECTION_IDS.HERO}`, SECTION_IDS.HERO)}
            className="flex items-center gap-2.5 font-mono text-sm tracking-tighter text-white hover:text-signal-yellow transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-signal-yellow rounded-lg px-2 py-1 -ml-2 group"
            aria-label="Ioannis Morfidis Home"
          >
            <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-signal-green group-hover:border-signal-yellow/50 transition-colors">
              <Terminal size={16} />
            </span>
            <span className="font-bold tracking-wider">MORFIDIS<span className="text-signal-green">.OS</span></span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-signal-green/10 text-signal-green px-2 py-0.5 rounded-full border border-signal-green/20">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse"></span>
              {TerminalSystemInfo.uptime.split(' // ')[0]}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href, item.id)}
                  className={`font-mono text-xs px-3.5 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-signal-yellow bg-white/5 border border-signal-yellow/30 font-semibold shadow-[0_0_15px_rgba(246,230,66,0.15)]' 
                      : 'text-fog hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Quick status badge / Action right */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-[11px] font-mono text-fog/70 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02]">
              <ShieldCheck size={13} className="text-signal-green" />
              <span>WCAG AA // READY</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-fog hover:text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-signal-yellow"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} className="text-signal-yellow" /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          ref={drawerRef}
          className="md:hidden bg-void/95 backdrop-blur-2xl border-b border-glass-border px-4 pt-4 pb-6 mt-3 shadow-glass animate-fade-in"
          role="dialog"
          aria-label="Mobile Navigation Menu"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href, item.id)}
                  className={`font-mono text-sm px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                    isActive 
                      ? 'text-signal-yellow bg-white/10 border border-signal-yellow/30 font-semibold' 
                      : 'text-fog hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-signal-yellow"></span>}
                </a>
              );
            })}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-fog/60 px-2">
              <span>KERNEL: 6.8.0-RT</span>
              <span className="text-signal-green">SYSTEM OPTIMAL</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
