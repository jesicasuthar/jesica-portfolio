import { useState } from 'react';
import { CERTIFICATIONS, CertificateItem } from '../data';

export function Certifications() {
  const [filter, setFilter] = useState<'all' | 'cloud-ai' | 'uipath' | 'leadership-sec'>('all');

  const filteredCerts =
    filter === 'all'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="portfolio-section certs-section">
      <div className="section-header">
        <span className="section-pill">Verified Credentials</span>
        <h2 className="section-title">Certifications &amp; Accreditations</h2>
        <p className="section-subtitle">
          Official diplomas and industry credentials from Google Cloud, IBM SkillsBuild, Amazon Web Services, UiPath Academy, McKinsey &amp; Company, and MIT Affiliates.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="certs-filter-tabs">
        <button
          className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Credentials ({CERTIFICATIONS.length})
        </button>
        <button
          className={`tab-btn ${filter === 'cloud-ai' ? 'active' : ''}`}
          onClick={() => setFilter('cloud-ai')}
        >
          Google Cloud, IBM &amp; AWS ({CERTIFICATIONS.filter((c) => c.category === 'cloud-ai').length})
        </button>
        <button
          className={`tab-btn ${filter === 'uipath' ? 'active' : ''}`}
          onClick={() => setFilter('uipath')}
        >
          UiPath Academy RPA ({CERTIFICATIONS.filter((c) => c.category === 'uipath').length})
        </button>
        <button
          className={`tab-btn ${filter === 'leadership-sec' ? 'active' : ''}`}
          onClick={() => setFilter('leadership-sec')}
        >
          Leadership &amp; Security ({CERTIFICATIONS.filter((c) => c.category === 'leadership-sec').length})
        </button>
      </div>

      {/* Certificates Grid */}
      <div className="certs-grid">
        {filteredCerts.map((cert: CertificateItem) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-card-top">
              <span className="cert-issuer-badge">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-desc">{cert.description}</p>

            {cert.credentialId && (
              <div className="cert-id-tag">
                <span className="id-label">Credential:</span>
                <span className="id-code">{cert.credentialId}</span>
              </div>
            )}

            <div className="cert-skills-list">
              {cert.keySkills.map((k) => (
                <span key={k} className="cert-skill-pill">
                  {k}
                </span>
              ))}
            </div>

            <div className="cert-actions">
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-pdf"
                  title="View original PDF certificate"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>View PDF Document</span>
                </a>
              )}

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-verify"
                  title="Verify Badge on Credly"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Credly Verify</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
