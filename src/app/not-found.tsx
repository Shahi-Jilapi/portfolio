import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This path is still unexplored.</h1>
      <p>The page may have moved, or it may not exist yet.</p>
      <Link className="button button-primary" href="/">Return home</Link>
    </section>
  );
}
