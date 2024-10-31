// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// const EliStores: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true }); 

  // return (
  //   <div
  //     ref={ref}
  //     style={{ background: "url(/eli-store-bg.png)", backgroundSize: "cover" }}
  //     className='w-full min-h-[370px] pt-8 md:pt-12 px-4 pb-6 md:pb-8 rounded-2xl flex flex-col justify-between items-center'
  //   >
  //     <motion.h3
  //       className='text-white text-2xl md:text-3xl font-bold'
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
  //       transition={{ duration: 0.8, ease: "easeOut" }}
  //     >
  //       Eli Stores
  //     </motion.h3>

  //     <motion.p
  //       className='text-white text-center text-xl md:text-2xl leading-[130%]'
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
  //       transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
  //     >
  //       New Design for a Premium Experience
  //     </motion.p>
  //   </div>
  // );
// };

// export default EliStores;



import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const EliStores: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); 
  const windowWidth = useWindowWidth();

  const [hasHovered, setHasHovered] = useState<boolean>(false); 

  const handleMouseEnter = () => {
    if (!hasHovered) {
      setHasHovered(true);
    }
  };

  if (windowWidth < 1024) {
    return (
      <div
        ref={ref}
        style={{ background: "url(/eli-store-bg.png)", backgroundSize: "cover" }}
        className='w-full min-h-[370px] pt-8 md:pt-12 px-4 pb-6 md:pb-8 rounded-2xl flex flex-col justify-between items-center'
      >
        <motion.h3
          className='text-white text-2xl md:text-3xl font-bold'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Eli Stores
        </motion.h3>

        <motion.p
          className='text-white text-center text-xl md:text-2xl leading-[130%]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          New Design for a Premium Experience
        </motion.p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ background: "url(/eli-store-bg.png)", backgroundSize: "cover" }}
      className='w-full min-h-[370px] pt-8 md:pt-12 px-4 pb-6 md:pb-8 rounded-2xl flex flex-col justify-between items-center'
      onMouseEnter={handleMouseEnter}
    >
      <motion.div
        className="h-full flex flex-col justify-between items-center"
        animate={hasHovered ? "hover" : "initial"}
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ staggerChildren: 0.15, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className='text-white text-2xl md:text-3xl font-bold'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Eli Stores
        </motion.h3>

        <motion.p
          className='text-white text-center text-xl md:text-2xl leading-[130%]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          New Design for a Premium Experience
        </motion.p>
      </motion.div>
    </div>
  );
};

export default EliStores;
