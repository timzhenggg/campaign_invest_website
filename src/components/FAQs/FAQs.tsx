import React from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';

const FAQs: React.FC = () => {
  return (
    <div>
      <div className='p-8 flex flex-col gap-12'>
        {Array.from({length: 10}).map((item, index) => (<AccordionItem key={index} item={{ title: "Title", expanded_description: ["Lalalalal"]}}/>))}
      </div>
    </div>
  );
};

export default FAQs;