// src/components/Navigation.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';

export const Navigation = ({ activeSection }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.languages, id: 'certificates' },
    { label: t.nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  const LangToggle = ({ className = '' }) => (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 p-0.5 bg-background/40 ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 text-xs font-mono rounded-full transition-colors ${
          lang === 'en'
            ? 'bg-accent text-text'
            : 'text-text-secondary hover:text-text'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('fr')}
        className={`px-2.5 py-1 text-xs font-mono rounded-full transition-colors ${
          lang === 'fr'
            ? 'bg-accent text-text'
            : 'text-text-secondary hover:text-text'
        }`}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
    </div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="text-xl sm:text-2xl font-cabinet font-bold text-text hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MEM
            </motion.a>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 xl:px-5 py-2 text-sm font-satoshi transition-colors ${
                      activeSection === item.id
                        ? 'text-text'
                        : 'text-text-secondary hover:text-text'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-accent/10 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              <LangToggle />
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <LangToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-text p-2 -mr-2"
                aria-label={isMobileOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-6 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-3xl sm:text-4xl font-cabinet font-bold transition-colors ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-text hover:text-accent'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
