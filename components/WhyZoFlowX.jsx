'use client'
import { useEffect, useRef } from 'react'

const reasons = [
  {
    num: '',
    icon: 'bi-patch-check-fill',
    title: 'Authorized Zoho Partner',
    desc: "We're official Zoho partners — which means deeper API access, escalation rights, licensing benefits and a direct line to Zoho's product teams when your build requires it.",
    quote: 'Partner status that opens doors, not just badges.',
  },
  {
    num: '',
    icon: 'bi-code-slash',
    title: 'Deluge Specialists, Not Drag-and-Droppers',
    desc: 'Our developers write production Deluge clean, modular, version controlled. The type of script that future-you can read without getting frustrated. The difference between a Zoho Creator developer and an actual engineer.',
    quote: 'The difference between a Creator user and a real engineer.',
  },
  {
    num: '',
    icon: 'bi-rocket-takeoff-fill',
    title: 'Ship in Weeks, Not Quarters',
    desc: 'The majority of Creator apps we take on take 3-6 weeks to go from kickoff to first usable build. We achieve milestones because our scope is honest, our team is dedicated and our discovery is not a separate phase.',
    quote: 'A working app on your account, every single week.',
  },
  {
    num: '',
    icon: 'bi-diagram-3-fill',
    title: 'End-to-End Zoho Stack Coverage',
    desc: 'Creator is rarely an island. We integrate it with Zoho CRM, Books, Inventory, People, Desk, Analytics, Campaigns and external systems one connected fabric.',
    quote: 'One source of truth across your whole stack.',
  },
  {
    num: '',
    icon: 'bi-phone-fill',
    title: 'Mobile-Ready by Default',
    desc: 'Every Zoho Creator application we build is responsive on iOS and Android out of the box. Field teams, sales reps and operations get the same experience on their phone as on their laptop no separate dev cycle.',
    quote: 'No separate dev cycle for mobile. Ever.',
  },
  {
    num: '',
    icon: 'bi-eye-fill',
    title: 'Transparent, Honest Engagement',
    desc: 'Fixed scope, dedicated hire or on-demand — pricing is transparent before we begin. No hidden change order tax. No surprise renewals. You see the build live, on your account.',
    quote: 'You will never wonder where your money went.',
  },
]

export default function WhyZoFlowX() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-zoflowx" style={{ background: '#fff', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 56px' }}>
          <span className="section-label">Why ZoFlowX</span>
          <h2 className="section-title">
            The best Zoho partner is the one that <span className="grad-purple-orange">stays</span>
          </h2>
          {/* <p className="section-sub mx-auto">
            Six reasons teams who've been burned by no-code providers come to ZoFlowX as their next — and last — Zoho Creator development partner.
          </p> */}
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => (
            <div className="col-md-6 col-lg-4 fade-up" key={r.title} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #eff6ff 0%, #fefce8 100%)',
                  border: '1px solid #bfdbfe',
                  borderRadius: 16,
                  padding: '32px 28px',
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const card = e.currentTarget
                  card.style.transform = 'translateY(-6px)'
                  card.style.boxShadow = '0 18px 50px rgba(239, 68, 68, 0.16)'
                  card.style.borderColor = '#fca5a5'
                  card.style.background = '#ffffff'
                  card.querySelector('.zf-icon').style.transform = 'scale(1.08) rotate(-4deg)'
                  card.querySelector('.zf-icon').style.background = 'rgba(239, 68, 68, 0.12)'
                  card.querySelector('.zf-icon').style.borderColor = 'rgba(239, 68, 68, 0.28)'
                  card.querySelector('.zf-icon i').style.color = '#ef4444'
                  card.querySelector('.zf-glow').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget
                  card.style.transform = ''
                  card.style.boxShadow = ''
                  card.style.borderColor = '#bfdbfe'
                  card.style.background = 'linear-gradient(135deg, #eff6ff 0%, #fefce8 100%)'
                  card.querySelector('.zf-icon').style.transform = ''
                  card.querySelector('.zf-icon').style.background = 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))'
                  card.querySelector('.zf-icon').style.borderColor = 'rgba(59,130,246,0.18)'
                  card.querySelector('.zf-icon i').style.color = '#1a56db'
                  card.querySelector('.zf-glow').style.opacity = '0'
                }}
              >
                <div className="zf-glow" style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  background: 'radial-gradient(circle, rgba(239,68,68,0.16) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.45s ease',
                  pointerEvents: 'none',
                }} />

                <div className="zf-icon" style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))',
                  border: '1px solid rgba(59,130,246,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <i className={`bi ${r.icon}`} style={{ fontSize: '1.3rem', color: '#1a56db' }} />
                </div>

                <h3 style={{
                  fontFamily: 'Inter,sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}>
                  {r.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}>
                  {r.desc}
                </p>

                <div style={{ borderLeft: '3px solid #fca5a5', paddingLeft: 14, marginTop: 'auto' }}>
                  <div style={{
                    fontSize: '0.84rem',
                    color: '#475569',
                    fontStyle: 'italic',
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}>
                    "{r.quote}"
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 48 }}>
          <a
            href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation?utm_source=website&utm_medium=talktoexpertcta&utm_campaign=zoflowweb"
            className="btn-gradient"
            style={{ background: '#ef2f2f',
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
                    boxShadow: '0 12px 24px rgba(239, 47, 47, 0.24)', }}
          >
            Start Your Zoho Creator Project <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}

// 'use client'
// import { useEffect, useRef } from 'react'

// const reasons = [
//   {
//     num: '',
//     icon: 'bi-patch-check-fill',
//     title: 'Authorized Zoho Partner',
//     desc: "We're official Zoho partners — which means deeper API access, escalation rights, licensing benefits and a direct line to Zoho's product teams when your build requires it.",
//     quote: 'Partner status that opens doors, not just badges.',
//   },
//   {
//     num: '',
//     icon: 'bi-code-slash',
//     title: 'Deluge Specialists, Not Drag-and-Droppers',
//     desc: 'Our developers write production Deluge — clean, modular, version-controlled. The kind of script future-you can read without getting frustrated.',
//     quote: 'The difference between a Creator user and a real engineer.',
//   },
//   {
//     num: '',
//     icon: 'bi-rocket-takeoff-fill',
//     title: 'Ship in Weeks, Not Quarters',
//     desc: 'Most Creator apps we take on go from kickoff to first usable build in 3–6 weeks. We hit milestones because our scope is honest and discovery is not a separate phase.',
//     quote: 'A working app on your account, every single week.',
//   },
//   {
//     num: '',
//     icon: 'bi-diagram-3-fill',
//     title: 'End-to-End Zoho Stack Coverage',
//     desc: 'Creator is rarely an island. We integrate it with Zoho CRM, Books, Inventory, People, Desk, Analytics, Campaigns and external systems — one connected fabric.',
//     quote: 'One source of truth across your whole stack.',
//   },
//   {
//     num: '',
//     icon: 'bi-phone-fill',
//     title: 'Mobile-Ready by Default',
//     desc: 'Every Zoho Creator app we build is responsive on iOS and Android out of the box. Field teams and sales reps get the same experience on phone as on laptop.',
//     quote: 'No separate dev cycle for mobile. Ever.',
//   },
//   {
//     num: '',
//     icon: 'bi-eye-fill',
//     title: 'Transparent, Honest Engagement',
//     desc: 'Fixed scope, dedicated hire or on-demand — pricing is transparent before we begin. No hidden change order tax. No surprise renewals. You see the build live, on your account.',
//     quote: 'You will never wonder where your money went.',
//   },
// ]

// export default function WhyZoFlowX() {
//   const ref = useRef(null)
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } })
//     }, { threshold: 0.1 })
//     ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section id="why-zoflowx" style={{ background: '#fff', position: 'relative' }} ref={ref}>
//       <div className="container">
//         <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 56px' }}>
//           <span className="section-label">Why ZoFlowX</span>
//           <h2 className="section-title">
//             The best Zoho partner is the one that <span className="grad-purple-orange">stays</span>
//           </h2>
//           <p className="section-sub mx-auto">Six reasons teams who've been burned by no-code providers come to ZoFlowX as their next — and last — Zoho Creator development partner.</p>
//         </div>

//         <div className="row g-4">
//           {reasons.map((r, i) => (
//             <div className="col-md-6 col-lg-4 fade-up" key={r.num} style={{ transitionDelay: `${i * 0.07}s` }}>
//               <div style={{
//                 background: '#f5f0eb', border: '1px solid #e8e3dd', borderRadius: 16,
//                 padding: '32px 28px', height: '100%',
//                 transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
//                 cursor: 'default', position: 'relative', overflow: 'hidden',
//               }}
//                 onMouseEnter={e => {
//                   const card = e.currentTarget
//                   card.style.transform = 'translateY(-6px)'
//                   card.style.boxShadow = '0 18px 50px rgba(15,23,42,0.10)'
//                   card.style.borderColor = 'transparent'
//                   card.style.background = '#fff'
//                   card.querySelector('.zf-icon').style.transform = 'scale(1.08) rotate(-4deg)'
//                   card.querySelector('.zf-glow').style.opacity = '1'
//                 }}
//                 onMouseLeave={e => {
//                   const card = e.currentTarget
//                   card.style.transform = ''
//                   card.style.boxShadow = ''
//                   card.style.borderColor = '#e8e3dd'
//                   card.style.background = '#f5f0eb'
//                   card.querySelector('.zf-icon').style.transform = ''
//                   card.querySelector('.zf-glow').style.opacity = '0'
//                 }}
//               >
//                 {/* Gradient glow on hover */}
//                 <div className="zf-glow" style={{
//                   position: 'absolute', top: -40, right: -40, width: 140, height: 140,
//                   background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
//                   opacity: 0, transition: 'opacity 0.45s ease', pointerEvents: 'none',
//                 }} />

//                 <div className="zf-icon" style={{
//                   width: 50, height: 50, borderRadius: 12,
//                   background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))',
//                   border: '1px solid rgba(59,130,246,0.18)',
//                   display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   marginBottom: 20, transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
//                   position: 'relative', zIndex: 1,
//                 }}>
//                   <i className={`bi ${r.icon}`} style={{ fontSize: '1.3rem', color: '#1a56db' }} />
//                 </div>

//                 <div style={{
//                   fontFamily: 'inter,sans-serif', fontSize: '0.8rem', fontWeight: 700,
//                   background: 'linear-gradient(135deg,#3b82f6,#8b5cf6,#f97316)',
//                   WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//                   marginBottom: 8, letterSpacing: 1.5,
//                 }}>{r.num}</div>

//                 <h3 style={{
//                   fontFamily: 'inter,sans-serif', fontSize: '1.05rem', fontWeight: 700,
//                   color: '#0f172a', marginBottom: 12, lineHeight: 1.3,
//                 }}>{r.title}</h3>

//                 <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, marginBottom: 18 }}>{r.desc}</p>

//                 <div style={{ borderLeft: '3px solid #cbc4ba', paddingLeft: 14, marginTop: 'auto' }}>
//                   <div style={{ fontSize: '0.84rem', color: '#475569', fontStyle: 'italic', lineHeight: 1.55, fontWeight: 500 }}>
//                     "{r.quote}"
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="fade-up text-center" style={{ marginTop: 48 }}>
//           <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation?utm_source=website&utm_medium=talktoexpertcta&utm_campaign=zoflowweb" className="btn-gradient" style={{ padding: '0.85rem 2rem' }}>
//             Start Your Zoho Creator Project <i className="bi bi-arrow-right" />
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }
