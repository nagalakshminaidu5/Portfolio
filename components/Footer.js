import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo"><span>{'{'}</span>NLN<span>{'}'}</span></div>
        <p className="footer-text">Designed & built with <span className="heart">♥</span> by NagaLakshmi Naidu · 2025</p>
        <p className="footer-sub">Java Full Stack Developer</p>
      </div>
    </footer>
  );
}
