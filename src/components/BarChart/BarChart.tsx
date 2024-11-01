import React, { useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import { useInView } from 'framer-motion';

const BarChart: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const counter1 = useCounter(470, 2000, 10, isInView);
  const counter2 = useCounter(3.3, 2000, 10, isInView);

  return (
    <div ref={ref} className='relative w-full h-full'>
      <img src="/bar-chart.svg" alt="bar chart" draggable={false} className='-mt-12' />
      
      <span className='absolute z-10 right-[13.5%] sm:right-[15%] xl:right-[18%] top-[30%] sm:top-[42%] text-white font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>${counter1}B</span>
      <span className='absolute z-10 left-[15%] xs:left-[17%] sm:left-28 md:left-32 bottom-[28%] sm:bottom-24 md:bottom-28 xl:right-[18%] text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl'>${counter2}B</span>
      
      <div className='absolute left-0 top-0 hidden sm:flex flex-col items-start gap-8'>
        <div className='flex flex-col text-white text-lg'>
          <span>McKinsey</span>
          <span className='ml-3 text-right'>&Company</span>
        </div>

        <div
          style={{
            boxShadow: "0px 4px 10px 0px #0000004D"
          }}
          className='py-4 md:py-8 px-6 md:px-10 bg-primary-text-100 flex flex-col items-center gap-2 rounded-2xl'
        >
          <span className='text-primary-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>142X</span>
          <span className='text-white text-xl md:tetx-2xl'>TAM Potential</span>
        </div>
      </div>

      <div className='-mt-8 md:-mt-12 pl-8 sm:pl-16 md:pl-24 md:pr-8 xl:px-24 w-full hidden xs:flex justify-between'>
        <span className='max-w-[300px] text-white text-lg md:text-xl text-center'>Current market size</span>
        <span className='max-w-[300px] text-white text-lg md:text-xl text-center'>Total Addressable Market (US/EU/CN)</span>
      </div>
    </div>
  );
};

export default BarChart;