import React from 'react';
import { skillsData } from '../data';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="sec-inner">
        <div className="sec-label">02 / skills</div>
        <h2 className="sec-title">Tech <span className="dim">Stack</span></h2>
        {skillsData.map(group => (
          <div key={group.category}>
            <div className="skills-cat">{group.category}</div>
            <div className="skills-grid">
              {group.skills.map(skill => (
                <div className="skill-chip" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
