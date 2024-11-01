import React, { useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import { useInView } from 'framer-motion';

const GrowthPotentialSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); 
  const counter1 = useCounter(50, 2000, 10, isInView);

  return (
    <div className='py-14 bg-gray-200'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col items-center gap-4'>
            <SectionHeading color='text-white' className='text-center font-bold'>142X Market Growth Potential</SectionHeading>
            <p className='text-white leading-[130%] text-center text-base md:text-lg'>Higher growth multiplier than conventional EV, Micro-EV is the next big thing in urban mobility.</p>
          </div>

          <div
            style={{
              boxShadow: "0px 4px 10px 0px #0000004D"
            }}
            className='max-w-[275px] px-5 py-4 bg-primary-text-100 rounded-[20px] flex flex-col items-center gap-2'
          >
            <span className='text-primary-green text-center font-bold text-3xl md:text-4xl lg:text-5xl'>{counter1}%</span>
            <span className='text-white text-center leading-[130%]'>of the market is in the US and EU (McKinsey & Company)</span>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default GrowthPotentialSection;