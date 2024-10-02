// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/PersonalPortfolio-Website"> {/* Set basename to your GitHub repo folder */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
