// src/sections/ProjectsSection.jsx
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';

const projectMeta = [
  {
    tech: ['Spring Boot', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS', 'JWT'],
    color: '#4F8CFF',
    github: 'https://github.com/Mohamed20324',
  },
  {
    tech: ['Spring Boot', 'React', 'MySQL', 'Hibernate', 'Tailwind CSS'],
    color: '#10B981',
    github: 'https://github.com/Mohamed20324',
  },
  {
    tech: ['Python', 'Machine Learning', 'Jupyter'],
    color: '#F59E0B',
    github: 'https://github.com/Mohamed20324',
  },
  {
    tech: ['Spring', 'React', 'MySQL', 'Bootstrap', 'Tailwind CSS'],
    color: '#8B5CF6',
    github: 'https://github.com/Mohamed20324',
  },
];

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = t.projects.items.map((item, index) => ({
    ...item,
    ...projectMeta[index],
  }));

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cabinet font-bold tracking-tighter mb-4 sm:mb-6">
            {t.projects.title}{' '}
            <span className="text-accent">{t.projects.accent}</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel overflow-hidden flex flex-col h-full hover:border-accent/30 transition-colors duration-300"
            >
              <div
                className="h-36 sm:h-44 flex items-center justify-center relative"
                style={{ backgroundColor: `${project.color}12` }}
              >
                <span
                  className="text-5xl sm:text-6xl font-cabinet font-bold"
                  style={{ color: project.color }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-5 sm:p-7 lg:p-8 flex flex-col flex-1 gap-4 sm:gap-5">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-cabinet font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((label) => (
                    <span
                      key={label}
                      className="px-3 py-1 text-xs font-mono text-text-secondary border border-white/10 rounded-full"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto self-start px-5 py-3 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-text transition-all duration-300 text-sm font-satoshi"
                >
                  <FiGithub />
                  {t.projects.viewGithub}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
