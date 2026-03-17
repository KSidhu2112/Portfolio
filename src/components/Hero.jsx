import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id='Hero-page'>
      <div className="hero-overlay" />
      <div className="hero-content container">

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            {/* Image served from public/profile.jpg (place your Profile.jpg as public/profile.jpg) */}
            <img
              className="profile-image"
              src="/Profile.jpg"
              alt="K Sidhu"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>

        <div className="hero-text">
          <img
            className="profile-image-hero-mobile"
            src="/Profile.jpg"
            alt="K Sidhu"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <h2 className="hero-welcome">Hi, I'm</h2>
          <h1 className="hero-name">K Sidhu</h1>
          <p className="hero-role">MERN Full Stack Developer</p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">See Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
