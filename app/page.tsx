import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import NeedProject from '@/components/NeedProject'
import CustomerCarousel from '@/components/CustomerCarousel'
import ProjectInquiryModal from '@/components/ProjectInquiryModal'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
    <Navigation />
    <main className="relative">
      <Hero />
      <Services />
      <Work />
      <Team />
      <CustomerCarousel />
      <Reviews />
      <FAQ />
      <NeedProject />
      <Footer />
      <ProjectInquiryModal />
    </main>
    </>
  )
}
