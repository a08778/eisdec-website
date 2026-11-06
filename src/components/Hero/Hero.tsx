import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.architecture} aria-hidden="true">
        <span className={styles.panel} />
        <span className={styles.panel} />
        <span className={styles.panel} />
        <span className={styles.platform} />
      </div>
      <h1 id="hero-heading" className={styles.heading}>
        Technology built around{' '}
        <span className={styles.accent}>real needs.</span>
      </h1>
      <p className={styles.description}>
        EISDEC develops digital products, services, and technology solutions
        designed to solve practical problems, simplify complexity, and improve
        efficiency.
      </p>
    </section>
  );
}
