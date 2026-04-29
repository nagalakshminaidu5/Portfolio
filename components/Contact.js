import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact">
      <div className="sec-inner">
        <div className="sec-label">06 / contact</div>
        <h2 className="sec-title">Let's <span className="dim">Connect</span></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-desc">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hi — my inbox is always open.
            </p>
            <div className="contact-links">
              <a href="mailto:nagalakshminaidu5@gmail.com" className="contact-link">
                <div className="contact-icon">@</div>
                nagalakshminaidu5@gmail.com
              </a>
              <a href="tel:+918143969635" className="contact-link">
                <div className="contact-icon">📞</div>
                +91 8143969635
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">GH</div>
                github.com/nagalakshminaidu
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">LI</div>
                linkedin.com/in/nagalakshminaidu
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            {sent && <div className="sent-msg">✅ Message sent! I'll get back to you soon.</div>}
            <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required />
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="Your Email" required />
            <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message" rows={5} required />
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
