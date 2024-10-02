// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Parkview: Real-time Parking Space Finder</h3>
          <p>Winner at BC Hacks 2024. Implemented real-time parking detection with OpenCV and Firebase.</p>
        </li>
        <li>
          <h3>Game of Amazons AI</h3>
          <p>Developed an AI for the Game of Amazons using Monte Carlo Tree Search.</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
