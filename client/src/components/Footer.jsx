import { Globe2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ footer, navigation }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <Globe2 size={30} aria-hidden="true" />
            <span>Yunus Centre</span>
          </div>
          <p>{footer.description}</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            {navigation.slice(1, 5).map((item) => (
              <li key={item.label}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Website</h2>
          <ul>
            {footer.websiteLinks.map((link) => (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <address className="footer-contact">
          <h2>Get In Touch</h2>
          <p>
            <MapPin size={17} aria-hidden="true" />
            {footer.contact.address}
          </p>
          <p>
            <Mail size={17} aria-hidden="true" />
            {footer.contact.email}
          </p>
          <p>
            <Phone size={17} aria-hidden="true" />
            {footer.contact.phone}
          </p>
        </address>
      </div>
      <p className="footer-bottom">Copyright 2026 Yunus Centre. All rights reserved.</p>
    </footer>
  );
}
