import React, { useState, useEffect } from 'react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { motion, AnimatePresence } from 'framer-motion';
import { useButtonsVisibility } from '../../context/useButtonsVisibility';
import { scrollToSectionById } from '../../assets/helpers/scrollToSectionById';

interface Props {
  isValidUser: boolean;
}

const Header: React.FC<Props> = ({ isValidUser }) => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { showButtonDesktop } = useButtonsVisibility();

  const handleLinkClick = (id: string) => {
    scrollToSectionById(id);
  }

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
          {isValidUser && isScrollingUp && showButtonDesktop && (
            <div className='flex items-center gap-8'>
              <ul className='flex items-center gap-4'>
                <motion.li
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="primary-text relative hover:after:w-full after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-text after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer"
                >
                  Discussion
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="primary-text relative hover:after:w-full after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-text after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer"
                  onClick={() => handleLinkClick('faq')}
                >
                  FAQ
                </motion.li>
              </ul>
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
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
