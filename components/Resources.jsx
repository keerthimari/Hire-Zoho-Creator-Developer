'use client'
import { useEffect, useRef } from 'react'

const articles = [
  {
    tag: 'Guide',
    tagColor: '#3b82f6',
    icon: 'bi-book',
    title: 'When to choose Zoho Creator over Airtable, Glide or Bubble',
    desc: 'A practical decision framework that compares licensing economics, Deluge depth, mobile parity, and enterprise readiness.',
    read: '8 min read',
  },
  {
    tag: 'Tutorial',
    tagColor: '#8b5cf6',
    icon: 'bi-mortarboard',
    title: 'Production-grade Deluge: patterns we use on every build',
    desc: 'Modular scripts, error handling, retry logic, audit logging — the patterns that separate playground Deluge from production code.',
    read: '12 min read',
  },
  {
    tag: 'Playbook',
    tagColor: '#f97316',
    icon: 'bi-clipboard-data',
    title: 'How to audit a half-built Creator app before extending it',
    desc: "Inheriting someone else's Creator codebase? Here's the 14-point audit checklist we run before quoting any rework engagement.",
    read: '10 min read',
  },
]

export default function Resources() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resources" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <span className="section-label">Resources</span>
            <h2 className="section-title">Zoho insights & <span className="grad-blue-purple">expert resources</span></h2>
            <p className="section-sub">Stay ahead with the latest Zoho tips, tutorials, and expert resources from India's trusted Zoho Partner.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#" className="btn-outline-custom">View All Articles <i className="bi bi-arrow-right" /></a>
          </div>
        </div>

        <div className="row g-4">
          {articles.map((a, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={a.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <a href="#" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  background: '#fff', border: '1px solid #e8e3dd',
                  borderRadius: 18, padding: '28px', height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = `0 18px 40px ${a.tagColor}25`
                    e.currentTarget.style.borderColor = a.tagColor
                    e.currentTarget.querySelector('.res-arrow').style.transform = 'translateX(6px)'
                    e.currentTarget.querySelector('.res-arrow').style.color = a.tagColor
                    e.currentTarget.querySelector('.res-icon').style.transform = 'rotate(-6deg) scale(1.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.borderColor = '#e8e3dd'
                    e.currentTarget.querySelector('.res-arrow').style.transform = ''
                    e.currentTarget.querySelector('.res-arrow').style.color = '#94a3b8'
                    e.currentTarget.querySelector('.res-icon').style.transform = ''
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <div className="res-icon" style={{
                      width: 44, height: 44, borderRadius: 11,
                      background: `${a.tagColor}15`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}>
                      <i className={`bi ${a.icon}`} style={{ fontSize: '1.2rem', color: a.tagColor }} />
                    </div>
                    <span style={{
                      display: 'inline-block', background: `${a.tagColor}15`, color: a.tagColor,
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.8px',
                      textTransform: 'uppercase', padding: '4px 12px', borderRadius: 50,
                      fontFamily: 'Inter,sans-serif',
                    }}>{a.tag}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.05rem', fontWeight: 700, color: '#0f172a',
                    marginBottom: 12, lineHeight: 1.35, fontFamily: 'Plus Jakarta Sans,sans-serif',
                  }}>{a.title}</h3>

                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginBottom: 22, flex: 1 }}>{a.desc}</p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #f0ece8' }}>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'Inter,sans-serif', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <i className="bi bi-clock" /> {a.read}
                    </span>
                    <span className="res-arrow" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.3s ease', fontFamily: 'Plus Jakarta Sans,sans-serif' }}>
                      Read <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
