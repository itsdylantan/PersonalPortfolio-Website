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
            <h3>Java Game of Amazons AI</h3>
            <p>Technologies: Java, Angular, Node.js, TypeScript</p>
            <p>
              Secured 3rd place in a competitive AI competition by building a robust AI player using a Monte Carlo Tree Search algorithm, achieving a 90% win rate.
            </p>
          </div>

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
            <h3>Stock Market Data Engineering</h3>
            <p>Technologies: Python, Apache Kafka, AWS (S3, Glue, EC2)</p>
            <p>
              Real-time stock market data engineering project using Apache Kafka and AWS to process and analyze streaming data for insightful analytics.
            </p>
          </div>

          {/* New Project */}
          <div className="project-card">
            <h3>Predicting Core Body Temperature using Infrared Thermography</h3>
            <p>Technologies: R, ggplot2, glmnet, bestglm</p>
            <p>
              Developed predictive models and created a formal report on predicting core body temperature using infrared thermography (IRT). Applied regression analysis techniques in R, utilizing Gaussian and Gamma family distributions to develop predictive models with high accuracy.
            </p>
            <p>
              Employed variable selection methods such as Forward Selection, Backward Elimination, LASSO, and Ridge regression to optimize model performance. Conducted extensive data preprocessing, handled missing values, created dummy variables, and addressed multicollinearity by removing variables with high Variance Inflation Factors (VIFs).
            </p>
            <p>
              Utilized ggplot2 for visualization and bestglm for subset selection, enhancing the reliability of the results.
            </p>
            {/* Adjusted link to the PDF file with basename */}
            <a
              href={`${process.env.PUBLIC_URL}/pred_core_temp_infrared_dylan_irfan.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
