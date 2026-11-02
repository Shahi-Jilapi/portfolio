export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow" data-hero-line>{eyebrow}</p>
      <h1 data-hero-line>{title}</h1>
      <p data-hero-line>{description}</p>
    </section>
  );
}
