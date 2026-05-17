import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/resume';
import styles from './Skills.module.scss';

const categoryColors: Record<string, string> = {
  Languages: 'var(--accent)',
  'Frameworks & Libraries': 'var(--accent-2)',
  'APIs & Integration': '#fb923c',
  'Tools & Platforms': '#4ade80',
  'Core Competencies': '#f472b6',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tech I work with
        </motion.h2>

        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
            >
              <h3
                className={styles.catTitle}
                style={{ color: categoryColors[category] }}
              >
                {category}
              </h3>
              <div className={styles.pills}>
                {items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className={styles.pill}
                    style={{ '--pill-color': categoryColors[category] } as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + ci * 0.08 + ii * 0.04 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
