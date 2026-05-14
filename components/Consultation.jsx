'use client'
import { useEffect, useRef } from 'react'

const options = [
  {
    icon: 'bi-calendar-event',
    color: '#f97316',
    title: 'Schedule a free 45-minute call',
    sub: 'Pick a slot · Zoho Bookings',
    href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation',
  },
  {
    icon: 'bi-telephone',
    color: '#3b82f6',
    title: 'Talk to a Creator specialist',
    sub: 'Direct call · Mon–Fri, 10am–7pm IST',
    href: 'tel:+918190009222',
  },
  {
    icon: 'bi-envelope',
    color: '#10b981',
    title: 'Send us a brief',
    sub: 'info@zoflowx.com · we reply < 24h',
    href: 'mailto:info@zoflowx.com',
  },
]

const promises = [
  { icon: 'bi-headset', title: 'Free Consultation Call', desc: '45 minutes. We drive it. No prep needed from you.' },
  { icon: 'bi-clipboard-check', title: 'Honest Scope & Timeline', desc: 'Fixed milestones you can hold us to from day one.' },
  { icon: 'bi-rocket-takeoff', title: 'Working App in Weeks', desc: 'Not quarters. Live demos every week on your account.' },
]

export default function Consultation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="consultation" style={{
      background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%)',
      position: 'relative', overflow: 'hidden',
    }} ref={ref}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 25% 50%, rgba(99,179,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 0%, rgba(249,115,22,0.10) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 fade-up">
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '2.6px', textTransform: 'uppercase',
              color: '#fbbf24', marginBottom: 16,
              padding: '6px 14px', background: 'rgba(251,191,36,0.1)',
              border: '1px solid rgba(251,191,36,0.25)', borderRadius: 50,
            }}>
              <i className="bi bi-lightning-charge-fill me-2" />Zoho Creator Development
            </span>

            <h2 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800,
              color: '#fff', marginBottom: 20, letterSpacing: '-0.6px', lineHeight: 1.12,
            }}>
              Let's replace your spreadsheets with an app that <span style={{ background: 'linear-gradient(90deg,#fbbf24,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>actually ships</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.72)', fontSize: '1rem',
              marginBottom: 32, lineHeight: 1.75, maxWidth: 520,
              fontFamily: 'Inter,sans-serif',
            }}>
              Tell us what you're building. A Zoho Creator specialist from ZoFlowX will review your process, tell you exactly what's possible, and give you a scoped plan — no vague timelines, no discovery-phase runaround.
            </p>

            {/* Three promises */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {promises.map(p => (
                <div key={p.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={`bi ${p.icon}`} style={{ color: '#fbbf24', fontSize: '1.05rem' }} />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 3 }}>{p.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'Inter,sans-serif', lineHeight: 1.55 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, backdropFilter: 'blur(8px)' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg,#1a56db,#3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, color: '#fff', fontSize: '1.05rem',
                flexShrink: 0, boxShadow: '0 6px 18px rgba(26,86,219,0.4)',
              }}>AR</div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.98rem' }}>Arul Raj</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginTop: 2, fontFamily: 'Inter,sans-serif' }}>Founder · 14+ years Zoho & CRM · ex-Oracle, ex-Infosys</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginTop: 6, fontStyle: 'italic', fontFamily: 'Inter,sans-serif', lineHeight: 1.5 }}>"I'll personally review your requirements and recommend the fastest path to ROI."</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 fade-up" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: '#f5f0eb', borderRadius: 24, padding: '44px 38px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 6,
                background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)',
              }} />

              <h3 style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.5rem', fontWeight: 800,
                color: '#0f172a', marginBottom: 6, letterSpacing: '-0.3px',
              }}>Pick a way to start</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: 28, fontFamily: 'Inter,sans-serif' }}>
                We'll respond within one working day.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {options.map((opt, i) => (
                  <a key={i} href={opt.href}
                    target={opt.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      padding: '18px 22px', background: '#fff',
                      border: '1px solid #e8e3dd', borderRadius: 14,
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                      cursor: 'pointer', position: 'relative', overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = opt.color
                      e.currentTarget.style.transform = 'translateY(-2px) translateX(4px)'
                      e.currentTarget.style.boxShadow = `0 10px 28px ${opt.color}30`
                      e.currentTarget.querySelector('.opt-arrow').style.color = opt.color
                      e.currentTarget.querySelector('.opt-arrow').style.transform = 'translateX(4px)'
                      e.currentTarget.querySelector('.opt-icon').style.transform = 'scale(1.08) rotate(-6deg)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#e8e3dd'
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.querySelector('.opt-arrow').style.color = '#94a3b8'
                      e.currentTarget.querySelector('.opt-arrow').style.transform = ''
                      e.currentTarget.querySelector('.opt-icon').style.transform = ''
                    }}
                  >
                    <div className="opt-icon" style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: `${opt.color}15`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}>
                      <i className={`bi ${opt.icon}`} style={{ fontSize: '1.25rem', color: opt.color }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.94rem', color: '#0f172a', marginBottom: 3 }}>{opt.title}</div>
                      <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.78rem', color: '#64748b' }}>{opt.sub}</div>
                    </div>
                    <i className="bi bi-arrow-right opt-arrow" style={{ fontSize: '1.05rem', color: '#94a3b8', transition: 'all 0.3s ease', flexShrink: 0 }} />
                  </a>
                ))}
              </div>

              <div style={{
                marginTop: 22, padding: '14px 18px',
                background: 'rgba(26,86,219,0.06)', borderRadius: 12,
                display: 'flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(26,86,219,0.1)',
              }}>
                <i className="bi bi-shield-check" style={{ color: '#1a56db', fontSize: '1.1rem', flexShrink: 0 }} />
                <div style={{ fontSize: '0.8rem', color: '#475569', fontFamily: 'Inter,sans-serif', lineHeight: 1.5 }}>
                  <strong>100% free.</strong> No spam. Your data stays with us, under a signed NDA on request.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
