import { useState } from 'react';
import { experiences, education } from '../data';

export function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <section id="experience" className="section-container">
      <div className="section-header-tag">
        <span className="section-num">/ 02</span>
        <span className="section-title-label">EXPERIENCE &amp; EDUCATION</span>
      </div>

      <h2 className="section-headline">
        Where I have contributed &amp; <em>built impact</em>.
      </h2>

      {/* Gazi Jarin style interactive vertical tabbed experience selector */}
      <div className="experience-tabs-layout">
        <div className="experience-sidebar" role="tablist" aria-label="Companies and roles">
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${exp.id}`}
                id={`tab-${exp.id}`}
                className={`exp-tab-button ${isActive ? 'active' : ''}`}
                onClick={() => setActiveId(exp.id)}
              >
                <span className="tab-indicator" />
                <div className="tab-text-wrap">
                  <span className="tab-company">{exp.company}</span>
                  <span className="tab-role-preview">{exp.role}</span>
                </div>
                <span className="tab-duration">{exp.duration}</span>
              </button>
            );
          })}
        </div>

        <div
          className="experience-panel"
          id={`panel-${activeExp.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeExp.id}`}
        >
          <div className="exp-panel-header">
            <div className="exp-role-title-wrap">
              <h3 className="exp-role-title">
                {activeExp.role} <span className="exp-company-highlight">@ {activeExp.company}</span>
              </h3>
              <div className="exp-meta-row">
                <span className="exp-period-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {activeExp.period}
                </span>
                <span className="exp-location-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {activeExp.location}
                </span>
              </div>
            </div>
          </div>

          <div className="exp-bullets-list">
            {activeExp.points.map((pt, idx) => (
              <div key={idx} className="exp-bullet-item">
                <span className="exp-bullet-caret">▹</span>
                <p className="exp-bullet-text">{pt}</p>
              </div>
            ))}
          </div>

          <div className="exp-stack-row">
            <span className="stack-label">TOOLS &amp; TECH:</span>
            <div className="tags-cluster">
              {activeExp.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Showcase Card */}
      <div className="education-card">
        <div className="education-content">
          <div className="edu-tag-strip">
            <span className="edu-badge">ACADEMIC FOUNDATION</span>
            <span className="edu-period">{education.period}</span>
          </div>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-institution">
            {education.institution} · <span className="edu-loc">{education.location}</span>
          </p>

          <div className="edu-focus-wrap">
            <span className="edu-focus-label">Core Specialization:</span>
            <div className="tags-cluster">
              {education.focus.map((f) => (
                <span key={f} className="tech-tag highlight">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="edu-badge-graphic" aria-hidden="true">
          <div className="edu-crest">
            <span>B.E.</span>
            <code>CS // 26</code>
          </div>
        </div>
      </div>
    </section>
  );
}
