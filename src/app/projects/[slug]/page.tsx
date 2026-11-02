import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article className="project-detail shell">
      <Link className="back-link" href="/projects"><ArrowLeft aria-hidden="true" /> Projects</Link>
      <header>
        <div className="project-detail-meta"><span>{project.status}</span><span>{project.year}</span><span>{project.owner}</span></div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>

      {project.image ? (
        <div className="project-detail-image">
          <Image src={project.image} alt={project.imageAlt || ""} fill sizes="100vw" priority />
          {project.imageSource && project.imageCredit ? (
            <a className="project-image-credit" href={project.imageSource} target="_blank" rel="noreferrer">
              {project.imageCredit} <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : (
        <div className="project-detail-poster"><span>{project.title}</span><small>Collaborative project</small></div>
      )}

      <div className="contribution-grid">
        <div>
          <p className="eyebrow">My role</p>
          <h2>{project.role}</h2>
          <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          {project.repository ? (
            <a className="button" href={project.repository} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> Repository <ArrowUpRight aria-hidden="true" />
            </a>
          ) : <p className="repo-note">{project.repositoryNote}</p>}
        </div>
        <ol>
          {project.contribution.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
          ))}
        </ol>
      </div>
    </article>
  );
}
