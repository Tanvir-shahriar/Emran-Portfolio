import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navGroups = [
  {
    label: 'About',
    mega: true,
    sections: [
      { title: 'Profile', links: ['Short Bio', 'Full Bio', 'Philosophy', 'Awards'].map((label) => ({ label, to: '/about' })) },
      { title: 'Roles', links: ['Founder', 'Chairman', 'Chief Executive Officer', 'Author'].map((label) => ({ label, to: '/about' })) },
      { title: 'Contact', contact: ['info@emran.bd', 'Jhenaidah, Bangladesh'], links: [{ label: 'Contact', to: '/about' }] },
      { title: 'Recognition', links: ['Best Youth Organizer 2021', 'Top Scout 2018', 'Best Student 2018', 'Best Reader 2021'].map((label) => ({ label, to: '/about' })) },
    ],
  },
  {
    label: 'Ventures',
    mega: true,
    sections: [
      {
        title: 'Companies',
        links: [
          { label: 'Emran Industries Limited', to: '/#ventures' },
          { label: 'Emran Dairy Farm', to: '/#ventures' },
          { label: 'Suborno IT', to: '/#ventures' },
        ],
      },
      { title: 'Non-profit', text: "Public library, science club, youth family, writers' club, and publication work." },
      { title: 'Initiatives', text: 'Education, environment, disability inclusion, Kids Wave, and Green Life International School.' },
      { title: 'Suborno', text: 'Technology and digital work through Suborno IT and suborno.com.bd.' },
    ],
  },
  {
    label: 'Books',
    links: ['Onkur', 'Soptosongho', 'Balaram Sharma Book'].map((label) => ({ label, to: '/news' })),
  },
  {
    label: 'Opportunities',
    links: ['Scholarship Apply', 'Career Form', 'Invest Or Donate', 'Survey'].map((label) => ({ label, to: '/news' })),
  },
  {
    label: 'Media',
    links: [
      { label: 'Updates', to: '/news' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Videos', to: '/gallery' },
    ],
  },
  {
    label: 'Contact',
    links: ['Phone', 'E-mail', 'LinkedIn', 'X', 'Facebook', 'Instagram'].map((label) => ({ label, to: '/about' })),
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const headerRef = useRef(null);
  const menuRowRef = useRef(null);

  useEffect(() => {
    const updateSticky = () => {
      const topHeight = headerRef.current?.querySelector('.yc-top-area')?.offsetHeight ?? 0;
      const menuHeight = menuRowRef.current?.offsetHeight ?? 0;
      const shouldStick = window.scrollY > topHeight;
      setIsSticky(shouldStick);
      setSpacerHeight(shouldStick ? menuHeight : 0);
    };

    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
    window.addEventListener('resize', updateSticky);
    return () => {
      window.removeEventListener('scroll', updateSticky);
      window.removeEventListener('resize', updateSticky);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    if (window.matchMedia('(min-width: 992px)').matches) return;
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const renderLink = (link) => (
    <li key={link.label}>
      <NavLink to={link.to} onClick={closeMenu}>
        {link.label}
      </NavLink>
    </li>
  );

  return (
    <header className="yc-site-header" ref={headerRef}>
      <section className="yc-top-area">
        <div className="yc-container yc-top-grid">
          <div className="yc-top-left">
            <a href="mailto:info@emran.bd" className="yc-top-email">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>info@emran.bd</span>
            </a>
            <ul className="yc-social-list" aria-label="Social links">
              <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="#" aria-label="Pinterest"><i className="fab fa-pinterest" /></a></li>
              <li className="yc-search-cell">
                <button className="yc-search-trigger" type="button" aria-label="Open search" aria-expanded={searchOpen} onClick={() => setSearchOpen(true)}>
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>
          <div className="yc-top-right">
            <div className="yc-pedia-cell">
              <a className="yc-pedia-link" href="https://www.suborno.com.bd" target="_blank" rel="noreferrer">
                <i className="fab fa-envira" aria-hidden="true" />
                <span>Suborno</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`yc-search-area${searchOpen ? ' is-open' : ''}`} hidden={!searchOpen}>
        <div className="yc-container yc-search-inner">
          <button className="yc-search-close" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}>X</button>
          <form className="yc-search-form" action="/news" method="get">
            <input type="text" name="keyword" placeholder="Type Search Keywords..." required />
            <button type="submit"><i className="fa fa-search" aria-hidden="true" />Search</button>
          </form>
          <p className="yc-search-hint">Type keywords like books, awards, scholarship, career, Suborno etc.</p>
        </div>
      </section>

      <section className={`yc-menu-row${isSticky ? ' is-sticky' : ''}`} ref={menuRowRef}>
        <nav className="yc-navbar" aria-label="Primary navigation">
          <div className="yc-container yc-navbar-container">
            <NavLink className="yc-navbar-brand" to="/" onClick={closeMenu} aria-label="Emran home">
              <span className="yc-brand-mark"><i className="fab fa-envira" aria-hidden="true" /></span>
              <span className="yc-brand-text">Emran</span>
            </NavLink>
            <button className="yc-navbar-toggler" type="button" aria-controls="yc-navbar-menu" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>
              <span />
            </button>
            <div className={`yc-navbar-collapse${menuOpen ? ' is-open' : ''}`} id="yc-navbar-menu">
              <ul className="yc-navbar-nav">
                {navGroups.map((group) => (
                  <li className={`yc-nav-item${group.mega ? ' yc-megamenu-li' : ''}${openDropdown === group.label ? ' is-open' : ''}`} key={group.label}>
                    <button className="yc-nav-link" type="button" aria-haspopup="true" aria-expanded={openDropdown === group.label} onClick={() => toggleDropdown(group.label)}>
                      {group.label} <i className="fa fa-caret-down yc-caret" aria-hidden="true" />
                    </button>
                    {group.mega ? (
                      <div className="yc-dropdown-menu yc-mega">
                        <div className="yc-mega-grid">
                          {group.sections.map((section) => (
                            <div className="yc-dropdown-section" key={section.title}>
                              <h5>{section.title}</h5>
                              {section.text && <p>{section.text}</p>}
                              {section.contact?.map((line) => <span className="yc-contact-line" key={line}>{line}</span>)}
                              {section.links && <ul>{section.links.map(renderLink)}</ul>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <ul className="yc-dropdown-menu yc-dropdown-list">
                        {group.links.map(renderLink)}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <div className={`yc-menu-spacer${isSticky ? ' is-active' : ''}`} style={{ height: spacerHeight }} aria-hidden="true" />
    </header>
  );
}
