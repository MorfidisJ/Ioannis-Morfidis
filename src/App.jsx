import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LiquidBackground from './components/LiquidBackground';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeFilter, setActiveFilter] = useState(null);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = ['hero', 'archive', 'arsenal', 'terminal'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
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
      const archiveEl = document.getElementById('archive');
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
        <HeroSection activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />
        <ProjectsSection activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />
        <SkillsSection activeFilter={activeFilter} onSelectFilter={handleSelectFilter} />
        <ContactSection />
      </main>

      {/* Terminal Sign-off Footer */}
      <Footer />
    </div>
  );
}
