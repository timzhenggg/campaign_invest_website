import React from 'react';

const CEOInsights: React.FC = () => {
  return (
    <section
      style={{ background: "url(/ceo-insights-bg.png) no-repeat", backgroundSize: "cover" }}
      className='py-14 w-full min-h-[450px] md:h-[500px] flex justify-center'
    >
      <div className='px-4 md:px-6 max-w-[1140px] w-full'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-14'>
          <div className='flex flex-col gap-2'>
            <p className='text-2xl md:text-3xl text-white font-bold leading-[130%]'>“[...] when it comes to small EVs, they could even be the solution to Europe’s most urgent sustainability and industrial challenges.” </p>
            <span className='text-xl md:text-2xl text-white leading-[130%]'>– Luca De Meo, CEO Renault Group</span>
          </div>

          <div className='w-full md:w-[1px] min-h-[1px] md:h-[270px] bg-white'></div>

          <div className='flex flex-col gap-2'>
            <p className='text-2xl md:text-3xl text-white font-bold leading-[130%]'>“Two-wheeled micromobility options…have become very popular in cities. Three- and four-wheeled minimobility may be the next big thing.” </p>
            <span className='text-xl md:text-2xl text-white leading-[130%]'>– McKinsey & Company</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOInsights;