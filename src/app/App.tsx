import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { siteConfig } from '../config/site';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <h1 className={styles.heading}>
          {siteConfig.name} — Website under development
        </h1>
      </main>
      <Footer />
    </div>
  );
}
