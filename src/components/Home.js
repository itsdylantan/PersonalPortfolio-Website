// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1>Dylan Tan</h1>
        <p className="subheading">Data Scientist | Software Engineer | Innovator</p>
        
        <div className="bio">
          <p>
            I specialize in building intelligent systems and crafting innovative solutions to help solve modern challenges. With expertise in data science, software engineering, and real-time data processing, I’m passionate about transforming complex data into actionable insights.
          </p>
          <p>
            Currently working on real-time stock market analysis and creating data-driven tools to enhance decision-making.
          </p>
        </div>

        <div className="home-buttons">
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
          <a href="#projects" className="btn">View My Projects</a>
        </div>

        <div className="social-links">
          <a href="https://github.com/itsdylantan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dylantan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
