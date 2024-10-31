import React, { useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import clsx from 'clsx';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const FAQs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Category 1");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className='w-full'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col gap-8'>
          <SectionHeading className='text-center font-medium'>FAQs</SectionHeading>
          <div className='flex items-center gap-5 overflow-auto scrollbar-hidden'>
            {["Category 1", "Category 2", "Category 3"].map((category, index) =>
            <button
              key={index}
              className={clsx(
                "px-8 py-2.5 rounded-[100px] border-[3px] border-solid border-gray-100 text-gray-100 text-nowrap transition-all duration-300",
                selectedCategory === category  && "border-primary-green text-primary-green"
              )}
              onClick={() => handleCategoryChange(category)}
            >{category}</button>)}
          </div>

          {/* list of FAQs */}
          <div className='flex flex-col gap-8 md:gap-12'>
            {Array.from({ length: 10 }).map((_, index) =>
              <AccordionItem key={index} item={{ title: "Title", expanded_description: ["Lalalalal"] }} />)}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default FAQs;