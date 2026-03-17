import React, { useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 'humanity-connect',
    title: 'CareBridge-Connecting Donors to needy',
    description: `A full-stack MERN application connecting donors with people in need of food, clothes, and educational materials. Users can register as donors or receivers, post needs, and track contributions — fostering social good and digital community service.`,
    features: [
      'JWT-based secure authentication',
      'Role-based dashboards for donors & receivers',
      'Donation tracking and history system',
      'Categories: Food, Clothing, Education',
      'Real-time updates using MongoDB',
      'Fully responsive UI design'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    impact: `Bridged the gap between donors and the underprivileged, simplifying community-driven charity and resource sharing.`,
    live: '#',
    code: '#'
  },
  {
    id: 'learnhub',
    title: 'LearnHub — MERN Teacher Booking System',
    description: `An intuitive MERN-based platform where students can find and book teachers for online/offline learning. Features smart search, scheduling, and dashboards to promote equal learning opportunities for all.`,
    features: [
      'Student & teacher registration with authentication',
      'Search filters by subject & location',
      'Booking & scheduling system with notifications',
      'Dashboard for managing sessions',
      'Cloud-hosted MongoDB for real-time updates',
      'Mobile-first responsive layout'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    impact: `Created a reliable ecosystem for students to connect with qualified teachers, promoting equal access to education.`,
    live: '#',
    code: '#'
  }
]

const MockImage = ({ title }) => (
  <div className="project-image" aria-hidden>
    <svg width="100%" height="90%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img">
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#0ea5a4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" rx="6" fill="url(#g1)" />
      <g fill="#fff" fontFamily="sans-serif" fontSize="14">
        <text x="20" y="35" fontWeight="700">{title}</text>
        <text x="20" y="60" fill="#e6eef8" fontSize="12">Project Preview</text>
      </g>
    </svg>
  </div>
)

const Projects = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const cards = Array.from(root.querySelectorAll('.project-card'))
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-in')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })

    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={rootRef}>
      <div className="projects-container">
        <header className="projects-header">
          <h2 className="projects-title">My MERN Projects</h2>
          <p className="projects-subtitle">
            A showcase of full-stack MERN applications demonstrating problem-solving, design thinking, and real-world impact.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.id} className="project-card">
              <MockImage title={p.title} />

              <div className="project-content">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-description">{p.description}</p>

                <ul className="project-features">
                  {p.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="project-impact">
                  <strong>Impact:</strong> {p.impact}
                </div>

                <ul className="project-tech">
                  {p.tech.map(t => (
                    <li key={t} className="tech-tag">{t}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a className="project-link" href={p.live} target="_blank" rel="noreferrer">
                    🌐 View Project
                  </a>
                  <a className="project-link" href={p.code} target="_blank" rel="noreferrer">
                    💻 View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
