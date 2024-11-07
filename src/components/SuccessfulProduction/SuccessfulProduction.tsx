import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const SuccessfulProduction: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
    return (
      <div
        ref={ref} 
        style={{
          background: `url(/successful-prod-bg.png)`,
        }}
        className="px-4 w-full min-h-[370px] sm:h-[550px] bg-no-repeat bg-contain rounded-2xl flex flex-col items-center justify-center gap-8"
      >
        <motion.h3
          className="text-primary-green sm:text-white text-2xl md:text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced Production
        </motion.h3>

        <motion.div
          className="bg-black/30 py-6 sm:py-10 px-6 sm:px-8 rounded-[36px] border-4 border-solid border-white flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          <p className="text-2xl md:text-2xl text-primary-green sm:text-white font-bold">
            <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">4000/</span>year
          </p>
          <span className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">Vehicle Production Capacity</span>
        </motion.div>

        <motion.p
          className="text-white text-xl sm:text-2xl md:text-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        >
          First contract line with a high-capacity manufacturing operation
        </motion.p>
      </div>
    );
};

export default SuccessfulProduction;