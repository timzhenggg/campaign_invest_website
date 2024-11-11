import { motion, useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import useCounter from '../../hooks/useCounter';

const MarketShare: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const counter = useCounter(45, 2000, 30, isInView);

  useEffect(() => {
    if (!ref.current) return;

    const isIntersectedBefore = JSON.parse(sessionStorage.getItem('isIntersecting') || 'false');
    if (isIntersectedBefore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sessionStorage.setItem('isIntersecting', 'true');
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

    return (
      <div 
        id="market"
        ref={ref}
        className="relative w-full min-h-[370px] pt-8 md:pt-12 pb-6 md:pb-8 rounded-2xl flex flex-col justify-between items-center overflow-hidden"
      >
        {/* blurred Background */}
        <div
          style={{
            background: `conic-gradient(from 147.32deg at 50% 50%, #9E9E9E -32.4deg, #C5C5C5 23.4deg, #97FFDC 174.6deg, #9E9E9E 327.6deg, #C5C5C5 383.4deg)`,
            filter: 'blur(12px)',
          }}
          className="absolute inset-0 z-0"
        ></div>

        <div className="px-4 relative z-10 flex flex-1 flex-col items-center justify-between">
          <motion.h3
            className="text-primary-text text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Market Share
          </motion.h3>

          <motion.span
            className="text-white font-bold text-7xl lg:text-8xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {isInView ? counter : 0}%
          </motion.span>

          <motion.p
            className="text-primary-text text-xl md:text-2xl text-center leading-[130%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            Eli ZERO makes up 45% of all new EV sales in French Polynesia
          </motion.p>
        </div>
      </div>
    );
};

export default MarketShare;
