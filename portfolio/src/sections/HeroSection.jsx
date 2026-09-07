import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { AbstractShape } from '../components/AbstractShape';
import { useLanguage } from '../i18n/LanguageContext';

const profileLinks = [
  {
    icon: FiGithub,
    labelKey: 'GitHub',
    href: 'https://github.com/Mohamed20324',
  },
  {
    icon: FiLinkedin,
    labelKey: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed--elmardi/',
  },
  {
    icon: FiMail,
    labelKey: 'email',
    href: 'mailto:mohamedelmardi2003@gmail.com',
  },
];

export const HeroSection = () => {
  const { t } = useLanguage();

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 140, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 140, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-orb top-1/4 left-1/4 w-[360px] h-[360px] bg-accent/20" />
          <div
            className="hero-orb bottom-1/4 right-1/4 w-[280px] h-[280px] bg-accent/10"
            style={{ animationDelay: '2s' }}
          />
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 w-full pt-28 pb-28 sm:pt-32 sm:pb-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          <div className="space-y-7 sm:space-y-9">
            <motion.div
              key={`badge-${t.hero.available}`}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent/5 border border-accent/10 rounded-full"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-accent tracking-[0.12em] sm:tracking-[0.18em] uppercase">
                {t.hero.available}
              </span>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              <motion.p
                key={`hi-${t.hero.hi}`}
                custom={0}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-xs sm:text-sm font-mono text-text-secondary tracking-[0.2em] uppercase"
              >
                {t.hero.hi}
              </motion.p>

              <motion.h1
                custom={1}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-cabinet font-extrabold tracking-tighter leading-[0.9]"
              >
                <span className="block">Mohamed</span>
                <span className="block text-accent relative">
                  El Mardi
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.85, duration: 0.55, ease: 'easeOut' }}
                  />
                </span>
              </motion.h1>

              <motion.p
                key={`role-${t.hero.role}`}
                custom={2}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-xl lg:text-2xl font-cabinet font-medium text-text-secondary pt-2"
              >
                {t.hero.role}
              </motion.p>
            </div>

            <motion.p
              key={`bio-${t.hero.bio}`}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-text-secondary font-satoshi leading-[1.75] max-w-xl"
            >
              {t.hero.bio}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('projects')}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-text text-background font-cabinet font-bold rounded-full hover:bg-accent transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  {t.hero.viewProjects}
                  <FiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.a
                variants={fadeInUp}
                href="/Mohamed_EL_Mardi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group px-6 sm:px-8 py-3.5 sm:py-4 border border-white/10 text-text font-cabinet font-bold rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <FiDownload />
                {t.hero.downloadCv}
              </motion.a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4"
            >
              {profileLinks.map((social) => {
                const label =
                  social.labelKey === 'email' ? t.hero.email : social.labelKey;
                return (
                  <motion.a
                    key={social.labelKey}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={fadeInUp}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full border border-white/10 text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300 text-sm font-satoshi bg-background/40"
                    aria-label={label}
                  >
                    <social.icon size={16} />
                    <span>{label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="relative hidden lg:flex h-[500px] xl:h-[650px] items-center justify-center"
          >
            <AbstractShape />
            <div className="absolute inset-0 flex items-center justify-center opacity-10 shape-spin pointer-events-none">
              <div className="w-[min(560px,90%)] h-[min(560px,90%)] border border-accent/30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-70">
        <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
          {t.hero.scroll}
        </span>
        <div className="w-5 h-8 rounded-full border border-text-secondary/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
