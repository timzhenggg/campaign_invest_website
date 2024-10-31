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
      className='max-w-[275px] w-full h-full py-8 px-12 rounded-2xl overflow-hidden flex flex-col items-center gap-4'
    >
      <span className='text-white text-xl leading-[120%] text-center'>Revenue Growth Year-over-Year 3 years in a row</span>
      
      <div className='size-52 rounded-full flex flex-col justify-center items-center border-[3px] border-solid border-white/50'>
        <img src="/arrow-up-icon.svg" alt="arrow up icon" draggable={false} />
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-white font-extrabold'>{counter}+%</p>
          <span className='max-w-[70%] text-3xl text-white font-extrabold text-center'>YoY Growth</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;
