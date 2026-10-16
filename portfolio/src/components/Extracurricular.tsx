import { EXTRACURRICULARS } from '../data';

export function Extracurricular() {
  return (
    <section id="extracurricular" className="portfolio-section extracurricular-section">
      <div className="section-header">
        <span className="section-pill">Leadership &amp; Community</span>
        <h2 className="section-title">Extracurricular Activities &amp; Initiatives</h2>
        <p className="section-subtitle">
          Leading technical chapters, organizing national-scale hackathons, driving campus cultural fests, and giving back through community service.
        </p>
      </div>

      <div className="extra-grid">
        {EXTRACURRICULARS.map((item) => (
          <div key={item.id} className="extra-card">
            <div className="extra-card-header">
              <span className="extra-badge">{item.badge}</span>
              <span className="extra-period">{item.period}</span>
            </div>

            <h3 className="extra-role">{item.role}</h3>
            <h4 className="extra-org">{item.organization}</h4>

            <ul className="extra-highlights-list">
              {item.highlights.map((hl, i) => (
                <li key={i} className="extra-hl-item">
                  <span className="extra-bullet-dot" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured highlight banner for Hackhaven and Spotlight */}
      <div className="extra-spotlight-box">
        <div className="spotlight-col">
          <div className="spotlight-title-row">
            <span className="spotlight-icon">⚡</span>
            <h4>Hackhaven (24-Hour Hackathon)</h4>
          </div>
          <p>
            Served as Documentation Head for CSI-SLRTCE (2023–2024), orchestrating documentation, schedules, guidelines, and event flow for a high-intensity 24-hour coding sprint.
          </p>
        </div>
        <div className="spotlight-divider" />
        <div className="spotlight-col">
          <div className="spotlight-title-row">
            <span className="spotlight-icon">🎭</span>
            <h4>Spotlight SLRTCE (2024–2025)</h4>
          </div>
          <p>
            Spearheaded External PR, media outreach, and managed VIP hospitality for celebrity guests and competitive judging panels across inter-collegiate festival rounds.
          </p>
        </div>
      </div>
    </section>
  );
}
