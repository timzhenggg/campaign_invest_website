// import { motion, useInView } from 'framer-motion';
// import React, { useRef } from 'react';
// import useCounter from '../../hooks/useCounter';

// const MarketShare: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true });
//   const counter = useCounter(45, 2000, 60, isInView); 

  // return (
  //   <div 
  //     ref={ref}
  //     className="relative w-full min-h-[370px] pt-8 md:pt-12 pb-6 md:pb-8 rounded-2xl flex flex-col justify-between items-center overflow-hidden"
  //   >
  //     {/* blurred Background */}
  //     <div
  //       style={{
  //         background: `conic-gradient(from 147.32deg at 50% 50%, #9E9E9E -32.4deg, #C5C5C5 23.4deg, #97FFDC 174.6deg, #9E9E9E 327.6deg, #C5C5C5 383.4deg)`,
  //         filter: 'blur(12px)',
  //       }}
  //       className="absolute inset-0 z-0"
  //     ></div>

  //     <div className="px-4 relative z-10 flex flex-1 flex-col items-center justify-between">
  //       <motion.h3
  //         className="text-primary-text text-2xl md:text-3xl font-bold"
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
  //         transition={{ duration: 0.8, ease: "easeOut" }}
  //       >
  //         Market Share
  //       </motion.h3>

  //       <motion.span
  //         className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: isInView ? 1 : 0 }}
  //         transition={{ duration: 0.8, delay: 0.35 }}
  //       >
  //         {isInView ? counter : 0}%
  //       </motion.span>

  //       <motion.p
  //         className="text-primary-text text-2xl text-center leading-[130%]"
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
  //         transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
  //       >
  //         Eli ZERO makes up 45% of all new EV sales in French Polynesia
  //       </motion.p>
  //     </div>
  //   </div>
  // );
// };

// export default MarketShare;



import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const MarketShare: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const windowWidth = useWindowWidth();

  const [hoverKey, setHoverKey] = useState<number>(0);
  const [hasHovered, setHasHovered] = useState<boolean>(false); 

  const counter = useCounter(45, 2000, 30, hoverKey || isInView);

  const handleMouseEnter = () => {
    if (!hasHovered) {
      setHoverKey(prevKey => prevKey + 1); 
      setHasHovered(true);
    }
  };

  if (windowWidth < 1024) {
    return (
      <div 
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
  }

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[370px] pt-8 md:pt-12 pb-6 md:pb-8 rounded-2xl flex flex-col justify-between items-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
    >
      {/* Static Background */}
      <div
        style={{
          background: `conic-gradient(from 147.32deg at 50% 50%, #9E9E9E -32.4deg, #C5C5C5 23.4deg, #97FFDC 174.6deg, #9E9E9E 327.6deg, #C5C5C5 383.4deg)`,
          filter: 'blur(12px)',
        }}
        className="absolute inset-0 z-0"
      ></div>

      {/* Hover Animation Content */}
      <motion.div
        className="px-4 relative z-10 flex flex-1 flex-col items-center justify-between"
        animate={hasHovered ? "hover" : "initial"}
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ staggerChildren: 0.15, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className="text-primary-text text-2xl md:text-3xl font-bold"
          variants={{
            initial: { opacity: 0, y: 50 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Market Share
        </motion.h3>

        <motion.span
          className="text-white font-bold text-7xl lg:text-8xl"
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            hover: { opacity: 1, scale: 1.1 },
          }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {counter}%
        </motion.span>

        <motion.p
          className="text-primary-text text-xl md:text-2xl text-center leading-[130%]"
          variants={{
            initial: { opacity: 0, y: 50 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Eli ZERO makes up 45% of all new EV sales in French Polynesia
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MarketShare;
