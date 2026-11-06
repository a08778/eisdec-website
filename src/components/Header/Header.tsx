import logo from '../../assets/brand/logo-dark.svg';
import { siteConfig } from '../../config/site';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.homeLink}
          href="/"
          aria-label={`${siteConfig.name} home`}
        >
          <img className={styles.logo} src={logo} alt={siteConfig.name} />
        </a>
      </div>
    </header>
  );
}
