import styles from './Expertise.module.css';

// Proposed website copy, kept together for editorial review.
const expertiseAreas = [
  {
    title: 'Digital Products',
    description:
      'Designing and developing digital products that address practical needs and deliver useful experiences.',
  },
  {
    title: 'Digital Services',
    description:
      'Building digital services that simplify processes, improve accessibility, and make everyday interactions more efficient.',
  },
  {
    title: 'Technology Solutions',
    description:
      'Developing technology solutions that help address complex challenges through thoughtful engineering and practical implementation.',
  },
] as const;

export default function Expertise() {
  return (
    <section
      id="expertise"
      className={styles.expertise}
      aria-labelledby="expertise-heading"
    >
      <h2 id="expertise-heading" className={styles.heading}>
        What we focus on.
      </h2>
      <ul className={styles.grid}>
        {expertiseAreas.map((area) => (
          <li key={area.title} className={styles.item}>
            <h3 className={styles.itemHeading}>{area.title}</h3>
            <p className={styles.description}>{area.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
