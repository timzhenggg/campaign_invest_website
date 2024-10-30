import React from 'react';
import Congrats from '../Congrats/Congrats';
import InvestmentInfo from '../InvestmentInfo/InvestmentInfo';

const InvestIntro: React.FC = () => {
  return (
    <div 
      style={{ 
        background: 'linear-gradient(179.59deg, rgba(18, 227, 156, 0.9) -111.03%, rgba(51, 51, 51, 0.9) 32.19%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }} 
      className='w-full rounded-[40px] py-14 px-20 flex flex-col items-center gap-10'
    >
      <div className='w-full flex items-center gap-6'>
        <Congrats category='A' />
        <span className='text-white font-bold text-7xl'>+</span>
        <InvestmentInfo />
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-2xl text-white leading-[140%]'>⏳You will also receive a mystery <span className='font-bold text-primary-green'>investor gift pack</span></p>
        <p className='text-2xl text-white leading-[140%]'>if you complete your investment within ___<span className='text-primary-green'>(48 hr countdown)</span>___</p>
      </div>
    </div>
  );
};

export default InvestIntro;
