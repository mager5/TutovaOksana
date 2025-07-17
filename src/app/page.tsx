import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary no-horizontal-scroll">
      <Header />
      <main className="no-horizontal-scroll">
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Booking />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}