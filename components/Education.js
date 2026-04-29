import React from 'react';
import { educationData } from '../data';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="bg-alt">
      <div className="sec-inner">
        <div className="sec-label">03 / education</div>
        <h2 className="sec-title">My <span className="dim">Background</span></h2>
        <div className="edu-list">
          {educationData.map((item, i) => (
            <div className="edu-card" key={i}>
              <img src={item.image} alt={item.institution} className="edu-img" />
              <div className="edu-body">
                <div className="edu-year">{item.year}</div>
                <div className="edu-deg">{item.degree}</div>
                <div className="edu-inst">{item.institution}</div>
                <div className="edu-grade">{item.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
