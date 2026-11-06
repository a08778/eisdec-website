import { siteConfig } from '../../config/site';
import styles from './Contact.module.css';

export default function Contact() {
  const emailAvailable =
    siteConfig.contactEmailEnabled && Boolean(siteConfig.contactEmail);

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className={styles.heading}>
        Get in touch.
      </h2>
      <p className={styles.description}>
        {emailAvailable
          ? "Have a question or want to connect? We'd be glad to hear from you."
          : "Interested in connecting with EISDEC? We're preparing our contact channel and will make it available soon."}
      </p>
      {emailAvailable && (
        <a className={styles.email} href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      )}
    </section>
  );
}
