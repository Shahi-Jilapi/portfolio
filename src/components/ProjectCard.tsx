import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-row" data-reveal>
      <div className="project-row-visual">
        {project.image ? (
          <Image src={project.image} alt={project.imageAlt || ""} fill sizes="(max-width: 800px) 100vw, 52vw" loading={index < 4 ? "eager" : "lazy"} />
        ) : (
          <div className="project-placeholder" aria-label="Illustrative project title card">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
          </div>
        )}
        {project.imageSource && project.imageCredit ? (
          <a className="project-image-credit" href={project.imageSource} target="_blank" rel="noreferrer">
            {project.imageCredit} <ArrowUpRight aria-hidden="true" />
          </a>
        ) : null}
      </div>
      <div className="project-row-copy">
        <div className="project-row-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.status}</span>
          <span>{project.year}</span>
        </div>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <strong className="project-role">{project.role}</strong>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          My contribution <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
