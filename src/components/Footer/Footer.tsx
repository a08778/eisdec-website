import { siteConfig } from '../../config/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        {/* Additional footer links, including Privacy Notice, belong here once implemented. */}
        <div className={styles.links}>
          {siteConfig.contactEmailEnabled && siteConfig.contactEmail && (
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          )}
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
