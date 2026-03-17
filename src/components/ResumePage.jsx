import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumePage.css';

const ResumePage = () => {
  const navigate = useNavigate();

  return (
    <div className="resume-page">
      <div className="resume-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Portfolio
        </button>
        <h1 className="resume-title">My Resume</h1>
        <a href="/resume.png" download className="download-btn-header">
           Download PDF / PNG
        </a>
      </div>
      <div className="resume-display-container">
        <img src="/resume.png" alt="Resume" className="resume-image" />
      </div>
    </div>
  );
};

export default ResumePage;
