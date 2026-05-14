import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'

export const metadata = {
  title: 'Hire a Zoho Creator partner who actually ships | ZoFlowX',
  description: 'ZoFlowX is a trusted Zoho Authorized Partner in India. Replace spreadsheets with custom Zoho Creator apps, Deluge automation, and full-stack Zoho integrations — shipped in weeks, not quarters.',
  keywords: 'Zoho Creator developer, Zoho partner India, Deluge specialist, Zoho consulting, Zoho Creator implementation, low-code app development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
