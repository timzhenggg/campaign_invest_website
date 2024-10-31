import React from 'react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

const Header: React.FC = () => {
  return (
    <header className='py-2.5 px-4 bg-primary-green flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4'>
      <span className='text-white font-medium'>Limited Time Left To Invest</span>

      <CountdownTimer targetDate='2024-12-31T00:00:00'/>
    </header>
  );
};

export default Header;