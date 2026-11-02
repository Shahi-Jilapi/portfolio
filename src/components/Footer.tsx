import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-cta">
        <p className="footer-kicker">Have a project, opportunity, or idea?</p>
        <a href="mailto:sadimfahad9@gmail.com" className="footer-email">
          Let’s talk<span><ArrowUpRight aria-hidden="true" /></span>
        </a>
      </div>
      <div className="shell footer-grid">
        <div className="footer-signature">
          <strong>Sadim Fahad</strong>
          <p>Computer science student building across software and data.</p>
        </div>
        <nav aria-label="Footer navigation">
          <span>Explore</span>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Résumé</Link>
        </nav>
        <div className="footer-socials">
          <span>Connect</span>
          <a href="https://www.linkedin.com/in/sadim-fahad/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
          <a href="https://github.com/Shahi-Jilapi" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
          <a href="mailto:sadimfahad9@gmail.com">Email <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Sadim Fahad</span>
        <span>Dhaka, Bangladesh · UTC+6</span>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}
