// src/components/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1>Dylan Tan</h1>
        <p className="subheading">Data Scientist | Software Developer</p>
        
        <div className="bio">
          <p>
          I specialize in data automation, real-time data engineering, and developing intelligent systems. With expertise in Python, SQL, and cloud technologies like AWS, I’m passionate about transforming complex data into actionable insights and streamlining processes through automation.
</p>
<p>Currently pursuing CFA Level 1 Certification. Expected Exam Date: May 2025</p>
        </div>

        <div className="home-buttons">
        <Link to="/resume" className="btn">View Resume</Link> 

        </div>

        <div className="social-links">
          <a href="https://github.com/itsdylantan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dylan-tan-717a57207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
