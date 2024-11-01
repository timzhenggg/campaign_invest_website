import clsx from 'clsx';
import React, { useMemo, useState, useEffect } from 'react';
import { faqs1, faq2, faq3 } from '../../assets/data/faqs';
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
    <section id='faqs' className="py-14 w-full">
      <MaxWidthContainer>
        <div className="w-full flex flex-col gap-8">
          <SectionHeading className="text-center font-medium">FAQs</SectionHeading>
          <div className="flex items-center gap-5 overflow-auto scrollbar-hidden">
            {["About The Current Raise", "About Eli Electric Vehicles", "About Regulation Crowdfunding"].map((category, index) => (
              <button
                key={index}
                className={clsx(
                  "px-8 py-2.5 rounded-[100px] border-[3px] border-solid border-gray-100 text-gray-100 text-nowrap transition-all duration-300",
                  selectedCategory === category && "border-primary-green text-primary-green"
                )}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* list of FAQs with fade transition */}
          <div
            className={clsx(
              "flex flex-col gap-8 md:gap-12 transition-opacity duration-300",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
          >
            {faqs.map(({ title, description }, index) => (
              <AccordionItem key={index} item={{ title, expanded_description: description }} />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default FAQs;
