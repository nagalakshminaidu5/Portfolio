import React from 'react';
import { experienceData, certificationsData, achievementsData } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="bg-alt">
      <div className="sec-inner">
        <div className="sec-label">05 / experience</div>
        <h2 className="sec-title">Where I've <span className="dim">Worked</span></h2>

        <div className="exp-list">
          {experienceData.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-dot" />
              <div className="exp-period">{e.period}</div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="subsec-label">Certifications</div>
        <div className="cert-grid">
          {certificationsData.map((c, i) => (
            <div className="cert-card" key={i}>
              <span className="cert-icon">{c.icon}</span>
              <span className="cert-name">{c.name}</span>
            </div>
          ))}
        </div>

        <div className="subsec-label">Achievements</div>
        <div className="achieve-list">
          {achievementsData.map((a, i) => (
            <div className="achieve-item" key={i}>
              <span className="achieve-icon">{a.icon}</span>
              <p className="achieve-text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
