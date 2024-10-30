import AutomotiveTechnology from "./components/AutomotiveTechnology/AutomotiveTechnology"
import BonusesSection from "./components/BonusesSection/BonusesSection"
import CEOInsights from "./components/CEOInsights/CEOInsights"
import FAQs from "./components/FAQs/FAQs"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import Logos from "./components/Logos/Logos"
import Stats from "./components/Stats/Stats"

function App() {
  return (
    <>
      <Header />
      <HeroSection /> 
      <AutomotiveTechnology />
      <Stats />
      <BonusesSection />
      <CEOInsights />
      <Logos />
      <FAQs /> 
    </>
  )
}

export default App
