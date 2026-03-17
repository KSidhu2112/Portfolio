import React, { useEffect, useRef } from 'react'
import './Skills.css'

const skillsData = [
  {
    id: 'mern',
    title: 'MERN Stack Development',
    desc: 'Build full-stack apps with MongoDB, Express, React and Node.js — REST APIs, auth, and SPA frontends.',
    percent: '88%',
    tags: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    id: 'dsa',
    title: 'DSA & Problem Solving',
    desc: 'Algorithmic thinking, data structures and competitive programming (LeetCode, contests).',
    percent: '82%',
    tags: ['Algorithms', 'Data Structures', 'LeetCode']
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    desc: 'Strong foundation in C and Java (OOP) with clean, testable code.',
    percent: '78%',
    tags: ['C', 'Java', 'OOP']
  },
  {
    id: 'cs',
    title: 'Core CS Subjects',
    desc: 'Database systems, Computer Networks and Operating Systems — system-level understanding.',
    percent: '80%',
    tags: ['DBMS', 'Networks', 'OS']
  }
]

const Icon = ({ name }) => {
  // simple inline SVG icons for a polished look without external deps
  if (name === 'mern') return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" stroke="rgba(96,165,250,0.85)" strokeWidth="1.5" fill="rgba(96,165,250,0.06)" />
      <path d="M6 12c0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6-6-2.6863-6-6z" stroke="#6EE7B7" strokeWidth="1.2" />
    </svg>
  )
  if (name === 'dsa') return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#C084FC" strokeWidth="1.4" fill="rgba(192,132,252,0.06)" />
      <path d="M7 9h10M7 13h6" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
  if (name === 'languages') return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" stroke="#60A5FA" strokeWidth="1.2" fill="rgba(96,165,250,0.04)" />
      <path d="M8 16c1.333-2 4-2 6 0" stroke="#6EE7B7" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
  if (name === 'cs') return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#C084FC" strokeWidth="1.2" fill="rgba(192,132,252,0.03)" />
      <path d="M7 9h10M7 12h10M7 15h6" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
  return null
}

const Skills = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const items = Array.from(root.querySelectorAll('.skill-card'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('animate-in')
          // stop observing once animated
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.15 })

    items.forEach(i => { observer.observe(i) })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={rootRef}>
      <div className="skills-container">
        <header className="skills-header">
          <h2 className="skills-title">Tech Stack</h2>
          <p className="skills-subtitle">Here’s what I’ve mastered across full-stack development and computer science.</p>
        </header>

        <div className="skills-grid">
          {skillsData.map(s => (
            <article key={s.id} className="skill-card" style={{ ['--percent']: s.percent }} data-percent={s.percent}>
              <div className="skill-top">
                <div className="skill-badge" aria-hidden>
                  <Icon name={s.id} />
                </div>
                <div>
                  <div className="skill-name">{s.title}</div>
                  <div className="skill-desc">{s.desc}</div>
                </div>
              </div>

              <div className="skill-list" aria-hidden>
                {s.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>

              <div className="skill-meter" aria-hidden>
                <i />
              </div>
            </article>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Skills
