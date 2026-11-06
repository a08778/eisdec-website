import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
