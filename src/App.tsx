import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ProductPromise from './components/ProductPromise'
import TrustSection from './components/TrustSection'
import AppointmentPrep from './components/AppointmentPrep'
import CaregiverSection from './components/CaregiverSection'
import Constitution from './components/Constitution'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-mist text-navy">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ProductPromise />
        <TrustSection />
        <AppointmentPrep />
        <CaregiverSection />
        <Constitution />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

export default App
