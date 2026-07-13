import { useState } from "react";
import { filterLabels, projects, type Category } from "../data/content";
import styles from "./Projects.module.css";

type Filter = Category | "all";

const filters: Filter[] = ["all", "ai", "infra", "fullstack"];

export function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Selected work</p>
        <div
          className={styles.chips}
          role="group"
          aria-label="Filter projects by area"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={f === active ? styles.chipOn : styles.chip}
              aria-pressed={f === active}
              onClick={() => setActive(f)}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {visible.map((p) => (
            <a
              key={p.name}
              className={styles.card}
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className={styles.title}>{p.name}</h3>
              <p className={styles.repo}>{p.repo}</p>
              <p className={styles.desc}>{p.description}</p>
              <ul className={styles.tech} aria-label="Technologies">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
