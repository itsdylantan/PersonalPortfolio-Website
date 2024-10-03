// src/components/Home.js
import React, { useState } from 'react';
import './Home.css';
import Resume from './Resume';  // Import the Resume component

const Home = () => {
  const [showResume, setShowResume] = useState(false);  // State to control the modal visibility

  const openResumeModal = () => {
    setShowResume(true);
  };

  const closeResumeModal = () => {
    setShowResume(false);
  };

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
          {/* Button to open the resume modal */}
          <button className="btn" onClick={openResumeModal}>View Resume</button>
        </div>

        <div className="social-links">
          <a href="https://github.com/itsdylantan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dylan-tan-717a57207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Modal for Resume */}
      {showResume && (
        <div className="modal-overlay" onClick={closeResumeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeResumeModal}>&times;</button>
            <div className="modal-scroll">
              <Resume /> {/* Render the Resume component */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
