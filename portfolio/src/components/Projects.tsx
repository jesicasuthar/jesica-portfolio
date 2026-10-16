import { useState, useRef } from 'react';
import { PROJECTS, Project } from '../data';

export function Projects() {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS[0].id);
  const majorProject = PROJECTS.find((p) => p.id === 'major-project') as Project;
  const otherProjects = PROJECTS.filter((p) => p.id !== 'major-project');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="section-header">
        <span className="section-pill">Featured Engineering &amp; Research</span>
        <h2 className="section-title">Major Project &amp; Video Walkthrough</h2>
        <p className="section-subtitle">
          Showcasing research publication in concurrent multi-disease clinical intelligence, along with production GenAI applications.
        </p>
      </div>

      {/* ── MAJOR PROJECT FEATURE CARD WITH VIDEO DEMO ── */}
      <div className="major-project-card">
        <div className="major-badge-strip">
          <div className="badge-item-main">
            <span className="live-pulse" />
            <span>MAJOR PROJECT DEMO</span>
          </div>
          <span className="badge-item-sub">Published IISTJ (Co-Author)</span>
          <span className="badge-item-sub">Year 2026</span>
        </div>

        <div className="major-project-grid">
          {/* LEFT: Video Player Container */}
          <div className="major-video-wrapper">
            <div className="video-player-container">
              <video
                ref={videoRef}
                className="major-video-element"
                controls
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={majorProject.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="video-overlay-banner" onClick={toggleVideo}>
                  <div className="play-button-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </div>
                  <span className="overlay-text">Click to Play Major Project Demo</span>
                </div>
              )}
            </div>

            <div className="video-caption-bar">
              <div className="caption-info">
                <span className="caption-dot" />
                <span className="caption-title">demo of major project.mp4</span>
              </div>
              <span className="caption-tag">Full Architecture &amp; Execution</span>
            </div>
          </div>

          {/* RIGHT: Project Information & Metrics */}
          <div className="major-content-wrapper">
            <h3 className="major-title">{majorProject.title}</h3>
            <p className="major-role-tag">{majorProject.role}</p>

            <p className="major-desc">{majorProject.description}</p>

            {/* Metrics cards */}
            <div className="major-metrics-row">
              {majorProject.metrics?.map((m) => (
                <div key={m.label} className="metric-pill">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Highlights bullet points */}
            <div className="major-highlights">
              <h4 className="highlights-heading">Architecture &amp; Key Innovations:</h4>
              <ul className="highlights-list">
                {majorProject.keyHighlights.map((hl, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="check-icon">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="tech-tags-list">
              {majorProject.tags.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Research Paper Link CTA */}
            {majorProject.researchLink && (
              <div className="major-action-row">
                <a
                  href={majorProject.researchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Read Published Research Paper on ResearchGate</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── ADDITIONAL PROJECTS (Luminary & Healthcare Chatbot) ── */}
      <div className="sub-projects-section">
        <h3 className="sub-projects-title">Other Selected Works</h3>
        <div className="projects-grid">
          {otherProjects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="card-top">
                <span className="card-badge">{p.badge}</span>
                <span className="card-year">{p.year}</span>
              </div>
              <h4 className="card-title">{p.title}</h4>
              <p className="card-role">{p.role}</p>
              <p className="card-desc">{p.description}</p>

              <div className="card-highlights">
                {p.keyHighlights.map((h, idx) => (
                  <div key={idx} className="card-hl-item">
                    <span className="hl-arrow">›</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {p.metrics && (
                <div className="card-mini-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="mini-m">
                      <span className="mm-v">{m.value}</span>
                      <span className="mm-l">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="card-tech-pills">
                {p.tags.map((t) => (
                  <span key={t} className="card-tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
