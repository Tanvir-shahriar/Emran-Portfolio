import { ArrowRight, BookOpen, ChevronDown, ExternalLink, Image as ImageIcon, Leaf, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

function ProgramCard({ program, index }) {
  return (
    <article className="program-card">
      <div className="program-number">{String(index + 1).padStart(2, '0')}</div>
      <h3>{program.title}</h3>
      <p>{program.text}</p>
    </article>
  );
}

function PublicationCard({ item }) {
  return (
    <article className="publication-card">
      <BookOpen size={26} aria-hidden="true" />
      <span>{item.type}</span>
      <h3>{item.title}</h3>
      <a href="/news" aria-label={`View ${item.title}`}>
        View Details <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function HomePage({ content }) {
  const { home, news } = content;
  const featured = home.featuredArticle;

  return (
    <>
      <section
        className="home-hero"
        style={{ '--hero-image': `url("${home.hero.image}")` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{home.hero.quote}</h1>
          <p>{home.hero.attribution}</p>
          <a href="#featured-news" className="scroll-cue">
            <span>Scroll</span>
            <ChevronDown size={22} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="featured-news section-shell" id="featured-news">
        <div className="featured-article">
          <div className="featured-date" aria-label={featured.date}>
            <span>{featured.month}</span>
            <strong>{featured.day}</strong>
            <span>{featured.year}</span>
          </div>
          <div>
            <span className="content-label">{featured.category}</span>
            <h2>{featured.title}</h2>
          </div>
          <p>{featured.excerpt}</p>
          <Link className="button-secondary" to="/news">
            Read All News <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="news-mini-grid">
          {home.newsCards.map((article) => (
            <article className="mini-news-card" key={article.title}>
              <div className="mini-news-image">
                <img src={article.image} alt="" loading="lazy" />
                {article.badge && <span>{article.badge}</span>}
              </div>
              <div>
                <h3>{article.title}</h3>
                <p>{article.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <span>{home.quote.label}</span>
        <blockquote>{home.quote.text}</blockquote>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Initiatives"
          title="Education, environment, and community programs"
          text="Initial focus areas from the website brief, shaped into practical sections for visitors."
        />
        <div className="program-grid">
          {home.programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </section>

      <section className="about-band">
        <div className="section-shell about-grid">
          <div>
            <span className="content-label">About</span>
            <h2>Md. Emran Hossain</h2>
            <Link className="button-primary" to="/about">
              Who we are <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="about-teaser-grid">
            {home.aboutTeasers.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell ventures-section" id="ventures">
        <div className="ventures-intro">
          <Leaf size={34} aria-hidden="true" />
          <span className="content-label">Portfolio</span>
          <h2>{home.socialBusiness.heading}</h2>
          <p>{home.socialBusiness.text}</p>
        </div>
        <div className="principles-panel">
          <h3>Core organizations</h3>
          <ol>
            {home.socialBusiness.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards and milestones"
        />
        <div className="media-news-grid">
          {home.worldMedia.map((article) => (
            <NewsCard key={article.title} article={{ ...article, category: 'Media' }} compact />
          ))}
        </div>
      </section>

      <section className="faq-band">
        <div>
          <span>FAQ</span>
          <h2>Scholarship, career, invest/donate, and survey pathways</h2>
          <Link to="/about">
            View Details <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="publications section-shell">
        <SectionHeading eyebrow="Books" title="Published and featured books" />
        <div className="publication-grid">
          {home.publications.map((item) => (
            <PublicationCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section-shell image-media">
        <SectionHeading eyebrow="Image and Media" title="Stories in motion and pictures" />
        <div className="image-media-grid">
          {home.media.map((item, index) => (
            <article key={item.title} className="image-media-card">
              <img src={item.image} alt="" loading="lazy" />
              <div>
                {index === 0 ? <PlayCircle size={30} /> : <ImageIcon size={30} />}
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="social-contact-band">
        <div className="section-shell social-contact-grid">
          <article>
            <h2>Facebook</h2>
            <p>{home.social.facebook}</p>
            <a href="https://www.facebook.com">
              Visit Facebook <ExternalLink size={15} aria-hidden="true" />
            </a>
          </article>
          <article>
            <h2>Twitter</h2>
            <p>{home.social.twitter}</p>
            <a href="https://twitter.com">
              Visit Twitter <ExternalLink size={15} aria-hidden="true" />
            </a>
          </article>
          <article>
            <h2>Get In Touch</h2>
            <p>{content.footer.description}</p>
            <Link to="/about">
              Learn More <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
