// src/components/Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-content">
        <h1>Dylan Tan</h1>
        <p>Phone: +1 (250) 864-1680 | Email: <a href="mailto:dylantan16@gmail.com">dylantan16@gmail.com</a> | GitHub: <a href="https://github.com/itsdylantan" target="_blank" rel="noopener noreferrer">https://github.com/itsdylantan</a></p>
        
        <h2>Summary</h2>
        <p>
          Data Science graduate skilled in data automation, regression analysis, and visualization. Proficient in Python, Java, SQL, Excel, VBA and PowerBI. Currently working on a real-time stock market data engineering project using Apache Kafka and AWS (S3, EC2) for streaming data analysis.
        </p>

        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Python, R, Java, SQL, HTML, CSS, Matlab, VBA</li>
          <li><strong>Tools and Platforms:</strong> Microsoft Excel, VBA, SAP S/4HANA, Microsoft PowerBI, Tableau, AWS, Firebase</li>
          <li><strong>Frameworks & Libraries:</strong> React-Native, R-Studio</li>
        </ul>

        <h2>Work Experience</h2>
        <h3>Data Analyst Co-op, Planning & Scheduling - Suncor Energy Inc.</h3>
        <p>Sept 2022 - Sept 2023</p>
        <ul>
          <li>Created interactive dashboards using Microsoft Excel, Power BI, and Power Apps, streamlining data collection and visualization to empower stakeholders with data-driven decision-making tools.</li>
          <li>Utilized Python to automate the extraction of maintenance report data from SAP S/4 HANA to Microsoft Excel, reducing the process time by at least 20 hours per week and enhancing data accuracy.</li>
          <li>Designed an innovative SAP Work Order Automation Tool, further enhancing workflow automation and error reduction, contributing to improved operational efficiency.</li>
          <li>Developed and integrated 13 tailored Excel VBA and Python scripts to create data pipelines with SAP using the SAP GUI Scripting API, significantly increasing efficiency and reducing human error, resulting in annual savings of $66,780 through workflow automation.</li>
        </ul>

        <h2>Projects</h2>
        <h3>Parkview: Real-time Parking Space Finder | Python, OpenCV, React Native, Firebase</h3>
        <p>First Place Winner in BC Hacks 2024 - The Largest Hackathon in the Okanagan</p>
        <ul>
          <li>Developed and implemented a computer vision system with OpenCV to detect and identify available parking spaces in real-time, improving parking efficiency and reducing driver search time for available spots.</li>
          <li>The system dynamically maps the video feed to the graphical parking spot indicators in the mobile app for real-time guidance, allowing users to check for parking spots before heading to their destination.</li>
          <li>Leveraged React Native to ensure cross-platform compatibility, providing a seamless experience for both iOS and Android users.</li>
        </ul>

        <h3>Java Game of Amazons AI | Java, Angular, Node.js, TypeScript</h3>
        <p>Collaborated with a team of three to develop an adversarial game-playing AI for the Game of Amazons, securing 3rd place in a competitive Artificial Intelligence competition.</p>
        <ul>
          <li>Built a robust AI player using a Monte Carlo Tree Search (MCTS) algorithm, achieving a 90% win rate by running thousands of simulations per move to evaluate 10-20 moves ahead and optimize decision-making.</li>
          <li>Enhanced the AI's strategic depth by incorporating advanced techniques such as backpropagation for value estimation, significantly improving its competitive performance.</li>
        </ul>

        <h2>Education</h2>
        <p><strong>University of British Columbia, B.Sc. Major in Data Science</strong> (Graduated: 2024)</p>
        <ul>
          <li>Cumulative Grade Average: 86%</li>
          <li>Deputy Vice-Chancellor scholarship: 2021, 2022 and 2023</li>
          <li>Data Science Honorable Mention Award: 2021</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
