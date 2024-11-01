import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import Congrats from '../Congrats/Congrats';
import InvestmentInfo from '../InvestmentInfo/InvestmentInfo';
import { Category } from '../../App';

interface Props {
  category: Category;
}

const InvestIntro: React.FC<Props> = ({category}) => {
  const [countdown, setCountdown] = useState(172800); 
  const [isActive, setIsActive] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown <= 0) {
      setIsActive(false); 
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive, countdown]);

  const formatTime = (seconds: number) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div 
      ref={ref}
      style={{ 
        background: 'linear-gradient(179.59deg, rgba(18, 227, 156, 0.9) -111.03%, rgba(51, 51, 51, 0.9) 32.19%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }} 
      className='w-fit xl:w-full rounded-[40px] py-6 md:py-8 lg:py-12 px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col items-center gap-10'
    >
      <div className='w-full flex flex-col xl:flex-row items-center gap-4 sm:gap-6'>
        <Congrats category={category} />
        <span className='text-white font-bold text-7xl'>+</span>
        <InvestmentInfo />
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-xl md:text-2xl text-white text-center leading-[140%]'>
          ⏳You will also receive a mystery <span className='font-bold text-primary-green'>investor gift pack</span>
        </p>
        <p className='text-xl md:text-2xl text-white text-center leading-[140%]'>
          if you complete your investment within <span className='text-primary-green'>{formatTime(countdown)}</span>
        </p>
      </div>
    </div>
  );
};

export default InvestIntro;
