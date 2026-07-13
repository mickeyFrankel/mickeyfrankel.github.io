import { experience, site, skills } from "../data/content";
import styles from "./Sections.module.css";

export function Experience() {
  return (
    <section id="experience" className={styles.alt}>
      <div className="container">
        <p className="section-label">Experience</p>
        <ol className={styles.timeline}>
          {experience.map((e) => (
            <li key={e.role} className={styles.entry}>
              <div className={styles.entryHead}>
                <h3 className={styles.role}>{e.role}</h3>
                <span className={styles.dates}>{e.dates}</span>
              </div>
              <p className={styles.org}>{e.org}</p>
              <p className={styles.line}>{e.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Stack</p>
        <ul className={styles.skills} aria-label="Skills">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <h2 className={styles.footerHead}>Let's talk.</h2>
        <p className={styles.footerSub}>
          Open to full-stack, backend, AI/agentic, and DevOps/SRE roles in
          central Israel.
        </p>
        <div className={styles.footerLinks}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className={styles.colophon}>
          Built with React + TypeScript + Vite, deployed via GitHub Actions —{" "}
          <a href={`${site.github}/mickeyfrankel.github.io`} target="_blank" rel="noreferrer">
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
