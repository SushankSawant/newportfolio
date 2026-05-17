import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { personal } from '../../data/resume';
import styles from './Hero.module.scss';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } as Transition,
});

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glow2} />

      <div className="container">
        <div className={styles.content}>
          <motion.p className={styles.greeting} {...fadeUp(0.2)}>
            <span className={styles.dot} />
            Available for opportunities
          </motion.p>

          <motion.h1 className={styles.name} {...fadeUp(0.35)}>
            {personal.name}
          </motion.h1>

          <motion.div className={styles.titleRow} {...fadeUp(0.5)}>
            <span className={styles.titleBadge}>{personal.title}</span>
          </motion.div>

          <motion.p className={styles.tagline} {...fadeUp(0.6)}>
            {personal.tagline}
          </motion.p>

          <motion.div className={styles.cta} {...fadeUp(0.75)}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div className={styles.meta} {...fadeUp(0.9)}>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {personal.location}
            </span>
            <span className={styles.metaDivider}>—</span>
            <span className={styles.metaItem}>React · TypeScript · SCSS</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
