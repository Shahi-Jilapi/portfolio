import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteMotion } from "@/components/SiteMotion";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Sadim Fahad - Computer Science & Data Science",
    template: "%s - Sadim Fahad",
  },
  description:
    "Portfolio of Sadim Fahad, a computer science student at AIUB and aspiring data scientist in Dhaka, Bangladesh.",
  openGraph: {
    title: "Sadim Fahad - Computer Science & Data Science",
    description:
      "A growing portfolio of software engineering, data science, and technical learning.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <SiteMotion />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
