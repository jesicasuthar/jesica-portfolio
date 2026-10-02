import { useState } from 'react';
import { skillCategories, SkillCategory } from '../data';

export function SkillsArsenal() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <section id="skills" className="section-container">
      <div className="section-header-tag">
        <span className="section-num">/ 05</span>
        <span className="section-title-label">TECHNICAL ARSENAL</span>
      </div>

      <div className="arsenal-header-row">
        <h2 className="section-headline">
          Technologies, frameworks &amp; <em>engineering paradigms</em>.
        </h2>
        {selectedTag && (
          <button className="clear-tag-filter-btn" onClick={() => setSelectedTag(null)}>
            <span>Filtered: <code>{selectedTag}</code></span>
            <span>✕ Clear</span>
          </button>
        )}
      </div>

      <div className="arsenal-grid">
        {skillCategories.map((cat: SkillCategory) => {
          const hasMatchingTag = selectedTag ? cat.items.includes(selectedTag) : true;

          return (
            <div
              key={cat.num}
              className={`arsenal-category-card ${!hasMatchingTag ? 'dimmed' : ''}`}
            >
              <div className="cat-card-header">
                <span className="cat-num">{cat.num} //</span>
                <h3 className="cat-title">
                  {cat.title} <em>{cat.italicWord}</em>
                </h3>
              </div>

              <p className="cat-desc">{cat.description}</p>

              <div className="cat-tags-wrap">
                {cat.items.map((skill) => {
                  const isSelected = selectedTag === skill;
                  return (
                    <button
                      key={skill}
                      className={`arsenal-skill-pill ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedTag(isSelected ? null : skill)}
                      title={`Filter by ${skill}`}
                    >
                      <span className="pill-dot" />
                      <span>{skill}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
