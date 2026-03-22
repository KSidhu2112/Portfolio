import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi';
import './ResumePage.css';

const ResumePage = () => {
  const navigate = useNavigate();
  const resumePath = '/Sidhu_Resume.pdf';

  return (
    <div className="resume-page">
      <div className="resume-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FiArrowLeft className="back-btn-icon" />
          Back to Portfolio
        </button>
        <h1 className="resume-page-title">My Resume</h1>
        <div className="resume-header-actions">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="header-action-btn header-view-btn"
          >
            <FiExternalLink />
            Open in Tab
          </a>
          <a
            href={resumePath}
            download="Sidhu_Resume.pdf"
            className="header-action-btn header-download-btn"
          >
            <FiDownload />
            Download
          </a>
        </div>
      </div>

      <div className="resume-display-container">
        <iframe
          src={`${resumePath}#toolbar=1&navpanes=0`}
          className="resume-page-iframe"
          title="Sidhu's Resume — Full View"
        />
      </div>

      {/* Mobile fallback — show buttons when iframe is hidden */}
      <div className="resume-mobile-fallback">
        <p className="mobile-fallback-text">
          PDF preview is not available on small screens. Use the buttons below to view or download.
        </p>
        <div className="mobile-fallback-buttons">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="header-action-btn header-view-btn"
          >
            <FiExternalLink />
            View Resume
          </a>
          <a
            href={resumePath}
            download="Sidhu_Resume.pdf"
            className="header-action-btn header-download-btn"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
