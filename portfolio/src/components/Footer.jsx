// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Mohamed20324', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohamed--elmardi', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:mohamedelmardi2003@gmail.com', label: 'Email' },
  { icon: FiDownload, href: '/Mohamed_EL_Mardi_CV.pdf', label: 'CV' },
];

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-cabinet font-bold mb-2">
              {t.footer.together}
            </h3>
            <p className="text-text-secondary">
              © {new Date().getFullYear()} Mohamed El Mardi. {t.footer.rights}
            </p>
          </motion.div>

          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.2, color: '#4F8CFF' }}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-text transition-all duration-300"
            aria-label={t.footer.backToTop}
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
