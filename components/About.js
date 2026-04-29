import React from 'react';
import { aboutInfo } from '../data';
import Profile from '../assets/images/Profile.jpeg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="bg-alt">
      <div className="sec-inner">
        <div className="sec-label">01 / about</div>
        <h2 className="sec-title">Who I <span className="dim">Am</span></h2>
        <div className="about-grid">
          <div className="about-img-side">
            <div className="about-avatar-wrap">
              <img
                src={Profile}
                alt="NagaLakshmi Naidu"
                className="about-photo"
              />
              <div className="about-img-border" />
            </div>
            <div className="about-tag-row">
              <span className="about-tag">☕ Java Dev</span>
              <span className="about-tag">🏐 Volleyball</span>
            </div>
          </div>

          <div className="about-text">
            <p>
              Hi! I'm <strong>NagaLakshmi Naidu</strong>, a Computer Science Engineering graduate
              with a passion for Java Full Stack Development. I love building scalable web
              applications that are efficient and secure.
            </p>
            <p>
              I'm skilled in building end-to-end applications using Java, JSP, Servlets, JDBC,
              Spring Boot, MySQL, React, and modern web technologies. Quick learner with strong
              problem-solving and debugging skills.
            </p>
            <p>
              Outside of coding, I'm a university-level volleyball player who won a
              State-Level Under-17 Volleyball Championship — teamwork and competitive
              spirit are in my DNA!
            </p>

            <div className="about-info-grid">
              {aboutInfo.map(item => (
                <div className="info-item" key={item.label}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
