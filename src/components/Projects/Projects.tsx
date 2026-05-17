import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/resume';
import styles from './Projects.module.scss';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.p className="section-label" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          Projects
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          Things I've built
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${expanded === i ? styles.active : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconRow}>
                  <div className={styles.folderIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <span className={styles.companyBadge}>{project.company}</span>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
              </div>

              <div className={styles.techRow}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.tech}>{t}</span>
                ))}
              </div>

              <button
                className={styles.expandBtn}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? 'Hide details' : 'View details'}
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  style={{ transform: expanded === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.ul
                    className={styles.bullets}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {project.bullets.map((b, bi) => (
                      <li key={bi} className={styles.bullet}>
                        <span className={styles.bulletDot}>▹</span>
                        {b}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
