import AutomotiveTechnology from "./components/AutomotiveTechnology/AutomotiveTechnology"
import BonusesSection from "./components/BonusesSection/BonusesSection"
import CEOInsights from "./components/CEOInsights/CEOInsights"
import FAQs from "./components/FAQs/FAQs"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import InternationalExpansionSection from "./components/InternationalExpansionSection/InternationalExpansionSection"
import Logos from "./components/Logos/Logos"
import Stats from "./components/Stats/Stats"
import TechStack from "./components/TechStackSection/TechStackSection"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <InternationalExpansionSection />
      <AutomotiveTechnology />
      <Stats />
      <BonusesSection />
      <CEOInsights />
      <Logos />
      <TechStack />
      <FAQs /> 
    </>
  )
}

export default App
