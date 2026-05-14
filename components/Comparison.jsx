'use client'
import { useEffect, useRef } from 'react'

const rows = [
  ['Zoho Authorized Partner status',       '✅ Yes',                    '❌ No',              '❌ No'],
  ['Production Deluge expertise',          '✅ Specialists',            '⚡ Hit or miss',      '⚡ Junior level'],
  ['Weekly demos on your account',         '✅ Always',                 '❌ Rarely',           '❌ End-of-sprint only'],
  ['100+ projects shipped',                '✅ Yes',                    '❌ Varies',           '❌ Unlikely'],
  ['Transparent, fixed scope',             '✅ Yes',                    '⚡ Sometimes',        '❌ Not applicable'],
  ['Mobile-ready by default',              '✅ iOS + Android',          '⚡ Extra cost',       '⚡ Limited'],
  ['End-to-end Zoho stack coverage',       '✅ Full Zoho One',          '❌ Creator only',     '⚡ Limited'],
  ['Cost-effective rate ($11–$15/hr)',     '✅ Yes',                    '⚡ Variable',         '❌ $30+/hr loaded'],
  ['SLA-backed post-launch support',       '✅ Included tier',          '❌ Extra cost',       '✅ Internal'],
  ['Team backup & continuity',             '✅ Yes',                    '❌ Single person',    '⚡ Limited'],
]

export default function Comparison() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const cellStyle = (val) => {
    if (val.startsWith('✅')) return { color: '#10b981', fontWeight: 600 }
    if (val.startsWith('❌')) return { color: '#ef4444', fontWeight: 600 }
    return { color: '#f97316', fontWeight: 600 }
  }

  return (
    <section id="comparison" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 56px' }}>
          <span className="section-label">Compare</span>
          <h2 className="section-title">How a trusted Zoho partner <span className="grad-blue-purple">stacks up</span></h2>
          <p className="section-sub mx-auto">A fair, line-by-line comparison so you can pick the engagement that fits — not the one a salesperson pushed.</p>
        </div>

        <div className="fade-up" style={{
          borderRadius: 22, overflow: 'hidden',
          border: '1px solid #e8e3dd',
          boxShadow: '0 10px 40px rgba(15,23,42,0.06)',
          background: '#fff',
        }}>
          <div className="table-responsive">
            <table className="table mb-0" style={{ marginBottom: 0 }}>
              <thead>
                <tr>
                  {[
                    { label: 'Feature', bg: '#1e293b' },
                    { label: 'ZoFlowX', bg: '#0f172a', highlight: true },
                    { label: 'Freelancer', bg: '#1e293b' },
                    { label: 'In-house Dev', bg: '#1e293b' },
                  ].map((h, i) => (
                    <th key={h.label} style={{
                      background: h.bg, color: '#fff',
                      fontFamily: 'Plus Jakarta Sans,sans-serif',
                      fontSize: '0.92rem', fontWeight: 700,
                      padding: '20px 24px', border: 'none', position: 'relative',
                    }}>
                      {h.highlight && (
                        <div style={{
                          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                          background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)',
                        }} />
                      )}
                      {h.label}
                      {h.highlight && <i className="bi bi-star-fill ms-2" style={{ color: '#fbbf24', fontSize: '0.8rem' }} />}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{ transition: 'background 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#faf9f7'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}
                  >
                    <td style={{ padding: '15px 24px', borderColor: '#f0ece8', fontWeight: 600, color: '#0f172a', fontSize: '0.88rem', background: i % 2 === 0 ? '#fff' : '#fcfbf9', fontFamily: 'Inter,sans-serif' }}>{row[0]}</td>
                    <td style={{ padding: '15px 24px', borderColor: '#f0ece8', fontSize: '0.88rem', background: '#f0f7ff', fontFamily: 'Inter,sans-serif', ...cellStyle(row[1]) }}>{row[1]}</td>
                    <td style={{ padding: '15px 24px', borderColor: '#f0ece8', fontSize: '0.88rem', background: i % 2 === 0 ? '#fff' : '#fcfbf9', fontFamily: 'Inter,sans-serif', ...cellStyle(row[2]) }}>{row[2]}</td>
                    <td style={{ padding: '15px 24px', borderColor: '#f0ece8', fontSize: '0.88rem', background: i % 2 === 0 ? '#fff' : '#fcfbf9', fontFamily: 'Inter,sans-serif', ...cellStyle(row[3]) }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="fade-up" style={{
          background: 'linear-gradient(135deg,#3b82f6 0%,#8b5cf6 50%,#f97316 100%)',
          borderRadius: 22, padding: '52px 40px', textAlign: 'center', marginTop: 40,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <h3 style={{ color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif', marginBottom: 10, fontSize: 'clamp(1.4rem, 2.5vw, 1.7rem)' }}>
              Ready to transform your business with ZoFlowX?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.88)', marginBottom: 26, fontSize: '1rem' }}>
              Talk to a certified Zoho expert and get a free consultation tailored to your business.
            </p>
            <a href="#consultation" style={{
              background: '#fff', color: '#0f172a',
              border: 'none', borderRadius: 12,
              padding: '0.9rem 2rem',
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.95rem',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)' }}
            >
              Book a Free Consultation <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
