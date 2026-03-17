import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-description">
          Detailed overview of my professional experience, academic background, and technical skills.
        </p>

        <div className="resume-buttons">
          <Link
            to="/resume"
            className="resume-btn view-resume-btn"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
