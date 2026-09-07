import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';

const CustomCursor = lazy(() =>
  import('./components/CustomCursor').then((m) => ({ default: m.CustomCursor }))
);
const AboutSection = lazy(() =>
  import('./sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const SkillsSection = lazy(() =>
  import('./sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const ProjectsSection = lazy(() =>
  import('./sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const ExperienceSection = lazy(() =>
  import('./sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
);
const CertificatesSection = lazy(() =>
  import('./sections/CertificatesSection').then((m) => ({ default: m.CertificatesSection }))
);
const ContactSection = lazy(() =>
  import('./sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const enableCursor = () => setShowCursor(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(enableCursor, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(enableCursor, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-10% 0px -40% 0px' }
    );

    const observe = () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    };

    observe();
    // Re-observe after lazy sections mount
    const timer = setTimeout(observe, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {showCursor && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}
      <Navigation activeSection={activeSection} />

      <main className="relative">
        <HeroSection />
        <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
          <div className="content-auto">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificatesSection />
            <ContactSection />
            <Footer />
          </div>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
