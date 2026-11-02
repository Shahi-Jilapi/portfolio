import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const skillGroups = [
  { label: "Build", items: "JavaScript · React · Next.js · Express" },
  { label: "Analyze", items: "Python · R · SQL · Tableau" },
  { label: "Work with", items: "MongoDB · Git · Postman · GSAP" },
];

export default function HomePage() {
  return (
    <>
      <section className="portrait-hero">
        <div className="hero-sky" aria-hidden="true" />
        <div className="hero-status" data-hero-line>
          <span>Current chapter</span>
          <strong><em>09</em> Semester</strong>
          <p>CSE at AIUB <i /> Dhaka, Bangladesh</p>
        </div>
        <div className="hero-role" data-hero-line>
          <span>Computer Science</span>
          <strong>Student &amp; Aspiring Data Scientist</strong>
        </div>

        <div className="hero-type" aria-label="Computer science and data">
          <span data-hero-line>COMPUTER SCIENCE</span>
          <span data-hero-line>+ DATA</span>
        </div>

        <div className="portrait-wrap" data-hero-line>
          <Image
            src="/images/sadim-cutout.png"
            alt="Sadim Fahad wearing sunglasses and a taupe T-shirt"
            fill
            priority
            sizes="(max-width: 700px) 92vw, 48vw"
          />
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="about-home shell" id="about">
        <div className="about-lead" data-reveal>
          <p className="eyebrow">About me</p>
          <h1>I learn by building, testing, and improving real products with a team.</h1>
        </div>
        <div className="about-copy" data-reveal>
          <p>
            I’m Sadim Fahad, a Computer Science and Engineering student at
            American International University–Bangladesh. I’m interested in the
            space where software engineering, data, and practical problem-solving meet.
          </p>
          <p>
            My project experience includes collaborative web and mobile products.
            I use AI-assisted development as part of my workflow while staying
            involved in product decisions, implementation, debugging, integration,
            and review.
          </p>
          <Link className="text-link" href="/projects">
            See what I contributed <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="profile-board" data-reveal>
          <div className="profile-board-intro">
            <p className="eyebrow">My working profile</p>
            <h2>Software gives ideas form.<br /><em>Data gives them direction.</em></h2>
            <p>I’m developing both disciplines together—learning how to build reliable products and ask better questions of information.</p>
          </div>
          <div className="profile-board-facts">
            <article><span>01</span><strong>CSE</strong><p>BSc student at AIUB<br />9th semester</p></article>
            <article><span>02</span><strong>Data</strong><p>Aspiring data scientist<br />with a software foundation</p></article>
            <article><span>03</span><strong>Open</strong><p>Internships and<br />early-career opportunities</p></article>
          </div>
          <div className="tool-index">
            {skillGroups.map((group, index) => (
              <div key={group.label}>
                <span>0{index + 1} / {group.label}</span>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
