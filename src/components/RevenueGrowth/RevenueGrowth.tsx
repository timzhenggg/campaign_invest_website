import React, { useEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';

const RevenueGrowth: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null); 

  const counter = useCounter(100, 2000, 30, isVisible); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
      observer.disconnect();
    };
  }, [counterRef]);

  return (
    <div
      ref={counterRef} 
      style={{
        background: "url(/revenue-growth-bg.png) no-repeat",
        backgroundSize: "cover"
      }}
      className='min-w-[320px] sm:min-w-0 xl:max-w-[300px] w-full h-full min-h-fit py-8 px-12 rounded-2xl sm:rounded-3xl md:rounded-2xl overflow-hidden flex flex-col items-center gap-4'
    >
      <span className='text-white text-xl leading-[120%] text-center flex flex-col items-center'>Revenue Growth Year-over-Year <span>3 years in a row</span></span>
      
      <div className='size-44 min-w-44 min-h-44 sm:size-52 rounded-full flex flex-col justify-center items-center border-[3px] border-solid border-white/50'>
        <img src="/arrow-up-icon.svg" alt="arrow up icon" draggable={false} />
        <div className='flex flex-col items-center'>
          <p className='text-3xl md:text-4xl lg:text-5xl text-white font-extrabold'>{counter}+%</p>
          <span className='text-xl md:text-2xl text-white font-extrabold text-center'>YoY Growth</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;
