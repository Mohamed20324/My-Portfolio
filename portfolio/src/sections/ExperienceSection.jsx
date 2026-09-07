// src/sections/ExperienceSection.jsx
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export const ExperienceSection = () => {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(79,140,255,0.03),transparent_50%)]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cabinet font-bold tracking-tighter mb-4 sm:mb-6">
            {t.experience.title}{' '}
            <span className="text-accent">{t.experience.accent}</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto lg:max-w-none">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-10 sm:space-y-16 lg:space-y-24">
            {experiences.map((exp) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative lg:flex lg:items-center"
              >
                <div className="hidden lg:block w-[calc(50%-2rem)] text-right pr-16">
                  <div className="glass-panel p-6 xl:p-8 inline-block text-left hover-lift w-full max-w-xl ml-auto">
                    <ExperienceCard exp={exp} />
                  </div>
                </div>

                <div className="absolute left-4 sm:left-6 lg:static lg:flex-shrink-0 -translate-x-1/2 lg:translate-x-0 top-6 lg:top-auto">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-background rounded-full" />
                  </div>
                </div>

                <div className="pl-12 sm:pl-16 lg:hidden">
                  <div className="glass-panel p-5 sm:p-7">
                    <ExperienceCard exp={exp} />
                  </div>
                </div>

                <div className="hidden lg:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <>
    <span className="inline-block px-3 sm:px-4 py-1 bg-accent/10 text-accent text-xs sm:text-sm font-mono rounded-full mb-3 sm:mb-4">
      {exp.period}
    </span>
    <h3 className="text-xl sm:text-2xl font-cabinet font-bold mb-2">{exp.role}</h3>
    <p className="text-accent font-satoshi mb-3 sm:mb-4">{exp.company}</p>
    <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
      {exp.description}
    </p>
    <ul className="space-y-2">
      {exp.achievements.map((achievement) => (
        <li
          key={achievement}
          className="text-sm text-text-secondary flex items-start gap-2 text-left"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-1.5" />
          {achievement}
        </li>
      ))}
    </ul>
  </>
);
