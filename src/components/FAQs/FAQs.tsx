import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import { faq2, faq3, faqs1 } from '../../assets/data/faqs';
import AccordionItem from '../AccordionItem/AccordionItem';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const FAQs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("About The Current Raise");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsTransitioning(false);
    }, 200); 
  };

  const getFaqsList = () => {
    switch (selectedCategory) {
      case "About The Current Raise":
        return faqs1;
      case "About Eli Electric Vehicles":
        return faq2;
      case "About Regulation Crowdfunding":
        return faq3;
      default:
        return faqs1;
    }
  };

  const faqs = useMemo(() => getFaqsList(), [selectedCategory]);

  return (
    <section id='faqs' className="-mt-28 py-14 w-full flex flex-col items-center gap-14">
      <MaxWidthContainer>
        <div className="w-full flex flex-col gap-8">
          <SectionHeading className="text-center font-medium">FAQs</SectionHeading>

          {/* Category Buttons with animation */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 overflow-auto scrollbar-hidden">
            {["About The Current Raise", "About Eli Electric Vehicles", "About Regulation Crowdfunding"].map((category, index) => (
              <motion.button
                key={index}
                className={clsx(
                  "w-full sm:w-auto px-8 py-2.5 rounded-[100px] border-[3px] border-solid border-gray-100 text-gray-100 text-nowrap transition-all duration-300",
                  selectedCategory === category && "border-primary-green text-primary-green"
                )}
                onClick={() => handleCategoryChange(category)}
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Animated state
                transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* List of FAQs with fade transition */}
          <motion.div
            className={clsx(
              "flex flex-col gap-4 sm:gap-6 md:gap-12",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
            initial="hidden"
            animate={isTransitioning ? "hidden" : "visible"}
            variants={{
              hidden: { opacity: 0, transition: { duration: 0.3 } },
              visible: { opacity: 1, transition: { duration: 0.3 } }
            }}
          >
            {faqs.map(({ title, description }, index) => (
              <AccordionItem key={index} item={{ title, expanded_description: description }} />
            ))}
          </motion.div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default FAQs;
