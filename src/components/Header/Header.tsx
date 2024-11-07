import React from 'react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

const Header: React.FC = () => {
  return (
    <header className='z-20 fixed top-0 min-h-14 py-2.5 px-4 w-full bg-primary-green flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4'>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4'>
        <span className='text-white font-medium'>Limited Time Left To Invest</span>

        <CountdownTimer targetDate='2024-12-31T00:00:00' />
      </div>

      <div className='hidden md:block lg:absolute right-12 top-1/2 lg:-translate-y-1/2'>
        <button className='relative py-2 px-4 rounded-full bg-white text-primary-green text-xl uppercase font-bold overflow-hidden ripple-effect-btn'>
          Invest now
          <div className="ripple-effect ripple-effect-green absolute inset-0 rounded-full"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
