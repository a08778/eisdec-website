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
        <nav aria-label="Main navigation" className={styles.navigation}>
          <ul className={styles.links}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
