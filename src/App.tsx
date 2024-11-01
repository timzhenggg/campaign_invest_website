import AutomotiveTechnology from "./components/AutomotiveTechnology/AutomotiveTechnology"
import BonusesSection from "./components/BonusesSection/BonusesSection"
import CEOInsights from "./components/CEOInsights/CEOInsights"
import FAQs from "./components/FAQs/FAQs"
import Footer from "./components/Footer/Footer"
import GrowthPotentialSection from "./components/GrowthPotentialSection/GrowthPotentialSection"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import InternationalExpansionSection from "./components/InternationalExpansionSection/InternationalExpansionSection"
import Logos from "./components/Logos/Logos"
import SteadyGrowth from "./components/SteadyGrowth/SteadyGrowth"
import TechStack from "./components/TechStackSection/TechStackSection"

function App() {
  return (
    <div>
      <Header />

      <main>
        <HeroSection />
        <BonusesSection />
        <Logos />
        <InternationalExpansionSection />
        <SteadyGrowth />
        <GrowthPotentialSection />
        <CEOInsights />
        <AutomotiveTechnology />
        <TechStack />
        <FAQs /> 
        <Footer />
      </main>
    </div>
  )
}

export default App
