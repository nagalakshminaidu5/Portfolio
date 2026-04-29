import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="logo" href="#home" onClick={e => handleNav(e, '#home')}>
          <span>{'{'}</span>NLN<span>{'}'}</span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={e => handleNav(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
