'use client'
import { useEffect, useRef } from 'react'

const problems = [
  {
    icon: 'bi-file-earmark-spreadsheet',
    title: 'Spreadsheets that have outgrown themselves',
    desc: 'Too many tabs. Formulas only one person understands. Data scattered across five locations.',
  },
  {
    icon: 'bi-puzzle',
    title: 'Disconnected Zoho apps doing duplicate work',
    desc: "CRM doesn't talk to Books. Inventory isn't synced with Creator. Your staff copies data by hand and you pay for it.",
  },
  {
    icon: 'bi-tools',
    title: 'Half-built Creator apps from a previous freelancer',
    desc: 'Double-fired workflows. Approvals routed to the wrong person. Deluge scripts no one wants to touch.',
  },
  {
    icon: 'bi-cash-stack',
    title: 'Quotes from agencies that never ship',
    desc: 'Very high cost. Long timelines. No clear delivery or results to verify.',
  },
]

export default function TheWhy() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="the-why" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 56px' }}>
          <span className="section-label">The Why</span>
          <h2 className="section-title">
            You don't need more software.<br />
            You need a partner who <span className="grad-purple-orange">finishes</span>.
          </h2>
        </div>

        <div className="row g-4">
          {problems.map((p, i) => (
            <div className="col-md-6 fade-up" key={p.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dd', borderRadius: 16,
                padding: '32px 30px', height: '100%',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default', position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 18px 50px rgba(15,23,42,0.10)'
                  e.currentTarget.style.borderColor = '#d4cfc9'
                  e.currentTarget.querySelector('.prob-icon').style.background = 'linear-gradient(135deg,#3b82f6,#8b5cf6)'
                  e.currentTarget.querySelector('.prob-icon i').style.color = '#fff'
                  e.currentTarget.querySelector('.prob-num').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e8e3dd'
                  e.currentTarget.querySelector('.prob-icon').style.background = 'rgba(239,68,68,0.1)'
                  e.currentTarget.querySelector('.prob-icon i').style.color = '#ef4444'
                  e.currentTarget.querySelector('.prob-num').style.opacity = '0.08'
                }}
              >
                <div className="prob-num" style={{
                  position: 'absolute', top: 30, right: 24,
                  fontFamily: 'inter,sans-serif',
                  fontSize: '2.5rem', fontWeight: 800,
                  background: 'linear-gradient(135deg,#3b82f6,#8b5cf6,#f97316)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.08, lineHeight: 1, transition: 'opacity 0.4s ease', pointerEvents: 'none',
                }}>0{i + 1}</div>

                <div className="prob-icon" style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'rgba(239,68,68,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22, transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}>
                  <i className={`bi ${p.icon}`} style={{ fontSize: '1.4rem', color: '#ef4444', transition: 'color 0.4s ease' }} />
                </div>

                <h3 style={{
                  fontFamily: 'inter,sans-serif', fontSize: '1.15rem', fontWeight: 700,
                  color: '#0f172a', marginBottom: 12, lineHeight: 1.3,
                }}>{p.title}</h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div className="fade-up text-center" style={{ marginTop: 48 }}>
          <p style={{
            fontFamily: 'inter,sans-serif',
            fontSize: '1.05rem', color: '#334155', maxWidth: 720, margin: '0 auto 24px',
            lineHeight: 1.6, fontWeight: 500,
          }}>
            If any of this sounds like your last quarter — <span style={{ color: '#0f172a', fontWeight: 700 }}>you're in the right place.</span>
            {' '}ZoFlowX exists for teams who are done with false commitments. We are a top Zoho partner in India because we treat Creator as an engineering platform and not a no-code toy. We audit your stuff. We tell you what's usable. Then we build.
          </p>
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation?utm_source=website&utm_medium=talktoexpertcta&utm_campaign=zoflowweb" className="btn-gradient" style={{ background: '#ef2f2f',
    color: '#ffffff',
    borderRadius: 12,
    padding: '0.9rem 2rem',
    fontFamily: 'Inter,sans-serif',
    fontWeight: 700,
    fontSize: '0.95rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    boxShadow: '0 12px 24px rgba(239, 47, 47, 0.24)', }}>
            A working app in weeks, not quarters <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
