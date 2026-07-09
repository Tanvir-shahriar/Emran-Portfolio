import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const logoUrl = 'https://www.muhammadyunus.org/includes/themes/best/yc/img/yunus-centre-logo.jpg';
const pediaLogoUrl = 'https://www.muhammadyunus.org/includes/themes/best/yc/img/socialbusinesspedia_logo.png';

const navGroups = [
  {
    label: 'About Us',
    mega: true,
    sections: [
      { title: 'About Us', links: ['Who we are', 'What we do', 'Mission and Vision', 'Partners'].map((label) => ({ label, to: '/about' })) },
      { title: 'Search For', links: ['One Young World 2022', 'One Young World 2020', 'Investors', 'SB Volunteer'].map((label) => ({ label, to: '/news' })) },
      { title: 'Career', links: [{ label: 'Submit your CV', to: '/about' }] },
      { title: 'Contact Us', contact: ['+88 02 9023010', 'info@yunuscentre.org'], links: [{ label: 'Contact Us', to: '/about' }] },
    ],
  },
  {
    label: 'Social Business',
    mega: true,
    sections: [
      {
        title: 'About Us',
        links: [
          { label: 'About Social Business', to: '/#social-business' },
          { label: 'Social Business 7 principles', to: '/#social-business' },
          { label: 'Issues of SB', to: '/#social-business' },
          { label: 'FAQ', to: '/#faq' },
        ],
      },
      { title: 'Grameen (Non Profit)', text: 'The Grameen family has grown beyond Grameen Bank into multi-faceted social business initiatives.' },
      { title: 'Grameen (Profit)', text: 'Social businesses are designed around solving problems with sustainable business discipline.' },
      { title: 'Joint Ventures', text: 'Partnerships extend the social business model through practical collaboration.' },
    ],
  },
  {
    label: 'Visit Program',
    links: ['IMMERSION PROGRAM', 'EXPOSURE VISIT', 'Internship'].map((label) => ({ label, to: '/about' })),
  },
  {
    label: 'Publication',
    links: ['Books', 'Book Review', "Interns' Magazine", 'Newsletter', 'YC Brochure'].map((label) => ({ label, to: '/news' })),
  },
  {
    label: 'Media',
    links: [
      { label: 'News (Highlights/News)', to: '/news' },
      { label: 'Press Release', to: '/news' },
      { label: 'Photo Gallery', to: '/gallery' },
      { label: 'Videos', to: '/gallery' },
    ],
  },
  {
    label: 'YSBC',
    links: ['What is YSBC', 'How to become a YSBC', 'YSBC FAQ', 'YSBC NewsFeed'].map((label, index) => ({
      label,
      to: index === 3 ? '/news' : '/about',
    })),
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
            <a href="mailto:info@yunuscentre.org" className="yc-top-email">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>info@yunuscentre.org</span>
            </a>
            <ul className="yc-social-list" aria-label="Social links">
              <li><a href="https://www.facebook.com/YunusCentre" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="https://www.twitter.com/YunusCentre" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="https://www.pinterest.com/YunusCentre" aria-label="Pinterest"><i className="fab fa-pinterest" /></a></li>
              <li className="yc-search-cell">
                <button className="yc-search-trigger" type="button" aria-label="Open search" aria-expanded={searchOpen} onClick={() => setSearchOpen(true)}>
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>
          <div className="yc-top-right">
            <div className="yc-pedia-cell">
              <a className="yc-pedia-link" href="http://socialbusinesspedia.com/" target="_blank" rel="noreferrer">
                <img src={pediaLogoUrl} alt="" />
                <span>Social Business Pedia</span>
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
          <p className="yc-search-hint">Type keywords like Social Business, Grameen Bank etc.</p>
        </div>
      </section>

      <section className={`yc-menu-row${isSticky ? ' is-sticky' : ''}`} ref={menuRowRef}>
        <nav className="yc-navbar" aria-label="Primary navigation">
          <div className="yc-container yc-navbar-container">
            <NavLink className="yc-navbar-brand" to="/" onClick={closeMenu} aria-label="Yunus Centre home">
              <img src={logoUrl} alt="Yunus Centre" />
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
