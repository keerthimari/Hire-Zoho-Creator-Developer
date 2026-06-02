'use client'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    initials: 'RK',
    color: 'linear-gradient(135deg,#3b82f6,#1a56db)',
    name: 'Rajesh Kumar',
    role: 'CEO · TechStart Solutions',
    text: "ZoFlowX rebuilt our Creator app from the inside out. The Deluge they shipped is the cleanest we've ever inherited, and we close deals 40% faster. Weekly demos meant zero surprises.",
    industry: 'SaaS',
  },
  {
    initials: 'PS',
    color: 'linear-gradient(135deg,#10b981,#059669)',
    name: 'Priya Sharma',
    role: 'Operations Head · EduLearn Academy',
    text: 'They understood our education sector challenges immediately and shipped a custom Creator app for admissions and fees in 5 weeks. Mobile-ready on day one. Exceptional work.',
    industry: 'Education',
  },
  {
    initials: 'MC',
    color: 'linear-gradient(135deg,#f97316,#ea580c)',
    name: 'Michael Chen',
    role: 'Founder · GlobalTrade Inc',
    text: 'Migrated us off Salesforce + spreadsheets into a connected Zoho One stack with zero data loss. Trained the team in two weeks. Professional, responsive, and genuinely skilled.',
    industry: 'Logistics',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 56px' }}>
          <span className="section-label">Client Voices</span>
          <h2 className="section-title">What clients say after the build <span className="grad-purple-orange">ships</span></h2>
          <p className="section-sub mx-auto">Real feedback from real businesses — the kind that came after launch, not before the contract was signed.</p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={t.name} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: '#faf9f7', border: '1px solid #e8e3dd',
                borderRadius: 20, padding: '36px 32px', height: '100%',
                position: 'relative', transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                display: 'flex', flexDirection: 'column', overflow: 'hidden',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(15,23,42,0.10)'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#d4cfc9' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.background = '#faf9f7'; e.currentTarget.style.borderColor = '#e8e3dd' }}
              >
                <div style={{
                  position: 'absolute', top: 18, right: 26,
                  fontSize: '5rem', fontFamily: 'Georgia,serif',
                  background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  lineHeight: 1, opacity: 0.18, pointerEvents: 'none',
                }}>"</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <div style={{ color: '#f59e0b', fontSize: '0.95rem', letterSpacing: '2px' }}>★★★★★</div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'Inter,sans-serif', marginLeft: 'auto' }}>{t.industry}</span>
                </div>

                <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.75, marginBottom: 24, flex: 1 }}>
                  {t.text}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 20, borderTop: '1px solid #f0ece8' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: t.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'inter,sans-serif', fontWeight: 800, color: '#fff', fontSize: '1.05rem',
                    flexShrink: 0, boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a', fontFamily: 'inter,sans-serif' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
