import { useState, useEffect } from 'react';
import { RESUME } from '../data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#top' },
    { name: 'Projects & Demo', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Extracurricular', href: '#extracurricular' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`portfolio-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#top" className="nav-brand">
          <span className="brand-dot" />
          <span className="brand-name">Jesica Suthar</span>
          <span className="brand-badge">AI &amp; RPA</span>
        </a>

        {/* Desktop nav links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={RESUME}
            download="Jesica-Suthar-Resume.pdf"
            className="nav-btn-resume"
            title="Download Jesica's Resume"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`toggle-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`toggle-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`toggle-line ${mobileOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={RESUME}
            download="Jesica-Suthar-Resume.pdf"
            className="mobile-resume-btn"
            onClick={() => setMobileOpen(false)}
          >
            Download Resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
