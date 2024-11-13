import { joiResolver } from "@hookform/resolvers/joi";
import { motion } from "framer-motion";
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
import Button from "./components/UI/Button/Button";
import { useButtonsVisibility } from "./context/useButtonsVisibility";
import { emailValidator } from "./validators/emailValidator";
import DiscussionBoard from "./components/DiscussionBoard/DiscussionBoard";

export type Category = "A" | "B" | "C" | null;

function App() {
  const [isValidUser, setIsValidUser] = useState(false);
  const [category, setCategory] = useState<Category>(null);
  const { showButtonMobile } = useButtonsVisibility();  
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({
    mode: "all",
    resolver: joiResolver(emailValidator),
  });

  const checkUserCategory = (email: string) => {
    let category;
    if (data.categoryA.includes(email)) {
      category = "A";
      setCategory("A");
    } else if (data.categoryB.includes(email)) {
      category = "B";
      setCategory("B");
    } else {
      category = "C";
      setCategory("C");
    }

    setIsValidUser(category !== null);
  };

  const handleSubmitEmail = (data: { email: string }) => {
    const { email } = data;
    checkUserCategory(email);
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
    visible: { opacity: 1, y: 0 },
  };

  return (
      <div className="w-full h-full flex flex-col flex-1">
        <Header isValidUser={isValidUser} />

        <main className="pt-20 sm:pt-14">
          <HeroSection
            name="email"
            register={register}
            errors={errors}
            handleSubmit={handleSubmit(handleSubmitEmail)}
            isValidUser={isValidUser}
          />

          {isValidUser && (
            <div>
              <BonusesSection category={category} />
              <Logos />
              <InternationalExpansionSection />
              <SteadyGrowth />
              <GrowthPotentialSection />
              <CEOInsights />
              <AutomotiveTechnology />
              <TechStack />
              <FAQs />
              <DiscussionBoard />
              <Footer />

              {showButtonMobile && (
                <motion.div
                  className="lg:hidden z-50 w-full fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center"
                  variants={fadeInUp}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button className="relative w-[65%] px-14 text-lg uppercase font-extrabold overflow-hidden">
                    <span className="ripple-effect ripple-effect-white"></span>
                    Invest now
                  </Button>
                </motion.div>
              )}
            </div>
          )}
        </main>
      </div>
  );
}

export default App;
