// src/sections/CertificatesSection.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const colors = ['#4F8CFF', '#10B981', '#F59E0B'];

export const CertificatesSection = () => {
  const { t } = useLanguage();
  const languages = t.languages.items.map((item, index) => ({
    ...item,
    color: colors[index],
  }));

  return (
    <section id="certificates" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cabinet font-bold tracking-tighter mb-4 sm:mb-6">
            {t.languages.title}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            {t.languages.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="glass-panel p-6 sm:p-8 h-full hover:border-accent/30 transition-all duration-500">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mb-5 sm:mb-6"
                  style={{ backgroundColor: `${lang.color}20` }}
                />
                <h3 className="text-xl sm:text-2xl font-cabinet font-bold mb-2">
                  {lang.title}
                </h3>
                <p className="text-accent text-sm mb-2">{lang.level}</p>
                <p className="text-text-secondary text-sm font-mono">{lang.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
