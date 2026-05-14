'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { num: 100, suffix: '+', label: 'Automation workflows delivered', icon: 'bi-lightning-charge-fill' },
  { num: 99.7, suffix: '%', label: 'Workflow uptime', icon: 'bi-shield-check', decimal: true },
  { num: 34, suffix: '', label: 'Industry verticals', icon: 'bi-grid-3x3-gap-fill' },
]

export default function DelugeEngine() {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

    const statObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        ref.current?.querySelectorAll('.de-stat-num').forEach(el => {
          const target = parseFloat(el.dataset.target)
          const suffix = el.dataset.suffix
          const decimal = el.dataset.decimal === 'true'
          let start = 0
          const duration = 1600
          const stepTime = 20
          const inc = target / (duration / stepTime)
          const timer = setInterval(() => {
            start = Math.min(start + inc, target)
            el.textContent = (decimal ? start.toFixed(1) : Math.floor(start)) + suffix
            if (start >= target) clearInterval(timer)
          }, stepTime)
        })
      }
    }, { threshold: 0.4 })
    const statBlock = ref.current?.querySelector('.de-stats-row')
    if (statBlock) statObserver.observe(statBlock)

    return () => { observer.disconnect(); statObserver.disconnect() }
  }, [])

  return (
    <section id="deluge-engine" style={{
      background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%)',
      color: '#fff', position: 'relative', overflow: 'hidden', padding: '100px 0',
    }} ref={ref}>
      {/* Background ambient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(99,179,237,0.18) 0%, transparent 60%), radial-gradient(ellipse at 85% 30%, rgba(249,115,22,0.10) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      {/* Code rain pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(90deg, transparent 0, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
        pointerEvents: 'none',
      }} />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 fade-up">
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '2.6px', textTransform: 'uppercase',
              color: '#fbbf24', marginBottom: 16,
              padding: '6px 14px', background: 'rgba(251,191,36,0.1)',
              border: '1px solid rgba(251,191,36,0.25)', borderRadius: 50,
            }}>
              <i className="bi bi-fire me-2" />Deluge · The Engine Room
            </span>

            <h2 style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800,
              color: '#fff', marginBottom: 22, letterSpacing: '-0.8px', lineHeight: 1.12,
            }}>
              Where most agencies stop, <br />
              <span style={{
                background: 'linear-gradient(90deg,#fbbf24,#f97316,#ef4444)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>we're just getting started.</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.78)', fontSize: '1.02rem',
              marginBottom: 20, lineHeight: 1.75, maxWidth: 580,
              fontFamily: 'Inter,sans-serif',
            }}>
              Drag and drop will take you 60% of the way. The last 40% — the part that decides whether your app actually works in production — is <strong style={{ color: '#fff' }}>Deluge</strong>.
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem',
              marginBottom: 32, lineHeight: 1.75, maxWidth: 580,
              fontFamily: 'Inter,sans-serif',
            }}>
              Our engineers write modular, testable Deluge scripts that handle complex business logic, third-party API calls, scheduled jobs and edge cases — without falling over.
            </p>

            <a href="#consultation" className="btn-gradient" style={{ padding: '0.85rem 2rem' }}>
              Get Production-Grade Deluge <i className="bi bi-arrow-right" />
            </a>
          </div>

          {/* Code snippet visual */}
          <div className="col-lg-5 fade-up" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16,
              padding: '20px 22px', fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '0.78rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fbbf24' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
                <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>approval_flow.dg</span>
              </div>
              <div><span style={{ color: '#94a3b8' }}>// route approvals by amount</span></div>
              <div><span style={{ color: '#c084fc' }}>if</span> <span style={{ color: '#fff' }}>(</span>amount <span style={{ color: '#fbbf24' }}>{'>'}</span> <span style={{ color: '#86efac' }}>50000</span><span style={{ color: '#fff' }}>)</span></div>
              <div style={{ paddingLeft: 18 }}>approver = <span style={{ color: '#fbbf24' }}>"finance_head"</span>;</div>
              <div><span style={{ color: '#c084fc' }}>else if</span> <span style={{ color: '#fff' }}>(</span>amount <span style={{ color: '#fbbf24' }}>{'>'}</span> <span style={{ color: '#86efac' }}>10000</span><span style={{ color: '#fff' }}>)</span></div>
              <div style={{ paddingLeft: 18 }}>approver = <span style={{ color: '#fbbf24' }}>"manager"</span>;</div>
              <div><span style={{ color: '#c084fc' }}>else</span> approver = <span style={{ color: '#fbbf24' }}>"auto"</span>;</div>
              <div style={{ marginTop: 10 }}><span style={{ color: '#94a3b8' }}>// notify + log</span></div>
              <div><span style={{ color: '#60a5fa' }}>sendmail</span> [<span style={{ color: '#fbbf24' }}>to: approver</span>];</div>
              <div><span style={{ color: '#60a5fa' }}>insert</span> <span style={{ color: '#fff' }}>into</span> AuditLog values [...];</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="row g-4 fade-up de-stats-row" style={{ marginTop: 70, transitionDelay: '0.2s' }}>
          {stats.map(s => (
            <div className="col-md-4" key={s.label}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16,
                padding: '32px 28px', transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'default', display: 'flex', alignItems: 'center', gap: 20,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(99,179,237,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = '' }}
              >
                <div style={{
                  width: 54, height: 54, borderRadius: 14,
                  background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, boxShadow: '0 8px 20px rgba(59,130,246,0.35)',
                }}>
                  <i className={`bi ${s.icon}`} style={{ fontSize: '1.4rem', color: '#fff' }} />
                </div>
                <div>
                  <div className="de-stat-num" data-target={s.num} data-suffix={s.suffix} data-decimal={s.decimal ? 'true' : 'false'}
                    style={{
                      fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '2.1rem',
                      fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4,
                    }}>0{s.suffix}</div>
                  <div style={{
                    fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)',
                    fontFamily: 'Inter,sans-serif', textTransform: 'uppercase',
                    letterSpacing: '1px', fontWeight: 500,
                  }}>{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
