import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { scrollToSectionById } from '../../assets/helpers/scrollToSectionById';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

interface Props {
  isValidUser: boolean;
}

const Header: React.FC<Props> = ({ isValidUser }) => {
  // const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const { showButtonDesktop } = useButtonsVisibility();
  const headerRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleLinkClick = (id: string) => {
    scrollToSectionById(id);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // setIsScrollingUp(scrollTop < lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // close menu after click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className='z-20 fixed top-0 min-h-14 py-2.5 px-4 w-full bg-primary-green flex items-center justify-between gap-2 sm:gap-4'>
      <motion.img 
        src="/logo.svg" 
        alt="logo" 
        draggable={false} 
        className="sm:w-24 hidden md:block" 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }} 
      />

      <div className={`lg:ml-[10%] xl:ml-40 flex flex-1 lg:flex-auto flex-col sm:flex-row justify-center gap-2 sm:gap-4 ${!isValidUser ? "items-center" : "items-start sm:items-center"}`}>
        <span className='text-white font-medium text-nowrap'>Limited Time Left To Invest</span>

        <CountdownTimer targetDate='2024-11-22T23:59:00-08:00' />
      </div>

       {isValidUser && <button
          onClick={toggleMenu}
          className={`lg:hidden focus:outline-none w-[44px] h-[44px] flex flex-col items-center justify-center gap-1 z-50 transition-all duration-300 rounded-full ${isOpen ? "mr-2" : ""}`}
        >
        <div
          className={`w-6 h-[3px] rounded-lg transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px] bg-primary-green" : "bg-white"}`}
        ></div>
        <div
          className={`bg-white w-6 h-[3px] rounded-lg transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-6 h-[3px] rounded-lg transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px] bg-primary-green" : "bg-white"}`}
        ></div>
      </button>}
      
      <div
        style={{
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
        }}
        className={`md:hidden absolute -top-4 right-4 left-4 rounded-2xl bg-white border border-solid border-border transition-transform duration-500 z-10 ${isOpen ? "transform translate-y-6" : "transform -translate-y-full"}`}
      >
        <div className="p-6 flex flex-col gap-6">
          <nav>
            <ul className="flex flex-col gap-2">
              <li onClick={() => handleLinkClick("discussion")} className="p-2">Discussion</li>
              <li onClick={() => handleLinkClick("faqs")} className="p-2">FAQS</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='hidden lg:block min-w-[315px]'>
        <AnimatePresence>
          {isValidUser && (
            <div className='flex items-center gap-8'>
              <ul className='flex items-center gap-4'>
                <motion.li
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="primary-text relative hover:after:w-full after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-text after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer"
                  onClick={() => handleLinkClick("discussion")}
                >
                  Discussion
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="primary-text relative hover:after:w-full after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-text after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer"
                  onClick={() => handleLinkClick('faqs')}
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
