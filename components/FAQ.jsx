'use client'
import { useState, useEffect, useRef } from 'react'

const faqs = [
  { q: 'Can ZoFlowX integrate Zoho Creator with my existing tools?',
    a: "Yes. We specialize in Zoho Creator integration across the entire Zoho suite (CRM, Books, Desk, Analytics) and external platforms like Salesforce, QuickBooks, Shopify, WhatsApp Business, and payment gateways via REST API and webhooks. Third-party integration isn't an add-on for us — it's a core part of every engagement." },
  { q: 'What does it mean to hire a Zoho Creator developer?',
    a: 'Hiring a Zoho Creator developer means bringing in a specialist who designs, builds, and deploys custom low-code applications on the Zoho Creator platform — from workflow automation and data management to multi-platform business apps. As a trusted Zoho partner, ZoFlowX handles end-to-end development so your team can focus on running the business.' },
  { q: 'How do I get started with hiring ZoFlowX?',
    a: 'Book a free 45-minute consultation using the form above. We will discuss your processes, what you have already tried, and what success will look like. You will exit the call with a clear recommendation (fixed scope, dedicated developer or audit) and a general timeframe. No pressure, no obligation.' },
  { q: 'Why should I hire ZoFlowX for Zoho Creator development?',
    a: 'ZoFlowX is one of the top Zoho partners in India with deep expertise in Zoho Creator app development, Deluge scripting, and full Zoho ecosystem integrations. 100+ custom applications shipped across 34 industries by certified developers — which translates to proven experience, faster delivery, and reliable post-launch support.' },
  { q: 'What kinds of applications can be built on Zoho Creator?',
    a: 'Zoho Creator can be used to build a wide range of custom business apps — CRM extensions, field service management, inventory and order tracking, HR portals, project dashboards, and multi-step approval workflows. If your process involves data, forms, or automation, Zoho Creator can simplify it.' },
  { q: 'How long does a typical Zoho Creator project take?',
    a: 'Timelines depend on complexity. A basic Creator app with forms and workflows takes 2–4 weeks. More advanced applications with third-party integrations, complex Deluge logic, or multi-module systems can take 6–12 weeks. After an initial discovery call, we give you a clear project timeline estimate up front.' },
  { q: 'Do you offer dedicated Zoho Creator developers for hire?',
    a: 'Yes. Depending on the scope of your project, ZoFlowX offers dedicated Zoho Creator developer engagement models: hourly, part-time, or full-time. You get a consistent resource familiar with your business environment — not a rotating freelancer — which is ideal for continuous Creator development and maintenance.' },
  { q: 'Is Zoho Creator the right platform for my business?',
    a: "For businesses that need custom low-code solutions without the expense of traditional software development, Zoho Creator is the perfect choice. It's most effective when you have repetitive manual tasks, siloed data, or tools that don't communicate with one another. As a certified Zoho partner, we'll evaluate your needs and confirm whether Creator is the best fit before any development starts." },
  { q: 'Will you provide support and maintenance after the app is launched?',
    a: 'Absolutely. ZoFlowX provides structured Zoho Creator post-deployment support plans for bug fixes, feature updates, performance optimization, and user training. With our continuous maintenance service, your app grows with your business — without you having to start over with a new vendor.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 720, margin: '0 auto 56px' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">The questions clients <span className="grad-blue-purple">actually ask</span> before hiring us</h2>
          <p className="section-sub mx-auto">Need clarity before booking the call? Here are the nine we hear most often.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="fade-up">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div key={i} style={{
                    border: `1px solid ${isOpen ? '#1a56db' : '#e8e3dd'}`,
                    borderRadius: 14, marginBottom: 14, overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    background: '#fff',
                    boxShadow: isOpen ? '0 10px 30px rgba(26,86,219,0.10)' : 'none',
                  }}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)}
                      style={{
                        width: '100%', textAlign: 'left',
                        background: isOpen ? '#eff6ff' : '#fff',
                        border: 'none', padding: '22px 26px',
                        fontFamily: 'Plus Jakarta Sans,sans-serif',
                        fontWeight: 600, fontSize: '0.96rem',
                        color: isOpen ? '#1a56db' : '#0f172a',
                        cursor: 'pointer', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center',
                        transition: 'all 0.25s ease', gap: 16,
                      }}
                      onMouseEnter={e => { if (!isOpen) { e.currentTarget.style.background = '#faf9f7' } }}
                      onMouseLeave={e => { if (!isOpen) { e.currentTarget.style.background = '#fff' } }}
                    >
                      <span style={{ flex: 1 }}>{faq.q}</span>
                      <span style={{
                        width: 30, height: 30, borderRadius: '50%',
                        background: isOpen ? '#1a56db' : '#f5f0eb',
                        color: isOpen ? '#fff' : '#1a56db',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, transition: 'all 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}>
                        <i className="bi bi-chevron-down" style={{ fontSize: '0.78rem', fontWeight: 700 }} />
                      </span>
                    </button>
                    <div style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}>
                      <div style={{
                        padding: '4px 26px 24px',
                        fontSize: '0.92rem', color: '#475569', lineHeight: 1.75,
                        fontFamily: 'Inter,sans-serif',
                      }}>{faq.a}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Related pages */}
            <div className="fade-up" style={{ marginTop: 44 }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 18, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>Related Pages</h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['Zoho Analytics Dashboard Customization', 'Zoho CRM Customization', 'Hire Zoho Developer'].map(page => (
                  <a key={page} href="#"
                    style={{
                      background: '#eff6ff', color: '#1a56db',
                      padding: '10px 22px', borderRadius: 50,
                      fontSize: '0.88rem', fontWeight: 600,
                      textDecoration: 'none', transition: 'all 0.3s ease',
                      border: '1px solid transparent',
                      fontFamily: 'Inter,sans-serif',
                    }}
                    onMouseEnter={e => { e.target.style.background = '#1a56db'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 16px rgba(26,86,219,0.3)' }}
                    onMouseLeave={e => { e.target.style.background = '#eff6ff'; e.target.style.color = '#1a56db'; e.target.style.transform = ''; e.target.style.boxShadow = '' }}
                  >{page}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
