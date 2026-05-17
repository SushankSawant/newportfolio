import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.scss';

const highlights = [
  { value: '1+', label: 'Year Experience' },
  { value: '3+', label: 'Enterprise Projects' },
  { value: '10+', label: 'Technologies' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const anim = {
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
  };

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.p className="section-label" {...anim} transition={{ duration: 0.6 }}>
          About Me
        </motion.p>

        <div className={styles.grid}>
          <div className={styles.left}>
            <motion.h2 className="section-title" {...anim} transition={{ duration: 0.6, delay: 0.1 }}>
              Building interfaces<br />that <em className={styles.em}>actually</em> work.
            </motion.h2>

            <motion.p className={styles.bio} {...anim} transition={{ duration: 0.6, delay: 0.2 }}>
              I'm a Front-End Developer based in Mumbai with hands-on experience building complex web
              applications — real-time dashboards, map-based interfaces, and enterprise logistics systems.
            </motion.p>
            <motion.p className={styles.bio} {...anim} transition={{ duration: 0.6, delay: 0.3 }}>
              I specialize in React.js and TypeScript, with a strong focus on creating scalable, reusable
              component architectures and optimizing performance. I love analyzing existing codebases and
              making them better without breaking what already works.
            </motion.p>

            <motion.div className={styles.tags} {...anim} transition={{ duration: 0.6, delay: 0.4 }}>
              {['React.js', 'TypeScript', 'SCSS', 'WebSocket', 'Chart.js', 'Google Maps API'].map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </motion.div>
          </div>

          <motion.div className={styles.right} {...anim} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className={styles.card}>
              <div className={styles.cardDecor} />
              {highlights.map((h, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statVal}>{h.value}</span>
                  <span className={styles.statLabel}>{h.label}</span>
                </div>
              ))}
              <div className={styles.divider} />
              <div className={styles.currentRole}>
                <span className={styles.roleDot} />
                <div>
                  <p className={styles.roleTitle}>Front-End Developer</p>
                  <p className={styles.roleCompany}>Ease My AI · Mumbai</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
