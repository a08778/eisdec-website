import { getProjectUrl, projects } from '../../config/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-heading"
    >
      <p className="sectionLabel">03 / PROJECTS</p>
      <h2 id="projects-heading" className={styles.heading}>
        Projects &amp; Research
      </h2>
      <p className={styles.intro}>
        We explore and develop digital initiatives focused on practical
        challenges and meaningful technological solutions.
      </p>
      <ul className={styles.grid}>
        {projects.map((project) => {
          const url = getProjectUrl(project.url);

          return (
            <li key={project.id} className={styles.card}>
              {project.logo && (
                <div className={styles.logoPanel}>
                  <img
                    className={styles.logo}
                    src={project.logo}
                    alt=""
                    width="560"
                    height="560"
                  />
                </div>
              )}
              <div className={styles.content}>
                <h3 className={styles.title}>{project.name}</h3>
                <p className={styles.status}>{project.status}</p>
                <p className={styles.description}>{project.description}</p>
                {url && (
                  <a
                    className={styles.link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {project.name} (opens in a new tab)
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
