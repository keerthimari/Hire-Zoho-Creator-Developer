'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    title: 'Discovery Call',
    desc: 'A 45-minute conversation about your processes, your pain points and what success looks like. Free, no obligation, no pre-call homework required.',
    icon: 'bi-chat-dots-fill',
    duration: '45 min · Free',
  },
  {
    title: 'Scoping & Architecture',
    desc: 'We map your data model, define modules, sketch workflows and lock a fixed scope with milestones you can hold us to.',
    icon: 'bi-diagram-3',
    duration: 'Week 1',
  },
  {
    title: 'Build & Iterate',
    desc: 'Weekly demos on your own Creator account. You see progress live, request changes early, and never wait for a "big reveal."',
    icon: 'bi-code-square',
    duration: 'Weeks 2–5',
  },
  {
    title: 'UAT & Training',
    desc: "QA scripts, edge-case testing, role-based training sessions and documentation your team will actually open.",
    icon: 'bi-clipboard-check-fill',
    duration: 'Week 6',
  },
  {
    title: 'Launch & Support',
    desc: "We don't ghost after go-live. Hypercare, optimization and a long-term support tier that fits your roadmap.",
    icon: 'bi-rocket-takeoff-fill',
    duration: 'Ongoing',
  },
]

export default function Process() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div className="blob" style={{ width: 360, height: 360, background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)', top: '20%', right: '-100px' }} />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 fade-up">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Five steps. <span className="grad-blue-purple">Proven process.</span></h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              From the first 45-minute discovery call to long-term hypercare, every engagement runs on the same five-step rhythm. You always know what's happening and what's next.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {['No discovery-phase runaround', 'Weekly demos on your Creator account', 'Fixed milestones you can hold us to'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: '#334155', fontFamily: 'Inter,sans-serif' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="bi bi-check" style={{ color: '#10b981', fontSize: '0.78rem', fontWeight: 700 }} />
                  </div>
                  <span style={{ fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>

            <a href="#consultation" className="btn-primary-custom">Talk to Our Zoho Developer <i className="bi bi-arrow-right" /></a>
          </div>

          <div className="col-lg-7 fade-up" style={{ transitionDelay: '0.1s' }}>
            <div style={{ position: 'relative' }}>
              {steps.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 26, alignItems: 'flex-start',
                  padding: '24px 24px 24px 20px', position: 'relative',
                  background: i % 2 === 0 ? '#faf9f7' : 'transparent',
                  border: '1px solid #f0ece8', borderRadius: 14,
                  marginBottom: 14, transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.borderColor = '#1a56db'
                    e.currentTarget.style.transform = 'translateX(6px)'
                    e.currentTarget.style.boxShadow = '0 14px 36px rgba(15,23,42,0.08)'
                    e.currentTarget.querySelector('.step-num').style.background = 'linear-gradient(135deg,#3b82f6,#8b5cf6)'
                    e.currentTarget.querySelector('.step-num').style.transform = 'scale(1.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = i % 2 === 0 ? '#faf9f7' : 'transparent'
                    e.currentTarget.style.borderColor = '#f0ece8'
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.querySelector('.step-num').style.background = '#1a56db'
                    e.currentTarget.querySelector('.step-num').style.transform = ''
                  }}
                >
                  <div className="step-num" style={{
                    width: 54, height: 54, minWidth: 54, background: '#1a56db', borderRadius: 14,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Plus Jakarta Sans,sans-serif',
                    color: '#fff', boxShadow: '0 6px 18px rgba(26,86,219,0.3)',
                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}>
                    <i className={`bi ${step.icon}`} style={{ fontSize: '1.15rem', marginBottom: 2 }} />
                    <span style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '1px' }}>0{i + 1}</span>
                  </div>

                  <div style={{ paddingTop: 4, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 5, flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontSize: '1.05rem', fontWeight: 700, color: '#0f172a',
                        margin: 0, fontFamily: 'Plus Jakarta Sans,sans-serif',
                      }}>{step.title}</h3>
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 600, padding: '3px 10px',
                        background: 'rgba(26,86,219,0.1)', color: '#1a56db',
                        borderRadius: 50, fontFamily: 'Inter,sans-serif',
                      }}>{step.duration}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
