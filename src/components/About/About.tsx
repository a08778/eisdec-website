import styles from './About.module.css';

export default function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className={styles.heading}>
        Technology with purpose.
      </h2>
      <p className={styles.description}>
        We believe technology should make things work better. Our approach
        starts with understanding real needs and building thoughtful, practical
        solutions that deliver meaningful value.
      </p>
    </section>
  );
}
