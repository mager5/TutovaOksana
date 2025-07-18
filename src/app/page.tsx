import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Booking from '@/components/Booking'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import HeyGenChat from '@/components/HeyGenChat'

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
      <HeyGenChat 
          position="bottom-right"
          primaryColor="#F4C7AB"
          secondaryColor="#FDF6F1"
          size="medium"
          buttonText="Задать вопрос AI"
          showText={true}
          language="ru"
        />
    </div>
  )
}