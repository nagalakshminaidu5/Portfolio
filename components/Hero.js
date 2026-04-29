import React, { useEffect, useState } from 'react';
import HeroPic from '../assets/images/Hero-pic.jpeg';
import './Hero.css';

const roles = ['Java Full Stack Developer', 'Web App Builder', 'Problem Solver', 'Spring Boot Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="hero-inner">
        <div className="hero-tag">
          <span className="tag-dot" />
          open to opportunities
        </div>

        <h1 className="hero-name">
          NagaLakshmi<br />
          <span className="accent">Naidu</span>
        </h1>

        <div className="hero-role">
          <span className="prompt">$ role = </span>
          <span className="typed">"{displayed}<span className="cursor">|</span>"</span>
        </div>

        <p className="hero-desc">
          Computer Science Engineering graduate passionate about building scalable,
          user-friendly, and secure web applications using Java Full Stack technologies.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('#projects')}>View Projects</button>
          <button className="btn-outline" onClick={() => scrollTo('#contact')}>Get in Touch</button>
        </div>

        <div className="hero-stats">
          <div className="stat"><span className="stat-num">4+</span><span className="stat-label">Projects</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">2</span><span className="stat-label">Internships</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">8.06</span><span className="stat-label">CGPA</span></div>
        </div>

        <div className="scroll-hint">
          <span className="scroll-line" />
          scroll to explore
        </div>
      </div>

      {/* side decorative image */}
      <div className="hero-visual">
        <div className="hero-img-wrap">
          <img
            src={HeroPic}
            alt="Developer"
          />
          <div className="img-border" />
        </div>
        <div className="floating-badge badge-1">
          <span>☕</span> Java
        </div>
        <div className="floating-badge badge-2">
          <span>🌱</span> Spring Boot
        </div>
        <div className="floating-badge badge-3">
          <span>⚛️</span> React
        </div>
      </div>
    </section>
  );
}
