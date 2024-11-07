import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import data from "../users.json";
import { scrollToSectionById } from "./assets/helpers/scrollToSectionById";
import AutomotiveTechnology from "./components/AutomotiveTechnology/AutomotiveTechnology";
import BonusesSection from "./components/BonusesSection/BonusesSection";
import CEOInsights from "./components/CEOInsights/CEOInsights";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import GrowthPotentialSection from "./components/GrowthPotentialSection/GrowthPotentialSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import InternationalExpansionSection from "./components/InternationalExpansionSection/InternationalExpansionSection";
import Logos from "./components/Logos/Logos";
import SteadyGrowth from "./components/SteadyGrowth/SteadyGrowth";
import TechStack from "./components/TechStackSection/TechStackSection";
import { emailValidator } from "./validators/emailValidator";
import { motion } from "framer-motion";
import Button from "./components/UI/Button/Button";

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
    resolver: joiResolver(emailValidator),
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full h-full flex flex-col flex-1">
      <Header />

      <main className="pt-20 sm:pt-14 flex flex-col flex-1">
        <HeroSection
          name="email"
          register={register}
          errors={errors}
          handleSubmit={handleSubmit(handleSubmitEmail)}
          isValidUser={isValidUser}
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

         <motion.div 
            className='md:hidden w-full fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center' 
            variants={fadeInUp}
          >
            <Button className='relative w-3/4 my-4 px-14 text-3xl uppercase font-extrabold overflow-hidden'>
              <span className='ripple-effect ripple-effect-white'></span> 
              Invest now
            </Button>
          </motion.div>
        </div>}
      </main>
    </div>
  )
}

export default App
