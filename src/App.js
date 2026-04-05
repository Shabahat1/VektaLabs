import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import WhyVekta from './components/WhyVekta'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhatWeDo />
        <HowItWorks />
        <WhyVekta />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
