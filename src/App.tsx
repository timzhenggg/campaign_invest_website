import { useEffect, useState } from "react"
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
import { scrollToSectionById } from "./assets/helpers/scrollToSectionById";

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
    let category;
    if (data.categoryA.includes(email)) {
      category = "A";
      setCategory('A');
    } else if (data.categoryB.includes(email)) {
      category = "B";
      setCategory('B');
    } else {
      category = "C";
      setCategory('C');
    }

    setIsValidUser(email !== '' && category !== null);
  };

  const handleSubmitEmail = (data: { email: string }) => {
    const { email } = data;
    if (email) {
      checkUserCategory(email);
    }
  };

  useEffect(() => {
    if (isValidUser) {
      setTimeout(() => {
        scrollToSectionById("bonuses");
      }, 500);
    }
  }, [isValidUser, category]);
  console.log(isValidUser);
  

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
