import React from 'react';
import './Achievements.css';
import { FaMedal, FaTrophy, FaCertificate, FaCode, FaLinkedin } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements & Certifications</h2>
        <div className="achievements-header">
          <p className="achievements-subtitle">
            Milestones that reflect my consistency, learning, and problem-solving journey.
          </p>
          <a 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-achievements-btn"
          >
            <FaLinkedin /> View All on LinkedIn
          </a>
        </div>

        {/* Coding Achievements Section */}
        <div className="achievements-section">
          <h3 className="section-heading"><FaCode /> Competitive Programming</h3>
          <div className="cards-container">
            {/* LeetCode */}
            <div className="achievement-card">
              <FaMedal className="achievement-icon leetcode" />
              <h4>LeetCode</h4>
              <ul>
                <li>🧩 Solved 350+ Problems</li>
                <li>⭐ Rating 1550+</li>
                <li>🏅 200/100/50 Day Streak Badges</li>
              </ul>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link">View Post</a>
            </div>

            {/* CodeChef */}
            <div className="achievement-card">
              <FaTrophy className="achievement-icon codechef" />
              <h4>CodeChef</h4>
              <ul>
                <li>🧩 Solved 250+ Problems</li>
                <li>⭐ Rating 1450+</li>
                <li>🎖️ 50 Day Streak Badge</li>
              </ul>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link">View Post</a>
            </div>

            {/* Overall Contests */}
            <div className="achievement-card">
              <FaCode className="achievement-icon contests" />
              <h4>Overall Contests</h4>
              <ul>
                <li>🔥 150+ Contests Across Platforms</li>
              </ul>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link">View Post</a>
            </div>

            {/* Smart Interviews */}
            <div className="achievement-card">
              <FaMedal className="achievement-icon smartinterviews" />
              <h4>Smart Interviews</h4>
              <ul>
                <li>🏆 Gold Streak Award</li>
                <li>✅ Completed DSA Program</li>
              </ul>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link">View Post</a>
            </div>
          </div>
        </div>
        <br /><br />

        {/* Hackathons & Experience Section */}
        <div className="achievements-section">
          <h3 className="section-heading"><FaCode /> Hackathons & Contests</h3>
          <div className="cards-container">
            <div className="achievement-card full-width">
              <ul className="horizontal-list">
                <li>🚀 CMR HackFest 3.0</li>
                <li>⚡ IIT Hyderabad Code Clash</li>
                <li>🎓 VNR Coding Contests</li>
              </ul>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link mt-2">View Post</a>
            </div>
          </div>
        </div>
        <br /><br />

        {/* Certificates Section */}
        <div className="achievements-section">
          <h3 className="section-heading"><FaCertificate /> Certificates</h3>
          <div className="cards-container">
            <div className="achievement-card">
              <FaCertificate className="achievement-icon java" />
              <h4>Java Certificate</h4>
              <p>Certified in Core Java Programming</p>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link center">View Certificate</a>
            </div>

            <div className="achievement-card">
              <FaCertificate className="achievement-icon dsa" />
              <h4>Java + DSA Certificate</h4>
              <p>Certified in Data Structures & Algorithms using Java</p>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link center">View Certificate</a>
            </div>

            <div className="achievement-card">
              <FaCertificate className="achievement-icon coding" />
              <h4>Participation Certificate</h4>
              <p>Participated in Coding Competition Of VNRVJIET</p>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="card-link center">View Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
