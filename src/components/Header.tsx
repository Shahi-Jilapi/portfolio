"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, FolderOpen, Github, Home, Mail } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/resume", label: "Résumé", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="corner-brand" aria-label="Sadim Fahad, home">
        <span aria-hidden="true"><b>S</b><b>F</b></span>
        <strong>Sadim <em>Fahad</em></strong>
      </Link>
      <p className="corner-role"><i aria-hidden="true" />Computer science student<br />Aspiring data scientist</p>
      <nav className="nav-dock" aria-label="Primary navigation">
        {links.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link key={href} href={href} className={active ? "active" : undefined} aria-label={label} aria-current={active ? "page" : undefined}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          );
        })}
        <a href="https://github.com/Shahi-Jilapi" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github aria-hidden="true" />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
}
