// src/sections/SkillsSection.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiC,
  SiDocker,
  SiGithub,
  SiLinux,
  SiUml,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiApachehadoop,
  SiApachespark,
  SiApachecassandra,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { useLanguage } from '../i18n/LanguageContext';

const skillGroups = [
  {
    titleKey: 'Development',
    skills: [
      { name: 'Java', icon: DiJava, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Git & GitHub', icon: SiGithub, color: '#F05032' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'UML', icon: SiUml, color: '#FABD14' },
    ],
  },
  {
    titleKey: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Cassandra', icon: SiApachecassandra, color: '#E52D32' },
    ],
  },
  {
    titleKey: 'Data Science & Machine Learning',
    skills: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      { name: 'Hadoop', icon: SiApachehadoop, color: '#66CCFF' },
      { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C' },
    ],
  },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 40 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.45,
      delay: Math.min(index * 0.04, 0.35),
      type: 'spring',
      stiffness: 200,
    }}
    whileHover={{
      scale: 1.06,
      y: -6,
      transition: { duration: 0.25 },
    }}
    className="group relative"
  >
    <div className="glass-panel p-4 sm:p-6 text-center hover:border-accent/30 transition-all duration-500 h-full flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <skill.icon
          className="text-3xl sm:text-4xl mx-auto transition-all duration-300 group-hover:scale-110"
          style={{ color: skill.color }}
        />
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-cabinet font-bold text-xs sm:text-sm leading-tight">
        {skill.name}
      </h3>
    </div>
  </motion.div>
);

export const SkillsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,140,255,0.05),transparent_50%)]" />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cabinet font-bold tracking-tighter mb-4 sm:mb-6">
            {t.skills.title}{' '}
            <span className="text-accent">{t.skills.accent}</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-14">
          {skillGroups.map((group) => (
            <div key={group.titleKey}>
              <h3 className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-accent mb-4 sm:mb-6">
                {t.skills.groups[group.titleKey] || group.titleKey}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {group.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
