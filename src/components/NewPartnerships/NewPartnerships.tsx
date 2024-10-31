import React from 'react';
import { motion, useInView } from 'framer-motion';

const NewPartnerships: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{ background: "url(/new-partnership-bg.png)" }}
      className='w-full h-full pt-12 pb-8 rounded-2xl flex flex-col justify-between items-center'
    >
      <motion.h3
        className='text-white text-3xl font-bold'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        New Partnerships
      </motion.h3>

      <motion.p
        className='text-white text-center text-2xl leading-[130%]'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
      >
        Established Distributors in European Market
      </motion.p>
    </div>
  );
};

export default NewPartnerships;
