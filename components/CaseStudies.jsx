'use client'
import { useEffect, useRef } from 'react'

const cases = [
  {
    industry: 'Manufacturing',
    icon: 'bi-gear-wide-connected',
    title: 'Shop-floor production tracker for a paper distributor',
    gradient: 'linear-gradient(135deg,#1a56db,#1044b2)',
    metrics: [
      { num: '40%', label: 'Faster order processing' },
      { num: '5+ hrs', label: 'Daily manual work eliminated' },
    ],
    desc: 'Replaced a tangled spreadsheet system with a Zoho Creator app connected to Zoho Books and Inventory — real-time stock visibility, automated invoice posting, and mobile-ready dispatch.',
    stack: ['Creator', 'Books', 'Inventory', 'Deluge'],
  },
  {
    industry: 'Healthcare',
    icon: 'bi-heart-pulse',
    title: 'Patient management system for a multi-clinic group',
    gradient: 'linear-gradient(135deg,#0f4c81,#1a56db)',
    metrics: [
      { num: '60%', label: 'Reduction in admin tasks' },
      { num: 'Zero', label: 'Data loss during migration' },
    ],
    desc: 'Built a Zoho Creator patient management portal integrated with Zoho CRM and Books for seamless appointment scheduling, billing, and HIPAA-aware compliance tracking.',
    stack: ['Creator', 'CRM', 'Books', 'Analytics'],
  },
  {
    industry: 'Real Estate',
    icon: 'bi-building',
    title: 'Lead-to-lease pipeline for a property agency',
    gradient: 'linear-gradient(135deg,#064e3b,#059669)',
    metrics: [
      { num: '2×', label: 'Deals closed per month' },
      { num: '80%', label: 'Less manual follow-ups' },
    ],
    desc: 'Configured Zoho CRM with automated lead assignment, WhatsApp follow-up sequences, and a property pipeline in Creator — transforming a chaotic process into a streamlined engine.',
    stack: ['CRM', 'Creator', 'WhatsApp API', 'Flow'],
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="case-studies" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <span className="section-label">Proof</span>
            <h2 className="section-title">What a <span className="grad-blue-purple">real</span> Zoho Creator partnership looks like</h2>
            <p className="section-sub">Real implementations. Real outcomes. Three Creator engagements that replaced spreadsheets, retired legacy systems, and shipped to production in weeks.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#" className="btn-outline-custom">Read More Case Studies <i className="bi bi-arrow-right" /></a>
          </div>
        </div>

        <div className="row g-4">
          {cases.map((c, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={c.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dd',
                borderRadius: 20, overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)', height: '100%',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 24px 50px rgba(15,23,42,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <div style={{
                  background: c.gradient, padding: '30px 32px', color: '#fff', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -40, right: -30, fontSize: '7rem',
                    color: 'rgba(255,255,255,0.06)', lineHeight: 1, pointerEvents: 'none',
                  }}>
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '4px 12px', background: 'rgba(255,255,255,0.12)', borderRadius: 50, backdropFilter: 'blur(8px)' }}>
                      <i className={`bi ${c.icon}`} style={{ fontSize: '0.85rem' }} />
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' }}>{c.industry}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3, color: '#fff' }}>{c.title}</h3>
                  </div>
                </div>

                <div style={{ padding: '28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 22 }}>
                    {c.metrics.map(m => (
                      <div key={m.label} style={{ flex: '1 1 0', minWidth: 110 }}>
                        <div style={{
                          fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.7rem', fontWeight: 800,
                          background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                          lineHeight: 1, marginBottom: 4,
                        }}>{m.num}</div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'Inter,sans-serif', lineHeight: 1.4 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginBottom: 20 }}>{c.desc}</p>

                  <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px solid #f0ece8' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 8, fontFamily: 'Inter,sans-serif' }}>Stack</div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {c.stack.map(s => (
                        <span key={s} style={{
                          fontSize: '0.72rem', fontWeight: 600,
                          padding: '4px 10px', background: '#f5f0eb',
                          color: '#475569', borderRadius: 50, fontFamily: 'Inter,sans-serif',
                        }}>{s}</span>
                      ))}
                    </div>
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
