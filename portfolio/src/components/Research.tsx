import { useState } from 'react';
import { paper } from '../data';

export function Research() {
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  return (
    <section id="research" className="section-container">
      <div className="section-header-tag">
        <span className="section-num">/ 04</span>
        <span className="section-title-label">RESEARCH &amp; PUBLICATIONS</span>
      </div>

      <h2 className="section-headline">
        Academic research in <em>Graph Neural Networks</em> &amp; clinical informatics.
      </h2>

      <div className="research-spotlight-card">
        <div className="research-badge-row">
          <span className="academic-badge">{paper.badge}</span>
          <span className="academic-field-label">{paper.field}</span>
        </div>

        <h3 className="paper-title-editorial">{paper.title}</h3>

        {/* Interactive Knowledge Graph & GNN Signal Visualization */}
        <div className="research-diagram-card">
          <div className="diagram-header">
            <span className="diagram-dot" />
            <span className="diagram-title">KNOWLEDGE-GUIDED GRAPH NEURAL NETWORK ARCHITECTURE</span>
          </div>

          <div className="diagram-svg-wrap">
            <svg
              viewBox="0 0 760 210"
              className="research-gnn-svg"
              role="img"
              aria-label="Knowledge Graph and GNN architecture diagram"
            >
              <defs>
                <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Subgraph background zones */}
              <rect x="20" y="20" width="190" height="170" rx="10" fill="rgba(56, 189, 248, 0.03)" stroke="rgba(56, 189, 248, 0.15)" strokeDasharray="3 3" />
              <text x="115" y="42" fill="#94a3b8" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
                [CLINICAL KNOWLEDGE GRAPH]
              </text>

              <rect x="250" y="20" width="180" height="170" rx="10" fill="rgba(129, 140, 248, 0.03)" stroke="rgba(129, 140, 248, 0.15)" strokeDasharray="3 3" />
              <text x="340" y="42" fill="#94a3b8" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
                [GNN MESSAGE PASSING]
              </text>

              <rect x="470" y="20" width="260" height="170" rx="10" fill="rgba(94, 234, 212, 0.03)" stroke="rgba(94, 234, 212, 0.15)" strokeDasharray="3 3" />
              <text x="600" y="42" fill="#94a3b8" fontSize="10.5" fontFamily="monospace" textAnchor="middle">
                [ENSEMBLE RISK PREDICTOR]
              </text>

              {/* Graph Nodes and Edges in Zone 1 */}
              <g stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.4">
                <line x1="60" y1="75" x2="120" y2="95" />
                <line x1="60" y1="145" x2="120" y2="95" />
                <line x1="120" y1="95" x2="175" y2="70" />
                <line x1="120" y1="95" x2="175" y2="135" />
                <line x1="175" y1="70" x2="175" y2="135" strokeDasharray="2 2" />
              </g>

              {/* Inter-zone connection */}
              <path d="M175 70 C 215 70, 215 90, 280 90" stroke="url(#cyanBlueGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              <path d="M175 135 C 215 135, 215 125, 280 125" stroke="url(#cyanBlueGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />

              {/* Zone 1 Nodes */}
              <circle cx="60" cy="75" r="7" fill="#38bdf8" filter="url(#glow)" />
              <text x="60" y="60" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">D1: Cardio</text>

              <circle cx="60" cy="145" r="7" fill="#38bdf8" filter="url(#glow)" />
              <text x="60" y="165" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">D2: Renal</text>

              <circle cx="120" cy="95" r="9" fill="#0284c7" filter="url(#glow)" />
              <text x="120" y="118" fill="#f8fafc" fontSize="9.5" fontFamily="monospace" textAnchor="middle">Ontology Hub</text>

              <circle cx="175" cy="70" r="7" fill="#38bdf8" filter="url(#glow)" />
              <circle cx="175" cy="135" r="7" fill="#38bdf8" filter="url(#glow)" />

              {/* Zone 2: GNN Layers */}
              <rect x="280" y="70" width="120" height="75" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <text x="340" y="98" fill="#e0e7ff" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
                GraphConv Layer
              </text>
              <text x="340" y="118" fill="#a5b4fc" fontSize="9" fontFamily="monospace" textAnchor="middle">
                Agg(N(v)) + Temporal
              </text>

              {/* Connection from GNN to Ensemble */}
              <path d="M400 108 L 495 108" stroke="url(#purpleGrad)" strokeWidth="2.5" markerEnd="url(#arrow)" />

              {/* Zone 3: Ensemble Predictors */}
              <rect x="495" y="65" width="90" height="36" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="540" y="87" fill="#f8fafc" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Model A (GNN)</text>

              <rect x="495" y="115" width="90" height="36" rx="5" fill="#0f172a" stroke="#5eead4" strokeWidth="1.2" />
              <text x="540" y="137" fill="#f8fafc" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Model B (LSTM)</text>

              {/* Vote collector */}
              <line x1="585" y1="83" x2="625" y2="108" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <line x1="585" y1="133" x2="625" y2="108" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

              <rect x="625" y="88" width="85" height="40" rx="6" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1.6" filter="url(#glow)" />
              <text x="667" y="106" fill="#5eead4" fontSize="10.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Joint Risk
              </text>
              <text x="667" y="120" fill="#99f6e4" fontSize="8.5" fontFamily="monospace" textAnchor="middle">
                P(D1, D2, ... Dn)
              </text>
            </svg>
          </div>
        </div>

        <p className="paper-abstract-text">{paper.abstract}</p>

        <div className="paper-themes-cluster">
          {paper.themes.map((theme) => (
            <span key={theme} className="theme-pill">
              #{theme}
            </span>
          ))}
        </div>

        <div className="paper-actions-row">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-academic-read"
          >
            <span>Read Publication on ResearchGate</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>

          <button
            className="btn-academic-details"
            onClick={() => setDetailsExpanded(!detailsExpanded)}
            aria-expanded={detailsExpanded}
          >
            <span>{detailsExpanded ? 'Hide Methodology Breakdown' : 'View Methodology & Technical Core'}</span>
            <span className={`details-caret ${detailsExpanded ? 'open' : ''}`}>↓</span>
          </button>
        </div>

        {detailsExpanded && (
          <div className="methodology-breakdown-panel">
            <div className="method-grid">
              <div className="method-box">
                <span className="method-num">01 // ONTOLOGY</span>
                <h4>Clinical Knowledge Graph Construction</h4>
                <p>
                  Diseases are mapped as interconnected relational nodes, encoding clinical taxonomy, symptom overlap, and empirical co-morbidity correlations.
                </p>
              </div>

              <div className="method-box">
                <span className="method-num">02 // PROPAGATION</span>
                <h4>Graph Convolutional Message Passing</h4>
                <p>
                  Neighborhood node aggregation propagates phenotypic features through multi-hop relational edges to synthesize high-dimensional disease embeddings.
                </p>
              </div>

              <div className="method-box">
                <span className="method-num">03 // DYNAMICS</span>
                <h4>Temporal Progression (LSTM)</h4>
                <p>
                  Patient longitudinal trajectory vectors model dynamic disease onset, accounting for temporal lag in chronic symptom emergence.
                </p>
              </div>

              <div className="method-box">
                <span className="method-num">04 // ENSEMBLE</span>
                <h4>Multi-Label Ensemble Classification</h4>
                <p>
                  Weighted ensemble calibration synthesizes individual predictor outputs, penalizing false negatives for acute clinical conditions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
