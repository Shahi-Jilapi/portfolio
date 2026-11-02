import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, repositoryArchive } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Collaborative project contributions and AI-assisted development work by Sadim Fahad.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected contributions"
        title="Work I contributed to—not projects I claim to own."
        description="These projects were built in teams or shared repositories. Each entry focuses on my role, the parts I worked on, and the tools involved."
      />

      <section className="project-list shell">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </section>

      <section className="repo-archive shell" data-reveal>
        <div>
          <p className="eyebrow">Repository archive</p>
          <h2>Additional collaborative and learning repositories.</h2>
          <p>
            These repository references were supplied from my GitHub activity.
            Their source is currently private, renamed, or unavailable to the
            connected account, so I’m not inventing feature-level claims for them.
          </p>
        </div>
        <div className="repo-list">
          {repositoryArchive.map((repo, index) => (
            <div key={repo.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{repo.name}</strong>
              <small>{repo.owner}</small>
              <em>{repo.focus}</em>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
