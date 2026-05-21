import React from 'react';
import { FiEye, FiDownload, FiFileText } from 'react-icons/fi';
import './Resume.css';

const Resume = () => {
  const resumePath = '/Resume-IV.pdf';

  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        {/* Section badge */}
        <span className="resume-badge">
          <FiFileText className="resume-badge-icon" />
          Resume
        </span>

        <h2 className="resume-title">My Resume</h2>
        <p className="resume-description">
          A detailed overview of my professional experience, academic background, and technical skills — all in one place.
        </p>

        {/* Embedded PDF viewer — hidden on mobile */}
        <div className="resume-viewer-wrapper">
          <div className="resume-viewer-glow" />
          <iframe
            src={`${resumePath}#toolbar=0&navpanes=0`}
            className="resume-iframe"
            title="Sidhu's Resume"
            loading="lazy"
          />
        </div>

        {/* Action Buttons — always visible */}
        <div className="resume-buttons">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn resume-btn-view"
            id="view-resume-btn"
          >
            <FiEye className="resume-btn-icon" />
            View Resume
          </a>
          <a
            href={resumePath}
            download="Sidhu_Resume.pdf"
            className="resume-btn resume-btn-download"
            id="download-resume-btn"
          >
            <FiDownload className="resume-btn-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
