export default function PageHero({ title, breadcrumb, tone = 'light' }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="page-hero-inner">
        <h1>{title}</h1>
        {breadcrumb && <p>{breadcrumb}</p>}
      </div>
    </section>
  );
}
