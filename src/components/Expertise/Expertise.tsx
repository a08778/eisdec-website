import styles from './Expertise.module.css';

// Approved website copy.
const expertiseAreas = [
  {
    title: 'Digital Products',
    icon: 'layers',
    description:
      'Designing and developing digital products that address practical needs and deliver useful experiences.',
  },
  {
    title: 'Digital Services',
    icon: 'workflow',
    description:
      'Building digital services that simplify processes, improve accessibility, and make everyday interactions more efficient.',
  },
  {
    title: 'Technology Solutions',
    icon: 'cpu',
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
      <p className="sectionLabel">02 / EXPERTISE</p>
      <h2 id="expertise-heading" className={styles.heading}>
        What we focus on.
      </h2>
      <ul className={styles.grid}>
        {expertiseAreas.map((area) => (
          <li key={area.title} className={styles.item}>
            <svg
              className={styles.icon}
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              {area.icon === 'layers' && (
                <path d="m16 3 13 7-13 7L3 10Zm-13 14 13 7 13-7M3 22l13 7 13-7" />
              )}
              {area.icon === 'workflow' && (
                <>
                  <rect x="3" y="3" width="9" height="9" rx="2" />
                  <rect x="20" y="20" width="9" height="9" rx="2" />
                  <path d="M12 7h9a4 4 0 0 1 4 4v9M21 16l4 4 4-4M7 12v9a4 4 0 0 0 4 4h5" />
                </>
              )}
              {area.icon === 'cpu' && (
                <>
                  <rect x="8" y="8" width="16" height="16" rx="2" />
                  <path d="M12 12h8v8h-8ZM12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5" />
                </>
              )}
            </svg>
            <h3 className={styles.itemHeading}>{area.title}</h3>
            <p className={styles.description}>{area.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
