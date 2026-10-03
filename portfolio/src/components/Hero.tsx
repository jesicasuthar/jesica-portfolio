import { useState, useEffect } from 'react';
import { GH, LINKEDIN, RESEARCHGATE, RESUME, EMAIL } from '../data';
import { DottedPhotoCanvas } from './DottedPhotoCanvas';

export function Hero() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata'
        }) + ' IST'
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="gazi-hero">
      {/* ── LEFT COLUMN ─ dotted portrait + social anchors ── */}
      <div className="gazi-left">
        <DottedPhotoCanvas
          src="/profile.jpg"
          alt="Jesica Suthar"
          dotSpacing={6}
          dotRadius={2.8}
          width={340}
          height={400}
        />

        {/* Availability pill under photo */}
        <div className="gazi-availability">
          <span className="avail-dot" />
          <span>Available for work</span>
        </div>

        {/* Local time */}
        <div className="gazi-clock">
          <span className="clock-label">Mumbai, IN</span>
          <span className="clock-time">{timeString}</span>
        </div>

        {/* Social icon links */}
        <div className="gazi-socials">
          <a href={GH} target="_blank" rel="noopener noreferrer" className="gazi-social-link" title="GitHub">
            {/* GitHub SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>

          {LINKEDIN && (
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="gazi-social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}

          <a href={RESEARCHGATE} target="_blank" rel="noopener noreferrer" className="gazi-social-link" title="ResearchGate">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.52 12.52 0 0 0-.28 1.76c-.073.694-.112 1.67-.112 2.928v.476c0 1.258.039 2.233.112 2.926.073.696.152 1.249.28 1.76.245.746.652 1.305 1.213 1.681.565.378 1.255.565 2.073.565a4.04 4.04 0 0 0 1.682-.357c.507-.24.92-.563 1.244-.97v1.143h2.264V7.168h-5.267v1.96h2.747a3.35 3.35 0 0 1-.496 1.48 2.66 2.66 0 0 1-2.174 1.073c-.688 0-1.238-.18-1.65-.54-.414-.357-.689-.858-.824-1.5a14.02 14.02 0 0 1-.213-2.685c0-1.072.066-1.93.213-2.573.14-.645.41-1.147.822-1.5.413-.357.963-.536 1.652-.536.694 0 1.245.18 1.651.54.41.358.688.854.825 1.49l2.377-.433c-.23-.953-.653-1.712-1.268-2.27C21.323.358 20.54 0 19.586 0zm-15.22.228C4.268.228 4.175.228 4.1.24c-.077.01-.166.024-.269.04a2.573 2.573 0 0 0-.82.345c-.25.163-.465.385-.65.663-.183.278-.274.618-.274 1.019 0 .407.09.753.274 1.036.185.284.4.507.65.67.25.163.532.274.847.33.317.055.64.083.97.083H6.67V.228H4.365zm0 1.684h2.164v2.747H4.559c-.277 0-.527-.043-.748-.129a1.17 1.17 0 0 1-.535-.385 1.019 1.019 0 0 1-.196-.632c0-.24.064-.447.196-.622.133-.176.31-.31.535-.405.226-.095.47-.142.75-.142a1.82 1.82 0 0 1-.196-.432zM.016 8.084v15.688H2.4v-6.46h1.94c1.03 0 1.85-.085 2.45-.257.604-.174 1.082-.432 1.436-.776.354-.344.6-.756.734-1.233.133-.48.2-1.014.2-1.608 0-.596-.067-1.132-.2-1.606a2.888 2.888 0 0 0-.734-1.229c-.354-.347-.832-.608-1.436-.782C6.19 9.65 5.37 9.56 4.34 9.56H2.4V8.084H.016zm2.385 3.156h1.906c.658 0 1.177.07 1.558.207.38.138.65.364.812.682.162.317.242.734.242 1.253s-.08.937-.242 1.257c-.162.316-.432.541-.812.67-.38.128-.9.195-1.558.195H2.4v-4.264z" />
            </svg>
          </a>

          {EMAIL && (
            <a href={`mailto:${EMAIL}`} className="gazi-social-link" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          )}

          <a href={RESUME} download="Jesica-Suthar-Resume.pdf" className="gazi-social-link" title="Download resume">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT COLUMN ─ text ── */}
      <div className="gazi-right">
        <p className="gazi-greeting">Hi, I'm</p>

        <h1 className="gazi-name">Jesica Suthar</h1>

        <h2 className="gazi-role">
          AI &amp; Software Engineer
          <span className="gazi-role-bar" />
          Researcher
        </h2>

        <p className="gazi-bio">
          Computer Science graduate from Mumbai University building{' '}
          <span className="gazi-highlight">production GenAI systems</span>,{' '}
          <span className="gazi-highlight">Knowledge-Guided Graph Neural Networks</span>, and secure AI architectures.
          I care deeply about building things that are both technically rigorous and genuinely useful.
        </p>

        <div className="gazi-stack-row">
          <span className="gazi-stack-label">Currently working with</span>
          <div className="gazi-stack-pills">
            {['Python', 'React', 'Gemini API', 'PyTorch', 'Cloud Run', 'UiPath'].map((s) => (
              <span key={s} className="gazi-stack-pill">{s}</span>
            ))}
          </div>
        </div>

        <div className="gazi-cta-row">
          <a href="#projects" className="gazi-btn-primary">
            See my work
          </a>
          <a href="#contact" className="gazi-btn-secondary">
            Get in touch
          </a>
          <a href={RESUME} download="Jesica-Suthar-Resume.pdf" className="gazi-btn-ghost">
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
