// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><span>Phone:</span> +1 (250) 864-1680</p>
        <p><span>Email:</span> <a href="mailto:dylantan16@gmail.com">dylantan16@gmail.com</a></p>
        <p><span>GitHub:</span> <a href="https://github.com/itsdylantan" target="_blank" rel="noopener noreferrer">https://github.com/itsdylantan</a></p>
      </div>
    </section>
  );
}

export default Contact;
