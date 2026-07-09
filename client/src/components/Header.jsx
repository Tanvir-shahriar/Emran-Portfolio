import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Globe2, Menu, Search, X } from 'lucide-react';

export default function Header({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleNavigation = navigation.slice(0, 5);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="social-links" aria-label="Social links">
          <a href="https://www.facebook.com" aria-label="Facebook">
            f
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            in
          </a>
          <a href="https://twitter.com" aria-label="X">
            x
          </a>
        </div>
        <a className="pedia-link" href="#social-business">
          Social BusinessPedia.com
        </a>
      </div>

      <div className="header-inner">
        <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <Globe2 size={28} aria-hidden="true" />
          <span>Yunus Centre</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {visibleNavigation.map((item) => (
            <NavLink key={item.label} to={item.path}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="nav-icon-link" to="/news" aria-label="Search news">
            <Search size={18} aria-hidden="true" />
          </NavLink>
        </nav>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          title={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {visibleNavigation.map((item) => (
            <NavLink key={item.label} to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
