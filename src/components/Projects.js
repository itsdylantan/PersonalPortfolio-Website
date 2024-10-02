// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Parkview: Real-time Parking Space Finder</h3>
            <p>Technologies: Python, OpenCV, React Native, Firebase</p>
            <p>
              First Place Winner in BC Hacks 2024 - Developed a computer vision system to detect available parking spaces in real time, improving parking efficiency.
            </p>
            <a
              href="https://devpost.com/software/parkview?ref_content=my-projects-tab&ref_feature=my_projects"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Java Game of Amazons AI</h3>
            <p>Technologies: Java, Angular, Node.js, TypeScript</p>
            <p>
              Secured 3rd place in a competitive AI competition by building a robust AI player using a Monte Carlo Tree Search algorithm, achieving a 90% win rate.
            </p>
            <a
              href="https://github.com/itsdylantan/game-of-amazons-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Stock Market Data Engineering</h3>
            <p>Technologies: Python, Apache Kafka, AWS (S3, Glue, EC2)</p>
            <p>
              Real-time stock market data engineering project using Apache Kafka and AWS to process and analyze streaming data for insightful analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
