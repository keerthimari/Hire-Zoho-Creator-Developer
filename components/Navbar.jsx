'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  ['Home', '/'],
  ['Why ZoFlowX', '#why-zoflowx'],
  ['Services', '#services'],
  ['Process', '#process'],
  ['Industries', '#industries'],
  ['Case Studies', '#case-studies'],
  ['Contact', '#consultation'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      background: scrolled ? 'rgba(255,255,255,0.92)' : '#fff',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: '1px solid #e8e3dd',
      padding: '0.6rem 0',
      position: 'sticky', top: 0, zIndex: 1000,
      boxShadow: scrolled ? '0 4px 24px rgba(15,23,42,0.06)' : 'none',
      transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.6px' }}>
              ZoFlow<span style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>X</span>
            </span>
            <div style={{ width: 1, height: 28, background: '#e8e3dd' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f5f0eb', border: '1px solid #e8e3dd', borderRadius: 8, padding: '4px 10px' }}>
              <span style={{ fontSize: '0.95rem' }}>⭐</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155', fontFamily: 'Inter,sans-serif', whiteSpace: 'nowrap' }}>Zoho Authorized Partner</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="d-none d-xl-flex align-items-center" style={{ gap: 2 }}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} style={{
                fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: '0.88rem',
                color: '#334155', padding: '8px 14px', borderRadius: 8, textDecoration: 'none',
                transition: 'all 0.25s ease', whiteSpace: 'nowrap', position: 'relative',
              }}
                onMouseEnter={e => { e.target.style.color = '#0f172a'; e.target.style.background = '#f5f0eb' }}
                onMouseLeave={e => { e.target.style.color = '#334155'; e.target.style.background = 'transparent' }}>
                {label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="d-none d-xl-flex align-items-center" style={{ gap: 10, flexShrink: 0 }}>
            <a href="#consultation" className="btn-gradient" style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem' }}>
              Book Free Consultation
            </a>
            <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" aria-label="WhatsApp"
              style={{ width: 42, height: 42, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 4px 14px rgba(37,211,102,0.4)', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', flexShrink: 0 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) rotate(8deg)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = '' }}>
              <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '1.15rem' }} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="d-xl-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
            style={{ background: 'none', border: '1px solid #e8e3dd', borderRadius: 10, padding: '6px 10px', cursor: 'pointer', transition: 'all 0.25s ease' }}>
            <i className={`bi bi-${menuOpen ? 'x-lg' : 'list'}`} style={{ fontSize: '1.2rem', color: '#0f172a' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          maxHeight: menuOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        }} className="d-xl-none">
          <div style={{ padding: '16px 0 8px', borderTop: '1px solid #e8e3dd', marginTop: 12 }}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '12px 4px',
                fontFamily: 'Inter,sans-serif', fontWeight: 500, fontSize: '0.95rem',
                color: '#334155', textDecoration: 'none', borderBottom: '1px solid #f0ece8',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { e.target.style.color = '#1a56db' }}
                onMouseLeave={e => { e.target.style.color = '#334155' }}>
                {label}
              </a>
            ))}
            <div style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
              <a href="#consultation" onClick={() => setMenuOpen(false)} className="btn-gradient" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                Book Consultation
              </a>
              <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer" style={{ width: 42, height: 42, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '1.1rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
