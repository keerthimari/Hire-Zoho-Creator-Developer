'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    icon: 'bi-app-indicator',
    title: 'Custom App Development',
    tagline: 'Zoho Creator app development, built around your business logic',
    desc: "Inventory and order management, inspection workflows, project trackers, or field service apps — we design custom Zoho Creator applications that reflect your team's real-world processes.",
    bullets: ['Requirement workshops and process mapping', 'Custom forms, reports, dashboards and pages', 'Role-based access and granular permissions', 'Mobile app on the same Creator codebase'],
    cta: 'Build my custom app',
  },
  {
    num: '02',
    icon: 'bi-clipboard-data',
    title: 'Implementation & Consulting',
    tagline: "Zoho Creator implementation that doesn't stall in week three",
    desc: 'A structured rollout: requirement analysis, solution architecture, configuration, UAT, user training and post-launch optimization. No surprises, no abandoned phases.',
    bullets: ['Process study and gap analysis', 'Solution architecture and data modeling', 'UAT scripts, training and adoption plans', 'Hypercare and continuous improvement'],
    cta: 'Plan my rollout',
  },
  {
    num: '03',
    icon: 'bi-arrow-repeat',
    title: 'Workflow & Process Automation',
    tagline: 'Automation that removes work, not just clicks',
    desc: 'Multi-level approval flows, scheduled jobs, escalations, validation rules and notification triggers — designed in Deluge to withstand real-world data and edge cases.',
    bullets: ['Approval chains with role-based routing', 'Email, SMS and in-app notifications', 'Scheduled and background workflows', 'Smart validations and conditional UI'],
    cta: 'Automate my workflow',
  },
  {
    num: '04',
    icon: 'bi-link-45deg',
    title: 'Integration Services',
    tagline: 'Zoho Creator integration with your full stack',
    desc: 'We connect Creator to Zoho CRM, Books, Inventory, People, Desk and Analytics — plus payment gateways, third-party APIs, ERPs and external databases.',
    bullets: ['Native Zoho-to-Zoho integrations', 'REST API and webhook integrations', 'Razorpay, Stripe, PayPal gateways', 'SAP, Salesforce, HubSpot and ERP bridges'],
    cta: 'Connect my systems',
  },
  {
    num: '05',
    icon: 'bi-arrow-left-right',
    title: 'Customization & Migration',
    tagline: 'Customize what you have. Migrate what you outgrew',
    desc: "Already on Creator but stuck with a half-built app? We audit the codebase, refactor the Deluge and extend functionality. Migrating from spreadsheets, Airtable or legacy ERPs? Data moves with zero loss.",
    bullets: ['Codebase audits and refactoring', 'Feature extensions and UI redesign', 'Data migration with mapping and validation', 'Legacy system retirement playbooks'],
    cta: 'Audit my Creator app',
  },
  {
    num: '06',
    icon: 'bi-headset',
    title: 'Ongoing Support & Optimization',
    tagline: 'Long-term support from a partner who picks up the phone',
    desc: "Software is never \"done.\" Flexible support retainers for bug fixes, enhancements, performance tuning, security reviews and quarterly health checks — your Creator stack in step with your business.",
    bullets: ['SLA-backed support tiers', 'Enhancement and feature pipelines', 'Performance and security audits', 'Dedicated success manager'],
    cta: 'Get a support plan',
  },
]

function ServiceCard({ service, delay }) {
  return (
    <div className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div style={{
        background: '#fff', border: '1px solid #e8e3dd', borderRadius: 18,
        padding: '32px 28px', height: '100%',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        cursor: 'default', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}
        onMouseEnter={e => {
          const card = e.currentTarget
          card.style.background = '#0f172a'
          card.style.borderColor = '#0f172a'
          card.style.transform = 'translateY(-6px)'
          card.style.boxShadow = '0 24px 60px rgba(15,23,42,0.25)'
          card.querySelectorAll('.svc-title').forEach(t => t.style.color = '#fff')
          card.querySelectorAll('.svc-tagline').forEach(t => t.style.color = '#fbbf24')
          card.querySelectorAll('.svc-desc, .svc-bullet').forEach(t => t.style.color = 'rgba(255,255,255,0.7)')
          card.querySelector('.svc-icon').style.background = 'rgba(255,255,255,0.12)'
          card.querySelector('.svc-icon i').style.color = '#fff'
          card.querySelector('.svc-cta').style.color = '#fff'
          card.querySelector('.svc-cta i').style.transform = 'translateX(5px)'
          card.querySelector('.svc-num').style.color = 'rgba(255,255,255,0.15)'
        }}
        onMouseLeave={e => {
          const card = e.currentTarget
          card.style.background = '#fff'
          card.style.borderColor = '#e8e3dd'
          card.style.transform = ''
          card.style.boxShadow = ''
          card.querySelectorAll('.svc-title').forEach(t => t.style.color = '#0f172a')
          card.querySelectorAll('.svc-tagline').forEach(t => t.style.color = '#1a56db')
          card.querySelectorAll('.svc-desc, .svc-bullet').forEach(t => t.style.color = '#64748b')
          card.querySelector('.svc-icon').style.background = '#eff6ff'
          card.querySelector('.svc-icon i').style.color = '#1a56db'
          card.querySelector('.svc-cta').style.color = '#1a56db'
          card.querySelector('.svc-cta i').style.transform = ''
          card.querySelector('.svc-num').style.color = '#f0ece8'
        }}
      >
        <div className="svc-num" style={{
          position: 'absolute', top: 18, right: 24,
          fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '3rem', fontWeight: 800,
          color: '#f0ece8', lineHeight: 1, transition: 'color 0.4s ease', pointerEvents: 'none',
        }}>{service.num}</div>

        <div className="svc-icon" style={{
          width: 52, height: 52, background: '#eff6ff', borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 18, transition: 'all 0.4s ease',
        }}>
          <i className={`bi ${service.icon}`} style={{ fontSize: '1.4rem', color: '#1a56db', transition: 'color 0.4s ease' }} />
        </div>

        <h3 className="svc-title" style={{
          fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '1.1rem', fontWeight: 700,
          color: '#0f172a', marginBottom: 6, lineHeight: 1.3, transition: 'color 0.4s ease',
        }}>{service.title}</h3>
        <div className="svc-tagline" style={{
          fontSize: '0.82rem', color: '#1a56db', fontFamily: 'Inter,sans-serif',
          fontWeight: 600, marginBottom: 12, transition: 'color 0.4s ease',
        }}>{service.tagline}</div>
        <p className="svc-desc" style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginBottom: 16, transition: 'color 0.4s ease' }}>{service.desc}</p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', flex: 1 }}>
          {service.bullets.map(b => (
            <li key={b} className="svc-bullet" style={{
              fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55,
              padding: '4px 0 4px 22px', position: 'relative', transition: 'color 0.4s ease',
            }}>
              <i className="bi bi-check2" style={{ position: 'absolute', left: 0, top: 6, color: '#10b981', fontSize: '0.92rem' }} />
              {b}
            </li>
          ))}
        </ul>

        <a href="#consultation" className="svc-cta" style={{
          fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
          fontSize: '0.84rem', color: '#1a56db', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6,
          textTransform: 'uppercase', letterSpacing: '0.5px',
          transition: 'color 0.4s ease', marginTop: 'auto',
        }}>
          {service.cta} <i className="bi bi-arrow-right" style={{ transition: 'transform 0.3s ease' }} />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" style={{ background: '#faf9f7' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <span className="section-label">What We Build</span>
            <h2 className="section-title">Full-spectrum Zoho Creator services, <span className="grad-blue-purple">end to end</span></h2>
            <p className="section-sub">From initial workshops to production Deluge, mobile rollouts, and long-term support — six services that cover every stage of a Creator engagement.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <a href="#consultation" className="btn-primary-custom">Hire a Zoho Expert Today <i className="bi bi-arrow-right" /></a>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} delay={i * 0.05} />)}
        </div>

        <div className="fade-up" style={{
          background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)',
          borderRadius: 22, padding: '52px 40px', textAlign: 'center', marginTop: 40,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 30% 0%, rgba(99,179,237,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <h4 style={{
              color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.5rem)', marginBottom: 20, fontWeight: 700,
            }}>
              Got a Zoho problem we haven't listed? Tell us — we'll architect it.
            </h4>
            <a href="#consultation" className="btn-accent">Hire a Zoho Expert <i className="bi bi-arrow-right" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
