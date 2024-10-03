// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-details">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/50398319_00301_0201_Large.jpg`} alt="Dylan Tan" className="profile-pic" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a Data Science graduate passionate about solving complex problems through 
              data automation, machine learning, and real-time data processing. With a strong foundation in 
              Python, Java, SQL, and data visualization tools, I’ve contributed to several innovative projects, 
              including real-time stock market data engineering and workflow automation.
            </p>
            <p>
              My expertise extends to using Apache Kafka and AWS (S3, EC2) for streaming data, creating automated pipelines, 
              and delivering actionable insights. I continually push myself to learn the latest technologies and bring scalable, 
              data-driven solutions to every challenge.
            </p>
            <p>
              Recently, I led a team to secure 1st place at BC Hacks 2024 for developing a real-time parking space finder using 
              computer vision and mobile app integration. I also built a robust AI for the Game of Amazons, which ranked 
              3rd in a competitive AI challenge.
            </p>
            <p>
              When I'm not coding or analyzing data, I enjoy exploring new tools, reading about emerging technologies, and expanding my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
