import { useState, useEffect } from 'react';
import { RESUME } from '../data';

const NAV_ITEMS = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'experience', label: 'Experience', num: '02' },
  { id: 'projects', label: 'Works', num: '03' },
  { id: 'research', label: 'Research', num: '04' },
  { id: 'skills', label: 'Arsenal', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#top" className="navbar-logo" aria-label="Jesica Suthar home">
          <span className="logo-text">JS</span>
          <span className="logo-dot" />
        </a>

        <div className="navbar-status-badge">
          <span className="pulse-dot" />
          <span className="status-text">AVAILABLE FOR ROLES</span>
        </div>

        <nav className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="nav-num">{item.num}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}

          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Resume</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </nav>

        <button
          className="mobile-burger-btn"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`burger-line ${mobileMenuOpen ? 'active' : ''}`} />
          <span className={`burger-line ${mobileMenuOpen ? 'active' : ''}`} />
        </button>
      </div>
    </header>
  );
}
