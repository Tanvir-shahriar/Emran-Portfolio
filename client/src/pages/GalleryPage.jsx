import { X } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

export default function GalleryPage({ content }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <PageHero title="Gallery" breadcrumb="Home / Gallery" />

      <section className="gallery-grid section-shell">
        {content.gallery.map((item) => (
          <button
            className="gallery-item"
            type="button"
            key={item.title}
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <span>{item.title}</span>
          </button>
        ))}
      </section>

      {selectedItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedItem.title}>
          <div className="lightbox-panel">
            <button
              className="icon-button lightbox-close"
              type="button"
              aria-label="Close gallery image"
              title="Close"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>
            <img src={selectedItem.image} alt={selectedItem.alt} />
            <h2>{selectedItem.title}</h2>
          </div>
        </div>
      )}
    </>
  );
}
