import { ArrowRight, CalendarDays, FolderOpen } from 'lucide-react';

export default function NewsCard({ article, compact = false }) {
  return (
    <article className={`news-card ${compact ? 'news-card-compact' : ''}`}>
      {article.image && (
        <img src={article.image} alt="" className="news-card-image" loading="lazy" />
      )}
      <div className="news-card-body">
        <div className="news-meta">
          <span>
            <FolderOpen size={14} aria-hidden="true" />
            {article.category}
          </span>
          <span>
            <CalendarDays size={14} aria-hidden="true" />
            {article.date}
          </span>
        </div>
        <h2 lang={article.language === 'bn' ? 'bn' : 'en'}>{article.title}</h2>
        {!compact && <p>{article.excerpt}</p>}
        <a className="text-link" href="/news">
          Read More <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
