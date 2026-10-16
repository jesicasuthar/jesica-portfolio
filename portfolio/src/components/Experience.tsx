import { EXPERIENCES } from '../data';

export function Experience() {
  return (
    <section id="experience" className="portfolio-section experience-section">
      <div className="section-header">
        <span className="section-pill">Career &amp; Internships</span>
        <h2 className="section-title">Work Experience &amp; Education</h2>
        <p className="section-subtitle">
          Applying artificial intelligence, robotic process automation, and software engineering in fast-paced collaborative environments.
        </p>
      </div>

      <div className="experience-container">
        {/* Experience Timeline */}
        <div className="exp-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="exp-timeline-item">
              <div className="exp-marker-col">
                <span className="exp-marker-dot" />
                <span className="exp-marker-line" />
              </div>

              <div className="exp-content-card">
                <div className="exp-header-row">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta-badge">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-loc">{exp.location}</span>
                  </div>
                </div>

                <ul className="exp-bullet-list">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>
                      <span className="exp-bullet-point">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-skills-row">
                  {exp.skills.map((s) => (
                    <span key={s} className="exp-skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="education-card">
          <div className="edu-top">
            <span className="edu-badge">Academic Foundation</span>
            <span className="edu-year">Graduating 2026</span>
          </div>

          <h3 className="edu-degree">Bachelor of Engineering (B.E.) in Computer Science &amp; Engineering</h3>
          <h4 className="edu-college">Shree L.R. Tiwari College of Engineering &amp; Technology (University of Mumbai)</h4>

          <div className="edu-coursework-box">
            <span className="coursework-title">Key Academic Coursework:</span>
            <div className="coursework-tags">
              {['Artificial Intelligence', 'Machine Learning', 'Data Structures & Algorithms', 'Database Management Systems', 'Computer Networks', 'Analysis of Algorithms (AOA)'].map((c) => (
                <span key={c} className="coursework-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
