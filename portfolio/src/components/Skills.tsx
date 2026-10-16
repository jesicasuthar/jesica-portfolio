import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="section-header">
        <span className="section-pill">Technical Competencies</span>
        <h2 className="section-title">Verified Skills &amp; Domain Expertise</h2>
        <p className="section-subtitle">
          Skills directly practiced in published research, industry internships, and validated through accredited certifications (Google Cloud, IBM, AWS, UiPath, and McKinsey).
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-filter-bar">
        <button
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Domains
        </button>
        <button
          className={`filter-btn ${activeCategory === 'generative ai' ? 'active' : ''}`}
          onClick={() => setActiveCategory('generative ai')}
        >
          GenAI &amp; ML
        </button>
        <button
          className={`filter-btn ${activeCategory === 'cloud' ? 'active' : ''}`}
          onClick={() => setActiveCategory('cloud')}
        >
          Cloud &amp; DevOps
        </button>
        <button
          className={`filter-btn ${activeCategory === 'robotic process' ? 'active' : ''}`}
          onClick={() => setActiveCategory('robotic process')}
        >
          UiPath &amp; RPA
        </button>
        <button
          className={`filter-btn ${activeCategory === 'full-stack' ? 'active' : ''}`}
          onClick={() => setActiveCategory('full-stack')}
        >
          Full-Stack &amp; Code
        </button>
        <button
          className={`filter-btn ${activeCategory === 'security' ? 'active' : ''}`}
          onClick={() => setActiveCategory('security')}
        >
          Security &amp; Ethics
        </button>
      </div>

      {/* Grid of Categories */}
      <div className="skills-categories-grid">
        {filteredCategories.map((cat) => (
          <div key={cat.title} className="skill-category-card">
            <div className="cat-header">
              <span className="cat-icon-bullet" />
              <h3 className="cat-title">{cat.title}</h3>
            </div>

            <div className="cat-skills-flow">
              {cat.skills.map((s) => (
                <div
                  key={s.name}
                  className={`skill-tag-chip ${s.highlight ? 'skill-highlight' : ''}`}
                >
                  {s.highlight && <span className="chip-star">★</span>}
                  <span className="chip-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick summary banner */}
      <div className="skills-summary-banner">
        <div className="banner-left">
          <span className="banner-badge">Continuous Learning</span>
          <p className="banner-text">
            Specialized in deploying end-to-end AI pipelines on <strong>Google Cloud Run</strong> and designing enterprise unattended automation on <strong>UiPath Orchestrator</strong>.
          </p>
        </div>
        <a href="#certifications" className="banner-cta">
          Explore Accredited Certifications →
        </a>
      </div>
    </section>
  );
}
