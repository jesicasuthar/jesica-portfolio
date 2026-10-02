import { useState, useEffect } from 'react';
import { EMAIL, GH, LINKEDIN, MEDIUM, RESEARCHGATE, RESUME } from '../data';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    if (!EMAIL) return;
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer">
      {/* Editorial Contact CTA Banner */}
      <div className="contact-cta-wrapper">
        <div className="cta-inner-card">
          <div className="cta-tag-strip">
            <span className="cta-num">/ 06</span>
            <span className="cta-label">INITIATE COLLABORATION</span>
          </div>

          <h2 className="cta-big-headline">
            Let&apos;s build something <em>intelligent</em> &amp; resilient together.
          </h2>

          <p className="cta-subtext">
            I am currently open to full-time AI Engineering, Machine Learning, and Full-Stack positions worldwide (Remote or On-Site).
          </p>

          <div className="cta-buttons-row">
            <a href={`mailto:${EMAIL}`} className="btn-cta-giant">
              <span>Get in Touch</span>
              <span className="cta-giant-arrow">↗</span>
            </a>

            <button className="btn-copy-email" onClick={handleCopyEmail} aria-label="Copy email address">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copied ? 'Copied to Clipboard!' : EMAIL}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Structured Footer Grid */}
      <div className="footer-main-grid">
        <div className="footer-col-brand">
          <a href="#top" className="footer-brand-logo">
            <span>JS</span>
            <span className="brand-dot" />
          </a>
          <p className="footer-bio">
            AI &amp; Software Engineering graduate from Mumbai University. Specializing in secure GenAI architectures, Knowledge-Guided Graph Neural Networks, and enterprise automation.
          </p>
          <div className="footer-status-pill">
            <span className="pulse-green-dot" />
            <span>Open for AI Engineering Roles</span>
          </div>
        </div>

        <div className="footer-col-nav">
          <span className="footer-col-title">NAVIGATION</span>
          <ul className="footer-nav-list">
            <li><a href="#about">01 // About</a></li>
            <li><a href="#experience">02 // Experience</a></li>
            <li><a href="#projects">03 // Selected Works</a></li>
            <li><a href="#research">04 // Research</a></li>
            <li><a href="#skills">05 // Technical Arsenal</a></li>
            <li><a href="#contact">06 // Contact</a></li>
          </ul>
        </div>

        <div className="footer-col-socials">
          <span className="footer-col-title">PROFILES &amp; CODE</span>
          <ul className="footer-social-list">
            <li>
              <a href={GH} target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
                <span className="ext-glyph">↗</span>
              </a>
            </li>
            {LINKEDIN && (
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <span className="ext-glyph">↗</span>
                </a>
              </li>
            )}
            <li>
              <a href={RESEARCHGATE} target="_blank" rel="noopener noreferrer">
                <span>ResearchGate</span>
                <span className="ext-glyph">↗</span>
              </a>
            </li>
            <li>
              <a href={MEDIUM} target="_blank" rel="noopener noreferrer">
                <span>Medium Articles</span>
                <span className="ext-glyph">↗</span>
              </a>
            </li>
            <li>
              <a href={RESUME} target="_blank" rel="noopener noreferrer">
                <span>Resume PDF</span>
                <span className="ext-glyph">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col-meta">
          <span className="footer-col-title">LOCATION &amp; TIME</span>
          <div className="footer-time-box">
            <div className="time-row">
              <span className="time-loc-icon">📍</span>
              <span className="time-city">Mumbai, India</span>
            </div>
            <div className="time-zone">UTC +05:30 (IST)</div>
            <div className="time-digital-clock">
              <code>{localTime} IST</code>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Back-to-Top bar */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          © {new Date().getFullYear()} Jesica Suthar. Built with React, TypeScript &amp; Vite.
        </p>

        <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
          <span>BACK TO TOP</span>
          <span className="top-arrow">↑</span>
        </button>
      </div>
    </footer>
  );
}
