import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm currently pursuing B.Tech in Computer Science and Engineering 
              at CVR College of Engineering with a CGPA of 8.02.
            </p>

            <div className="skills-section">
              <h3>B.Tech in Computer Science and Engineering(2023-2027) </h3>
              <h4>CVR College Of Engineering, Hyderabad</h4>
              <p>
                My B.Tech journey at CVR College of Engineering has been a transformative experience, shaping both my technical skills and personal growth. Pursuing Computer Science and Engineering has strengthened my passion for technology, coding, DSA, and web development. Through personal projects, hackathons, and coding competitions, I’ve honed my problem-solving abilities and teamwork skills while continuously exploring new areas of innovation.
              </p>
            </div>

            <div className="passion-section">
              <h3>Intermediate (MPC) (2021–2023)</h3>
              <h4>T.S.W Residential Junior College (Boys) COE JP Nagar, Kalwakurthy</h4>
              <p>
                My time at TSWRS Junior College (Boys) COE JP Nagar, Kalwakurthy was a period of growth and self-discovery. Living in a hostel taught me independence, discipline, and time management, while building lasting friendships and confidence. Excelling in the MPC stream strengthened my analytical skills and laid a strong foundation for my engineering journey.
              </p>
            </div>

            <div className="goals-section">
              <h3>High School (2016–2021)</h3>
              <h4>T.S Residential School (Boys) Beechupally, Jogulamba Gadwal</h4>
              <p>
                I pursued my schooling at T.S. Residential School (Boys), Beechupally, Jogulamba Gadwal, where I stayed in the hostel from 5th to 10th class. During this time, I developed strong leadership, teamwork, and communication skills through academics, hostel life, and participation in volleyball and kabaddi. These experiences greatly contributed to my personal growth and discipline.
              </p>
            </div>

           <br /><br />

            <div className="key-points">
              <div className="point">
                <span className="highlight">8.02</span>
                <span className="label">CGPA</span>
              </div>
              <div className="point">
                <span className="highlight">MERN</span>
                <span className="label">Stack</span>
              </div>
              <div className="point">
                <span className="highlight">DSA</span>
                <span className="label">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
