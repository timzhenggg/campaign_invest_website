// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// const SuccessfulProduction: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true });

  // return (
  //   <div
  //     ref={ref} 
  //     style={{
  //       background: `url(/successful-prod-bg.png)`,
  //     }}
  //     className="px-4 w-full h-[550px] bg-no-repeat bg-contain rounded-2xl flex flex-col items-center justify-center gap-8"
  //   >
  //     <motion.h3
  //       className="text-white text-2xl md:text-3xl font-bold text-center"
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
  //       transition={{ duration: 0.8, ease: "easeOut" }}
  //     >
  //       Successful Production
  //     </motion.h3>

  //     <motion.div
  //       className="bg-black/30 py-10 px-8 rounded-[36px] border-4 border-solid border-white flex flex-col items-center gap-4"
  //       initial={{ opacity: 0, scale: 0.9 }}
  //       animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
  //       transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
  //     >
  //       <p className="text-2xl text-white font-bold">
  //         <span className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">4000/</span>year
  //       </p>
  //       <span className="text-white text-3xl font-bold text-center">Vehicle Production Capacity</span>
  //     </motion.div>

  //     <motion.p
  //       className="text-white text-3xl text-center"
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
  //       transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
  //     >
  //       First contract line with a high-capacity manufacturing operation
  //     </motion.p>
  //   </div>
  // );
// };

// export default SuccessfulProduction;



import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const SuccessfulProduction: React.FC = () => {
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
        style={{
          background: `url(/successful-prod-bg.png)`,
        }}
        className="px-4 w-full h-[550px] bg-no-repeat bg-contain rounded-2xl flex flex-col items-center justify-center gap-8"
      >
        <motion.h3
          className="text-white text-2xl md:text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Advanced Production
        </motion.h3>

        <motion.div
          className="bg-black/30 py-10 px-8 rounded-[36px] border-4 border-solid border-white flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          <p className="text-2xl md:text-2xl text-white font-bold">
            <span className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">4000/</span>year
          </p>
          <span className="text-white text-2xl md:text-3xl font-bold text-center">Vehicle Production Capacity</span>
        </motion.div>

        <motion.p
          className="text-white text-2xl md:text-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        >
          First contract line with a high-capacity manufacturing operation
        </motion.p>
      </div>
    );
  }

  return (
    <div
      ref={ref} 
      style={{
        background: `url(/successful-prod-bg.png)`,
      }}
      className="px-4 w-full h-[550px] bg-no-repeat bg-contain rounded-2xl"
      onMouseEnter={handleMouseEnter}
    >
      <motion.div
        className="h-full flex flex-col items-center justify-center gap-8"
        animate={hasHovered ? "hover" : "initial"}
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ staggerChildren: 0.15, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h3
          className="text-white text-2xl md:text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Successful Production
        </motion.h3>

        <motion.div
          className="bg-black/30 py-10 px-8 rounded-[36px] border-4 border-solid border-white flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
        >
          <p className="text-xl md:text-2xl text-white font-bold">
            <span className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">4000/</span>year
          </p>
          <span className="text-white text-2xl md:text-3xl font-bold text-center">Vehicle Production Capacity</span>
        </motion.div>

        <motion.p
          className="text-white text-xl sm:text-2xl md:text-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        >
          First contract line with a high-capacity manufacturing operation
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SuccessfulProduction;