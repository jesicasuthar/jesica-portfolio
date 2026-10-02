import { engineeringPrinciples } from '../data';

export function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-header-tag">
        <span className="section-num">/ 01</span>
        <span className="section-title-label">ABOUT &amp; PHILOSOPHY</span>
      </div>

      <div className="about-editorial-grid">
        <div className="about-lead-col">
          <h2 className="section-headline">
            Engineering with rigorous <em>security boundaries</em> &amp; algorithmic depth.
          </h2>
          <p className="about-body-text">
            I am a Computer Science graduate from Mumbai University with a background bridging machine learning research and practical software systems. I specialize in domains where intelligent models must interface cleanly with secure, auditable application boundaries.
          </p>
          <p className="about-body-text">
            Too many modern AI prototypes sacrifice reliability by exposing API keys directly in client bundles or mingling multi-tenant state. In my engineering practice—whether designing a serverless proxy on Google Cloud Run for Gemini, developing multi-turn shopping agents, or researching Graph Neural Networks for multi-disease diagnosis—I prioritize strict isolation, deterministic data contracts, and defense-in-depth sanitization.
          </p>
        </div>

        <div className="about-specs-card">
          <div className="specs-card-header">
            <span className="specs-dot" />
            <span className="specs-title">TECHNICAL PROFILE SPEC</span>
          </div>

          <div className="specs-list">
            <div className="spec-row">
              <span className="spec-key">EDUCATION</span>
              <span className="spec-val">B.E. Computer Science, Mumbai Univ.</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">SPECIALIZATION</span>
              <span className="spec-val">AI Systems · Graph ML · Defense-in-Depth</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">RESEARCH</span>
              <span className="spec-val">Knowledge-Guided GNNs &amp; Ensembles</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">LOCATION</span>
              <span className="spec-val">Mumbai, India (Open to Global / Remote)</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">STATUS</span>
              <span className="spec-val highlight">Open for AI Engineering Roles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="principles-container">
        <div className="sub-header-row">
          <h3 className="sub-header-title">ENGINEERING <em>PRINCIPLES</em></h3>
          <span className="sub-header-mono">// ARCHITECTURAL VALUES</span>
        </div>

        <div className="principles-grid">
          {engineeringPrinciples.map((item) => (
            <div key={item.num} className="principle-card">
              <div className="principle-top">
                <span className="principle-num">{item.num}</span>
                <span className="principle-corner-glyph">⌝</span>
              </div>
              <h4 className="principle-title">{item.title}</h4>
              <p className="principle-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
