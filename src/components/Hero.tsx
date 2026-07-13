import { site } from "../data/content";
import styles from "./Hero.module.css";

export function TopBar() {
  return (
    <nav className={styles.topbar}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className={styles.name}>Mickey Frankel</span>
        <span className={styles.navlinks}>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </span>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>{site.eyebrow}</p>
        <h1 className={styles.headline}>
          {site.positioningPre}
          <span className={styles.accent}>{site.positioningAccent}</span>
          {site.positioningPost}
        </h1>
        <p className={styles.subline}>{site.subline}</p>
        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <a className={styles.secondary} href={site.cvPath} download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
