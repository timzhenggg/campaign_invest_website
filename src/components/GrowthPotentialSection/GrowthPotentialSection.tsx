import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import BarChart from '../BarChart/BarChart';

const GrowthPotentialSection: React.FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ref1, { once: true }); 
  const counter1 = useCounter(50, 2000, 10, isInView1);
  
  const ref2 = useRef<HTMLDivElement>(null);
  const isInView2 = useInView(ref2, { once: true }); 
  const counter2 = useCounter(25, 2000, 20, isInView2);

  return (
    <div id="steady-growth" className='py-14 bg-gray-200'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-20'>
          <div className='z-10 flex flex-col items-center gap-4'>
            <SectionHeading color='text-white' className='text-center font-bold'>142X Market Growth Potential</SectionHeading>
            <p className='text-white leading-[130%] text-center text-base md:text-lg'>Micro-EVs are the next big thing in urban
              mobility: higher growth multiplier than
              conventional EVs.</p>
          </div>

          <div className='flex flex-col xl:flex-row gap-8'>
            <div className='w-full flex flex-col'>
              <div
                style={{
                  boxShadow: "0px 4px 10px 0px #0000004D"
                }}
                className='mb-12 py-4 px-6 bg-primary-text-100 w-fit self-center flex sm:hidden flex-col items-center gap-2 rounded-2xl'
              >
                <span className='text-primary-green text-3xl font-bold'>142X</span>
                <span className='text-white text-xl'>TAM Potential</span>
              </div>
              <BarChart />
            </div>

            <div className='flex flex-col sm:flex-row xl:flex-col gap-5'>
              <div
                ref={ref1}
                style={{
                  boxShadow: "0px 4px 10px 0px #0000004D"
                }}
                className='xl:max-w-[3650px] px-5 py-4 bg-primary-text-100 rounded-[20px] flex flex-col items-center gap-2'
              >
                <img src="/map.png" alt="map" draggable={false} />
                <span className='text-primary-green text-center font-bold text-3xl md:text-4xl lg:text-5xl'>{counter1}%</span>
                <span className='text-white text-center leading-[130%]'>of the market is in the US and EU (McKinsey & Company)</span>
              </div>
              
              <div
                ref={ref2}
                style={{
                  boxShadow: "0px 4px 10px 0px #0000004D"
                }}
                className='xl:max-w-[330px] px-5 py-4 bg-primary-text-100 rounded-[20px] flex flex-col items-center gap-2'
              >
                <img src="/people.png" alt="map" draggable={false} />
                <span className='text-primary-green text-center font-bold text-3xl md:text-4xl lg:text-5xl'>{counter2}%</span>
                <span className='text-white text-center leading-[130%]'>Urban population by 2050 (United Nations’ estimate)</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default GrowthPotentialSection;