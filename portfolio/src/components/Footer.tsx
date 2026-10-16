import { EMAIL, PHONE, LOCATION, GH, LINKEDIN, RESEARCHGATE, RESUME } from '../data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="portfolio-footer">
      <div className="footer-top-cta">
        <div className="cta-content">
          <span className="cta-pill">Get In Touch</span>
          <h2 className="cta-title">Let’s collaborate on something extraordinary.</h2>
          <p className="cta-desc">
            Whether you're looking for an AI engineer to develop cutting-edge GenAI/GNN pipelines, automate critical business workflows in UiPath, or collaborate on clinical AI research — I’d love to connect.
          </p>

          <div className="contact-action-buttons">
            <a href={`mailto:${EMAIL}`} className="cta-btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{EMAIL}</span>
            </a>

            <a href={`tel:${PHONE}`} className="cta-btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{PHONE}</span>
            </a>

            <a href={RESUME} download="Jesica-Suthar-Resume.pdf" className="cta-btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-left">
          <span className="brand-dot-footer" />
          <span className="footer-copyright">
            © {new Date().getFullYear()} Jesica Suthar. Built with React, TypeScript &amp; Vite.
          </span>
          <span className="footer-location">• {LOCATION}</span>
        </div>

        <div className="footer-social-links">
          <a href={GH} target="_blank" rel="noopener noreferrer" className="foot-icon-link" title="GitHub">
            GitHub
          </a>
          {LINKEDIN && (
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="foot-icon-link" title="LinkedIn">
              LinkedIn
            </a>
          )}
          <a href={RESEARCHGATE} target="_blank" rel="noopener noreferrer" className="foot-icon-link" title="ResearchGate Publication">
            ResearchGate
          </a>
          <button onClick={scrollToTop} className="foot-scroll-top" title="Scroll back to top">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
