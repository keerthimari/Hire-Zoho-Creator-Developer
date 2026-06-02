'use client'
import { useEffect, useRef } from 'react'

const industries = [
  {
    icon: 'bi-gear-wide-connected',
    title: 'Manufacturing',
    desc: 'Production tracking, quality inspection, BOM management and shop-floor apps integrated with Zoho Inventory.',
    color: '#3b82f6',
  },
  {
    icon: 'bi-heart-pulse',
    title: 'Healthcare',
    desc: 'Patient intake, EHR-light apps, compliance audits and clinic operations — built with HIPAA-aware practices.',
    color: '#ef4444',
  },
  {
    icon: 'bi-truck',
    title: 'Logistics & Supply Chain',
    desc: 'Fleet apps, dispatch boards, last-mile delivery tracking and warehouse management on mobile.',
    color: '#f97316',
  },
  {
    icon: 'bi-building',
    title: 'Real Estate',
    desc: 'Property listings, lead-to-lease pipelines, broker portals and tenant portals connected to Zoho CRM.',
    color: '#10b981',
  },
  {
    icon: 'bi-tools',
    title: 'Field Services',
    desc: 'Job dispatch, technician scheduling, on-site forms and customer signature capture — fully mobile-ready.',
    color: '#8b5cf6',
  },
  {
    icon: 'bi-briefcase',
    title: 'Finance & Professional Services',
    desc: 'Client onboarding, billing automation, document workflows and case management with Zoho Books integration.',
    color: '#0ea5e9',
  },
  {
    icon: 'bi-mortarboard',
    title: 'Education',
    desc: 'Admissions, attendance, fee management and academic operations apps for K-12, higher ed and training institutes.',
    color: '#d946ef',
  },
  {
    icon: 'bi-bag-check',
    title: 'Retail & eCommerce',
    desc: 'Store ops apps, vendor portals, inventory sync, returns and after-sales workflows — connected to your storefront.',
    color: '#06b6d4',
  },
]

export default function Industries() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="industries" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 56px' }}>
          <span className="section-label">Industries We Serve</span>
          <h2 className="section-title">Industry-specific Creator apps for teams that <span className="grad-purple-orange">don't fit a template</span></h2>
          <p className="section-sub mx-auto">Eight verticals where we've shipped Creator builds — bringing domain knowledge to data models, workflows, and edge cases that template apps simply can't handle.</p>
        </div>

        <div className="row g-4">
          {industries.map((ind, i) => (
            <div className="col-md-6 col-lg-3 fade-up" key={ind.title} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dd', borderRadius: 16,
                padding: '28px 24px', height: '100%',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                position: 'relative', overflow: 'hidden', cursor: 'default',
              }}
                onMouseEnter={e => {
                  const card = e.currentTarget
                  card.style.transform = 'translateY(-6px)'
                  card.style.boxShadow = `0 18px 40px ${ind.color}25`
                  card.style.borderColor = ind.color
                  card.querySelector('.ind-icon').style.background = ind.color
                  card.querySelector('.ind-icon i').style.color = '#fff'
                  card.querySelector('.ind-icon').style.transform = 'rotate(-6deg) scale(1.05)'
                  card.querySelector('.ind-line').style.width = '100%'
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget
                  card.style.transform = ''
                  card.style.boxShadow = ''
                  card.style.borderColor = '#e8e3dd'
                  card.querySelector('.ind-icon').style.background = `${ind.color}15`
                  card.querySelector('.ind-icon i').style.color = ind.color
                  card.querySelector('.ind-icon').style.transform = ''
                  card.querySelector('.ind-line').style.width = '30%'
                }}
              >
                <div className="ind-icon" style={{
                  width: 54, height: 54, background: `${ind.color}15`,
                  borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18, transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}>
                  <i className={`bi ${ind.icon}`} style={{ fontSize: '1.5rem', color: ind.color, transition: 'color 0.4s ease' }} />
                </div>

                <h3 style={{
                  fontSize: '1.02rem', fontWeight: 700, color: '#0f172a',
                  marginBottom: 8, fontFamily: 'inter Sans,sans-serif',
                }}>{ind.title}</h3>

                <div className="ind-line" style={{
                  width: '30%', height: 2, background: ind.color, marginBottom: 12,
                  transition: 'width 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                }} />

                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{
          background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)',
          borderRadius: 22, padding: '44px', textAlign: 'center', marginTop: 40,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 80% 30%, rgba(249,115,22,0.18) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <h4 style={{ color: '#fff', fontFamily: 'inter Sans,sans-serif', marginBottom: 8, fontSize: '1.4rem' }}>Can't find your industry above?</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: 24, maxWidth: 560, margin: '0 auto 24px' }}>
              We work across all sectors. Tell us your business and we'll architect the right Zoho Creator solution for you.
            </p>
            <a href="#https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation?utm_source=website&utm_medium=talktoexpertcta&utm_campaign=zoflowweb" className="btn-gradient" style={{ background: '#ef2f2f',
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
    boxShadow: '0 12px 24px rgba(239, 47, 47, 0.24)',
 }}  >Talk to a Zoho Expert <i className="bi bi-arrow-right" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
