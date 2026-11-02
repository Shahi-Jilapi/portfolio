import type { Metadata } from "next";
import Link from "next/link";
import { Award, Download, ExternalLink } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Résumé", description: "Résumé of Sadim Fahad." };

const skillGroups = [
  { title: "Programming & data", items: ["Python", "R", "SQL", "Pandas"] },
  { title: "Web development", items: ["JavaScript", "React", "Next.js", "Express", "MongoDB"] },
  { title: "Machine learning", items: ["scikit-learn", "TensorFlow", "Model testing"] },
  { title: "Visualization", items: ["Tableau", "Matplotlib", "Seaborn"] },
];

export default function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Résumé"
        title="Education, skills, and collaborative development work."
        description="View the concise web version below or download the original PDF copy."
      />

      <section className="resume-actions shell" data-reveal>
        <a className="button button-solid" href="/sadim-fahad-cv.pdf" download>
          <Download aria-hidden="true" /> Download PDF
        </a>
        <a className="button" href="/sadim-fahad-cv.pdf" target="_blank" rel="noreferrer">
          <ExternalLink aria-hidden="true" /> Open in browser
        </a>
        <Link className="button button-accent" href="/certifications">
          <Award aria-hidden="true" /> Certifications
        </Link>
      </section>

      <section className="resume-layout shell">
        <div className="resume-main">
          <section className="resume-section" data-reveal>
            <p className="resume-label">Education</p>
            <article><small>Current · Dhaka, Bangladesh</small><h2>American International University–Bangladesh</h2><p>Bachelor of Science in Computer Science and Engineering</p><p>9th semester</p></article>
            <article><small>2019 · Mymensingh, Bangladesh</small><h2>Cantonment Public School and College, Momenshahi</h2><p>Science discipline</p></article>
          </section>

          <section className="resume-section" data-reveal>
            <p className="resume-label">Project experience</p>
            <article><small>Collaborative · 2026</small><h2>PawTail Shop &amp; Admin Panel</h2><p>Contributed API, customer storefront, cart/wishlist, product-detail, promotion, and administration work in a shared full-stack repository.</p></article>
            <article><small>Collaborative · 2026</small><h2>PetShop E-Commerce Platform &amp; Admin</h2><p>Contributed to customer-facing commerce interfaces and structured administration workflows as part of a collaborative project.</p></article>
            <article><small>Collaborative · 2026</small><h2>Pawfect Pet Groomer</h2><p>Contributed to the Expo application foundation, service presentation, mobile capabilities, and supporting data setup.</p></article>
            <article><small>In progress · 2026</small><h2>Personal Portfolio</h2><p>Directed and reviewed an AI-assisted Next.js implementation covering content, responsive design, accessibility, and motion.</p></article>
          </section>

          <section className="resume-section" data-reveal>
            <p className="resume-label">Certifications</p>
            <article><small>Coursera</small><h2>Google Data Analytics Certificate</h2></article>
            <article><small>Coursera</small><h2>IBM Data Science Professional Certificate</h2></article>
            <article><small>Coursera</small><h2>Deep Learning Specialization</h2></article>
          </section>
        </div>

        <aside className="resume-skills" data-reveal>
          <p className="eyebrow">Skills &amp; tools</p>
          {skillGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>)}
        </aside>
      </section>
    </>
  );
}
