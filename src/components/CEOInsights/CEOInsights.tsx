import React from 'react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const CEOInsights: React.FC = () => {
  return (
    <div style={{background: "url(/ceo-insights-bg.png)"}} className='w-full h-[500px]'>
      <MaxWidthContainer>
        <div className='w-full flex items-center justify-between gap-14'>
          <div className='flex flex-col gap-2'>
            <p className='text-3xl text-white font-bold leading-[130%]'>“[...] when it comes to small EVs, they could even be the solution to Europe’s most urgent sustainability and industrial challenges.” </p>
            <span className='text-2xl text-white leading-[130%]'>– Luca De Meo, CEO Renault Group</span>
          </div>

          <div className='w-[1px] h-[270px] bg-white'></div>

          <div className='flex flex-col gap-2'>
            <p className='text-3xl text-white font-bold leading-[130%]'>“Two-wheeled micromobility options…have become very popular in cities. Three- and four-wheeled minimobility may be the next big thing.” </p>
            <span className='text-2xl text-white leading-[130%]'>– McKinsey & Company</span>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default CEOInsights;