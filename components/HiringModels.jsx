'use client'
import { useEffect, useRef } from 'react'

const plans = [
  {
    type: 'Fixed Scope',
    icon: 'bi-bullseye',
    price: 'From $4,500',
    per: '/project',
    period: 'One-time engagement',
    hrRate: 'Best for defined builds',
    featured: false,
    desc: 'You know what you need. We scope it, lock the milestones, and ship — typically a working build in 3–6 weeks with weekly demos on your own Creator account.',
    features: [
      'Fixed milestones & deliverables',
      'Weekly demos on your account',
      '3–6 weeks to first usable build',
      '30-day post-launch hypercare',
    ],
    cta: 'Scope My Project',
  },
  {
    type: 'Dedicated Hire',
    icon: 'bi-person-workspace',
    price: '$1,800',
    per: '/mo',
    period: '160 hrs/mo · 8 hrs/day · 5 days/week',
    hrRate: 'Only $11 / hour',
    featured: true,
    popular: 'Most Popular',
    desc: 'A dedicated Zoho Creator developer or engineer who joins your team — aligned to your timezone, your tools, and your roadmap. Scale up or down monthly.',
    features: [
      'Dedicated full-time developer',
      'Aligned to your timezone',
      'Best value per hour',
      'Priority Slack/email support',
    ],
    cta: 'Hire Dedicated Developer',
  },
  {
    type: 'On-Demand / Hourly',
    icon: 'bi-stopwatch',
    price: '$15',
    per: '/hr',
    period: 'Pay as you go',
    hrRate: 'Ideal for fixes & extensions',
    featured: false,
    desc: 'Already on Creator and need a senior pair of hands for fixes, refactors, or new features? Time-tracked, transparent, no long-term commitment.',
    features: [
      'Time-tracked transparency',
      'No long-term commitment',
      'Quick turnaround fixes',
      'Senior Zoho engineer',
    ],
    cta: 'Get On-Demand Help',
  },
]

export default function HiringModels() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" style={{ background: '#faf9f7', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div className="blob" style={{ width: 380, height: 380, background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)', top: '15%', left: '-120px' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 60px' }}>
          <span className="section-label">How to Hire Us</span>
          <h2 className="section-title">Three ways to bring on a <span className="grad-blue-purple">Zoho Creator partner</span></h2>
          <p className="section-sub mx-auto">Pick the engagement that fits your budget, timeline, and roadmap. Switch between models as your needs evolve.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={plan.type} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: plan.featured ? '#0f172a' : '#fff',
                border: `2px solid ${plan.featured ? '#0f172a' : '#e8e3dd'}`,
                borderRadius: 22, padding: '44px 32px', height: '100%',
                position: 'relative', transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                textAlign: 'center', overflow: 'hidden',
                transform: plan.featured ? 'scale(1.02)' : 'none',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = plan.featured ? 'scale(1.02) translateY(-10px)' : 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 26px 60px rgba(15,23,42,0.18)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = plan.featured ? 'scale(1.02)' : ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                    background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)',
                  }} />
                )}

                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: 1.2, textTransform: 'uppercase',
                    padding: '6px 18px', borderRadius: 50, whiteSpace: 'nowrap',
                    boxShadow: '0 8px 20px rgba(139,92,246,0.4)',
                  }}>{plan.popular}</div>
                )}

                <div style={{
                  width: 54, height: 54, borderRadius: 14,
                  background: plan.featured ? 'rgba(255,255,255,0.08)' : 'rgba(26,86,219,0.08)',
                  border: plan.featured ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(26,86,219,0.15)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <i className={`bi ${plan.icon}`} style={{ fontSize: '1.4rem', color: plan.featured ? '#fbbf24' : '#1a56db' }} />
                </div>

                <div style={{
                  fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.8px',
                  textTransform: 'uppercase', color: plan.featured ? 'rgba(255,255,255,0.55)' : '#64748b',
                  marginBottom: 14, fontFamily: 'Inter,sans-serif',
                }}>{plan.type}</div>

                <div style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: '2.6rem', fontWeight: 800,
                  color: plan.featured ? '#fff' : '#0f172a',
                  lineHeight: 1, marginBottom: 4, letterSpacing: '-1px',
                }}>
                  {plan.price}<span style={{ fontSize: '1rem', fontWeight: 500, color: plan.featured ? 'rgba(255,255,255,0.5)' : '#64748b' }}>{plan.per}</span>
                </div>

                <div style={{
                  fontSize: '0.8rem', color: plan.featured ? 'rgba(255,255,255,0.5)' : '#64748b',
                  marginBottom: 16, fontFamily: 'Inter,sans-serif',
                }}>{plan.period}</div>

                <div style={{
                  fontSize: '0.78rem', fontWeight: 700,
                  background: plan.featured ? 'rgba(251,191,36,0.15)' : 'linear-gradient(90deg,#3b82f6,#8b5cf6)',
                  WebkitBackgroundClip: plan.featured ? '' : 'text',
                  WebkitTextFillColor: plan.featured ? '' : 'transparent',
                  backgroundClip: plan.featured ? '' : 'text',
                  color: plan.featured ? '#fbbf24' : '',
                  padding: '5px 14px', borderRadius: 50, display: 'inline-block',
                  marginBottom: 20, fontFamily: 'Inter,sans-serif',
                  border: plan.featured ? '1px solid rgba(251,191,36,0.25)' : 'none',
                }}>{plan.hrRate}</div>

                <div style={{
                  fontSize: '0.88rem', color: plan.featured ? 'rgba(255,255,255,0.65)' : '#64748b',
                  marginBottom: 24, lineHeight: 1.7, fontFamily: 'Inter,sans-serif',
                  textAlign: 'left',
                }}>{plan.desc}</div>

                <div style={{ borderTop: `1px solid ${plan.featured ? 'rgba(255,255,255,0.1)' : '#e8e3dd'}`, margin: '20px 0' }} />

                <ul className="list-unstyled text-start mb-4" style={{
                  fontSize: '0.88rem', color: plan.featured ? 'rgba(255,255,255,0.78)' : '#334155',
                  fontFamily: 'Inter,sans-serif',
                }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '0.95rem', flexShrink: 0, marginTop: 2 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.featured
                  ? <a href="#consultation" className="btn-gradient" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>{plan.cta} <i className="bi bi-arrow-right" /></a>
                  : <a href="#consultation" style={{
                      background: 'transparent', color: '#0f172a',
                      border: '2px solid #e8e3dd', borderRadius: 12,
                      padding: '0.78rem 1.5rem',
                      fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.88rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      textDecoration: 'none', width: '100%',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0f172a'; e.currentTarget.style.background = '#0f172a'; e.currentTarget.style.color = '#fff' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dd'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0f172a' }}
                    >{plan.cta} <i className="bi bi-arrow-right" /></a>
                }
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-up" style={{ marginTop: 40 }}>
          <p style={{ fontSize: '0.92rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>
            <i className="bi bi-shield-check me-2" style={{ color: '#10b981' }} />
            All engagements include a signed NDA, code ownership transfer, and a documented build handoff.
          </p>
        </div>
      </div>
    </section>
  )
}
