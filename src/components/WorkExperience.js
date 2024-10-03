// src/components/WorkExperience.js
import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section className="work-experience-section" id="work-experience">
      <div className="work-experience-content">
        <h2>Work Experience</h2>
        
        <div className="experience-box">
          <div className="experience">
            <h3>Data Analyst Co-op, Planning & Scheduling - Suncor Energy Inc.</h3>
            <p>Sept 2022 - Sept 2023</p>
            <ul>
              <li>Created interactive dashboards using Excel, Power BI, and Power Apps, streamlining data collection and visualization.</li>
              <li>Automated data extraction from SAP S/4 HANA with Python, reducing manual workload by 20 hours per week.</li>
              <li>Designed and integrated Excel VBA and Python scripts to create data pipelines with SAP, saving $66,780 annually through workflow automation.</li>
            </ul>
          </div>
        </div>

        {/* Add additional experience sections here if needed */}
      </div>
    </section>
  );
}

export default WorkExperience;
