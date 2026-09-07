// src/sections/AboutSection.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const timelineData = t.about.timeline;

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="lg:sticky lg:top-32">
              <motion.div
                className="relative inline-block mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="w-56 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl overflow-hidden mx-auto lg:mx-0">
                  <img
                    src="/Me.png"
                    alt="Mohamed El Mardi"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 border border-accent/30 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-accent/10 rounded-full blur-2xl" />
              </motion.div>

              <div className="mt-8 sm:mt-12 space-y-4 text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cabinet font-bold tracking-tighter">
                  {t.about.title} <span className="text-accent">{t.about.me}</span>
                </h2>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {t.about.bio}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

            <div className="space-y-10 sm:space-y-14 lg:space-y-20">
              {timelineData.map((item, index) => (
                <motion.div
                  key={`${item.title}-${item.year}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  <motion.div
                    className="absolute left-2.5 sm:left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
                  </motion.div>

                  <div className="glass-panel p-5 sm:p-7 lg:p-8 hover-lift">
                    <span className="inline-block px-3 sm:px-4 py-1 bg-accent/10 text-accent text-xs sm:text-sm font-mono rounded-full mb-3 sm:mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-cabinet font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-accent font-satoshi mb-2 sm:mb-3 text-sm sm:text-base">
                      {item.company}
                    </p>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
