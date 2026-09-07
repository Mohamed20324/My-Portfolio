// src/sections/ContactSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${t.contact.mailSubject} ${formState.name || 'visitor'}`
    );
    const body = encodeURIComponent(
      `${t.contact.mailHello}\n\n${formState.message}\n\n${t.contact.mailRegards}\n${formState.name}\n${formState.email}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamedelmardi2003@gmail.com&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:mohamedelmardi2003@gmail.com?subject=${subject}&body=${body}`;

    // Do not pass noopener in windowFeatures — it makes open() return null
    // even when the tab opens, which would always trigger the mailto fallback.
    const popup = window.open(gmailUrl, '_blank');
    if (popup) {
      try {
        popup.opener = null;
      } catch {
        // Ignore cross-origin/security errors
      }
    } else {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cabinet font-bold tracking-tighter mb-4 sm:mb-6">
            {t.contact.title}{' '}
            <span className="text-accent">{t.contact.accent}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-6">
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                {t.contact.intro}
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: FiMail,
                  label: t.contact.email,
                  value: 'mohamedelmardi2003@gmail.com',
                  href: 'mailto:mohamedelmardi2003@gmail.com',
                },
                {
                  icon: FiPhone,
                  label: t.contact.phone,
                  value: '+212 777 322 339',
                  href: 'tel:+212777322339',
                },
                {
                  icon: FiMapPin,
                  label: t.contact.location,
                  value: t.contact.locationValue,
                  href: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-text-secondary">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-satoshi hover:text-accent transition-colors break-all text-sm sm:text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-satoshi text-sm sm:text-base">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-mono">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-surface border border-white/5 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-text focus:border-accent outline-none transition-all duration-300 text-base"
                      placeholder={t.contact.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-mono">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-surface border border-white/5 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-text focus:border-accent outline-none transition-all duration-300 text-base"
                      placeholder={t.contact.emailPlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary font-mono">
                    {t.contact.message}
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full bg-surface border border-white/5 rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-text focus:border-accent outline-none transition-all duration-300 resize-none text-base"
                    placeholder={t.contact.messagePlaceholder}
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full px-8 py-4 bg-accent text-text font-cabinet font-bold rounded-full hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>{t.contact.send}</span>
                <FiSend className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
