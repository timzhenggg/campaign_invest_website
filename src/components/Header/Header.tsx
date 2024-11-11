import React, { useState, useEffect } from 'react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isValidUser: boolean;
}

const Header: React.FC<Props> = ({ isValidUser }) => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Обробка напрямку скролу
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(scrollTop < lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header className='z-20 fixed top-0 min-h-14 py-2.5 px-4 w-full bg-primary-green flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4'>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4'>
        <span className='text-white font-medium'>Limited Time Left To Invest</span>

        <CountdownTimer targetDate='2024-12-31T00:00:00' />
      </div>

      <div className='hidden md:block lg:absolute right-12 top-1/2 lg:-translate-y-1/2'>
        <AnimatePresence>
          {isValidUser && isScrollingUp && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative py-2 px-4 rounded-full bg-white text-primary-green text-xl uppercase font-bold overflow-hidden ripple-effect-btn"
            >
              Invest now
              <div className="ripple-effect ripple-effect-green absolute inset-0 rounded-full"></div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
