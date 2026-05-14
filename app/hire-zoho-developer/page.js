import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import TheWhy from '../../components/TheWhy'
import WhyZoFlowX from '../../components/WhyZoFlowX'
import Services from '../../components/Services'
import DelugeEngine from '../../components/DelugeEngine'
import Process from '../../components/Process'
import HiringModels from '../../components/HiringModels'
import Industries from '../../components/Industries'
import ZohoEcosystem from '../../components/ZohoEcosystem'
import CaseStudies from '../../components/CaseStudies'
import Comparison from '../../components/Comparison'
import Testimonials from '../../components/Testimonials'
import Resources from '../../components/Resources'
import Consultation from '../../components/Consultation'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ScrollTop from '../../components/ScrollTop'

export const metadata = {
  title: 'Hire a Zoho Creator Partner Who Actually Ships | ZoFlowX',
  description: 'ZoFlowX is a trusted Zoho Authorized Partner in India. Replace spreadsheets with custom Zoho Creator apps, Deluge automation, and full-stack Zoho integrations — shipped in weeks, not quarters.',
}

export default function HireZohoDeveloper() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheWhy />
        <WhyZoFlowX />
        <Services />
        <DelugeEngine />
        <Process />
        <HiringModels />
        <Industries />
        <ZohoEcosystem />
        <CaseStudies />
        <Comparison />
        <Testimonials />
        <Resources />
        <Consultation />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
