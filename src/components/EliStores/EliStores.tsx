import { motion, useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

const EliStores: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); 

  useEffect(() => {
    if (!ref.current) return;

    const isIntersectedBefore = JSON.parse(sessionStorage.getItem('isIntersecting2') || 'false');
    if (isIntersectedBefore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sessionStorage.setItem('isIntersecting2', 'true');
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
};

export default EliStores;
