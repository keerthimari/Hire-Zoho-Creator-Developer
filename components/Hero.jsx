'use client'
import { useEffect, useRef } from 'react'

// const stats = [
//   { num: 100, suffix: '+', label: 'Workflows Delivered' },
//   { num: 34, suffix: '', label: 'Industry Verticals' },
//   { num: 99.7, suffix: '%', label: 'Workflow Uptime', decimal: true },
//   { num: 14, suffix: '+', label: 'Years Experience' },
// ]
const stats = [
  {
    num: 100, suffix: '+', label: 'Workflows Delivered',

    bar: 'linear-gradient(90deg,#3b82f6,#6366f1)',

  },
  {
    num: 34, suffix: '', label: 'Industry Verticals',

    bar: 'linear-gradient(90deg,#8b5cf6,#a855f7)',

  },
  {
    num: 99.7, suffix: '%', label: 'Workflow Uptime', decimal: true,

    bar: 'linear-gradient(90deg,#10b981,#059669)',

  },
  {
    num: 14, suffix: '+', label: 'Years Experience',

    bar: 'linear-gradient(90deg,#f97316,#ea580c)',

  },
]

const zohoProducts = [
  { name: 'Zoho Creator', x: 8, y: 22 },
  { name: 'Zoho CRM', x: 78, y: 18 },
  { name: 'Zoho Books', x: 4, y: 62 },
  { name: 'Deluge', x: 82, y: 55 },
  { name: 'Zoho Flow', x: 12, y: 82 },
  { name: 'Zoho Analytics', x: 70, y: 78 },
  { name: 'Zoho Inventory', x: 88, y: 36 },
  { name: 'Zoho One', x: 18, y: 42 },
]

export default function Hero() {
  const statsRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        statsRef.current?.querySelectorAll('.stat-num').forEach(el => {
          const target = parseFloat(el.dataset.target)
          const suffix = el.dataset.suffix
          const decimal = el.dataset.decimal === 'true'
          let start = 0
          const duration = 1400
          const stepTime = 20
          const steps = duration / stepTime
          const inc = target / steps
          const timer = setInterval(() => {
            start = Math.min(start + inc, target)
            el.textContent = (decimal ? start.toFixed(1) : Math.floor(start)) + suffix
            if (start >= target) clearInterval(timer)
          }, stepTime)
        })
      }
    }, { threshold: 0.5 })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" style={{
      background: 'linear-gradient(105deg, #fff9b8 0%, #fff3dc 46%, #f6d5c8 100%)',
      padding: '90px 0 80px',
      position: 'relative',
      overflow: 'hidden',
      lineHeight: 1.4,

    }}>
      {/* Decorative blobs
      <div className="blob" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', top: -120, left: -100 }} />
      <div className="blob" style={{ width: 380, height: 380, background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)', bottom: -150, right: -80, animationDelay: '6s' }} /> */}

      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        pointerEvents: 'none',
      }} />




      <div className="container position-relative text-center">
        {/* Badge */}
        <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1px solid #e8e3dd', borderRadius: 50,
            padding: '7px 20px', boxShadow: '0 4px 14px rgba(15,23,42,0.06)',
            animation: 'float-y 4s ease-in-out infinite',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 0 4px rgba(16,185,129,0.18)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#334155' }}>Trusted Zoho Authorized Partner · India</span>
          </div>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'inter,sans-serif',
          // fontSize: 'clamp(2.3rem, 5.5vw, 4.2rem)',
          fontWeight: 800, color: '#111827',
          marginBottom: 24, letterSpacing: '-1.5px',
          lineHeight: 1.08, maxWidth: 920, margin: '0 auto 24px',
        }}>
          Hire a Zoho Creator partner who{' '}
          <span className="grad-purple-orange">actually ships</span>
        </h1>

        <p style={{
          fontSize: '1.1rem', color: '#374151',
          maxWidth: 720, margin: '0 auto 38px',
          lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
        }}>
          ZoFlowX is a trusted Zoho partner in India who assists founders, operators and enterprise teams to replace spreadsheets with custom low-code applications built on Zoho Creator, powered by Deluge and integrated with the whole Zoho applications suite
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation?utm_source=website&utm_medium=talktoexpertcta&utm_campaign=zoflowweb" className="btn-gradient" style={{
            background: '#ef2f2f',
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
          }}>
            Book My Free Consultation <i className="bi bi-arrow-right" />
          </a>
          <a href="#pricing" style={{
            background: '#fff', color: '#0f172a',
            border: '2px solid #e8e3dd', borderRadius: 12,
            padding: '0.85rem 2rem',
            fontFamily: 'inter,sans-serif', fontWeight: 700, fontSize: '0.95rem',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0f172a'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,23,42,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dd'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}>
            See Hire Models
          </a>
        </div>

        {/* Trust micro-line */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', marginBottom: 44, color: '#64748b', fontSize: '0.82rem', fontFamily: 'Inter,sans-serif' }}>
          {['Fixed scope', 'Weekly demos', 'Production Deluge', 'Mobile-ready'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '0.85rem' }} />
              <span style={{ fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 16px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 8,
          }}>
            {/* <span style={{ fontSize: 12, color: '#94a3b8', fontFamily: 'Inter,sans-serif', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
      By the numbers
    </span> */}
            {/* <span style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'Inter,sans-serif', display: 'flex', alignItems: 'center', gap: 4 }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
      Updated 2025
    </span> */}
          </div>

          <div ref={statsRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'linear-gradient(110deg, #eef6ff 0%, #f8fbff 45%, #fffef0 100%)',
            border: '1px solid #bfdbfe',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.06)',
          }}>
            {stats.map((s,i) => (
              <div
                key={s.label}
                style={{
                  background: '#fff',
                  padding: '24px 16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f8faff'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: s.bar,
                }} />

                {/* Icon */}
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: s.iconBg, color: s.iconColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, marginBottom: 2,
                }}>
                  {s.icon}
                </div>

                {/* Number */}
                <div
                  className="stat-num"
                  data-target={s.num}
                  data-suffix={s.suffix}
                  data-decimal={s.decimal ? 'true' : 'false'}
                  style={{
                    fontFamily: 'inter Sans,sans-serif',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                    fontWeight: 800,
                    background: s.bar,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    letterSpacing: '-1px',
                  }}
                >
                  0{s.suffix}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '0.78rem', color: '#64748b',
                  fontFamily: 'Inter,sans-serif', fontWeight: 500,
                  textAlign: 'center', lineHeight: 1.4,
                }}>
                  {s.label}
                </div>

                {/* Badge */}
                <div style={{
                  fontSize: 10, fontWeight: 600,
                  padding: '2px 10px', borderRadius: 99,
                  background: s.badgeBg, color: s.badgeColor,
                  fontFamily: 'Inter,sans-serif',
                  marginTop: 2,
                  letterSpacing: '0.02em',
                }}>
                  {s.sub}
                </div>
              </div>
            ))
            }
          </div>
        </div>





        {/* Stats */}
        {/* <div ref={statsRef} style={{
          display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap',
          padding: '36px 16px', background: '#fff',
          border: '1px solid #e8e3dd', borderRadius: 20,
          maxWidth: 820, margin: '0 auto',
          boxShadow: '0 10px 40px rgba(15,23,42,0.07)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#f97316)' }} />
          {stats.map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '0 24px', minWidth: 150, flex: '1 1 0', borderLeft: i > 0 ? '1px solid #f0ece8' : 'none' }}>
              <div className="stat-num" data-target={s.num} data-suffix={s.suffix} data-decimal={s.decimal ? 'true' : 'false'}
                style={{
                  fontFamily: 'inter,sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 800,
                  background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  lineHeight: 1,
                }}>
                0{s.suffix}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 8, fontFamily: 'Inter,sans-serif', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
