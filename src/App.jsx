import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LiquidBackground from './components/LiquidBackground';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ResumeSection from './components/ResumeSection';
import ScheduleSection from './components/ScheduleSection';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { SECTION_IDS, SECTION_LIST } from './constants/sectionIds';

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS.HERO);
  const [activeFilter, setActiveFilter] = useState(null);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = SECTION_LIST;
    
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35;
      let currentSection = null;
      let minDistance = Infinity;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
            currentSection = sectionId;
            break;
          }
          const distance = Math.min(Math.abs(rect.top - triggerPoint), Math.abs(rect.bottom - triggerPoint));
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = sectionId;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFilter = (filterToken) => {
    setActiveFilter(filterToken);
    // If selecting a filter from hero, automatically scroll to Archive smoothly
    if (filterToken) {
      const archiveEl = document.getElementById(SECTION_IDS.ARCHIVE);
      if (archiveEl) {
        archiveEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative text-fog selection:bg-signal-yellow/30 selection:text-white">
      {/* Fixed -z-10 Animated Liquid Background with reduced-motion static fallback */}
      <LiquidBackground />

      {/* Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <ErrorBoundary>
          <HeroSection activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />
          <ProjectsSection activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />
          <SkillsSection activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />
          <ResumeSection />
          <ScheduleSection />
          <ContactSection />
        </ErrorBoundary>
      </main>

      {/* Terminal Sign-off Footer */}
      <Footer />
    </div>
  );
}
