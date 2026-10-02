import { useState, useEffect } from 'react';
import { projects, Project, GH } from '../data';

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(projects[0].name);

  // GitHub live repos state
  const [repos, setRepos] = useState<Repo[]>([]);
  const [ghStatus, setGhStatus] = useState<'loading' | 'ok' | 'error' | 'empty'>('loading');
  const [repoSearch, setRepoSearch] = useState('');

  const domains = ['All', 'GenAI', 'ML', 'NLP'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.domain === activeFilter;
  });

  useEffect(() => {
    const cached = sessionStorage.getItem('gh_repos_jesica');
    if (cached) {
      try {
        setRepos(JSON.parse(cached));
        setGhStatus('ok');
        return;
      } catch {
        // fallback to fetch
      }
    }

    fetch('https://api.github.com/users/jesicasuthar/repos?sort=updated&per_page=12')
      .then((res) => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!Array.isArray(data) || data.length === 0) {
          setGhStatus('empty');
          return;
        }
        sessionStorage.setItem('gh_repos_jesica', JSON.stringify(data));
        setRepos(data);
        setGhStatus('ok');
      })
      .catch(() => {
        setGhStatus('error');
      });
  }, []);

  const displayedRepos = repos.filter((r) =>
    r.name.toLowerCase().includes(repoSearch.toLowerCase()) ||
    (r.description && r.description.toLowerCase().includes(repoSearch.toLowerCase()))
  );

  return (
    <section id="projects" className="section-container">
      <div className="section-header-tag">
        <span className="section-num">/ 03</span>
        <span className="section-title-label">SELECTED WORKS</span>
      </div>

      <div className="projects-header-flex">
        <h2 className="section-headline">
          Featured systems &amp; <em>architectural prototypes</em>.
        </h2>

        <div className="filter-pill-group" role="group" aria-label="Filter works by domain">
          {domains.map((domain) => (
            <button
              key={domain}
              className={`filter-pill-btn ${activeFilter === domain ? 'active' : ''}`}
              onClick={() => setActiveFilter(domain)}
              aria-pressed={activeFilter === domain}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p: Project) => {
          const isExpanded = expandedId === p.name;
          return (
            <article key={p.name} className="project-editorial-card">
              <div className="card-top-badges">
                <div className="badges-left">
                  {p.badge && <span className="project-award-badge">{p.badge}</span>}
                  <span className={`domain-badge domain-${p.domain}`}>{p.domain}</span>
                </div>
                <span className="project-status-pill">{p.status}</span>
              </div>

              <div className="card-body">
                <h3 className="project-card-title">
                  {p.name}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="title-ext-link"
                      aria-label={`Open ${p.name} repository`}
                    >
                      ↗
                    </a>
                  )}
                </h3>

                <p className="project-card-kind">{p.kind}</p>
                <p className="project-card-blurb">{p.blurb}</p>

                {/* Architecture Flow visualization */}
                {p.architecture && p.architecture.length > 0 && (
                  <div className="project-arch-flow" aria-label="Architecture flow">
                    <span className="flow-title">PIPELINE:</span>
                    <div className="flow-steps">
                      {p.architecture.map((step, idx) => (
                        <span key={step} className="flow-node">
                          <code>{step}</code>
                          {idx < p.architecture!.length - 1 && <span className="flow-arrow">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="project-stack-tags">
                  {p.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Case Study Section */}
                <div className="card-case-study-toggle">
                  <button
                    className="toggle-accordion-btn"
                    onClick={() => setExpandedId(isExpanded ? null : p.name)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Architecture & Analysis' : 'Explore Architecture & Decisions'}</span>
                    <span className={`accordion-caret ${isExpanded ? 'rotated' : ''}`}>↓</span>
                  </button>
                </div>

                {isExpanded && (
                  <div className="case-study-drawer">
                    <div className="drawer-section">
                      <h4 className="drawer-heading">// THE PROBLEM STATEMENT</h4>
                      <p className="drawer-text">{p.problem}</p>
                    </div>

                    <div className="drawer-section">
                      <h4 className="drawer-heading">// ARCHITECTURAL DECISIONS</h4>
                      <ul className="drawer-decisions-list">
                        {p.decisions.map((dec, i) => (
                          <li key={i}>
                            <span className="bullet-indicator">✓</span>
                            <span>{dec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {p.metrics && (
                      <div className="drawer-metric-pill">
                        <span className="metric-label">KEY GUARANTEE:</span>
                        <span className="metric-value">{p.metrics}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Links */}
              <div className="card-footer-actions">
                {p.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-link"
                  >
                    <span>{link.label}</span>
                    <span className="link-arrow">↗</span>
                  </a>
                ))}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-link secondary"
                  >
                    <span>Source Code</span>
                    <span className="link-arrow">↗</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Real-Time GitHub Repositories Showcase */}
      <div className="live-github-section">
        <div className="live-github-header">
          <div className="live-title-wrap">
            <span className="live-indicator-dot" />
            <h3 className="live-section-title">
              LIVE GITHUB REPOSITORY FEED <em>@jesicasuthar</em>
            </h3>
          </div>

          <div className="live-search-wrap">
            <input
              type="text"
              placeholder="Search repositories..."
              value={repoSearch}
              onChange={(e) => setRepoSearch(e.target.value)}
              className="gh-search-input"
            />
            <a
              href={`${GH}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-view-all-link"
            >
              <span>View all on GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {ghStatus === 'loading' && (
          <div className="live-status-message">
            <span className="spinner" />
            <span>Connecting to GitHub API...</span>
          </div>
        )}

        {ghStatus === 'error' && (
          <div className="live-status-message error">
            <p>GitHub API rate limit reached or offline.</p>
            <a href={`${GH}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="retry-link">
              Browse directly on GitHub ↗
            </a>
          </div>
        )}

        {ghStatus === 'ok' && (
          <div className="repos-grid">
            {displayedRepos.slice(0, 6).map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-mini-card"
              >
                <div className="repo-top">
                  <span className="repo-folder-icon">📁</span>
                  <span className="repo-name">{repo.name}</span>
                  <span className="repo-ext-arrow">↗</span>
                </div>
                <p className="repo-desc">
                  {repo.description || 'Intelligent system or application codebase.'}
                </p>
                <div className="repo-meta-row">
                  {repo.language && <span className="repo-lang-badge">{repo.language}</span>}
                  <span className="repo-stars">★ {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
