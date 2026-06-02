'use client'
import { useEffect, useRef } from 'react'

const rows = [
  ['Zoho Authorized Partner status', 'No', 'No', 'Yes'],
  ['Production Deluge expertise', 'Hit or miss', 'Junior level', 'Specialists'],
  ['Weekly demos on your account', 'Rarely', 'End-of-sprint only', 'Always'],
  ['100+ projects shipped', 'Varies', 'Unlikely', 'Yes'],
  ['Transparent, fixed scope', 'Sometimes', 'Not applicable', 'Yes'],
  ['Mobile-ready by default', 'Extra cost', 'Limited', 'iOS + Android'],
  ['End-to-end Zoho stack coverage', 'Creator only', 'Limited', 'Full Zoho One'],
  ['Cost-effective rate ($11-$15/hr)', 'Variable', '$30+/hr loaded', 'Yes'],
  ['SLA-backed post-launch support', 'Extra cost', 'Internal', 'Included tier'],
  ['Team backup & continuity', 'Single person', 'Limited', 'Yes'],
]

export default function Comparison() {
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
    <section
      id="comparison"
      style={{
        background: 'linear-gradient(115deg, #eff6ff 0%, #fffbe7 52%, #f8e1d6 100%)',
        padding: '80px 0',
      }}
      ref={ref}
    >
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 760, margin: '0 auto 44px' }}>
          <span className="section-label">Compare</span>
          <h2 className="section-title">
            How a trusted Zoho partner <span className="grad-purple-orange">stacks up</span>
          </h2>
          <p className="section-sub mx-auto">
            A fair, line-by-line comparison so you can pick the engagement that fits.
          </p>
        </div>

        <div
          className="fade-up"
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            borderRadius: 14,
            overflow: 'hidden',
            border: '1px solid #dbeafe',
            boxShadow: '0 18px 48px rgba(15,23,42,0.07)',
            background: '#ffffff',
          }}
        >
          <div className="table-responsive">
            <table className="table mb-0" style={{ marginBottom: 0, tableLayout: 'fixed' }}>
              <thead>
                <tr>
                  {['', 'Freelancer', 'In-house developer', 'ZoFlowX'].map((label, i) => (
                    <th
                      key={i}
                      style={{
                        background:
                          i === 0
                            ? '#f8fafc'
                            : i === 1
                              ? '#fff7ed'
                              : i === 2
                                ? '#eff6ff'
                                : '#dcfce7',
                        color: i === 3 ? '#2563eb' : '#0f172a',
                        fontFamily: 'Inter,sans-serif',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '14px 18px',
                        borderTop: i === 3 ? '2px solid #22c55e' : '1px solid #e5e7eb',
                        borderLeft: i === 3 ? '2px solid #22c55e' : '1px solid #e5e7eb',
                        borderRight: i === 3 ? '2px solid #22c55e' : '1px solid #e5e7eb',
                        borderBottomLeftRadius: i === rows.length - 1 ? 14 : 0,
                        borderBottomRightRadius: i === rows.length - 1 ? 14 : 0,
                        borderBottom: '1px solid #e5e7eb',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}
                    >
                      {label}
                      {i === 3 && (
                        <span style={{
                          display: 'inline-block',
                          marginLeft: 8,
                          background: '#22c55e',
                          color: '#ffffff',
                          borderRadius: 999,
                          padding: '3px 8px',
                          fontSize: '0.52rem',
                          fontWeight: 800,
                          letterSpacing: '0.04em',
                          verticalAlign: 'middle',
                        }}>
                          RECOMMENDED
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td style={{
                      padding: '15px 18px',
                      border: '1px solid #e5e7eb',
                      background: '#f8fafc',
                      color: '#334155',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      fontFamily: 'Inter,sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.09em',
                      lineHeight: 1.5,
                    }}>
                      {row[0]}
                    </td>

                    <td style={{
                      padding: '15px 18px',
                      border: '1px solid #e5e7eb',
                      background: '#fffaf0',
                      color: '#334155',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      fontFamily: 'Inter,sans-serif',
                      lineHeight: 1.6,
                      verticalAlign: 'top',
                    }}>
                      {row[1]}
                    </td>

                    <td style={{
                      padding: '15px 18px',
                      border: '1px solid #e5e7eb',
                      background: '#f1f7ff',
                      color: '#334155',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      fontFamily: 'Inter,sans-serif',
                      lineHeight: 1.6,
                      verticalAlign: 'top',
                    }}>
                      {row[2]}
                    </td>

                    <td style={{
                      padding: '15px 18px',
                      borderTop: '1px solid #86efac',
                      borderLeft: '2px solid #22c55e',
                      borderRight: '2px solid #22c55e',
                      borderBottom: i === rows.length - 1 ? '2px solid #22c55e' : '1px solid #86efac',
                      background: '#dcfce7',
                      borderRadius: '5px',
                      color: '#0f172a',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      fontFamily: 'Inter,sans-serif',
                      lineHeight: 1.6,
                      verticalAlign: 'top',
                    }}>
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}






// 'use client'
// import { useEffect, useRef } from 'react'

// const rows = [
//   ['Zoho Authorized Partner status', 'Yes', 'No', 'No'],
//   ['Production Deluge expertise', 'Specialists', 'Hit or miss', 'Junior level'],
//   ['Weekly demos on your account', 'Always', 'Rarely', 'End-of-sprint only'],
//   ['100+ projects shipped', 'Yes', 'Varies', 'Unlikely'],
//   ['Transparent, fixed scope', 'Yes', 'Sometimes', 'Not applicable'],
//   ['Mobile-ready by default', 'iOS + Android', 'Extra cost', 'Limited'],
//   ['End-to-end Zoho stack coverage', 'Full Zoho One', 'Creator only', 'Limited'],
//   ['Cost-effective rate ($11-$15/hr)', 'Yes', 'Variable', '$30+/hr loaded'],
//   ['SLA-backed post-launch support', 'Included tier', 'Extra cost', 'Internal'],
//   ['Team backup & continuity', 'Yes', 'Single person', 'Limited'],
// ]

// export default function Comparison() {
//   const ref = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible')
//           observer.unobserve(entry.target)
//         }
//       })
//     }, { threshold: 0.1 })

//     ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       id="comparison"
//       style={{
//         background: 'linear-gradient(115deg, #eff6ff 0%, #fffbe7 52%, #f8e1d6 100%)',
//       }}
//       ref={ref}
//     >
//       <div className="container">
//         <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 56px' }}>
//           <span className="section-label">Compare</span>
//           <h2 className="section-title">
//             How a trusted Zoho partner <span className="grad-purple-orange">stacks up</span>
//           </h2>
//           <p className="section-sub mx-auto">
//             A fair, line-by-line comparison so you can pick the engagement that fits.
//           </p>
//         </div>

//         <div
//           className="fade-up"
//           style={{
//             borderRadius: 18,
//             overflow: 'hidden',
//             border: '1px solid #dbeafe',
//             boxShadow: '0 22px 60px rgba(15,23,42,0.08)',
//             background: '#ffffff',
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table mb-0" style={{ marginBottom: 0 }}>
//               <thead>
//                 <tr>
//                   {['Feature', 'ZoFlowX', 'Freelancer', 'In-house Dev'].map((label, i) => (
//                     <th
//                       key={label}
//                       style={{
//                         background:
//                           i === 0
//                             ? '#eff6ff'
//                             : i === 1
//                               ? '#bbf7d0'
//                               : '#fff7ed',
//                         color: '#0f172a',
//                         //borderLeft: '2px solid #4ade80',
//                         //borderRight: '2px solid #4ade80',
//                         fontFamily: 'Inter,sans-serif',
//                         fontSize: '0.78rem',
//                         fontWeight: 800,
//                         padding: '18px 22px',
//                         border: '1px solid #e5e7eb',
//                         textAlign: 'center',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.04em',
//                       }}
//                     >
//                       {label}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {rows.map((row, i) => (
//                   <tr key={i}>
//                     <td
//                       style={{
//                         padding: '18px 22px',
//                         border: '1px solid #e5e7eb',
//                         background: '#f1f5f9',
//                         color: '#334155',
//                         fontSize: '0.76rem',
//                         fontWeight: 800,
//                         fontFamily: 'Inter,sans-serif',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.08em',
//                         width: '24%',
//                       }}
//                     >
//                       {row[0]}
//                     </td>

//                     <td style={{
//                       padding: '24px',
//                       fontSize: '0.9rem',
//                       lineHeight: 1.7,
//                       color: '#0f172a',
//                       borderTop: '1px solid #ece6dd',
//                       verticalAlign: 'top',
//                       background: '#bbf7d0',
//                       transition: 'background 0.3s',
//                       borderLeft: '2px solid #4ade80',
//                       borderRight: '2px solid #4ade80',
//                       fontWeight: 500,
//                     }}>
//                       {row[1]}
//                     </td>

//                     <td style={{
//                       padding: '18px 22px',
//                       border: '1px solid #e5e7eb',
//                       background: '#fffaf0',
//                       color: '#334155',
//                       fontSize: '0.86rem',
//                       fontWeight: 500,
//                       fontFamily: 'Inter,sans-serif',
//                       lineHeight: 1.6,
//                     }}>
//                       {row[2]}
//                     </td>

//                     <td style={{
//                       padding: '18px 22px',
//                       border: '1px solid #e5e7eb',
//                       background: '#f8fbff',
//                       color: '#334155',
//                       fontSize: '0.86rem',
//                       fontWeight: 500,
//                       fontFamily: 'Inter,sans-serif',
//                       lineHeight: 1.6,
//                     }}>
//                       {row[3]}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


