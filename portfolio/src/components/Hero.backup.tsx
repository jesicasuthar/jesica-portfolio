import { useState, useEffect } from 'react';
import { GH, LINKEDIN, RESEARCHGATE, RESUME } from '../data';
import { InteractiveHeroCanvas } from './InteractiveHeroCanvas';

export function Hero() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as HH:mm:ss.SSS in IST or local timezone
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const ms = String(now.getMilliseconds()).padStart(3, '0');
      setTimeString(`${hours}:${mins}:${secs}.${ms}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 47);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="hero-content-col">
        <div className="hero-meta-strip">
          <div className="hero-role-tag">
            <span className="terminal-prompt">&gt;</span>
            <span>AI &amp; SOFTWARE ENGINEER · RESEARCHER</span>
          </div>
          <div className="hero-time-badge">
            <span className="loc-dot" />
            <span className="loc-label">MUMBAI, IN</span>
            <span className="time-mono">{timeString}</span>
          </div>
        </div>

        <h1 className="hero-headline">
          Building <em>intelligent systems</em> &amp; secure <em>AI architectures</em>.
        </h1>

        <p className="hero-lead">
          Computer Science graduate specializing in production GenAI pipelines, Knowledge-Guided Graph Neural Networks, and defensive AI isolation boundaries. Turning research prototypes into reliable, resilient applications.
        </p>

        <div className="hero-actions-row">
          <a href="#projects" className="btn-primary-glow">
            <span>Explore Selected Works</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>

          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn-secondary-glass">
            <span>Curriculum Vitae</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>

          <div className="hero-social-links">
            <a href={GH} target="_blank" rel="noopener noreferrer" className="social-pill" title="GitHub Profile">
              <span>GH</span>
              <span className="arrow-icon">↗</span>
            </a>
            {LINKEDIN && (
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-pill" title="LinkedIn Profile">
                <span>IN</span>
                <span className="arrow-icon">↗</span>
              </a>
            )}
            <a href={RESEARCHGATE} target="_blank" rel="noopener noreferrer" className="social-pill" title="ResearchGate Publication">
              <span>RG</span>
              <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-metrics-ribbon">
          <div className="metric-item">
            <span className="metric-val">1x</span>
            <span className="metric-desc">Published Research Co-Author</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-val">GenPAC</span>
            <span className="metric-desc">AI Ideathon Finalist</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-val">100%</span>
            <span className="metric-desc">Server-Side Secret Isolation</span>
          </div>
        </div>
      </div>

      <div className="hero-visual-col">
        <InteractiveHeroCanvas />
      </div>
    </section>
  );
}
