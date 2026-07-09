import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import NewsCard from '../components/NewsCard.jsx';
import PageHero from '../components/PageHero.jsx';

export default function NewsPage({ content }) {
  const [query, setQuery] = useState('');
  const { news, home } = content;

  const filteredNews = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return news;
    }

    return news.filter((article) =>
      [article.title, article.category, article.date, article.excerpt]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalized))
    );
  }, [news, query]);

  return (
    <>
      <PageHero title="Updates" breadcrumb="Home / Updates" tone="dark" />

      <section className="news-page section-shell">
        <div className="news-main-column">
          <label className="search-box">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search updates</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search updates"
            />
          </label>

          <div className="news-list">
            {filteredNews.map((article) => (
              <NewsCard key={article.title} article={article} />
            ))}
          </div>
        </div>

        <aside className="news-sidebar">
          <div className="sidebar-block">
            <h2>Recent Updates</h2>
            {news.slice(0, 4).map((article) => (
              <a key={article.title} href="/news">
                {article.title}
              </a>
            ))}
          </div>

          <div className="faq-tile compact">
            <span>FAQ</span>
            <h2>Opportunities</h2>
            <a href="/about">View Details</a>
          </div>

          <div className="book-tile">
            <h2>Latest Book</h2>
            <div className="book-cover">
              <strong>অঙ্কুর</strong>
              <span>Md. Emran Hossain</span>
            </div>
          </div>

          <div className="sidebar-block">
            <h2>Publications</h2>
            {home.publications.map((item) => (
              <a key={item.title} href="/news">
                {item.title}
              </a>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
