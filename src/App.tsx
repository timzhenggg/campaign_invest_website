import { useState } from "react"
import { useForm } from "react-hook-form";
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
import data from "../users.json";

export type Category = "A" | "B" | "C" | null;

function App() {
  const [isValidUser, setIsValidUser] = useState(false);
  const [category, setCategory] = useState<Category>(null);

  const {
    register,
    formState: { errors, },
    handleSubmit,
  } = useForm<{ email: string }>({
    mode: "all",
  });

  const checkUserCategory = (email: string) => {
    if (data.categoryA.includes(email)) {
      setCategory('A');
    } else if (data.categoryB.includes(email)) {
      setCategory('B');
    } else if (data.categoryC.includes(email)) {
      setCategory('C');
    } else {
      setCategory(null);
    }
    setIsValidUser(email !== '' && category !== null);
  };

  const handleSubmitEmail = (data: { email: string }) => {
    const { email } = data;
    checkUserCategory(email);
  };

  return (
    <div>
      <Header />

      <main>
        <HeroSection
          name="email"
          register={register}
          errors={errors}
          handleSubmit={handleSubmit(handleSubmitEmail)}
        />

        {isValidUser && <div>
          <BonusesSection category={category} />
          <Logos />
          <InternationalExpansionSection />
          <SteadyGrowth />
          <GrowthPotentialSection />
          <CEOInsights />
          <AutomotiveTechnology />
          <TechStack />
          <FAQs /> 
          <Footer />
        </div>}
      </main>
    </div>
  )
}

export default App
