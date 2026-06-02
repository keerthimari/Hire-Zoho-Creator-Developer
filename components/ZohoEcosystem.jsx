'use client'
import { useEffect, useRef } from 'react'

const apps = [
  { name: 'Zoho Creator', tag: 'Low-Code', icon: 'bi-app-indicator', color: '#3b82f6', featured: true },
  { name: 'Zoho CRM', tag: 'Sales', icon: 'bi-people-fill', color: '#ef4444' },
  { name: 'Zoho Books', tag: 'Finance', icon: 'bi-journal-bookmark-fill', color: '#10b981' },
  { name: 'Zoho Inventory', tag: 'Ops', icon: 'bi-boxes', color: '#f97316' },
  { name: 'Zoho People', tag: 'HR', icon: 'bi-person-badge-fill', color: '#8b5cf6' },
  { name: 'Zoho Desk', tag: 'Support', icon: 'bi-headset', color: '#06b6d4' },
  { name: 'Zoho Analytics', tag: 'BI', icon: 'bi-bar-chart-line-fill', color: '#0ea5e9' },
  { name: 'Zoho Campaigns', tag: 'Marketing', icon: 'bi-megaphone-fill', color: '#d946ef' },
  { name: 'Zoho Projects', tag: 'PM', icon: 'bi-kanban-fill', color: '#14b8a6' },
  { name: 'Zoho Recruit', tag: 'Hiring', icon: 'bi-person-plus-fill', color: '#f59e0b' },
  { name: 'Zoho Payroll', tag: 'Payroll', icon: 'bi-cash-coin', color: '#22c55e' },
  { name: 'Zoho One', tag: 'Suite', icon: 'bi-grid-3x3-gap-fill', color: '#1a56db', featured: true },
]

export default function ZohoEcosystem() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ecosystem" style={{ background: '#faf9f7', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div className="blob" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)', bottom: '10%', right: '-120px' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 800, margin: '0 auto 56px' }}>
          <span className="section-label">Built for the Zoho Ecosystem</span>
          <h2 className="section-title">Creator is one piece. <span className="grad-purple-orange">We connect them all.</span></h2>
          <p className="section-sub mx-auto">
            Most Zoho Creator partners stop at Creator. We architect across the entire Zoho One stack and integrate with the third-party tools you already depend on. One unified data layer, real-time sync, zero duplicate entry.
          </p>
        </div>

        <div className="row g-3 g-md-4 fade-up">
          {apps.map((app, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={app.name}>
              <div style={{
                background: '#fff', border: '1px solid #e8e3dd',
                borderRadius: 14, padding: '22px 18px',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                display: 'flex', alignItems: 'center', gap: 14, position: 'relative', overflow: 'hidden',
                cursor: 'default',
                animation: `float-y${(i % 3) ? `-${(i % 3) + 1}` : ''} ${6 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
                onMouseEnter={e => {
                  const card = e.currentTarget
                  card.style.transform = 'translateY(-5px) scale(1.02)'
                  card.style.boxShadow = `0 16px 32px ${app.color}30`
                  card.style.borderColor = app.color
                  card.style.background = '#fff'
                  card.querySelector('.eco-icon').style.background = app.color
                  card.querySelector('.eco-icon i').style.color = '#fff'
                  card.querySelector('.eco-bg').style.opacity = '0.08'
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget
                  card.style.transform = ''
                  card.style.boxShadow = ''
                  card.style.borderColor = '#e8e3dd'
                  card.querySelector('.eco-icon').style.background = `${app.color}15`
                  card.querySelector('.eco-icon i').style.color = app.color
                  card.querySelector('.eco-bg').style.opacity = '0'
                }}
              >
                <div className="eco-bg" style={{
                  position: 'absolute', top: -30, right: -30, width: 100, height: 100,
                  borderRadius: '50%', background: app.color,
                  opacity: 0, transition: 'opacity 0.4s ease', pointerEvents: 'none',
                }} />

                <div className="eco-icon" style={{
                  width: 44, height: 44, minWidth: 44,
                  background: `${app.color}15`, borderRadius: 11,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.4s ease', position: 'relative', zIndex: 1,
                }}>
                  <i className={`bi ${app.icon}`} style={{ fontSize: '1.2rem', color: app.color, transition: 'color 0.4s ease' }} />
                </div>

                <div style={{ position: 'relative', zIndex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'inter,sans-serif',
                    fontSize: '0.88rem', fontWeight: 700, color: '#0f172a',
                    lineHeight: 1.2, marginBottom: 3,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{app.name}</div>
                  <div style={{
                    fontSize: '0.66rem', fontWeight: 700, letterSpacing: '1.5px',
                    textTransform: 'uppercase', color: app.color,
                    fontFamily: 'Inter,sans-serif',
                  }}>{app.tag}</div>
                </div>

                {app.featured && (
                  <div style={{
                    position: 'absolute', top: 8, right: 8,
                    width: 16, height: 16, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#3b82f6,#8b5cf6,#f97316)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(139,92,246,0.4)',
                  }}>
                    <i className="bi bi-star-fill" style={{ fontSize: '0.5rem', color: '#fff' }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-up" style={{ marginTop: 48 }}>
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation?utm_source=website&utm_medium=talktoexpertcta&utm_campaign=zoflowweb" className="btn-gradient" style={{ padding: '0.85rem 2rem', background: 'red' }}>
            Connect My Zoho Apps <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
