import { personal } from '../../data/resume';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.copy}>
            Designed & built by <span>{personal.name}</span>
          </p>
          <p className={styles.stack}>
            React · TypeScript · SCSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
