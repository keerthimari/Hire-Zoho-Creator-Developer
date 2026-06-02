'use client'

const social = [
  { icon: 'linkedin', href: '#' },
  { icon: 'twitter-x', href: '#' },
  { icon: 'instagram', href: '#' },
  { icon: 'youtube', href: '#' },
]

const sections = [
  {
    heading: 'Company',
    links: ['About Us', 'Case Studies', 'Blogs', 'Contact Us', 'Privacy Policy'],
  },
  {
    heading: 'Services',
    links: [
      'Zoho Creator Development',
      'Zoho CRM Implementation',
      'Zoho One Setup',
      'Workflow Automation',
      'Hire a Zoho Developer',
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0f172a', color: 'rgba(255,255,255,0.65)',
      padding: '70px 0 32px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(99,179,237,0.4) 50%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 0%, rgba(99,179,237,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container position-relative">
        <div className="row g-5">
          <div className="col-lg-4">
            <div style={{ fontFamily: 'inter,sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.6px' }}>
              ZoFlow<span style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>X</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '4px 10px', marginBottom: 18 }}>
              <span style={{ fontSize: '0.95rem' }}>⭐</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter,sans-serif' }}>Zoho Authorized Partner</span>
            </div>
            <p style={{ fontSize: '0.9rem', maxWidth: 320, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter,sans-serif' }}>
              Trusted Zoho partner in India delivering Zoho Creator app development, Deluge automation, full-stack integrations, and ongoing support for businesses across India and the USA.
            </p>

            <div style={{ marginTop: 22, display: 'flex', gap: 10 }}>
              {social.map(s => (
                <a key={s.icon} href={s.href} aria-label={s.icon}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg,#3b82f6,#8b5cf6)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; e.currentTarget.style.borderColor = 'transparent' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >
                  <i className={`bi bi-${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {sections.map(s => (
            <div className="col-6 col-lg-2" key={s.heading}>
              <div style={{ fontFamily: 'inter,sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 18 }}>
                {s.heading}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {s.links.map(l => (
                  <li key={l} style={{ marginBottom: 11 }}>
                    <a href="#"
                      style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Inter,sans-serif', transition: 'all 0.25s ease', display: 'inline-block' }}
                      onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.transform = 'translateX(4px)' }}
                      onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.transform = '' }}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-lg-4">
            <div style={{ fontFamily: 'inter,sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 18 }}>
              Contact
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(59,130,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bi bi-envelope" style={{ color: '#60a5fa', fontSize: '0.92rem' }} />
                </div>
                <a href="mailto:info@zoflowx.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Inter,sans-serif', paddingTop: 5 }}>
                  info@zoflowx.com
                </a>
              </li>
              <li style={{ marginBottom: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bi bi-telephone" style={{ color: '#34d399', fontSize: '0.92rem' }} />
                </div>
                <a href="tel:+918190009222" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'Inter,sans-serif', paddingTop: 5 }}>
                  +91 81900 09222
                </a>
              </li>
              <li style={{ marginBottom: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="bi bi-geo-alt" style={{ color: '#fb923c', fontSize: '0.92rem' }} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6, fontFamily: 'Inter,sans-serif', paddingTop: 4 }}>
                  Tirunelveli & Chennai · Tamil Nadu, India
                </span>
              </li>
            </ul>

            <a href="https://wa.me/918190009222" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#25d366', color: '#fff',
                padding: '10px 18px', borderRadius: 10,
                fontSize: '0.88rem', fontWeight: 700,
                fontFamily: 'inter,sans-serif',
                textDecoration: 'none', marginTop: 12,
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 18px rgba(37,211,102,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(37,211,102,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 18px rgba(37,211,102,0.3)' }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '1.1rem' }} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 52, paddingTop: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12, fontSize: '0.82rem', fontFamily: 'Inter,sans-serif',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.4)' }}>© 2025 ZoFlowX · Inboxist Martech Solutions Pvt Ltd. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'].map(l => (
              <a key={l} href="#"
                style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.82rem', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
