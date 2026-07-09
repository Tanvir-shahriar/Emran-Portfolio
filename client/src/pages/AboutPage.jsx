import { ArrowRight, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import NewsCard from '../components/NewsCard.jsx';

export default function AboutPage({ content }) {
  const { about } = content;

  return (
    <>
      <PageHero title={about.title} breadcrumb={about.breadcrumb} />

      <section className="about-page-layout section-shell">
        <aside className="about-sidebar">
          <img src={about.heroImage} alt="" className="about-side-image" />

          <div className="quick-news-block">
            <h2>Latest News</h2>
            {about.quickNews.map((item) => (
              <a key={item} href="/news">
                {item}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="faq-tile">
            <span>FAQ</span>
            <h2>Questions and Answers on Yunus Social Business Centres</h2>
            <a href="/about">View Details</a>
          </div>

          <div className="book-tile">
            <h2>Latest Book</h2>
            <div className="book-cover">
              <BookOpen size={28} aria-hidden="true" />
              <strong>A World of Three Zeros</strong>
              <span>Muhammad Yunus</span>
            </div>
          </div>
        </aside>

        <article className="about-article">
          <span className="content-label">{about.article.date}</span>
          {about.article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
      </section>

      <section className="related-section">
        <div className="section-shell">
          <h2 className="related-title">Related</h2>
          <div className="related-grid">
            {about.related.map((article) => (
              <NewsCard
                key={article.title}
                article={{
                  ...article,
                  category: 'Related',
                  source: 'YC'
                }}
                compact
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
