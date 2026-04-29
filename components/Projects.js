import React from 'react';
import { projectsData } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="sec-inner">
        <div className="sec-label">04 / projects</div>
        <h2 className="sec-title">Things I've <span className="dim">Built</span></h2>
        <div className="proj-grid">
          {projectsData.map((p, i) => (
            <div className="proj-card" key={i}>
              <div className="proj-img-wrap">
                <img src={p.image} alt={p.title} className="proj-img" />
                <div className="proj-overlay">
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-btn">View on GitHub →</a>
                </div>
              </div>
              <div className="proj-body">
                <div className="proj-num">{p.num}</div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
