import React from 'react';

const InvestmentInfo: React.FC = () => {
  return (
    <div
      style={{ 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
      }}
      className='px-4 py-8 rounded-3xl flex flex-1 flex-col justify-between gap-4'
    >
      <span className='text-2xl text-white leading-[140%]'>
        In addition, you will receive bonus shares based on investment amount
      </span>

      <div className="w-full flex flex-col items-center gap-3">
        {Array.from({ length: 4 }).map((_, index) => 
          <div
            key={index}
            style={{
              background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
            }}
            className='px-8 py-1.5 w-full rounded-2xl flex items-center justify-between gap-4 border border-solid border-white'
          >
            <p className='text-white text-2xl font-thin'>Invest <span className='font-medium'>$2,500+</span> for</p>
            <span className='text-primary-green text-[28px] font-extrabold'>5% Bonus</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentInfo;
